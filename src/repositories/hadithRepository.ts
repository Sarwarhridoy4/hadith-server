import Hadith from "../models/hadithModel";
import { CreateHadithInput, HadithSearchField } from "../types/hadith";

export const hadithRepository = {
  findAll: async () =>
    Hadith.find().sort({ createdAt: -1 }).lean(),

  findRandom: async () => {
    const [hadith] = await Hadith.aggregate([{ $sample: { size: 1 } }]);
    return hadith ?? null;
  },

  searchByField: (field: HadithSearchField, query: string) =>
    Hadith.find({ [field]: { $regex: query, $options: "i" } }).sort({ createdAt: -1 }).lean(),

  create: (payload: CreateHadithInput) => Hadith.create(payload),
};
