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
