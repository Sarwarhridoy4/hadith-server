"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.welcomeMessage = exports.searchHadith = exports.getRandomHadith = exports.getAllHadith = void 0;
const hadith_1 = __importDefault(require("../models/hadith"));
const getAllHadith = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hadiths = yield hadith_1.default.find({});
        res.json(hadiths);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.getAllHadith = getAllHadith;
const getRandomHadith = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const randomHadith = yield hadith_1.default.aggregate([{ $sample: { size: 1 } }]);
        res.json(randomHadith[0]);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.getRandomHadith = getRandomHadith;
const searchHadith = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { field, query } = req.params;
        const searchField = field.toLowerCase();
        const searchQuery = query.toLowerCase();
        const fieldMapping = {
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
        const matchingHadith = yield hadith_1.default.find({
            [fieldToSearch]: { $regex: searchQuery, $options: "i" },
        });
        res.json(matchingHadith);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.searchHadith = searchHadith;
const welcomeMessage = (_req, res) => {
    res.send("Welcome to my random hadith server");
};
exports.welcomeMessage = welcomeMessage;
