import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const { ObjectId } = Schema.Types;
const EMAIL_REGEX =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required."],
      minLength: [2, "First name must be at least 2 characters."],
      maxLength: [30, "First name cannot be longer than 30 characters."],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required."],
      minLength: [2, "Last name must be at least 2 characters."],
      maxLength: [30, "Last name cannot be longer than 30 characters."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: [true, "Email already in use."],
      match: [EMAIL_REGEX, "Invalid email format."],
    },
    passwordHash: {
      type: String,
      required: [true, "Password is required."],
    },
    hobbiesCreated: [
      {
        type: ObjectId,
        ref: "Hobby",
      },
    ],
    hobbiesJoined: [
      {
        type: ObjectId,
        ref: "Hobby",
      },
    ],
  },
  { timestamps: true }
);

UserSchema.virtual("password")
  .get(function () {
    return this._password;
  })
  .set(function (value) {
    this._password = value;
    this.passwordHash = bcrypt.hashSync(value, 12);
  });

UserSchema.virtual("confirmPassword")
  .get(function () {
    return this._confirmPassword;
  })
  .set(function (value) {
    this._confirmPassword = value;
  });

UserSchema.pre("save", function (next) {
  if (this._password) {
    if (this._password.length < 8) {
      this.invalidate("password", "Password must be at least 8 characters.");
    } else if (this._password.length > 30) {
      this.invalidate(
        "password",
        "Password cannot be longer than 30 characters."
      );
    }

    if (!this._confirmPassword) {
      this.invalidate("confirmPassword", "You must confirm your password.");
    } else if (this._confirmPassword !== this._password) {
      this.invalidate("confirmPassword", "Password must match.");
    }
  }
  if (this.isNew && !this._password) {
    this.invalidate("password", "Password is required.");
  }

  next();
});

UserSchema.set("toJSON", {
  transform: function (doc, ret, options) {
    delete ret.passwordHash;
    return ret;
  },
});

const User = model("User", UserSchema);

export default User;
