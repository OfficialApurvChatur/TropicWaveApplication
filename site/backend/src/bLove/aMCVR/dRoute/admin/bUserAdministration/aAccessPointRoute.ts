import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/dRateLimiterMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/eCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/cValidationMiddleware';

import accessPointValidation from '../../../cValidation/admin/bUserAdministration/aAccessPointValidation';
import accessPointController from '../../../bController/admin/bUserAdministration/aAccessPointController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware("accesspoint-list", 60, 10),
  checkCacheMiddleware("accesspoint-list", "AccessPoint", "List"), 
  accessPointValidation.list(), validatorMiddleware, 
  accessPointController().list
)

router.route("/create").post(
  rateLimiterMiddleware("accesspoint-create", 60, 10),
  accessPointValidation.create(), validatorMiddleware,
  accessPointController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware("accesspoint-retrieve", 60, 10), 
  checkCacheMiddleware("accesspoint-retrieve", "AccessPoint", "Retrieve"), 
  accessPointValidation.retrieve(), validatorMiddleware, 
  accessPointController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware("accesspoint-update", 60, 10), 
  accessPointValidation.update(), validatorMiddleware, 
  accessPointController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware("accesspoint-delete", 60, 10), 
  accessPointValidation.delete(), validatorMiddleware, 
  accessPointController().delete
)

router.route("/list-for-menu-create-and-update").get(
  rateLimiterMiddleware("accesspoint-list-for-menu-create-and-update", 60, 10),
  checkCacheMiddleware("accesspoint-list-for-menu-create-and-update", "AccessPoint", "List", "Access Point For Menu Create & Updated Listed Successfully... From Backend Cache"), 
  accessPointValidation.listForMenuCreateAndUpdate(), validatorMiddleware, 
  accessPointController().listForMenuCreateAndUpdate
)


export const accessPointRouter = router
