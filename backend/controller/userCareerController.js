import { UserCareer } from "../models/Career.js";
import bcrypt from "bcrypt";

// @route: GET /user/career
// @purpose: get user career
export const getUserCareer = async (req, res) => {
  const { password } = req.body;

  const userCareer = await UserCareer.findOne({}).populate("user");
  if (userCareer) {
    const hashedPassword = userCareer.password;
    const checkCareerPassword = await bcrypt.compare(password, hashedPassword);
    if (checkCareerPassword) {
      res.status(200).json(userCareer);
    } else {
      res.status(401).json({ message: "password does not match" });
    }
  } else {
    res.status(404).json({ message: "user career details does not exist" });
  }
};

// @route: POST /user/career
// @purpose: post 1 user career
export const postUserCareer = async (req, res) => {
  const careerExist = await UserCareer.findOne({});
  if (!careerExist) {
    const body = req.body;
    body.user = req.user._id;
    const userCareer = new UserCareer(body);
    try {
      await userCareer.save();
      res.status(200).json(userCareer);
    } catch (error) {
      res.status(404).json({ message: error });
    }
  } else {
    res.status(404).json({ message: "one career already be given" });
  }
};

// @route: PUT /user/career
// @purpose: PUT user career
export const putUserCareer = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const updatedUserCareer = await UserCareer.findOneAndUpdate({}, body, {
      new: true,
    });
    res.status(200).json(updatedUserCareer);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};

// @route: DELETE /user/career
// @purpose: delete all user career
export const deleteUserCareer = async (req, res) => {
  try {
    const deletedUserCareer = await UserCareer.deleteMany();
    res.status(200).json(deletedUserCareer);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};

// @route: DELETE /user/career/:id
// @purpose: delete user career by id
export const deleteUserCareerById = async (req, res) => {
  try {
    const deletedUserCareer = await UserCareer.findOneAndRemove(req.params.id);
    res.status(200).json(deletedUserCareer);
  } catch (error) {
    res.status(404).json({ errMessage: error });
  }
};
