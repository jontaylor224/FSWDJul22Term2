import createHttpError from "http-errors";
import Hobby from "../models/Hobby";
import User from "../models/User";

export const getAllHobbies = async (req, res, next) => {
  try {
    const hobbies = await Hobby.find()
      .populate("createdBy")
      .populate("sharedWith")
      .sort({ createdAt: -1 });

    res.json(hobbies);
  } catch (error) {
    next(error);
  }
};

export const getHobbyDetails = async (req, res, next) => {
  try {
    const { hobbyId } = req.params;

    const hobby = await Hobby.findById(hobbyId)
      .populate("createdBy")
      .populate("sharedBy");

    if (!hobby) {
      throw createHttpError(404, { name: "NotFoundError" });
    }

    res.json(hobby);
  } catch (error) {}
};

export const createHobby = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const createdBy = req.user;

    const newHobby = new Hobby({ name, description, createdBy });

    req.user.hobbiesCreated.push(newHobby);
    await newHobby.save();
    await req.user.save();

    res.json(newHobby);
  } catch (error) {
    next(error);
  }
};

export const getUserCreatedHobbies = async (req, res, next) => {
  try {
    const hobbies = await Hobby.find({ createdBy: req.user })
      .populate("createdBy")
      .populate("sharedWith");

    res.json(hobbies);
  } catch (error) {
    next(error);
  }
};

export const joinHobby = async (req, res, next) => {
  try {
    const { hobbyId } = req.params;
    const userId = req.user._id;
    await Hobby.findByIdAndUpdate(
      hobbyId,
      { $addToSet: { sharedWith: userId } },
      { new: true }
    );
    await User.findByIdAndUpdate(
      userId,
      {
        $addToSet: { hobbiesJoined: hobbyId },
      },
      { new: true }
    );

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

export const leaveHobby = async (req, res, next) => {
  try {
    const { hobbyId } = req.params;
    const userId = req.user._id;
    await Hobby.findByIdAndUpdate(
      hobbyId,
      { $pull: { sharedWith: userId } },
      { new: true }
    );
    await User.findByIdAndUpdate(
      userId,
      {
        $pull: { hobbiesJoined: hobbyId },
      },
      { new: true }
    );
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

export const deleteHobby = async (req, res, next) => {
  try {
    const { hobbyId } = req.params;

    const hobbyToDelete = await Hobby.findById(hobbyId);
    if (!hobbyToDelete) {
      throw createHttpError(404, "NotFoundError");
    }

    if (!hobbyToDelete.createdBy.equals(req.user._id)) {
      throw createHttpError(403, "AccessDeniedError");
    }

    await hobbyToDelete.remove();

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};
