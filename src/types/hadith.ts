export interface CreateHadithInput {
  hadith: string;
  narrator: string;
  source: string;
  reference: string;
}

export type HadithSearchField = keyof CreateHadithInput;

