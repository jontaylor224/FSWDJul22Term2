import User from "../models/user.model";

export const insertUser = async (userData) => {
  return User.create(userData);
};

export const fetchUserByEmail = async (email) => {
  return User.findOne({ email: email });
};
