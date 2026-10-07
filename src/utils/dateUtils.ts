/**
 * Helper function to check if a publish date is within the last N days (default 7 days).
 * Returns true if date is within maxDays days from now (or Astro build time).
 */
export function isWithin7Days(dateStr?: string, maxDays = 7): boolean {
  if (!dateStr) return false;
  const pubTime = new Date(dateStr).getTime();
  if (isNaN(pubTime)) return false;

  const now = Date.now();
  const diffTime = now - pubTime;
  const maxAgeMs = maxDays * 24 * 60 * 60 * 1000;

  return diffTime >= 0 && diffTime <= maxAgeMs;
}

/**
 * Check if an expiry date string (ISO or standard format) is in the past.
 * Returns true if the item has NOT expired yet (or has no expiry date specified).
 */
export function isNotExpired(expiryStr?: string): boolean {
  if (!expiryStr) return true;
  const expDate = parseDateString(expiryStr) || new Date(expiryStr);
  if (isNaN(expDate.getTime())) return true;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return expDate.getTime() >= today.getTime();
}

/**
 * Robust date string parser for various date formats used across job recruitments:
 * e.g. "17 Oct 2026", "28 October 2026", "2026-10-17", "Exam: 07-09 Oct 2026", "01 & 02 Sep 2026"
 */
export function parseDateString(rawStr: string): Date | null {
  if (!rawStr) return null;

  // Clean string and replace "Sept" -> "Sep"
  let str = rawStr.replace(/Sept/gi, "Sep").trim();

  // If contains "&", take the last date e.g. "Exam: 01 & 02 Sep 2026" => "02 Sep 2026"
  if (str.includes("&")) {
    const parts = str.split("&");
    if (parts.length > 1) {
      str = parts[parts.length - 1].trim();
    }
  }

  // Handle ranges like "07-09 Oct 2026" or "08-10 Aug 2026"
  if (str.includes("-")) {
    const dashParts = str.split("-");
    if (dashParts.length > 1) {
      const yearMonthMatch = str.match(/([A-Za-z]+)\s+(\d{4})/);
      if (yearMonthMatch) {
        const lastDayNum = dashParts[dashParts.length - 1].replace(/\D/g, "");
        if (lastDayNum) {
          str = `${lastDayNum} ${yearMonthMatch[1]} ${yearMonthMatch[2]}`;
        }
      }
    }
  }

  str = str.replace(/^(Exam:\s*|Till\s*|Last Date:\s*)/i, "").trim();

  // Try standard parse
  let d = new Date(str);
  if (!isNaN(d.getTime())) return d;

  // Extract pattern e.g. "24 Sep 2026" or "11 Oct 2026" or "10 August 2026"
  const datePattern = /(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})/;
  const match = str.match(datePattern);
  if (match) {
    const [_, day, month, year] = match;
    d = new Date(`${day} ${month} ${year}`);
    if (!isNaN(d.getTime())) return d;
  }

  // Extract ISO pattern e.g. "2026-09-24"
  const isoPattern = /(\d{4})[-/](\d{1,2})[-/](\d{1,2})/;
  const isoMatch = str.match(isoPattern);
  if (isoMatch) {
    const [_, year, month, day] = isoMatch;
    d = new Date(Number(year), Number(month) - 1, Number(day));
    if (!isNaN(d.getTime())) return d;
  }

  return null;
}

export interface CountdownInfo {
  days: number;
  text: string;
  isExpired: boolean;
  status: "apply-now" | "closed" | "upcoming";
}

/**
 * Calculates countdown days remaining and expiration status based on real system date.
 */
export function getCountdownInfo(
  lastDateStr: string,
  extendedDateStr?: string,
): CountdownInfo {
  const dateStr = extendedDateStr || lastDateStr;

  if (
    !dateStr ||
    dateStr.toLowerCase().includes("soon") ||
    dateStr.includes("365") ||
    dateStr.toLowerCase().includes("active")
  ) {
    return { days: 365, text: "Active", isExpired: false, status: "apply-now" };
  }

  const parsedDate = parseDateString(dateStr);
  if (!parsedDate) {
    if (/out|pdf|result|list|card/i.test(dateStr)) {
      return { days: 0, text: "Notice", isExpired: false, status: "upcoming" };
    }
    return { days: 30, text: "Active", isExpired: false, status: "apply-now" };
  }

  const today = new Date();
  parsedDate.setHours(23, 59, 59, 999);
  today.setHours(0, 0, 0, 0);

  const diffTime = parsedDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) {
    return { days: 0, text: "0", isExpired: true, status: "closed" };
  } else if (diffDays === 0) {
    return { days: 0, text: "Today", isExpired: false, status: "apply-now" };
  } else {
    return {
      days: diffDays,
      text: `${diffDays}`,
      isExpired: false,
      status: "apply-now",
    };
  }
}
