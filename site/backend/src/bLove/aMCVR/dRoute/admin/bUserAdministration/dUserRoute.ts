import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/dRateLimiterMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/eCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/cValidationMiddleware';

import userValidation from '../../../cValidation/admin/bUserAdministration/dUserValidation';
import userController from '../../../bController/admin/bUserAdministration/dUserController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware("user-list", 60, 10),
  checkCacheMiddleware("user-list", "User", "List"), 
  userValidation.list(), validatorMiddleware, 
  userController().list
)

router.route("/create").post(
  rateLimiterMiddleware("user-create", 60, 10),
  userValidation.create(), validatorMiddleware,
  userController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware("user-retrieve", 60, 10), 
  checkCacheMiddleware("user-retrieve", "User", "Retrieve"), 
  userValidation.retrieve(), validatorMiddleware, 
  userController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware("user-update", 60, 10), 
  userValidation.update(), validatorMiddleware, 
  userController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware("user-delete", 60, 10), 
  userValidation.delete(), validatorMiddleware, 
  userController().delete
)

router.route("/list-for-profile-create-and-update").get(
  rateLimiterMiddleware("user-list-for-profile-create-and-update", 60, 10),
  checkCacheMiddleware("user-list-for-profile-create-and-update", "User", "List", "User For Profile Create & Updated Listed Successfully... From Backend Cache"), 
  userValidation.listForProfileCreateAndUpdate(), validatorMiddleware, 
  userController().listForProfileCreateAndUpdate
)

export const userRouter = router
