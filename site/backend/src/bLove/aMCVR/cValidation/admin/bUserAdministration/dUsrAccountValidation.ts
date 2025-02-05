import express from "express";
import { body, param } from "express-validator";
import mongoose, { isValidObjectId } from "mongoose";

import ErrorUtility from "../../../../cUtility/aErrorUtility";
import { UserModel } from "../../../../aMCVR/aModel/admin/bUserAdministration/dUserModel";
import { RoleModel } from "../../../../aMCVR/aModel/admin/bUserAdministration/cRoleModel";
import { ProfileModel } from "../../../../aMCVR/aModel/admin/bUserAdministration/eProfileModel";


const userAccountValidation = {
  // Retrieve
  retrieve: () => [],

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

    body("eFirstname")
      .notEmpty().withMessage("Please enter firstname"),
    body("eLastname")
      .notEmpty().withMessage("Please enter lastname"),  
    body("eMobile")
      .notEmpty().withMessage("Please enter mobile"),  

    async (request: express.Request, response: express.Response, next: express.NextFunction) => {
      let retrieve = await UserModel.findOne({_id: (request as any).user})
      if (!retrieve) next(new ErrorUtility(`User Not Found`, 404))
      next();
    },
  ],
  
}

export default userAccountValidation;
