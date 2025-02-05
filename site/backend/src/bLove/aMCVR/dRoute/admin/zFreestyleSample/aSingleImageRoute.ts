import express from "express";
import { singleImageCreateController, singleImageDeleteController, singleImageUpdateController } from "../../../../bMiddleware/gMulterMiddleware";


const router = express.Router();

router.post("/create", singleImageCreateController);
router.post("/update", singleImageUpdateController);  
router.post("/delete", singleImageDeleteController);  

export const singleImageRouter =  router;
