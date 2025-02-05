import mongoose from 'mongoose';
import slugify from 'slugify';

import { DefaultSchemaUtility, DefaultSchemaUtilityType } from "../../../../cUtility/bDefaultSchemaUtility";


export type ProfileModelType = DefaultSchemaUtilityType & {
  // Relation Info Type
  cUser?: mongoose.Types.ObjectId; 
}

const schema = new mongoose.Schema<ProfileModelType>({
  ...DefaultSchemaUtility.obj,

  // Relation Info
  cUser: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel", required: true },

} as mongoose.SchemaDefinition<ProfileModelType> )

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

export const ProfileModel = mongoose.model<ProfileModelType>("ProfileModel", schema);
