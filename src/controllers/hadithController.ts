import {Request, RequestHandler, Response} from 'express';

import Hadith from "../models/hadith";

export const getAllHadith = async (_req: Request, res: Response) => {
  try {
    const hadiths = await Hadith.find({});
    res.json(hadiths);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getRandomHadith = async (_req: Request, res: Response) => {
  try {
    const randomHadith = await Hadith.aggregate([{ $sample: { size: 1 } }]);
    res.json(randomHadith[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const searchHadith: RequestHandler = async (req, res) => {
  try {
    const { field, query } = req.params;

    const searchField = field.toLowerCase();
    const searchQuery = query.toLowerCase();

    const fieldMapping: Record<string, string> = {
      hadith: "hadith",
      narrator: "narrator",
      source: "source",
      reference: "reference",
    };

    const fieldToSearch = fieldMapping[searchField];

    if (!fieldToSearch) {
      res.status(400).json({ error: "Invalid search field" });
      return;
    }

    const matchingHadith = await Hadith.find({
      [fieldToSearch]: { $regex: searchQuery, $options: "i" },
    });

    res.json(matchingHadith);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const welcomeMessage = (_req: Request, res: Response) => {
  res.send("Welcome to my random hadith server");
};
