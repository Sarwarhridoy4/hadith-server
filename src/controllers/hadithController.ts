import { Request, RequestHandler, Response } from "express";
import { hadithRepository } from "../repositories/hadithRepository";
import { HadithSearchField } from "../types/hadith";
import { validateCreateHadithInput } from "../validators/hadithValidator";

const SEARCHABLE_FIELDS: HadithSearchField[] = [
  "hadith",
  "narrator",
  "source",
  "reference",
];

export const getAllHadith = async (_req: Request, res: Response) => {
  try {
    const hadiths = await hadithRepository.findAll();
    res.json(hadiths);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getRandomHadith = async (_req: Request, res: Response) => {
  try {
    const randomHadith = await hadithRepository.findRandom();

    if (!randomHadith) {
      res.status(404).json({ error: "No hadith found" });
      return;
    }

    res.json(randomHadith);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const searchHadith: RequestHandler = async (req, res) => {
  try {
    const { field, query } = req.params;

    const searchField = field.toLowerCase() as HadithSearchField;

    if (!SEARCHABLE_FIELDS.includes(searchField)) {
      res.status(400).json({ error: "Invalid search field" });
      return;
    }

    const matchingHadith = await hadithRepository.searchByField(searchField, query);

    res.json(matchingHadith);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const welcomeMessage = (_req: Request, res: Response) => {
  res.send("Welcome to my random hadith server");
};

export const uploadHadith: RequestHandler = async (req, res) => {
  try {
    const validation = validateCreateHadithInput(req.body);

    if (!validation.isValid) {
      res.status(400).json({ error: validation.message });
      return;
    }

    const createdHadith = await hadithRepository.create(validation.data);
    res.status(201).json(createdHadith);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
