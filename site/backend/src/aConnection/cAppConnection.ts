import express from 'express';

import bodyParserMiddleware from 'body-parser';
import cookieParserMiddleware from 'cookie-parser';
import corsMiddleware from 'cors';
import compressionMiddleware from 'compression';
import morganMiddleware from 'morgan';

import errorMiddleware from '../bLove/bMiddleware/aErrorMiddleware';

import { baseRouter } from '../bLove/aMCVR/dRoute/admin/aSetting/cBaseRoute';

import { accessPointRouter } from '../bLove/aMCVR/dRoute/admin/bUserAdministration/aAccessPointRoute';
import { menuRouter } from '../bLove/aMCVR/dRoute/admin/bUserAdministration/bMenuRoute';
import { roleRouter } from '../bLove/aMCVR/dRoute/admin/bUserAdministration/cRoleRoute';
import { userAuthRouter } from '../bLove/aMCVR/dRoute/admin/bUserAdministration/dUserAuthRoute';
import { userAccountRouter } from '../bLove/aMCVR/dRoute/admin/bUserAdministration/dUserAccountRoute';
import { userRouter } from '../bLove/aMCVR/dRoute/admin/bUserAdministration/dUserRoute';
import { profileRouter } from '../bLove/aMCVR/dRoute/admin/bUserAdministration/eProfileRoute';

import { singleImageRouter } from '../bLove/aMCVR/dRoute/admin/zFreestyleSample/aSingleImageRoute';


const appConnection = express();

// Third Party Middleware
appConnection.use(morganMiddleware("dev"));
appConnection.use(corsMiddleware({ origin: 
  process.env.ENVIRONMENT === "Production" ? [ String(process.env.FRONTEND_URL) ] :
  process.env.ENVIRONMENT === "Testing" ?  [ String(process.env.FRONTEND_URL) ] :
  process.env.ENVIRONMENT === "Development" ?  [ "http://localhost:5173" ] : 
  [ "http://localhost:5173" ],
  credentials: true
}));
appConnection.use(bodyParserMiddleware.urlencoded({ extended: true }));
appConnection.use(bodyParserMiddleware.json());
appConnection.use(cookieParserMiddleware());
appConnection.use(compressionMiddleware());

// Routing Middleware
appConnection.get("/", (_request, response) => { response.send(`Welcome to ${process.env.APPLICATION}`) })
appConnection.use("/api/v1/base/", baseRouter);

appConnection.use("/api/v1/access-point/", accessPointRouter);
appConnection.use("/api/v1/menu/", menuRouter);
appConnection.use("/api/v1/role/", roleRouter);
appConnection.use("/api/v1/user/auth/", userAuthRouter);
appConnection.use("/api/v1/user/account/", userAccountRouter);
appConnection.use("/api/v1/user/", userRouter);
appConnection.use("/api/v1/profile/", profileRouter);

appConnection.use('/api/v1/single-image/', singleImageRouter);

// Error Middleware
appConnection.use(errorMiddleware)

export default appConnection;
