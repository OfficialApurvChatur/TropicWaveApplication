import { body, param } from "express-validator";
import { isValidObjectId } from "mongoose";

import ErrorUtility from "../../../../cUtility/aErrorUtility";
import { RoleModel } from "../../../../aMCVR/aModel/admin/bUserAdministration/cRoleModel";


const roleValidation = {
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
        const retrieve = await RoleModel.findOne({aTitle: value});
        if (retrieve) throw new ErrorUtility("Title already exists...", 401);
        return true;
      }),
    body("aSubtitle")
      .optional()
      .isLength({ min: 3, max: 100 }).withMessage("Subtitle must be 3 - 100 characters")
  ],

  // Retrieve
  retrieve: () => [
    param("id")
      .custom(value => {
        if (!isValidObjectId(value)) throw new ErrorUtility("Please provide valid parameter", 404)
        return true
      })
      .custom(async value => {
        const retrieve = await RoleModel.findById(value);
        if (!retrieve) throw new ErrorUtility("Role Not Found", 404)
        return true;
      }),
  ],

  // Update Retrieve
  updateRetrieve: () => [
    param("id")
      .custom(value => {
        if (!isValidObjectId(value)) throw new ErrorUtility("Please provide valid parameter", 404)
        return true
      })
      .custom(async value => {
        const retrieve = await RoleModel.findById(value);
        if (!retrieve) throw new ErrorUtility("Role Not Found", 404)
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
        const retrieve = await RoleModel.findOne({aTitle: value});
        if (retrieve && String(retrieve?._id) !== request.params?.id) throw new ErrorUtility("Title already exists...", 401);
        return true;
      }),
    body("aSubtitle")
      .optional()
      .isLength({ min: 3, max: 100 }).withMessage("Subtitle must be 3 - 100 characters"),

    param("id")
      .custom(value => {
        if (!isValidObjectId(value)) throw new ErrorUtility("Please provide valid parameter", 404)
        return true;
      })
      .custom(async value => {
       const retrieve = await RoleModel.findById(value);
        if (!retrieve) throw new ErrorUtility("Role Not Found", 404)
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
        const retrieve = await RoleModel.findById(value);
        if (!retrieve) throw new ErrorUtility("Role Not Found", 404)
        return true;
      }),
  ],
  
  // List For User Create & Update
  listForUserCreateAndUpdate: () => [],
  
  // List For User Auth Sign Up
  listForUserAuthSignUp: () => [],
}

export default roleValidation;
