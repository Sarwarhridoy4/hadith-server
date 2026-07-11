import mongoose, { Document, Model, Schema, model } from "mongoose";

export interface IHadith extends Document {
  hadith: string;
  narrator: string;
  source: string;
  reference: string;
  createdAt: Date;
  updatedAt: Date;
}

const HadithSchema = new Schema<IHadith>(
  {
    hadith: { type: String, required: true },
    narrator: { type: String, required: true, index: true },
    source: { type: String, required: true, index: true },
    reference: { type: String, required: true, index: true },
  },
  { timestamps: true, collection: "hadiths" }
);

const Hadith: Model<IHadith> = model<IHadith>("Hadith", HadithSchema);

export default Hadith;
