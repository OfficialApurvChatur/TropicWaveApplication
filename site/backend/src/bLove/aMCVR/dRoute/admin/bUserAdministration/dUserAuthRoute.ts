import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/dRateLimiterMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/eCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/cValidationMiddleware';

import userAuthValidation from '../../../cValidation/admin/bUserAdministration/dUserAuthValidation';
import userAuthController from '../../../bController/admin/bUserAdministration/dUserAuthController';


const router = express.Router();

router.route("/sign-in").post(
  rateLimiterMiddleware("sign-in", 60, 10),
  userAuthValidation.signIn(), validatorMiddleware, 
  userAuthController().signIn
)

router.route("/sign-up").post(
  rateLimiterMiddleware("sign-up", 60, 10),
  userAuthValidation.signUp(), validatorMiddleware, 
  userAuthController().signUp
)

router.route("/sign-out").get(
  rateLimiterMiddleware("sign-out", 60, 10), 
  userAuthValidation.signOut(), validatorMiddleware, 
  userAuthController().signOut,
);

export const userAuthRouter = router
