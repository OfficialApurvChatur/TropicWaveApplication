import multer, { StorageEngine, FileFilterCallback } from "multer";
import { Request, Response } from "express";
import cloudinary from "cloudinary";
import path from "path";
import fs from "fs/promises";
import fileStorageConnection from "../../aConnection/eFileStorageConnection";


// 1) Initialize Cloudinary
fileStorageConnection();

// 2) Configure Multer to store files temporarily
const storage: StorageEngine = multer.diskStorage({
  destination: async (req, file, cb) => {
    const uploadDir = path.join(__dirname, "uploads");

    // Ensure the uploads directory exists, create if it doesn't
    try {
      await fs.mkdir(uploadDir, { recursive: true });
      cb(null, uploadDir); // Proceed with storing the file
    } catch (error) {
      cb(new Error("Error creating upload directory"), "");
    }
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// 3) File filter to accept only images
const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  // List of allowed MIME types
  const allowedMimeTypes = [
    "image/jpeg", 
    "image/png", 
    "image/jpg", 
    // "application/pdf", 
    // "application/json",
    // "application/msword", // For .doc
    // "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // For .docx
    // "application/octet-stream", // Common fallback for .doc and .docx
    // "application/zip" // Sometimes .docx is detected as a zip file
  ];

  // Check if the file's mimetype is in the allowed list
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only images and document files (.pdf, .doc, .docx) are allowed!"));
  }
};

export const singleImageMiddleware = multer({ storage, fileFilter }).single("image");


// Single Image - Create Controller
export const singleImageCreateController = async (req: Request, res: Response): Promise<void> => {
  singleImageMiddleware(req, res, async (err: any) => {
    if (err) {
      res.status(400).json({ message: "Error uploading file", error: err.message });
      return;
    }

    try {
      if (!req.file) {
        res.status(400).json({ message: "No file provided" });
        return;
      }

      if (!req.body.folder) {
        res.status(400).json({ message: "No folder name provided" });
        return;
      }

      // Upload image to Cloudinary
      const result = await cloudinary.v2.uploader
        .upload(req.file.path, {
          folder: req.body.folder,
          resource_type: "image"
        }
      );

      // Delete local file after upload
      await fs.unlink(req.file.path);

      // Respond with the Cloudinary URL
      res.status(200).json({ 
        message: "Image uploaded successfully", 
        create: {
          url: result.secure_url,
          pid: result.public_id,
        }
      });
    } catch (error: any) {
      res.status(500).json({ message: "Error uploading to Cloudinary", error: error.message });
    }
  });
};

// Single Image - Update Controller
export const singleImageUpdateController = async (req: Request, res: Response): Promise<void> => {
  singleImageMiddleware(req, res, async (err) => {
    if (err) {
      res.status(400).json({ message: "Error uploading file", error: err.message });
      return;
    }

    const { public_id, folder } = req.body; // Public ID without folder prefix

    if (!req.file) {
      res.status(400).json({ message: "No file provided" });
      return;
    }

    if (!public_id) {
      res.status(400).json({ message: "Public ID is required" });
      return;
    }

    if (!folder) {
      res.status(400).json({ message: "Folder Name is required" });
      return;
    }

    try {
      // Include the folder path in the public ID
      const folderSpecificId = `${folder}/${public_id}`;

      // Replace the existing image in Cloudinary using the folder-specific ID
      const result = await cloudinary.v2.uploader.upload(req.file.path, {
        public_id: folderSpecificId,
        overwrite: true,
        resource_type: "image"
      });

      // Delete the temporary file
      await fs.unlink(req.file.path);

      // Respond with updated image details
      res.status(200).json({
        message: "Image updated successfully",
        update: {
          url: result.secure_url,
          pid: result.public_id,
        }
      });
    } catch (error: any) {
      res.status(500).json({ message: "Error updating image", error: error.message });
    }
  });
};

// Single Image - Delete Controller
export const singleImageDeleteController = async (req: Request, res: Response): Promise<void> => {
  const { public_id, folder } = req.body; // Public ID without the folder prefix

  if (!public_id) {
    res.status(400).json({ message: "Public ID is required" });
    return;
  }

  if (!folder) {
    res.status(400).json({ message: "Folder Name is required" });
    return;
  }

  try {
    // Include the folder path in the public ID
    const folderSpecificId = `${folder}/${public_id}`;

    // Delete the image from Cloudinary
    const result = await cloudinary.v2.uploader.destroy(folderSpecificId, {
      resource_type: "image"
    });

    if (result.result === "not found") {
      res.status(404).json({ message: "Image not found" });
      return;
    }

    res.status(200).json({ message: "Image deleted successfully", public_id });
  } catch (error: any) {
    res.status(500).json({ message: "Error deleting image", error: error.message });
  }
};
