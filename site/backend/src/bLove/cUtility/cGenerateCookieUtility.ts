import express from 'express';

import { UserModelType } from '../aMCVR/aModel/admin/bUserAdministration/dUserModel';


const generateCookieUtility = async (code: 200 | 201, message: string, key: string, object: UserModelType | any, response: express.Response) => {

  // Create Token
  const token = object.fGetAuthenticationTokenMethod();

  // Cookie Options
  const options: express.CookieOptions = {
    expires: new Date(Date.now() + 5 * 24 * 60 * 60 *1000),
    httpOnly: true,
    secure: true,
    sameSite: "none",
  }

  // Response
  response.cookie("MAIN_AUTHENTICATION_TOKEN", token, options).status(code).json({
    success: true,
    message: message,
    [key]: object,
  })
}

export default generateCookieUtility;
