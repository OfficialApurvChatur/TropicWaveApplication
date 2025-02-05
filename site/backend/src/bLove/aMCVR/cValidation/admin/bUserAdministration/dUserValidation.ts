import { body, param } from "express-validator";
import mongoose, { isValidObjectId } from "mongoose";

import ErrorUtility from "../../../../cUtility/aErrorUtility";
import { UserModel } from "../../../../aMCVR/aModel/admin/bUserAdministration/dUserModel";
import { RoleModel } from "../../../../aMCVR/aModel/admin/bUserAdministration/cRoleModel";
import { ProfileModel } from "../../../../aMCVR/aModel/admin/bUserAdministration/eProfileModel";


const userValidation = {
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
        const retrieve = await UserModel.findOne({aTitle: value});
        if (retrieve) throw new ErrorUtility("Title already exists...", 401);
        return true;
      }),
    body("aSubtitle")
      .optional()
      .isLength({ min: 3, max: 100 }).withMessage("Subtitle must be 3 - 100 characters"),

    body("cRole")
      .notEmpty().withMessage("Please select role")
      .isMongoId().withMessage("Invalid MongoDB ID format for Role")
      .custom(async (value: mongoose.ObjectId) => {
        const retrieve = await RoleModel.findById(value);
        if (!retrieve) throw new ErrorUtility("Role Not Found", 404)
        return true;
      }),
  
    body("eFirstname")
      .notEmpty().withMessage("Please enter firstname"),
    body("eLastname")
      .notEmpty().withMessage("Please enter lastname"),  
    body("eEmail")
      .notEmpty().withMessage("Please enter email")
      .isEmail().withMessage("Please enter valid email")
      .custom(async value => {
        const retrieve = await UserModel.findOne({eEmail: value});
        if (retrieve) throw new ErrorUtility("User already exists...", 401);
        return true;
      }),
    body("eMobile")
      .notEmpty().withMessage("Please enter mobile"),  
    body("ePassword")
      .notEmpty().withMessage("Please enter password"),
    body("eConfirmPassword")
      .notEmpty().withMessage("Please enter confirm password")
      .custom((value, { req: request }) => {
        if (value !== request.body.ePassword) {
          throw new ErrorUtility("Please match the passwords", 404);
        }
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
        const retrieve = await UserModel.findById(value);
        if (!retrieve) throw new ErrorUtility("User Not Found", 404)
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
        const retrieve = await UserModel.findOne({aTitle: value});
        if (retrieve && String(retrieve?._id) !== request.params?.id) throw new ErrorUtility("Title already exists...", 401);
        return true;
      }),
    body("aSubtitle")
      .optional()
      .isLength({ min: 3, max: 100 }).withMessage("Subtitle must be 3 - 100 characters"),

    body("cRole")
      .notEmpty().withMessage("Please select role")
      .isMongoId().withMessage("Invalid MongoDB ID format for Role")
      .custom(async (value: mongoose.ObjectId) => {
        const retrieve = await RoleModel.findById(value);
        if (!retrieve) throw new ErrorUtility("Role Not Found", 404)
        return true;
      }),
    body("cProfile")
      .notEmpty().withMessage("Please select profile")
      .isMongoId().withMessage("Invalid MongoDB ID format for Profile")
      .custom(async (value: mongoose.ObjectId) => {
        const retrieve = await ProfileModel.findById(value);
        if (!retrieve) throw new ErrorUtility("Profile Not Found", 404)
        if (retrieve.cUser) throw new ErrorUtility("Profile is already associated with another user", 400);
        return true;
      }),
  
    body("eFirstname")
      .notEmpty().withMessage("Please enter firstname"),
    body("eLastname")
      .notEmpty().withMessage("Please enter lastname"),  
    // body("eEmail")
    //   .notEmpty().withMessage("Please enter email")
    //   .isEmail().withMessage("Please enter valid email")
    //   .custom(async value => {
    //     const retrieve = await UserModel.findOne({eEmail: value});
    //     if (retrieve) throw new ErrorUtility("User already exists...", 401);
    //     return true;
    //   }),
    body("eMobile")
      .notEmpty().withMessage("Please enter mobile"),  
    // body("ePassword")
    //   .notEmpty().withMessage("Please enter password"),
    // body("eConfirmPassword")
    //   .notEmpty().withMessage("Please enter confirm password")
    //   .custom((value, { req: request }) => {
    //     if (value !== request.body.ePassword) {
    //       throw new ErrorUtility("Please match the passwords", 404);
    //     }
    //     return true;
    //   }),    

    param("id")
      .custom(value => {
        if (!isValidObjectId(value)) throw new ErrorUtility("Please provide valid parameter", 404)
        return true;
      })
      .custom(async value => {
       const retrieve = await UserModel.findById(value);
        if (!retrieve) throw new ErrorUtility("User Not Found", 404)
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
        const retrieve = await UserModel.findById(value);
        if (!retrieve) throw new ErrorUtility("User Not Found", 404)
        return true;
      }),
  ],
  
  // List For Profile Create & Update
  listForProfileCreateAndUpdate: () => [],
}

export default userValidation;
