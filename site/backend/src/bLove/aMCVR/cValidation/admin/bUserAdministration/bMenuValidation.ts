import { body, param } from "express-validator";
import mongoose, { isValidObjectId } from "mongoose";

import ErrorUtility from "../../../../cUtility/aErrorUtility";
import { MenuModel } from "../../../../aMCVR/aModel/admin/bUserAdministration/bMenuModel";
import { AccessPointModel } from "../../../../aMCVR/aModel/admin/bUserAdministration/aAccessPointModel";


const menuValidation = {
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
        const retrieve = await MenuModel.findOne({aTitle: value});
        if (retrieve) throw new ErrorUtility("Title already exists...", 401);
        return true;
      }),
    body("aSubtitle")
      .optional()
      .isLength({ min: 3, max: 100 }).withMessage("Subtitle must be 3 - 100 characters"),

    body("cAccessPoint")
      .notEmpty().withMessage("Please select access point")
      .custom(async (value: mongoose.ObjectId[]) => {
        await Promise.all(value.map(async (each) => {
          const idAsString = each as unknown as string;
    
          if (!mongoose.Types.ObjectId.isValid(idAsString)) {
            throw new ErrorUtility("Invalid MongoDB ID format for Access Point", 400);
          }
    
          const retrieve = await AccessPointModel.findById(idAsString);
          if (!retrieve) throw new ErrorUtility("Access Point Not Found", 404);
        }));
        return true;
      })
  ],

  // Retrieve
  retrieve: () => [
    param("id")
      .custom(value => {
        if (!isValidObjectId(value)) throw new ErrorUtility("Please provide valid parameter", 404)
        return true
      })
      .custom(async value => {
        const retrieve = await MenuModel.findById(value);
        if (!retrieve) throw new ErrorUtility("Menu Not Found", 404)
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
        const retrieve = await MenuModel.findOne({aTitle: value});
        if (retrieve && String(retrieve?._id) !== request.params?.id) throw new ErrorUtility("Title already exists...", 401);
        return true;
      }),
    body("aSubtitle")
      .optional()
      .isLength({ min: 3, max: 100 }).withMessage("Subtitle must be 3 - 100 characters"),

    body("cAccessPoint")
      .notEmpty().withMessage("Please select access point")
      .custom(async (value: mongoose.ObjectId[]) => {
        await Promise.all(value.map(async (each) => {
          const idAsString = each as unknown as string;
    
          if (!mongoose.Types.ObjectId.isValid(idAsString)) {
            throw new ErrorUtility("Invalid MongoDB ID format for Access Point", 400);
          }
    
          const retrieve = await AccessPointModel.findById(idAsString);
          if (!retrieve) throw new ErrorUtility("Access Point Not Found", 404);
        }));
        return true;
      }),

    param("id")
      .custom(value => {
        if (!isValidObjectId(value)) throw new ErrorUtility("Please provide valid parameter", 404)
        return true;
      })
      .custom(async value => {
       const retrieve = await MenuModel.findById(value);
        if (!retrieve) throw new ErrorUtility("Menu Not Found", 404)
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
        const retrieve = await MenuModel.findById(value);
        if (!retrieve) throw new ErrorUtility("Menu Not Found", 404)
        return true;
      }),
  ],
  
  // List For Role Create & Update
  listForRoleCreateAndUpdate: () => [],
}

export default menuValidation;
