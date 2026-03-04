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
exports.hadithRepository = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
exports.hadithRepository = {
    findAll: () => prisma_1.default.hadith.findMany({
        orderBy: { createdAt: "desc" },
    }),
    findRandom: () => __awaiter(void 0, void 0, void 0, function* () {
        const count = yield prisma_1.default.hadith.count();
        if (count === 0) {
            return null;
        }
        const randomIndex = Math.floor(Math.random() * count);
        const [hadith] = yield prisma_1.default.hadith.findMany({
            skip: randomIndex,
            take: 1,
        });
        return hadith !== null && hadith !== void 0 ? hadith : null;
    }),
    searchByField: (field, query) => prisma_1.default.hadith.findMany({
        where: {
            [field]: {
                contains: query,
                mode: "insensitive",
            },
        },
        orderBy: { createdAt: "desc" },
    }),
    create: (payload) => prisma_1.default.hadith.create({
        data: payload,
    }),
};
