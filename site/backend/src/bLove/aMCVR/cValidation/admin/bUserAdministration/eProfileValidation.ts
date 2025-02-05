import { body, param } from "express-validator";
import mongoose, { isValidObjectId } from "mongoose";

import ErrorUtility from "../../../../cUtility/aErrorUtility";
import { ProfileModel } from "../../../../aMCVR/aModel/admin/bUserAdministration/eProfileModel";
import { UserModel } from "../../../../aMCVR/aModel/admin/bUserAdministration/dUserModel";


const profileValidation = {
  // List
  list: () => [],

  // Create
  create: () => [
    body("aImage")
      .notEmpty().withMessage("Please select image"),
    body("aTitle")
      .notEmpty().withMessage("Please enter title")
      .isLength({ min: 3, max: 50 }).withMessage("Title must be 3 - 50 characters")
      .custom(async value => {
        const retrieve = await ProfileModel.findOne({aTitle: value});
        if (retrieve) throw new ErrorUtility("Title already exists...", 401);
        return true;
      }),
    body("aSubtitle")
      .optional()
      .isLength({ min: 3, max: 100 }).withMessage("Subtitle must be 3 - 100 characters"),

    body("cUser")
      .notEmpty().withMessage("Please select user")
      .isMongoId().withMessage("Invalid MongoDB ID format for User")
      .custom(async (value: mongoose.ObjectId) => {
        const retrieve = await UserModel.findById(value);
        if (!retrieve) throw new ErrorUtility("Profile Not Found", 404)
        if (retrieve.cProfile) throw new ErrorUtility("User is already associated with another profile", 400);
        return true;
      }),
  ],

  // Retrieve
  retrieve: () => [
    param("id")
      .custom(value => {
        if (!isValidObjectId(value)) throw new ErrorUtility("Please provide valid parameter", 404)
        return true
      })
      .custom(async value => {
        const retrieve = await ProfileModel.findById(value);
        if (!retrieve) throw new ErrorUtility("Profile Not Found", 404)
        return true;
      }),
  ],

  // Update
  update: () => [
    body("aImage")
      .notEmpty().withMessage("Please select image"),
    body("aTitle")
      .notEmpty().withMessage("Please enter title")
      .isLength({ min: 3, max: 50 }).withMessage("Title must be 3 - 50 characters")
      .custom(async (value: any, { req: request }: any) => {
        const retrieve = await ProfileModel.findOne({aTitle: value});
        if (retrieve && String(retrieve?._id) !== request.params?.id) throw new ErrorUtility("Title already exists...", 401);
        return true;
      }),
    body("aSubtitle")
      .optional()
      .isLength({ min: 3, max: 100 }).withMessage("Subtitle must be 3 - 100 characters"),

    body("cUser")
      .notEmpty().withMessage("Please select user")
      .isMongoId().withMessage("Invalid MongoDB ID format for User")
      .custom(async (value: mongoose.ObjectId) => {
        const retrieve = await UserModel.findById(value);
        if (!retrieve) throw new ErrorUtility("Profile Not Found", 404)
        if (retrieve.cProfile) throw new ErrorUtility("User is already associated with another profile", 400);
        return true;
      }),

    param("id")
      .custom(value => {
        if (!isValidObjectId(value)) throw new ErrorUtility("Please provide valid parameter", 404)
        return true;
      })
      .custom(async value => {
       const retrieve = await ProfileModel.findById(value);
        if (!retrieve) throw new ErrorUtility("Profile Not Found", 404)
        return true;
      }),
  ],

  // Delete
  delete: () => [
    param("id")
      .custom(value => {
        if (!isValidObjectId(value)) throw new ErrorUtility("Please provide valid parameter", 404)
        return true
      })
      .custom(async value => {
        const retrieve = await ProfileModel.findById(value);
        if (!retrieve) throw new ErrorUtility("Profile Not Found", 404)
        return true;
      }),
  ],
  
  // List For User Create & Update
  listForUserCreateAndUpdate: () => [],
}

export default profileValidation;
