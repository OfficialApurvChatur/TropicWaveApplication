import mongoose from 'mongoose';
import slugify from 'slugify';
import validator from 'validator';
import bcryptjs from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import crypto from 'crypto';

import { DefaultSchemaUtility, DefaultSchemaUtilityType } from "../../../../cUtility/bDefaultSchemaUtility";


export type UserModelType = DefaultSchemaUtilityType & {
  // Relation Info Type
  cRole?: mongoose.Types.ObjectId; 
  cProfile: mongoose.Types.ObjectId; 

  // More Info Type
  dAddress?: {
    lane?: string;
    street?: string;
    city?: string;
    state?: string;
    country?: string;
    pinCode?: string;
  };
  dLinks?: {
    title?: string;
    url?: string;
  }[];

  // Critical Info Type
  eFirstname?: string;
  eLastname?: string;
  eEmail: string;
  eMobile?: string;
  ePassword: string;
  eImage?: string;
  eResetPasswordToken?: string;
  eResetPasswordTokenExpire?: Date;

  // Method Type
  fComparePasswordMethod(enteredPassword: string): Promise<boolean>;
  fGetAuthenticationTokenMethod(): string;
  fGetResetPasswordTokenMethod(): Promise<string>;

}

const schema = new mongoose.Schema<UserModelType>({
  ...DefaultSchemaUtility.obj,

  // Relation Info
  cRole: { type: mongoose.Schema.Types.ObjectId, ref: "RoleModel" },
  cProfile: { type: mongoose.Schema.Types.ObjectId, ref: "ProfileModel" },

  // More Info
  dAddress: {
    lane: { type: String },
    street: { type: String },  
    city: { type: String },  
    state: { type: String },  
    country: { type: String },  
    pinCode: { type: String },    
  },
  dLinks: [{
    title: { type: String },
    url: { type: String },  
  }],

  // Critical Info
  eFirstname: {
    type: String,
    maxlength: [25, "Name cannot exceed 25 characters"],
    minlength: [5, "Name cannot be less than 5 characters"],
    trim: true
  },
  eLastname: {
    type: String,
    maxlength: [25, "Name cannot exceed 25 characters"],
    minlength: [5, "Name cannot be less than 5 characters"],
    trim: true
  },
  eEmail: {
    type: String,
    required: [true, "Please enter email"],
    validate: [validator.isEmail, "Please enter a valid email"],
    unique: true,
    trim: true
  },
  eMobile: { type: String },
  ePassword: {
    type: String,
    required: [true, "Please enter password"],
    maxlength: [16, "Password cannot exceed 16 characters"],
    minlength: [8, "Password cannot be less than 8 characters"],
    select: false
  },
  eImage: { type: String },
  eResetPasswordToken: { type: String },
  eResetPasswordTokenExpire: { type: Date },

} as mongoose.SchemaDefinition<UserModelType> )

// Pre Save
schema.pre("save", function(next) {
  this.aSlug = slugify(String(this?.aTitle), { lower: true, strict: true });
  next();
})

// Pre Update
schema.pre("findOneAndUpdate", function(next) {
  const update: any = this.getUpdate();

  if (update?.aTitle) {
    update.aSlug = slugify(String(update.aTitle), { lower: true, strict: true });
    this.setUpdate(update);
  }
  next();
})

// Pre Save
schema.pre<UserModelType>("save", async function(next) {
  if (!this.isModified("ePassword")) next();
  this.ePassword = await bcryptjs.hash(this.ePassword, 10);
  next();
})

// Method
// 1) Compare Password
schema.methods.fComparePasswordMethod = async function(enteredPassword: string): Promise<boolean> {
  return await bcryptjs.compare(enteredPassword, this.ePassword)
}

// 2) Authentication Token
schema.methods.fGetAuthenticationTokenMethod = function(): string {
  return jsonwebtoken.sign(
    { id: this._id },
    "THIS_IS_SOME_SECRET_KEY",
    { expiresIn: "5d"}
  )
}

// 3) Get Reset Password Token
schema.methods.fGetResetPasswordTokenMethod = async function() {
  // Generate Token
  const resetToken = crypto.randomBytes(20).toString("hex")

  // Hash Token
  this.eResetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex")
  this.eResetPasswordTokenExpire = Date.now() + 5*60*1000;

  return resetToken;
}

export const UserModel = mongoose.model<UserModelType>("UserModel", schema);
