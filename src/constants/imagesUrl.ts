/**
 * MahaSandhi Image URLs Repository
 * Store custom image URLs here for posts, articles, and hall tickets.
 */

export const imagesUrl = {
  // VANARTI Admit Card 2026 Featured Image
  vanartiAdmitCard2026:
    "https://drive.google.com/thumbnail?id=1fAUV_we5xCbx8IiAcaMn1zu2NyAFlZFj&sz=w1200",
};

/**
 * Utility function to convert any Google Drive link or file ID to direct high-res image URL
 */
export const getGoogleDriveImageUrl = (
  fileIdOrUrl: string,
  width: number = 1200
): string => {
  if (!fileIdOrUrl) return "";
  const match = fileIdOrUrl.match(/[-\w]{25,}/);
  const id = match ? match[0] : fileIdOrUrl;
  return `https://drive.google.com/thumbnail?id=${id}&sz=w${width}`;
};

export default imagesUrl;
