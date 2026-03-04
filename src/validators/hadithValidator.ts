import { CreateHadithInput } from "../types/hadith";

const fields: Array<keyof CreateHadithInput> = [
  "hadith",
  "narrator",
  "source",
  "reference",
];

export const validateCreateHadithInput = (
  payload: unknown,
): { isValid: true; data: CreateHadithInput } | { isValid: false; message: string } => {
  if (!payload || typeof payload !== "object") {
    return { isValid: false, message: "Request body must be a JSON object" };
  }

  const candidate = payload as Record<string, unknown>;
  const normalized: Partial<CreateHadithInput> = {};

  for (const field of fields) {
    const value = candidate[field];

    if (typeof value !== "string" || value.trim().length === 0) {
      return { isValid: false, message: `Field '${field}' is required and must be a non-empty string` };
    }

    normalized[field] = value.trim();
  }

  return {
    isValid: true,
    data: normalized as CreateHadithInput,
  };
};

