import { body, param } from "express-validator";
import mongoose, { isValidObjectId } from "mongoose";

import ErrorUtility from "../../../../cUtility/aErrorUtility";
import { UserModel } from "../../../../aMCVR/aModel/admin/bUserAdministration/dUserModel";
import { RoleModel } from "../../../../aMCVR/aModel/admin/bUserAdministration/cRoleModel";
import { ProfileModel } from "../../../../aMCVR/aModel/admin/bUserAdministration/eProfileModel";


const userAuthValidation = {
  // Sign In
  signIn: () => [
    body("eEmail")
      .notEmpty().withMessage("Please enter email")
      .isEmail().withMessage("Please enter valid email")
      .custom(async value => {
        const retrieve = await UserModel.findOne({eEmail: value});
        if (!retrieve) throw new ErrorUtility("Invalid Email or Password", 401);
        return true;
      }),
    body("ePassword")
      .notEmpty().withMessage("Please enter password")
      .custom(async (value, { req: request }) => {
        const retrieve = await UserModel.findOne({eEmail: request.body.eEmail}).select("+ePassword");
        if (retrieve) {
          const isMatch = await retrieve.fComparePasswordMethod(value);
          if (!isMatch) throw new ErrorUtility("Invalid Email or Password", 401)
        };
        return true;
      }),
  ],
  
  // Sign Up
  signUp: () => [
    body("aTitle")
      .notEmpty().withMessage("Please enter title")
      .isLength({ min: 3, max: 50 }).withMessage("Title must be 3 - 50 characters")
      .custom(async value => {
        const retrieve = await UserModel.findOne({aTitle: value});
        if (retrieve) throw new ErrorUtility("Title already exists...", 401);
        return true;
      }),

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

  // Sign Out
  signOut: () => []
}

export default userAuthValidation;
