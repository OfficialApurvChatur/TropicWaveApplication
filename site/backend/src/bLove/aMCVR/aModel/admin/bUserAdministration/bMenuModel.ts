import mongoose from 'mongoose';
import slugify from 'slugify';

import { DefaultSchemaUtility, DefaultSchemaUtilityType } from "../../../../cUtility/bDefaultSchemaUtility";


export type MenuModelType = DefaultSchemaUtilityType & {
  // Relation Info Type
  cAccessPoint: {}[];

}

const schema = new mongoose.Schema<MenuModelType>({
  ...DefaultSchemaUtility.obj,

  // Relation Info
  cAccessPoint : [{ type: mongoose.Schema.Types.ObjectId, ref: 'AccessPointModel' }],

} as mongoose.SchemaDefinition<MenuModelType> )

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

export const MenuModel = mongoose.model<MenuModelType>("MenuModel", schema);
