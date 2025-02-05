import mongoose from 'mongoose';
import slugify from 'slugify';

import { DefaultSchemaUtility, DefaultSchemaUtilityType } from "../../../../cUtility/bDefaultSchemaUtility";


export type RoleModelType = DefaultSchemaUtilityType & {
  // Relation Info Type
  cMenu?: {
    menu: mongoose.Types.ObjectId;
    access: {
      accessPoint: mongoose.Types.ObjectId;
      hasAccess: boolean;
    };
  }[];

}

const schema = new mongoose.Schema<RoleModelType>({
  ...DefaultSchemaUtility.obj,

  // Relation Info
  cMenu: {
    type: [{
      menu: { type: mongoose.Schema.Types.ObjectId, ref: "MenuModel", required: true },
      access: [{
        accessPoint: { type: mongoose.Schema.Types.ObjectId, ref: "AccessPointModel" },
        hasAccess: Boolean,
      }],
    }],
  }

} as mongoose.SchemaDefinition<RoleModelType> )

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

export const RoleModel = mongoose.model<RoleModelType>("RoleModel", schema);
