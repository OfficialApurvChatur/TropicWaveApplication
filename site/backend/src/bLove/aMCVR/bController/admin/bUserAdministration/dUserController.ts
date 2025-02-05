import express from 'express';
import cloudinary from 'cloudinary';

import { redisClient } from '../../../../../aConnection/dRedisConnection';
import catchAsyncMiddleware from '../../../../../bLove/bMiddleware/bCatchAsyncMiddleware';

import { UserModel } from '../../../aModel/admin/bUserAdministration/dUserModel';
import { ProfileModel } from '../../../aModel/admin/bUserAdministration/eProfileModel';


const userController = (Model=UserModel, Label="User") => ({
  // List
  list: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // List
      const list = await Model.find();

      // Set Cache
      await redisClient.setex(`${Label.toLowerCase()}-list`, 15*60, JSON.stringify(list));

      // Total
      const total = await Model.countDocuments();

      // Response
      response.status(200).json({
        success: true,
        message: `${Label} Listed Successfully`,
        total: total,
        list: list,
      })
    }
  ),

  // Create
  create: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Create
      const create = await Model.create({
        aImage: request.body.aImage,
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
      response.status(200).json({
        success: true,
        message: `${Label} Created & Updated Successfully`,
        create: update
      }) 
    }
  ),

  // Retrieve
  retrieve: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Retrieve
      const retrieve = await Model.findById(request.params.id);

      // Set Cache
      await redisClient.setex(`${Label.toLowerCase()}-retrieve:${request.params.id}`, 15*60, JSON.stringify(retrieve))

      // Response
      response.status(200).json({
        success: true,
        message: `${Label} Retrieved Successfully`,
        retrieve: retrieve
      })
    }
  ),

  // Update
  update: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Update
      const update = await Model.findByIdAndUpdate(
        request.params.id, {
          aImage: request.body.aImage,
          aTitle: request.body.aTitle,
          aSubtitle: request.body.aSubtitle,

          cRole: request.body.cRole,
          cProfile: request.body.cProfile,

          eFirstname: request.body.eFirstname,
          eLastname: request.body.eLastname,
          // eEmail: request.body.eEmail,
          eMobile: request.body.eMobile,
          // ePassword: request.body.ePassword,  
        }, {
          new: true,
          runValidators: true,
          useFindAndMidify: false
        }
      )

      // Clear Cache
      await redisClient.del(`${Label.toLowerCase()}-list`, `${Label.toLowerCase()}-list-for-profile-create-and-update`, `${Label.toLowerCase()}-retrieve:${request.params.id}`)
      await redisClient.del("profile-list", "profile-list-for-user-create-and-update", ...(await redisClient.keys('profile-retrieve*')))
      console.log("Cache cleared...")
      
      // Response
      response.status(201).json({
        success: true,
        message: `${Label} Updated Successfully`,
        update: update
      })
    }
  ),

  // Delete
  delete: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {
      
      // Delete
      const delete_object = await Model.findOneAndDelete({ _id: request.params.id })

      // Delete Image
      if (delete_object?.aImage) {
        const publicId = (delete_object as any).aImage.split("/").pop().split(".")[0];
        await cloudinary.v2.uploader.destroy(`${Label.toLowerCase()}/${publicId}`);
      }

      // Clear Cache
      await redisClient.del(`${Label.toLowerCase()}-list`, `${Label.toLowerCase()}-list-for-profile-create-and-update`, `${Label.toLowerCase()}-retrieve:${request.params.id}`)
      await redisClient.del("profile-list", "profile-list-for-user-create-and-update", ...(await redisClient.keys('profile-retrieve*')))
      console.log("Cache cleared...")
      
      // Response
      response.status(200).json({
        success: true,
        message: `${Label} Deleted Successfully`,
        delete_object: delete_object
      })
    }
  ),  

  // List For Profile Create & Update
  listForProfileCreateAndUpdate: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // List
      const list = await Model.find()
        .select("aTitle");

      // Set Cache
      await redisClient.setex(`${Label.toLowerCase()}-list-for-profile-create-and-update`, 15*60, JSON.stringify(list));

      // Total
      const total = await Model.countDocuments();

      // Response
      response.status(200).json({
        success: true,
        message: `${Label} Listed Successfully`,
        total: total,
        list: list,
      })
    }
  ),
  
})

export default userController;
