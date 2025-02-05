import express from 'express';

import { redisClient } from '../../../../../aConnection/dRedisConnection';
import catchAsyncMiddleware from '../../../../../bLove/bMiddleware/bCatchAsyncMiddleware';
import ErrorUtility from '../../../../../bLove/cUtility/aErrorUtility';
import generateCookieUtility from '../../../../../bLove/cUtility/cGenerateCookieUtility';

import { UserModel } from '../../../aModel/admin/bUserAdministration/dUserModel';
import { ProfileModel } from '../../../aModel/admin/bUserAdministration/eProfileModel';


const userAccountController = (Model=UserModel, Label="User") => ({
  // Retrieve
  retrieve: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Retrieve
      const retrieve = await Model.findOne({_id: (request as any).user})
        .populate({
          path: 'cRole',
          select: "aTitle cMenu",
          populate: {
            path: 'cMenu.menu',
            select: "aTitle cAccessPoint",
            populate: {
              path: 'cAccessPoint',
              select: 'aTitle',
            },  
          }
        });

      // Not Found
      if (!retrieve) next(new ErrorUtility(`${Label} Not Found`, 404))

      // Response
      response.status(200).json({ 
        success: true,
        message: "User Account Retrieved Successfully",
        user_account_retrieve: retrieve
      })
    }
  ),

  // Update
  update: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

    // // Retrieve
    // let retrieve = await Model.findOne({_id: (request as any).user})
    //   .populate("bCreatedBy", "eFirstname eLastname eEmail")
    //   .populate("bUpdatedBy", "eFirstname eLastname eEmail")
    //   .populate("cRole", "aTitle");

    // // Not Found
    // if (!retrieve) next(new ErrorUtility(`${Label} Not Found`, 404))
  
    // // Personal Info
    // request.body.bUpdatedAt = new Date(Date.now()),
    // request.body.bUpdatedBy = (request as any).user 


    // Update
    const update = await Model.findByIdAndUpdate(
      (request as any).user,{
        aImage: request.body.aImage,
        aTitle: request.body.aTitle,
        aSubtitle: request.body.aSubtitle,

        // cRole: request.body.cRole,
        // cProfile: request.body.cProfile,

        eFirstname: request.body.eFirstname,
        eLastname: request.body.eLastname,
        // eEmail: request.body.eEmail,
        eMobile: request.body.eMobile,
        // ePassword: request.body.ePassword,  
      }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
      }
    )

    // Response
    response.status(200).json({
      success: true,
      message: `${Label} Profile Updated Successfully`,
      update: update
    })
  }),
  
  
})

export default userAccountController;
