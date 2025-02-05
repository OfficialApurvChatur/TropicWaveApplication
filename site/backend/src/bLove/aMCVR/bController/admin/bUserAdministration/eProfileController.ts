import express from 'express';
import cloudinary from 'cloudinary';

import { redisClient } from '../../../../../aConnection/dRedisConnection';
import catchAsyncMiddleware from '../../../../../bLove/bMiddleware/bCatchAsyncMiddleware';

import { ProfileModel } from '../../../aModel/admin/bUserAdministration/eProfileModel';


const profileController = (Model=ProfileModel, Label="Profile") => ({
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

        cUser: request.body.cUser,
      })

      // Clear Cache
      await redisClient.del(`${Label.toLowerCase()}-list`, `${Label.toLowerCase()}-list-for-user-create-and-update`)
      await redisClient.del("user-list", "user-list-for-profile-create-and-update",);

      // Response
      response.status(200).json({
        success: true,
        message: `${Label} Created Successfully`,
        create: create
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

          cUser: request.body.cUser,
        }, {
          new: true,
          runValidators: true,
          useFindAndMidify: false
        }
      )

      // Clear Cache
      await redisClient.del(`${Label.toLowerCase()}-list`, `${Label.toLowerCase()}-list-for-user-create-and-update`, `${Label.toLowerCase()}-retrieve:${request.params.id}`)
      await redisClient.del("user-list", "user-list-for-profile-create-and-update", ...(await redisClient.keys('user-retrieve*')))
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
      await redisClient.del(`${Label.toLowerCase()}-list`, `${Label.toLowerCase()}-list-for-user-create-and-update`, `${Label.toLowerCase()}-retrieve:${request.params.id}`)
      await redisClient.del("user-list", "user-list-for-profile-create-and-update", ...(await redisClient.keys('user-retrieve*')))
      console.log("Cache cleared...")
      
      // Response
      response.status(200).json({
        success: true,
        message: `${Label} Deleted Successfully`,
        delete_object: delete_object
      })
    }
  ), 
  
  // List For User Create & Update
  listForUserCreateAndUpdate: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // List
      const list = await Model.find()
        .select("aTitle");

      // Set Cache
      await redisClient.setex(`${Label.toLowerCase()}-list-for-user-create-and-update`, 15*60, JSON.stringify(list));

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

export default profileController;
