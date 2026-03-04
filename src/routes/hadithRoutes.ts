import { Router } from "express";
import {
  getAllHadith,
  getRandomHadith,
  searchHadith,
  uploadHadith,
  welcomeMessage,
} from "../controllers/hadithController";

const router = Router();

router.get("/all-hadith", getAllHadith);
router.get("/random-hadith", getRandomHadith);
router.get("/search/:field/:query", searchHadith);
router.post("/upload-hadith", uploadHadith);
router.get("/", welcomeMessage);

export default router;
