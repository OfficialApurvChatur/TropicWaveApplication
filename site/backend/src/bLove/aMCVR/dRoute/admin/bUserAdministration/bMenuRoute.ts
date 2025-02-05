import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/dRateLimiterMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/eCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/cValidationMiddleware';

import menuValidation from '../../../cValidation/admin/bUserAdministration/bMenuValidation';
import menuController from '../../../bController/admin/bUserAdministration/bMenuController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware("menu-list", 60, 10),
  checkCacheMiddleware("menu-list", "Menu", "List"), 
  menuValidation.list(), validatorMiddleware, 
  menuController().list
)

router.route("/create").post(
  rateLimiterMiddleware("menu-create", 60, 10),
  menuValidation.create(), validatorMiddleware,
  menuController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware("menu-retrieve", 60, 10), 
  checkCacheMiddleware("menu-retrieve", "Menu", "Retrieve"), 
  menuValidation.retrieve(), validatorMiddleware, 
  menuController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware("menu-update", 60, 10), 
  menuValidation.update(), validatorMiddleware, 
  menuController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware("menu-delete", 60, 10), 
  menuValidation.delete(), validatorMiddleware, 
  menuController().delete
)

router.route("/list-for-role-create-and-update").get(
  rateLimiterMiddleware("menu-list-for-role-create-and-update", 60, 10),
  checkCacheMiddleware("menu-list-for-role-create-and-update", "Menu", "List", "Menu For Role Create & Updated Listed Successfully... From Backend Cache"), 
  menuValidation.listForRoleCreateAndUpdate(), validatorMiddleware, 
  menuController().listForRoleCreateAndUpdate
)

export const menuRouter = router
