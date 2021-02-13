import express from "express";
const router = express.Router();
import {
  getUserCareer,
  getUserCareerById,
  postUserCareer,
  putUserCareer,
  deleteUserCareer,
  deleteUserCareerById,
} from "../controller/userCareerController.js";

// Individual routes

// Career routes
router
  .route("/")
  .get(getUserCareer)
  .post(postUserCareer)
  .delete(deleteUserCareer);

router
  .route("/:id")
  .post(getUserCareerById)
  .put(putUserCareer)
  .delete(deleteUserCareerById);

export default router;
