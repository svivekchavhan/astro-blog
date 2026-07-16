/**
 * Word Library for Marathi translations and substitutions.
 * You can alter this list as per need to replace specific words globally.
 */
export const wordLibrary: Record<string, string> = {
  तारखा: "तारीख",
  विहंगावलोकन: "सारांश",
  // Add more word mappings here as needed:
  // "जुने_नाव": "नवीन_नाव",
};

/**
 * Replaces words in the input text based on the wordLibrary dictionary mappings.
 * @param text The input string to process.
 * @returns The processed string with substituted words.
 */
export function translateMarathi(text: string): string {
  if (!text) return text;
  let result = text;
  for (const [key, value] of Object.entries(wordLibrary)) {
    // Match whole words or substrings for substitution
    const regex = new RegExp(key, "g");
    result = result.replace(regex, value);
  }
  return result;
}
