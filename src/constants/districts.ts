export interface DistrictMeta {
  slug: string;
  nameEn: string;
  nameMr: string;
  division: string;
  badgeCount?: number;
  popular?: boolean;
}

export const MAHARASHTRA_DISTRICTS: DistrictMeta[] = [
  { slug: "pune", nameEn: "Pune", nameMr: "पुणे", division: "Pune", popular: true },
  { slug: "mumbai", nameEn: "Mumbai", nameMr: "मुंबई", division: "Konkan", popular: true },
  { slug: "thane", nameEn: "Thane", nameMr: "ठाणे", division: "Konkan", popular: true },
  { slug: "nagpur", nameEn: "Nagpur", nameMr: "नागपूर", division: "Nagpur", popular: true },
  { slug: "chhatrapati-sambhajinagar", nameEn: "Chhatrapati Sambhajinagar", nameMr: "छत्रपती संभाजीनगर", division: "Chhatrapati Sambhajinagar", popular: true },
  { slug: "nashik", nameEn: "Nashik", nameMr: "नाशिक", division: "Nashik", popular: true },
  { slug: "kolhapur", nameEn: "Kolhapur", nameMr: "कोल्हापूर", division: "Pune", popular: true },
  { slug: "solapur", nameEn: "Solapur", nameMr: "सोलापूर", division: "Pune", popular: true },
  { slug: "navi-mumbai", nameEn: "Navi Mumbai", nameMr: "नवी मुंबई", division: "Konkan", popular: true },
  { slug: "nanded", nameEn: "Nanded", nameMr: "नांदेड", division: "Chhatrapati Sambhajinagar", popular: false },
  { slug: "amravati", nameEn: "Amravati", nameMr: "अमरावती", division: "Amravati", popular: false },
  { slug: "jalgaon", nameEn: "Jalgaon", nameMr: "जळगाव", division: "Nashik", popular: false },
  { slug: "ahmednagar", nameEn: "Ahmednagar", nameMr: "अहमदनगर", division: "Nashik", popular: false },
  { slug: "satara", nameEn: "Satara", nameMr: "सातारा", division: "Pune", popular: false },
  { slug: "sangli", nameEn: "Sangli", nameMr: "सांगली", division: "Pune", popular: false },
  { slug: "latur", nameEn: "Latur", nameMr: "लातूर", division: "Chhatrapati Sambhajinagar", popular: false },
  { slug: "dhule", nameEn: "Dhule", nameMr: "धुळे", division: "Nashik", popular: false },
  { slug: "ratnagiri", nameEn: "Ratnagiri", nameMr: "रत्नागिरी", division: "Konkan", popular: false },
  { slug: "raigad", nameEn: "Raigad", nameMr: "रायगड", division: "Konkan", popular: false },
  { slug: "palghar", nameEn: "Palghar", nameMr: "पालघर", division: "Konkan", popular: false },
  { slug: "chandrapur", nameEn: "Chandrapur", nameMr: "चंद्रपूर", division: "Nagpur", popular: false },
  { slug: "yavatmal", nameEn: "Yavatmal", nameMr: "यवतमाळ", division: "Amravati", popular: false },
  { slug: "akola", nameEn: "Akola", nameMr: "अकोला", division: "Amravati", popular: false },
  { slug: "buldhana", nameEn: "Buldhana", nameMr: "बुलढाणा", division: "Amravati", popular: false },
  { slug: "beed", nameEn: "Beed", nameMr: "बीड", division: "Chhatrapati Sambhajinagar", popular: false },
  { slug: "parbhani", nameEn: "Parbhani", nameMr: "परभणी", division: "Chhatrapati Sambhajinagar", popular: false },
  { slug: "dharashiv", nameEn: "Dharashiv", nameMr: "धाराशिव (उस्मानाबाद)", division: "Chhatrapati Sambhajinagar", popular: false },
  { slug: "bhandara", nameEn: "Bhandara", nameMr: "भंडारा", division: "Nagpur", popular: false },
  { slug: "gondia", nameEn: "Gondia", nameMr: "गोंदिया", division: "Nagpur", popular: false },
  { slug: "wardha", nameEn: "Wardha", nameMr: "वर्धा", division: "Nagpur", popular: false },
  { slug: "gadchiroli", nameEn: "Gadchiroli", nameMr: "गडचिरोली", division: "Nagpur", popular: false },
  { slug: "washim", nameEn: "Washim", nameMr: "वाशिम", division: "Amravati", popular: false },
  { slug: "hingoli", nameEn: "Hingoli", nameMr: "हिंगोली", division: "Chhatrapati Sambhajinagar", popular: false },
  { slug: "nandurbar", nameEn: "Nandurbar", nameMr: "नंदुरबार", division: "Nashik", popular: false },
  { slug: "sindhudurg", nameEn: "Sindhudurg", nameMr: "सिंधुदुर्ग", division: "Konkan", popular: false }
];

export function getDistrictBySlug(slug: string): DistrictMeta | undefined {
  return MAHARASHTRA_DISTRICTS.find(d => d.slug.toLowerCase() === slug.toLowerCase());
}
