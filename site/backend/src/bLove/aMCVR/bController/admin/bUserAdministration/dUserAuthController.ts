import express from 'express';

import { redisClient } from '../../../../../aConnection/dRedisConnection';
import catchAsyncMiddleware from '../../../../../bLove/bMiddleware/bCatchAsyncMiddleware';
import generateCookieUtility from '../../../../../bLove/cUtility/cGenerateCookieUtility';

import { UserModel } from '../../../aModel/admin/bUserAdministration/dUserModel';
import { ProfileModel } from '../../../aModel/admin/bUserAdministration/eProfileModel';


const userAuthController = (Model=UserModel, Label="User") => ({
  // Sign In
  signIn: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Retrieve
      const retrieve = await Model.findOne({eEmail: request.body.eEmail});

      // Response
			generateCookieUtility(200, "User Logged In Successfully", "user_sign_in", retrieve, response)
    }
  ),

  // Sign Up
  signUp: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Create
      const create = await Model.create({
        aTitle: request.body.aTitle,
        aSubtitle: request.body.aSubtitle,

        cRole: request.body.cRole,
        // cProfile: request.body.cProfile,

        eFirstname: request.body.eFirstname,
        eLastname: request.body.eLastname,
        eEmail: request.body.eEmail,
        eMobile: request.body.eMobile,
        ePassword: request.body.ePassword,
      })

      // Create Profile & Update User
      let update
      if (create) {
        const createProfile = await ProfileModel.create({
          aTitle: `Profile for ${request.body.eEmail}`,
    
          cUser: create._id,
        })    
        
        update = await Model.findByIdAndUpdate(
          create._id, {
            cProfile: createProfile._id,
          }, {
            new: true,
            runValidators: true,
            useFindAndMidify: false
          }
        )
      }
      
      // Clear Cache
      await redisClient.del(`${Label.toLowerCase()}-list`, `${Label.toLowerCase()}-list-for-profile-create-and-update`)
      await redisClient.del("profile-list", "profile-list-for-user-create-and-update",);
      
      // Response
      generateCookieUtility(201, `User Registered Successfully`, `user_sign_up`, create, response)
    }
  ),

  // Sign Out
  signOut: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Retrieve
      const retrieve = await Model.findOne({_id: (request as any).user});

      // Remove Token
      const options: express.CookieOptions = {
        expires: new Date(Date.now()),
        httpOnly: true,
        secure: true,
        sameSite: "none"	
      }    

      // Response
			response.status(200).cookie('MAIN_AUTHENTICATION_TOKEN', null, options).json({ 
				success: true,
				message: "User Logged Out Successfully",
				user_logout: retrieve
			})
    }
  ),
})

export default userAuthController;
