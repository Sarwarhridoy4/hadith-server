import prisma from "../lib/prisma";
import { CreateHadithInput, HadithSearchField } from "../types/hadith";

export const hadithRepository = {
  findAll: () =>
    prisma.hadith.findMany({
      orderBy: { createdAt: "desc" },
    }),

  findRandom: async () => {
    const count = await prisma.hadith.count();

    if (count === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * count);

    const [hadith] = await prisma.hadith.findMany({
      skip: randomIndex,
      take: 1,
    });

    return hadith ?? null;
  },

  searchByField: (field: HadithSearchField, query: string) =>
    prisma.hadith.findMany({
      where: {
        [field]: {
          contains: query,
          mode: "insensitive",
        },
      },
      orderBy: { createdAt: "desc" },
    }),

  create: (payload: CreateHadithInput) =>
    prisma.hadith.create({
      data: payload,
    }),
};

