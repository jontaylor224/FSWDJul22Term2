import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const EMAIL_REGEX =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 30,
    },
    lastName: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure that email is a unique field so IT CAN BE INDEXED
      match: EMAIL_REGEX,
    },
    passwordHash: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);

userSchema
  .virtual("password")
  .get(function () {
    return this._password;
  })
  .set(function (value) {
    this._password = value;
    const salt = bcrypt.genSaltSync(12);
    this.passwordHash = bcrypt.hashSync(value, salt);
  });

userSchema
  .virtual("confirmPassword")
  .get(function () {
    return this._confirmPassword;
  })
  .set(function (value) {
    this._confirmPassword = value;
  });

userSchema.pre("validate", async function (next) {
  if (this._password) {
    if (this._password.length < 8) {
      this.invalidate(
        "password",
        "Password must be at least 8 characters in length."
      );
    } else if (this._password.length > 30) {
      this.invalidate(
        "password",
        "Password cannot be more than 30 characters."
      );
    }

    if (!this._confirmPassword) {
      this.invalidate("confirmPassword", "You must confirm your password.");
    } else if (this._password !== this._confirmPassword) {
      this.invalidate("confirmPassword", "Passwords do not match.");
    }
  }
  if (this.isNew) {
    const existingUser = await model("User").findOne({ email: this.email });

    if (existingUser) {
      this.invalidate("email", "Email already registered.");
    }

    if (!this._password) {
      this.invalidate("password", "Password is required.");
    }
  } else {
    const existingUser = await model("User").findOne({ email: this.email });
    if (!this._id.equals(existingUser._id)) {
      this.invalidate("email", "That email is in use by another user.");
    }
  }

  next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  const isPasswordValid = await bcrypt.compare(
    candidatePassword,
    this.passwordHash
  );

  return isPasswordValid;
};

const User = model("User", userSchema);

export default User;
