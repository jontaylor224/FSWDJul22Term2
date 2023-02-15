import User from "../models/User";

export const getUserDetails = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId)
      .populate("hobbiesCreated")
      .populate("hobbiesJoined");

    res.json(user);
  } catch (error) {
    next(error);
  }
};
