import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/dRateLimiterMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/eCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/cValidationMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/fAuthenticationMiddleware';

import userAccountValidation from '../../../cValidation/admin/bUserAdministration/dUsrAccountValidation';
import userAccountController from '../../../bController/admin/bUserAdministration/dUserAccountController';


const router = express.Router();

router.route("/retrieve").get(
  rateLimiterMiddleware("account-retrieve", 60, 10),
  authenticationMiddleware,
  userAccountValidation.retrieve(), validatorMiddleware, 
  userAccountController().retrieve
)

router.route("/update").put(
  rateLimiterMiddleware("account-update", 60, 10), 
  authenticationMiddleware,
  userAccountValidation.update(), validatorMiddleware, 
  userAccountController().update,
);


export const userAccountRouter = router
