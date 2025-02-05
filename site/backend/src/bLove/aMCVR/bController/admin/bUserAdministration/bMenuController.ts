import express from 'express';
import cloudinary from 'cloudinary';

import { redisClient } from '../../../../../aConnection/dRedisConnection';
import catchAsyncMiddleware from '../../../../../bLove/bMiddleware/bCatchAsyncMiddleware';

import { MenuModel } from '../../../aModel/admin/bUserAdministration/bMenuModel';


const menuController = (Model=MenuModel, Label="Menu") => ({
  // List
  list: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // List
      const list = await Model.find()
        .populate("cAccessPoint", "aTitle");

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

        cAccessPoint: request.body.cAccessPoint,
      })

      // Clear Cache
      await redisClient.del(`${Label.toLowerCase()}-list`, `${Label.toLowerCase()}-list-for-role-create-and-update`)
      await redisClient.del("role-list", "role-list-for-user-create-and-update", "role-list-for-user-auth-sign-up");

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
      const retrieve = await Model.findById(request.params.id)
        .populate("cAccessPoint", "aTitle");

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

          cAccessPoint: request.body.cAccessPoint,
        }, {
          new: true,
          runValidators: true,
          useFindAndMidify: false
        }
      )

      // Clear Cache
      await redisClient.del(`${Label.toLowerCase()}-list`, `${Label.toLowerCase()}-list-for-role-create-and-update`, `${Label.toLowerCase()}-retrieve:${request.params.id}`)
      await redisClient.del("role-list", "role-list-for-user-create-and-update", "role-list-for-user-auth-sign-up", ...(await redisClient.keys('role-retrieve*')), ...(await redisClient.keys('role-update-retrieve*')))
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
      await redisClient.del(`${Label.toLowerCase()}-list`, `${Label.toLowerCase()}-list-for-role-create-and-update`, `${Label.toLowerCase()}-retrieve:${request.params.id}`)
      await redisClient.del("role-list", "role-list-for-user-create-and-update", "role-list-for-user-auth-sign-up", ...(await redisClient.keys('role-retrieve*')), ...(await redisClient.keys('role-update-retrieve*')))
      console.log("Cache cleared...")
      
      // Response
      response.status(200).json({
        success: true,
        message: `${Label} Deleted Successfully`,
        delete_object: delete_object
      })
    }
  ), 
  
  // List For Role Create & Update
  listForRoleCreateAndUpdate: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // List
      const list = await Model.find()
        .select("aTitle cAccessPoint")
        .populate("cAccessPoint", "aTitle");

      // Set Cache
      await redisClient.setex(`${Label.toLowerCase()}-list-for-role-create-and-update`, 15*60, JSON.stringify(list));

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

export default menuController;
