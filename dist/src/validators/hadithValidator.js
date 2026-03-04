"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCreateHadithInput = void 0;
const fields = [
    "hadith",
    "narrator",
    "source",
    "reference",
];
const validateCreateHadithInput = (payload) => {
    if (!payload || typeof payload !== "object") {
        return { isValid: false, message: "Request body must be a JSON object" };
    }
    const candidate = payload;
    const normalized = {};
    for (const field of fields) {
        const value = candidate[field];
        if (typeof value !== "string" || value.trim().length === 0) {
            return { isValid: false, message: `Field '${field}' is required and must be a non-empty string` };
        }
        normalized[field] = value.trim();
    }
    return {
        isValid: true,
        data: normalized,
    };
};
exports.validateCreateHadithInput = validateCreateHadithInput;
