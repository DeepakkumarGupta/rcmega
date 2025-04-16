

export interface Accessory {
  slug: string;
  _id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
  outOfStock: boolean;
  categories: string[];
  compatibleProductIds: string[]; // Array of product _ids this accessory is compatible with
  brand: string;
  description: string;
  media: {
    type: "image" | "video";
    url: string;
  }[];
  weight: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
    unit: "mm" | "cm" | "in";
  };
}



// Define the SparePart interface
export interface SparePart {
  _id: string;
  slug: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
  outOfStock: boolean;
  categories: string[];
  compatibleProductIds: string[]; // Array of product _ids this part is compatible with
  brand: string;
  description: string;
  media: {
    type: "image" | "video";
    url: string;
  }[];
  weight: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
    unit: "mm" | "cm" | "in";
  };
}


// Update Product interface to include an _id field
export interface Product {
  _id: string; // Added _id field
  name: string;
  brand: string;
  color: string;
  modelCode: string;
  scale: string;
  OutOfStock: boolean;
  price: number;
  slug: string;
  media: {
    type: "image" | "video" | "instagram";
    url: string;
  }[];
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  technicalSpecs: string[];
}

// export interface Product {
//   name: string
//   brand: string
//   color: string
//   modelCode: string
//   scale: string
//   OutOfStock: boolean
//   price: number
//   slug: string
//   media: {
//     type: "image" | "video" | "instagram"
//     url: string
//   }[]
//   socialLinks: {
//     instagram?: string
//     facebook?: string
//     youtube?: string
//   }
//   technicalSpecs: string[]
// }

export const products: Product[] = [
  {
    _id: "prod001",
    name: "FMS 1:12 2006 Hummer H1 Alpha RS",
    brand: "FMS",
    color: "Black",
    modelCode: "FMS11261ALRS",

    scale: "1:12",
    OutOfStock: false,
    price: 42999,
    slug: "fms-1-12-2006-hummer-h1-alpha-rs",
    media: [
      { type: "image", url: "/products/Brand/FMS/scale/1-12/2006 Hummer H1 Aplha/Black/HUMMERH11.jpg" },
      { type: "image", url: "/products/Brand/FMS/scale/1-12/2006 Hummer H1 Aplha/Black/HUMMERH14.jpg" },
      { type: "image", url: "/products/Brand/FMS/scale/1-12/2006 Hummer H1 Aplha/Black/HUMMERH15.jpg" },
      { type: "image", url: "/products/Brand/FMS/scale/1-12/2006 Hummer H1 Aplha/Black/HUMMERH16.jpg" },
      { type: "image", url: "/products/Brand/FMS/scale/1-12/2006 Hummer H1 Aplha/Black/HUMMERH110.jpg" },
      { type: "image", url: "/products/Brand/FMS/scale/1-12/2006 Hummer H1 Aplha/Black/HUMMERH111.jpg" },
      { type: "image", url: "/products/Brand/FMS/scale/1-12/2006 Hummer H1 Aplha/Black/HUMMERH118.jpg" },
      { type: "image", url: "/products/Brand/FMS/scale/1-12/2006 Hummer H1 Aplha/Black/HUMMERH119.jpg" },
      { type: "image", url: "/products/Brand/FMS/scale/1-12/2006 Hummer H1 Aplha/Black/HUMMERH120.jpg" },
      { type: "image", url: "/products/Brand/FMS/scale/1-12/2006 Hummer H1 Aplha/Black/HUMMERH123.jpg" },
      { type: "image", url: "/products/Brand/FMS/scale/1-12/2006 Hummer H1 Aplha/Black/HUMMERH124.jpg" },
      { type: "image", url: "/products/Brand/FMS/scale/1-12/2006 Hummer H1 Aplha/Black/HUMMERH127.jpg" },
      { type: "image", url: "/products/Brand/FMS/scale/1-12/2006 Hummer H1 Aplha/Black/HUMMERH128.jpg" },
      { type: "image", url: "/products/Brand/FMS/scale/1-12/2006 Hummer H1 Aplha/Black/HUMMERH131.jpg" },
      { type: "image", url: "/products/Brand/FMS/scale/1-12/2006 Hummer H1 Aplha/Black/HUMMERH134.jpg" },
      { type: "image", url: "/products/Brand/FMS/scale/1-12/2006 Hummer H1 Aplha/Black/HUMMERH135.jpg" },
      { type: "image", url: "/products/Brand/FMS/scale/1-12/2006 Hummer H1 Aplha/Black/HUMMERH136.jpg" },
      { type: "image", url: "/products/Brand/FMS/scale/1-12/2006 Hummer H1 Aplha/Black/HUMMERH137.jpg" },
      { type: "image", url: "/products/Brand/FMS/scale/1-12/2006 Hummer H1 Aplha/Black/HUMMERH138.jpg" },
      { type: "image", url: "/products/Brand/FMS/scale/1-12/2006 Hummer H1 Aplha/Black/HUMMERH140.jpg" },
      { type: "image", url: "/products/Brand/FMS/scale/1-12/2006 Hummer H1 Aplha/Black/HUMMERH141.jpg" },
      { type: "image", url: "/products/Brand/FMS/scale/1-12/2006 Hummer H1 Aplha/Black/HUMMERH142.jpg" },
      { type: "image", url: "/products/Brand/FMS/scale/1-12/2006 Hummer H1 Aplha/Black/HUMMERH143.jpg" },
      { type: "image", url: "/products/Brand/FMS/scale/1-12/2006 Hummer H1 Aplha/Black/HUMMERH145.jpg" },
      { type: "image", url: "/products/Brand/FMS/scale/1-12/2006 Hummer H1 Aplha/Black/RTRVSRSRCCarDifference.jpeg" },
    ],
    socialLinks: {
      instagram: "https://instagram.com/rcmegaofficial",
      facebook: "https://facebook.com/rcmegaofficial",
      youtube: "https://youtube.com/@rcmegaofficial",
    },
    technicalSpecs: [
      'Length: 408mm',
      'width: 222mm',
      'Height: 162mm',
      'Wheelbase: 272mm',
      'Tire F/R: Φ 78 × 25mm',
      'Approach Angle: 52°',
      'Departure Angle: 39°',
      'Speed: the highest fast gear is 8km/h, the highest slow gear is 5km/h',
      'Minimum Ground Clearance: 40mm',
      'Motor: 370 Brushed motor',
      'Remote control distance: 30m',
      'Approx. operating duration time: 20mins',
      'Remote control: G7 + R7A Transmitter receiver set'
    ],
  },
  {
    _id: "prod002",
    name: "FMS 1:24 FCX24 Mercedes-Benz Unimog 421",
    brand: "FMS",
    color: "Green",
    modelCode: "FCX24",
    scale: "1:24",
    OutOfStock: false,
    price: 19999,
    slug: "fms-1-24-fcx24-mercedes-benz-unimog-421",
    media: [
      { type: "image", url: "/products/Brand/FMS/scale/1-24/FCX24/unimog/unimog_1.jpg" },
      { type: "image", url: "/products/Brand/FMS/scale/1-24/FCX24/unimog/unimog_2.jpg" },
      { type: "image", url: "/products/Brand/FMS/scale/1-24/FCX24/unimog/unimog_3.jpg" },
      { type: "image", url: "/products/Brand/FMS/scale/1-24/FCX24/unimog/unimog_4.jpg" },
      { type: "image", url: "/products/Brand/FMS/scale/1-24/FCX24/unimog/unimog5.jpg" },
    ],
    socialLinks: {
      instagram: "https://instagram.com/rcmegaofficial",
      facebook: "https://facebook.com/rcmegaofficial",
      youtube: "https://youtube.com/@rcmegaofficial",
    },
    technicalSpecs: [
      'Length: 249 mm',
      'width: 153 mm',
      'Height: 160 mm',
      'Wheelbase: 142 mm',
      'Tire (F/R): Φ 20 mm',
      'Approach Angle: 49°',
      'Departure Angle: 69°',
      'Ground Clearance: 40 mm',
      'Motor: 130 Brushed Motor',
      'Remote Control Distance: 30 m',
      'Approximate Operating Duration: 20 minutes'
    ],
  },
  {
    _id: "prod003",
    name: "MJX Hyper Go 10208 V2 Monster 4WD RC Car 1/10 80km/h- RC",
    brand: "MJX",
    color: "White",
    modelCode: "10208 V2",
    scale: "1:10",
    OutOfStock: true,
    price: 30999,
    slug: "mjx-hyper-go-10208-v2",
    media: [
      { type: "image", url: "/products/Brand/MJX/scale/1-10/10208 V2/mainimage.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-10/10208 V2/10208_13.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-10/10208 V2/10208_10.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-10/10208 V2/10208_03.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-10/10208 V2/10208_02.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-10/10208 V2/10208_10.jpg" },
    ],
    socialLinks: {
      instagram: "https://instagram.com/rcmegaofficial",
      facebook: "https://facebook.com/rcmegaofficial",
      youtube: "https://youtube.com/@rcmegaofficial",
    },
    technicalSpecs: [
      'Model Number: MJX Hyper Go 10208',
      'Scale: 1/10',
      'Top Speed: Up to 60km/h with 3S battery, 80km/h with 4S battery（not include battery, need to buy separately）',
      'Control Distance: ≥120 meters',
      'Weight: 3000g',
      'Motor: 3970-2500KV brushless motor with aluminum heatsink and fan',
      'ESC: 100A independent ESC, compatible with 2-3S batteries',
      'Servo: 35KG digital servo',
      'Differentials: 3 (front, center, rear)',
      'Chassis: Metal oil shock absorbers, adjustable spring tension, full ball bearings, powder metallurgy metal gears',
      'Tires: Durable rubber tires for superior grip',
      'Body Shell: High-quality PC material',
      'Battery Requirements: Requires 2 AA batteries for remote (not included)'
    ],
  },
  {
    _id: "prod004",
    name: "MJX Hyper Go 16210, 1/16 Brushless RC 4WD High Speed Off-Road Truggy Truck India",
    brand: "MJX",
    color: "Black",
    modelCode: "16210",
    scale: "1:16",
    OutOfStock: true,
    price: 15499,
    slug: "mjx-hyper-go-16210-1-16-monster-truggy-truck-india",
    media: [
      { type: "image", url: "/products/Brand/MJX/scale/1-16/16210/16210main.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-16/16210/withremote.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-16/16210/16210.png" },
      { type: "image", url: "/products/Brand/MJX/scale/1-16/16210/16210withmotor.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-16/16210/16210front.png" },
      { type: "image", url: "/products/Brand/MJX/scale/1-16/16210/16210top.png" },
      { type: "image", url: "/products/Brand/MJX/scale/1-16/16210/16210topio.png" },
      { type: "instagram", url: "DFahlXMyuOZ" }
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/reel/DFahlXMyuOZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      facebook: "https://facebook.com/rcmegaofficial",
      youtube: "https://www.youtube.com/shorts/JqLP9cbpYTg",
    },
    technicalSpecs: [
      'Model Number: MJX Hyper Go 16210',
      'Scale: 1/16',
      'Top Speed: 45km/h with 2S LiPo, 69km/h with 3S LiPo',
      'Control Distance: 120 meters',
      'Weight: 1030g',
      'Motor: Brushless motor with the cooling aluminum heat sink and fan',
      'ESC: 45A brushless ESC with metal heat sink',
      'Servo: 17g digital servo',
      'Differentials: Dual open differentials (front & rear)',
      'Chassis: 310x222x110 mm; Wheelbase 174mm; Track width 182mm',
      'Tires: 83mm diameter durable rubber tires',
      'Body Shell: Lightweight ABS plastic body',
      'Battery Requirements: Car – 7.4V 1050mAh 25C (USB rechargeable); Remote – requires 2 AA batteries (not included)'

    ],
  },
  {
    _id: "prod005",
    name: "MJX Hyper Go 16209",
    brand: "MJX",
    color: "Blue",
    modelCode: "16209",
    scale: "1:16",
    OutOfStock: false,
    price: 15499,
    slug: "mjx-hyper-go-16209-1-16-monster-truck",
    media: [
      { type: "image", url: "/products/Brand/MJX/scale/1-16/16209/202207221121295240.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-16/16209/T22_10.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-16/16209/T22_04.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-16/16209/202207221121295240.jpg" }
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/rcmegaofficial",
      facebook: "https://facebook.com/rcmegaofficial",
      youtube: "https://www.youtube.com/@rcmegaofficial",
    },
    technicalSpecs: [
      'Model Number: MJX Hyper Go 16209',
      'Scale: 1/16',
      'Top Speed: 45km/h with 2S LiPo, 69km/h with 3S LiPo',
      'Control Distance: 120 meters',
      'Weight: 1030g',
      'Motor: Brushless motor with cooling aluminum heat sink and cooling fan',
      'ESC: 45A brushless ESC with metal heat sink',
      'Servo: 17g digital servo',
      'Differentials: Not specified',
      'Chassis: Dimensions 310x222x110 mm, Wheelbase 174mm, Track width 182mm',
      'Tires: 83mm diameter durable rubber tires',
      'Body Shell: Not specified',
      'Battery Requirements: Car Battery – 7.4V 1050mAh 25C (rechargeable via USB); Remote – requires 2 AA batteries (not included)',
    ],
  },
  {
    _id: "prod006",
    name: "MJX Hyper Go 16208",
    brand: "MJX",
    color: "Blue",
    modelCode: "16208",
    scale: "1:16",
    OutOfStock: false,
    price: 15499,
    slug: "mjx-hyper-go-16208",
    media: [
      { type: "image", url: "/products/Brand/MJX/scale/1-16/16208/16208front.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-16/16208/16208details.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-16/16208/16208s.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-16/16208/16208top.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-16/16208/16208withaccessories.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-16/16208/16208.jpg" },

    ],
    socialLinks: {
      instagram: "https://instagram.com/rcmegaofficial",
      facebook: "https://facebook.com/rcmegaofficial",
      youtube: "https://youtube.com/@rcmegaofficial",
    },
    technicalSpecs: [
      'Model Number: MJX Hyper Go 16209',
      'Scale: 1/16',
      'Top Speed: 45km/h with 2S LiPo, 69km/h with 3S LiPo',
      'Control Distance: 120 meters',
      'Weight: 1030g',
      'Motor: Brushless motor with cooling aluminum heat sink and fan',
      'ESC: 45A brushless ESC with metal heat sink',
      'Servo: 17g digital servo',
      'Differentials: Dual open differentials (front & rear)',
      'Chassis: 310x222x110 mm; Wheelbase 174mm; Track width 182mm',
      'Tires: 83mm diameter durable rubber tires',
      'Body Shell: Injection-molded polycarbonate body',
      'Battery Requirements: Car – 7.4V 1050mAh 25C (USB rechargeable); Remote – requires 2 AA batteries (not included)'

    ],
  },
  {
    _id: "prod007",
    name: "MJX Hyper Go 14210 V3",
    brand: "MJX",
    color: "Black",
    modelCode: "14210 V3",
    scale: "1:14",
    OutOfStock: true,
    price: 19499,
    slug: "mjx-hyper-go-14210v3-monster-truggy-truck",
    media: [
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14210/202305111623171346.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14210/14210_02.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14210/14210_03.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14210/14210_04.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14210/14210_05.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14210/14210_06.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14210/14210_07.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14210/14210_08.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14210/14210_09.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14210/14210_10.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14210/14210_11.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14210/14210_12.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14210/14210_13.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14210/14210_14.jpg" },
      { type: "instagram", url: "DFDSIvftpBU" }

    ],
    socialLinks: {
      instagram: "https://instagram.com/rcmegaofficial",
      facebook: "https://facebook.com/rcmegaofficial",
      youtube: "https://youtube.com/@rcmegaofficial",
    },
    technicalSpecs: [
      'Model Number: MJX Hyper Go 14210 V2 0',
      'Scale: 1/14',
      'Top Speed: 75km/h',
      'Control Distance: 120 meters',
      'Weight: 2200g',
      'Motor: High-performance brushless motor (tuned for basher performance)',
      'ESC: 45A brushless ESC with metal heat sink',
      'Servo: 17g digital servo',
      'Differentials: Dual differential system (open differentials front & rear)',
      'Chassis: Reinforced plastic chassis with select metal components',
      'Tires: 60mm high-traction off‐road tires',
      'Body Shell: Durable polycarbonate body',
      'Battery Requirements: 2S battery (approximately 7.4V, 2000mAh, included) and Remote – requires 2 AA batteries (not included)'

    ],
  },
  {
    _id: "prod008",
    name: "MJX Hyper Go 20208",
    brand: "MJX",
    color: "Black",
    modelCode: "20208",
    scale: "1:20",
    OutOfStock: false,
    price: 9999,
    slug: "mjx-hyper-go-20208-1-20",
    media: [
      { type: "image", url: "/products/Brand/MJX/scale/1-20/20208/image 1.webp" },
      { type: "image", url: "/products/Brand/MJX/scale/1-20/20208/image 2.webp" },
      { type: "image", url: "/products/Brand/MJX/scale/1-20/20208/image 3.webp" },
      { type: "image", url: "/products/Brand/MJX/scale/1-20/20208/image 4.webp" },
      { type: "image", url: "/products/Brand/MJX/scale/1-20/20208/20208_03.jpg" },

    ],
    socialLinks: {
      instagram: "https://instagram.com/rcmegaofficial",
      facebook: "https://facebook.com/rcmegaofficial",
      youtube: "https://youtube.com/@rcmegaofficial",
    },
    technicalSpecs: [
      'Model: MJX Hyper Go 20208',
      'Scale: 1/20',
      'Motor: 1806 Brushless',
      'ESC: 35A 2-in-1 Circuit Board',
      'Battery: 7.4V 850mAh 25C Li-Po',
      'Control Range: 50 meters',
      'Weight: 553g',
      'Speed: 39km/h',

    ],
  },
  {
    _id: "prod009",
    name: "MJX Hyper Go 14303",
    brand: "MJX",
    color: "Black",
    modelCode: "14303",
    scale: "1:14",
    OutOfStock: false,
    price: 19499,
    slug: "mjx-hyper-go-14303",
    media: [
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14303/202401030947550018.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14303/14303_02.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14303/14303_03.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14303/14303_04.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14303/14303_05.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14303/14303_06.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14303/14303_09.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14303/14303_10.jpg" },
    ],
    socialLinks: {
      instagram: "https://instagram.com/rcmegaofficial",
      facebook: "https://facebook.com/rcmegaofficial",
      youtube: "https://youtube.com/@rcmegaofficial",
    },
    technicalSpecs: [
      'Model Number: MJX Hyper Go 14303',
      'Scale: 1/14',
      'Top Speed: 42km/h',
      'Control Distance: 120 meters',
      'Weight: 2105g',
      'Motor: Brushless Motor 2845 3900KV 4 Poles with aluminum heat sink and fan',
      'ESC: 45A brushless ESC with metal heat sink',
      'Servo: 17g digital servo',
      'Differentials: Front differential mechanism',
      'Chassis: 320x153x115 mm; Axle Base 192mm; Wheelbase 125mm',
      'Tires: 58mm diameter high‐grip tires',
      'Body Shell: Molded, crack‐resistant plastic body',
      'Battery Requirements: 7.4V 2000mAh 2S battery (USB rechargeable, ~4h charging); Remote – requires 2 AA batteries (not included)'

    ]
  },
  {
    _id: "prod0010",
    name: "MJX Hyper Go 14302",
    brand: "MJX",
    color: "white",
    modelCode: "14302",
    scale: "1:14",
    OutOfStock: false,
    price: 19499,
    slug: "mjx-hyper-go-14302",
    media: [
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14302/202401030945559282.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14302/14302_02.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14302/14302_03.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14302/14302_04.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14302/14302_05.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14302/14302_06.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14302/14302_07.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14302/14302_08.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14302/14302_09.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14302/14302_10.jpg" },

    ],
    socialLinks: {
      instagram: "https://instagram.com/rcmegaofficial",
      facebook: "https://facebook.com/rcmegaofficial",
      youtube: "https://youtube.com/@rcmegaofficial",
    },
    technicalSpecs: [
      'Model Number: MJX Hyper Go 14302',
      'Scale: 1/14',
      'Top Speed: 42km/h (65km/h with 3S 11.1V battery or 45km/h with 2S 7.4V battery)',
      'Control Distance: 120 meters',
      'Weight: 2105g',
      'Motor: Brushless Motor 2845 3700KV 4 Poles with aluminum heat sink and fan',
      'ESC: 45A brushless ESC with metal heat sink',
      'Servo: 17g digital servo',
      'Differentials: Front differential only',
      'Chassis: 320x153x115 mm; Wheelbase 192mm; Tire Diameter 58mm',
      'Tires: High grip TPR and drift-specific tires (sets prov_ided)',
      'Body Shell: High-quality, crack-resistant plastic body',
      'Battery Requirements: 7.4V 2000mAh 2S battery (upgrade option for 3S available); Remote – requires 2 AA batteries (not included)'

    ]
  },
  {
    _id: "prod0011",
    name: "MJX Hyper Go 14301",
    brand: "MJX",
    color: "white",
    modelCode: "14301",
    scale: "1:14",
    OutOfStock: false,
    price: 18999,
    slug: "mjx-hyper-go-14301",
    media: [
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14301/14301_02.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14301/14301_03.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14301/14301_04.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-14/14301/14301_05.jpg" },
    ],
    socialLinks: {
      instagram: "https://instagram.com/rcmegaofficial",
      facebook: "https://facebook.com/rcmegaofficial",
      youtube: "https://youtube.com/@rcmegaofficial",
    },
    technicalSpecs: [
      'Model Number: MJX Hyper Go 14301',
      'Scale: 1/14',
      'Top Speed: 42km/h',
      'Control Distance: 120 meters',
      'Weight: 2100g',
      'Motor: Brushless Motor 2845 3700KV 4 Poles with aluminum heat sink and fan',
      'ESC: 45A brushless ESC with metal heat sink',
      'Servo: 17g digital servo',
      'Differentials: Front differential mechanism',
      'Chassis: 320x153x115 mm; Wheelbase 192mm; Tire Diameter 58mm',
      'Tires: 58mm high-traction tires',
      'Body Shell: Durable plastic body',
      'Battery Requirements: 7.4V 2000mAh 2S battery; Remote – requires 2 AA batteries (not included)'
    ]
  },
  {
    _id: "prod0012",
    name: "FSR 1:8 Mustang GT 6S Brushless",
    brand: "FSR",
    color: "Blue",
    modelCode: "FSRGT6S",
    scale: "1:8",
    OutOfStock: false,
    price: 76999,
    slug: "fsr-1-8-mustang-gt-6s-brushless",
    media: [
      { type: "image", url: "/products/Brand/FSR/scale/1-18/mustanggtrs/mustanggtrs1.jpg" },
      { type: "image", url: "/products/Brand/FSR/scale/1-18/mustanggtrs/mustanggtrs2.jpg" },
      { type: "image", url: "/products/Brand/FSR/scale/1-18/mustanggtrs/mustanggtrs3.jpg" },
      { type: "image", url: "/products/Brand/FSR/scale/1-18/mustanggtrs/mustanggtrs4.jpg" },
      { type: "image", url: "/products/Brand/FSR/scale/1-18/mustanggtrs/mustanggtrs5.jpg" },
    ],
    socialLinks: {
      instagram: "https://instagram.com/rcmegaofficial",
      facebook: "https://facebook.com/rcmegaofficial",
      youtube: "https://youtube.com/@rcmegaofficial",
    },
    //All details are not specified for this product
    technicalSpecs: [
      'Model Number: FSR FS Racing Mustang',
      'Scale: 1/7',
      'Top Speed: 60km/h',
      'Control Distance: 150 meters',
      'Weight: 4000g',
      'Motor: High-performance brushless motor (~5400KV)',
      'ESC: 60A brushless ESC',
      'Servo: High-torque digital servo',
      'Differentials: Advanced 4WD differential system',
      'Chassis: Metal and reinforced plastic composite chassis',
      'Tires: Off-road high-traction tires',
      'Body Shell: Polycarbonate body shell',
      'Battery Requirements: 2S battery (approx. 7.4V, 3000mAh, included); Remote – requires 2 AA batteries (not included)'

    ],
  },
  {
    _id: "prod0013",
    name: "Rlaarlo AM-D12 1:12 Brushless Desert Truck",
    brand: "Rlaarlo",
    color: "Pink",
    modelCode: "AMD12",
    scale: "1:12",
    OutOfStock: false,
    price: 24999,
    slug: "rlaarlo-am-d12-1-12-brushless-desert-truck",
    media: [
      { type: "image", url: "/products/Brand/Rlaarlo/scale/1-12/AM-D12/1.jpg" },
      { type: "image", url: "/products/Brand/Rlaarlo/scale/1-12/AM-D12/2.jpg" },
      { type: "image", url: "/products/Brand/Rlaarlo/scale/1-12/AM-D12/3.jpg" },
      { type: "image", url: "/products/Brand/Rlaarlo/scale/1-12/AM-D12/4.jpg" },
      { type: "image", url: "/products/Brand/Rlaarlo/scale/1-12/AM-D12/5.jpg" },
      { type: "image", url: "/products/Brand/Rlaarlo/scale/1-12/AM-D12/6.jpg" },
      { type: "image", url: "/products/Brand/Rlaarlo/scale/1-12/AM-D12/7.jpg" },
    ],
    socialLinks: {
      instagram: "https://instagram.com/rcmegaofficial",
      facebook: "https://facebook.com/rcmegaofficial",
      youtube: "https://youtube.com/@rcmegaofficial",
    },
    technicalSpecs: [
      'Model Number: AM D12',
      'Scale: 1/12',
      'Top Speed: Max 45mph',
      'Control Distance: 120 meters',
      'Weight: 2500g',
      'Motor: Brushless motor optimized for desert performance',
      'ESC: 40A brushless ESC',
      'Servo: 20g digital servo',
      'Differentials: Rear differential system',
      'Chassis: Reinforced plastic chassis',
      'Tires: Durable off-road tires',
      'Body Shell: Polycarbonate body shell',
      'Battery Requirements: Battery included (2S type); Remote – battery requirements vary (check specific package details)'

    ],
  },
  {
    _id: "prod0014",
    name: "Rlaarlo AM-X12 1:12 Brushless Buggy (Carbon Fiber)",
    brand: "Rlaarlo",
    color: "Blue",
    modelCode: "AMX12",
    scale: "1:12",
    OutOfStock: false,
    price: 27499,
    slug: "rlaarlo-am-x12-1-12-brushless-buggy",
    media: [
      { type: "image", url: "/products/Brand/Rlaarlo/scale/1-12/Buggy/1.jpg" },
      { type: "image", url: "/products/Brand/Rlaarlo/scale/1-12/Buggy/2.jpg" },
      { type: "image", url: "/products/Brand/Rlaarlo/scale/1-12/Buggy/3.jpg" },
      { type: "image", url: "/products/Brand/Rlaarlo/scale/1-12/Buggy/4.jpg" },
      { type: "image", url: "/products/Brand/Rlaarlo/scale/1-12/Buggy/5.jpg" },
      { type: "image", url: "/products/Brand/Rlaarlo/scale/1-12/Buggy/6.jpg" },
      { type: "image", url: "/products/Brand/Rlaarlo/scale/1-12/Buggy/7.jpg" },
      { type: "image", url: "/products/Brand/Rlaarlo/scale/1-12/Buggy/8.jpg" },

    ],
    socialLinks: {
      instagram: "https://instagram.com/rcmegaofficial",
      facebook: "https://facebook.com/rcmegaofficial",
      youtube: "https://youtube.com/@rcmegaofficial",
    },
    technicalSpecs: [
      'Model Number: Rlaarlo AM-X12',
      'Scale: 1/12',
      'Top Speed: 80km/h on 2S battery, up to 100km/h on 3S battery',
      'Control Distance: 150 meters (approx.)',
      'Weight: 2300g',
      'Motor: 2847-3200KV brushless motor',
      'ESC: 45A ESC with cooling fan',
      'Servo: 3.5 KG torque 3-wire steering servo',
      'Differentials: All-metal differentials and drive shafts',
      'Chassis: Carbon fibre reinforced chassis with shock towers',
      'Tires: High-performance rubber off-road tires',
      'Body Shell: Lightweight composite body',
      'Battery Requirements: Includes a 2S (7.4V 2800mAh) battery; Remote – requires 2 AA batteries (not included)'

    ],
  },
  {
    _id: "prod0015",
    name: "Rlaarlo ROG1 1:14 Scale Brushless RTR Monster Truck",
    brand: "Rlaarlo",
    color: "Red/Black",
    modelCode: "ROG1",
    scale: "1:14",
    OutOfStock: false,
    price: 22499,
    slug: "rlaarlo-rog1-1-14-scale-brushless-rtr-monster-truck",
    media: [
      { type: "image", url: "/products/Brand/Rlaarlo/scale/1-14/rtrmonstertruck/1.jpg" },
      { type: "image", url: "/products/Brand/Rlaarlo/scale/1-14/rtrmonstertruck/2.jpg" },
      { type: "image", url: "/products/Brand/Rlaarlo/scale/1-14/rtrmonstertruck/3.jpg" },
      { type: "image", url: "/products/Brand/Rlaarlo/scale/1-14/rtrmonstertruck/4.jpg" },
      { type: "image", url: "/products/Brand/Rlaarlo/scale/1-14/rtrmonstertruck/5.jpg" },
      { type: "image", url: "/products/Brand/Rlaarlo/scale/1-14/rtrmonstertruck/6.jpg" },
      { type: "image", url: "/products/Brand/Rlaarlo/scale/1-14/rtrmonstertruck/7.jpg" },
      { type: "image", url: "/products/Brand/Rlaarlo/scale/1-14/rtrmonstertruck/8.jpg" },
      { type: "image", url: "/products/Brand/Rlaarlo/scale/1-14/rtrmonstertruck/9.jpg" },
      { type: "image", url: "/products/Brand/Rlaarlo/scale/1-14/rtrmonstertruck/10.jpg" },
      { type: "image", url: "/products/Brand/Rlaarlo/scale/1-14/rtrmonstertruck/11.jpg" },
      { type: "image", url: "/products/Brand/Rlaarlo/scale/1-14/rtrmonstertruck/12.jpg" },

    ],
    socialLinks: {
      instagram: "https://instagram.com/rcmegaofficial",
      facebook: "https://facebook.com/rcmegaofficial",
      youtube: "https://youtube.com/@rcmegaofficial",
    },
    technicalSpecs: [
      'Model Number: Rlaarlo ROG1',
      'Scale: 1/14',
      'Top Speed: 35km/h',
      'Control Distance: 100 meters',
      'Weight: 3000g',
      'Motor: Brushless motor (approx. 2500KV)',
      'ESC: 35A brushless ESC',
      'Servo: 15g digital servo',
      'Differentials: Full metal differential system',
      'Chassis: All-metal construction',
      'Tires: Heavy-duty off-road tires',
      'Body Shell: Metal body shell',
      'Battery Requirements: Battery included; Remote – requires batteries (specifics vary)'
    ],
  },

  {
    _id: "prod0030",
    name: "MJX Hyper Go H12Y 1/12 Scale RC Car High-Torque 3650 Brushless BLDC Motor Aluminum Shell (Black)",
    brand: "MJX",
    color: "Black",
    modelCode: "H12Y",
    scale: "1:12",
    OutOfStock: false,
    price: 20500,
    slug: "mjx-hyper-go-h12y-1-12-scale-rc-car-high-torque-3650-brushless-bldc-motor-aluminum-shell",
    media: [
      { type: "image", url: "/products/Brand/MJX/scale/1-12/H12Y/H12Y_01.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-12/H12Y/H12Y_02.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-12/H12Y/H12Y_03.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-12/H12Y/H12Y_04.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-12/H12Y/H12Y_05.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-12/H12Y/H12Y_06.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-12/H12Y/H12Y_07.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-12/H12Y/H12Y_08.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-12/H12Y/H12Y_09.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-12/H12Y/H12Y_10.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-12/H12Y/H12Y_12.jpg" },

    ],
    socialLinks: {
      instagram: "https://instagram.com/rcmegaofficial",
      facebook: "https://facebook.com/rcmegaofficial",
      youtube: "https://youtube.com/@rcmegaofficial",
    },
    technicalSpecs: [
      'Model Number: MJX Hyper Go H12Y',
      'Scale: 1/12',
      'Top Speed: Not specified (designed for low-speed crawling; estimated ~8km/h)',
      'Control Distance: Not specified (typically around 100 meters for similar crawlers)',
      'Weight: Not specified',
      'Motor: Brushless Sensorless Motor',
      'ESC: Sensorless ESC (details not specified)',
      'Servo: Not specified (assumed standard digital servo)',
      'Differentials: Not specified (likely open differentials for 4WD)',
      'Chassis: Reinforced 4WD crawler chassis',
      'Tires: Off-road crawler tires',
      'Body Shell: Durable plastic body',
      'Battery Requirements: Likely includes a 2S LiPo battery (e.g., 7.4V 2200mAh) with RTR setup; remote requires 2 AA batteries (not included)'
    ],
  },

  {
    _id: "prod0016",
    name: "MJX Hyper Go H12Y+ 1/12 Scale RC Car High-Torque 3650 Brushless BLDC Motor Aluminum Shell (Yellow)",
    brand: "MJX",
    color: "Yellow",
    modelCode: "H12Y+",
    scale: "1:12",
    OutOfStock: false,
    price: 22500,
    slug: "mjx-hyper-go-h12y-pluse-1-12-scale-rc-car-high-torque-3650-brushless-bldc-motor-aluminum-shell",
    media: [
      { type: "image", url: "/products/Brand/MJX/scale/1-12/H12Y+/h12YPlus_01.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-12/H12Y+/H12YPlus_02.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-12/H12Y+/H12YPlus_03.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-12/H12Y+/H12YPlus_04.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-12/H12Y+/H12YPlus_05.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-12/H12Y+/H12YPlus_06.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-12/H12Y+/H12YPlus_07.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-12/H12Y+/H12YPlus_08.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-12/H12Y+/H12YPlus_09.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-12/H12Y+/H12YPlus_10.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-12/H12Y+/H12YPlus_11.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-12/H12Y+/H12YPlus_12.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-12/H12Y+/H12YPlus_13.jpg" },
      { type: "image", url: "/products/Brand/MJX/scale/1-12/H12Y+/H12YPlus_14.jpg" },
    ],
    socialLinks: {
      instagram: "https://instagram.com/rcmegaofficial",
      facebook: "https://facebook.com/rcmegaofficial",
      youtube: "https://youtube.com/@rcmegaofficial",
    },
    technicalSpecs: [
      'Model Number: MJX Hyper Go H12Y',
      'Scale: 1/12',
      'Top Speed: Not specified (designed for low-speed crawling; estimated ~8km/h)',
      'Control Distance: Not specified (typically around 100 meters for similar crawlers)',
      'Weight: Not specified',
      'Motor: Brushless Sensorless Motor',
      'ESC: Sensorless ESC (details not specified)',
      'Servo: Not specified (assumed standard digital servo)',
      'Differentials: Not specified (likely open differentials for 4WD)',
      'Chassis: Reinforced 4WD crawler chassis',
      'Tires: Off-road crawler tires',
      'Body Shell: Durable plastic body',
      'Battery Requirements: Likely includes a 2S LiPo battery (e.g., 7.4V 2200mAh) with RTR setup; remote requires 2 AA batteries (not included)'
    ],
  },

  {
    _id: "prod0017",
    name: "MNRC MN82S RC Crawler 1/12 Scale 2.4G 4WD Off-Road",
    brand: "MNRC",
    color: "Grey",
    modelCode: "MN82S",
    scale: "1:12",
    OutOfStock: true,
    price: 10499,
    slug: "mnrc-mn82s-rc-crawler-1-12-scale-2-4g-4wd-off-road",
    media: [
      { type: "image", url: "/products/Brand/MNRC/scale/1-12/MN82S/MN82Simage1.jpeg" },
      { type: "image", url: "/products/Brand/MNRC/scale/1-12/MN82S/MN82Simage2.jpeg" },
      { type: "image", url: "/products/Brand/MNRC/scale/1-12/MN82S/MN82Simage3.jpeg" },
      { type: "image", url: "/products/Brand/MNRC/scale/1-12/MN82S/MN82Simage4.jpeg" },
      { type: "image", url: "/products/Brand/MNRC/scale/1-12/MN82S/MN82Simage5.jpeg" },
      { type: "image", url: "/products/Brand/MNRC/scale/1-12/MN82S/MN82Simage7.jpeg" },
      { type: "image", url: "/products/Brand/MNRC/scale/1-12/MN82S/MN82Simage8.jpeg" },
      { type: "image", url: "/products/Brand/MNRC/scale/1-12/MN82S/MN82Simage9.jpeg" },

    ],
    socialLinks: {
      instagram: "https://instagram.com/rcmegaofficial",
      facebook: "https://facebook.com/rcmegaofficial",
      youtube: "https://youtube.com/@rcmegaofficial",
    },
    technicalSpecs: [
      'Model Number: MNRC MN82S',
      'Scale: 1/12',
      'Top Speed: 30km/h',
      'Control Distance: 2.4G system, approx. 150 meters',
      'Weight: 1400g',
      'Motor: 550 brushed motor',
      'ESC: 30A brushed ESC',
      'Servo: Standard digital servo',
      'Differentials: Open differential system on all 4 wheels',
      'Chassis: High-impact ABS plastic chassis with reinforced suspension',
      'Tires: All-terrain rubber tires',
      'Body Shell: Toyota LC79 styled ABS plastic body',
      'Battery Requirements: Includes a 7.2V 1500mAh NiMH battery; Remote – requires 2 AA batteries (not included)',
    ]
  },

  {
    _id: "prod0018",
    name: "MNRC MN82 RTR 1/12 2.4G 4WD RC Car TOYOTA Land Cruiser LC79 Rock Crawler India",
    brand: "MNRC",
    color: "Red",
    modelCode: "MN82",
    scale: "1:12",
    OutOfStock: false,
    price: 10499,
    slug: "mnrc-mn82-rtr-1-12-2-4g-4wd-rc-car-toyota-land-cruiser-lc79",
    media: [
      { type: "image", url: "/products/Brand/MNRC/scale/1-12/MN82/MN82rtr1.jpeg" },
      { type: "image", url: "/products/Brand/MNRC/scale/1-12/MN82/MN82rtr2.jpeg" },
      { type: "image", url: "/products/Brand/MNRC/scale/1-12/MN82/MN82rtr3.jpg" },
      { type: "image", url: "/products/Brand/MNRC/scale/1-12/MN82/MN82rtr4.jpg" },
      { type: "image", url: "/products/Brand/MNRC/scale/1-12/MN82/MN82rtr5.jpg" },
      { type: "image", url: "/products/Brand/MNRC/scale/1-12/MN82/MN82rtr6.jpg" },
      { type: "image", url: "/products/Brand/MNRC/scale/1-12/MN82/MN82rtr7.jpg" },
      { type: "image", url: "/products/Brand/MNRC/scale/1-12/MN82/MN82rtr8.jpg" },
      { type: "image", url: "/products/Brand/MNRC/scale/1-12/MN82/MN82rtr9.jpg" },
      { type: "image", url: "/products/Brand/MNRC/scale/1-12/MN82/MN82rtr10.jpeg" },
    ],
    socialLinks: {
      instagram: "https://instagram.com/rcmegaofficial",
      facebook: "https://facebook.com/rcmegaofficial",
      youtube: "https://youtube.com/@rcmegaofficial",
    },
    technicalSpecs: [
      'Model Number: MNRC MN82',
      'Scale: 1/12',
      'Top Speed: 30km/h',
      'Control Distance: 2.4G system, approx. 150 meters',
      'Weight: 1400g',
      'Motor: 550 brushed motor',
      'ESC: 30A brushed ESC',
      'Servo: Standard digital servo',
      'Differentials: Open differential system on all 4 wheels',
      'Chassis: High-impact ABS plastic chassis with reinforced suspension',
      'Tires: All-terrain rubber tires',
      'Body Shell: Toyota LC79 styled ABS plastic body',
      'Battery Requirements: Includes a 7.2V 1500mAh NiMH battery; Remote – requires 2 AA batteries (not included)'

    ]
  },
  {
    _id: "prod0019",
    name: "RGT EX86130 PRO RUNNER 4X4 RC Rock Crawler 1/10 Scale Electric Car - Brushed 3S - 6 Channel",
    brand: "RGT",
    color: "Red/Blue",
    modelCode: "EX86130",
    scale: "1:10",
    OutOfStock: false,
    price: 41999,
    slug: "rgt-ex86130-pro-runner-4x4-rc-rock-crawler-1-10-scale-electric-car-brushed-3s-6-channel",
    media: [
      { type: "image", url: "/products/Brand/RGT/scale/1-10/ex86130/red/ex86130image1.jpeg" },
      { type: "image", url: "/products/Brand/RGT/scale/1-10/ex86130/red/ex86130image3.jpeg" },
      { type: "image", url: "/products/Brand/RGT/scale/1-10/ex86130/red/ex86130image4.jpeg" },
      { type: "image", url: "/products/Brand/RGT/scale/1-10/ex86130/red/ex86130image7.jpeg" },
      { type: "image", url: "/products/Brand/RGT/scale/1-10/ex86130/blue/ex86130image2.jpeg" },
      { type: "image", url: "/products/Brand/RGT/scale/1-10/ex86130/blue/ex86130image5.jpeg" },
      { type: "image", url: "/products/Brand/RGT/scale/1-10/ex86130/blue/ex86130image6.jpeg" },
      { type: "image", url: "/products/Brand/RGT/scale/1-10/ex86130/blue/ex86130image8.jpeg" },
    ],
    socialLinks: {
      instagram: "https://instagram.com/rcmegaofficial",
      facebook: "https://facebook.com/rcmegaofficial",
      youtube: "https://youtube.com/@rcmegaofficial",
    },
    technicalSpecs: [
      'Model Number: RGT EX86130 PRO Runner',
      'Scale: 1/10',
      'Top Speed: 30km/h',
      'Control Distance: 150 meters',
      'Weight: 2800g',
      'Motor: Brushed motor designed for 2-speed operation',
      'ESC: Integrated 2-speed electronic speed controller',
      'Servo: Standard digital servo',
      'Differentials: Open differential system on all 4 wheels',
      'Chassis: Reinforced plastic chassis with metal components for durability',
      'Tires: All-terrain rubber tires',
      'Body Shell: Durable plastic body shell',
      'Battery Requirements: Includes a 2S LiPo battery (approx. 7.4V, 2200mAh); Remote control requires 2 AA batteries (not included)'
    ]
  },
  {
    _id: "prod0020",
    name: "1:10 RGT 136100 PRO (SHOOTER) Brushless Crawler",
    brand: "RGT",
    color: "Blue/Pink",
    modelCode: "136100 PRO (SHOOTER)",
    scale: "1:10",
    OutOfStock: false,
    price: 41999,
    slug: "rgt-136100-pro-shooter-brushless-crawler-1-10-scale",
    media: [
      { type: "image", url: "/products/Brand/RGT/scale/1-10/136100/blue/b1.jpg" },
      { type: "image", url: "/products/Brand/RGT/scale/1-10/136100/blue/b2.jpg" },
      { type: "image", url: "/products/Brand/RGT/scale/1-10/136100/blue/b3.jpg" },
      { type: "image", url: "/products/Brand/RGT/scale/1-10/136100/blue/b4.jpg" },
      { type: "image", url: "/products/Brand/RGT/scale/1-10/136100/pink/p1.jpg" },
      { type: "image", url: "/products/Brand/RGT/scale/1-10/136100/pink/p2.jpg" },
      { type: "image", url: "/products/Brand/RGT/scale/1-10/136100/pink/p3.jpg" },
      { type: "image", url: "/products/Brand/RGT/scale/1-10/136100/pink/p4.jpg" },
      { type: "image", url: "/products/Brand/RGT/scale/1-10/136100/pink/p5.jpg" },
      { type: "image", url: "/products/Brand/RGT/scale/1-10/136100/pink/p6.jpg" },
      { type: "image", url: "/products/Brand/RGT/scale/1-10/136100/pink/p7.jpg" },
      { type: "image", url: "/products/Brand/RGT/scale/1-10/136100/pink/p8.jpg" },
      { type: "image", url: "/products/Brand/RGT/scale/1-10/136100/pink/p9.jpg" },
      { type: "image", url: "/products/Brand/RGT/scale/1-10/136100/pink/p10.jpg" },
      { type: "image", url: "/products/Brand/RGT/scale/1-10/136100/pink/p11.jpg" },
      { type: "image", url: "/products/Brand/RGT/scale/1-10/136100/pink/p12.jpg" },
      { type: "image", url: "/products/Brand/RGT/scale/1-10/136100/pink/p13.jpg" },
      { type: "image", url: "/products/Brand/RGT/scale/1-10/136100/pink/p14.jpg" },
      { type: "image", url: "/products/Brand/RGT/scale/1-10/136100/pink/p15.jpg" },
      { type: "image", url: "/products/Brand/RGT/scale/1-10/136100/pink/p16.jpg" },

    ],
    socialLinks: {
      instagram: "https://instagram.com/rcmegaofficial",
      facebook: "https://facebook.com/rcmegaofficial",
      youtube: "https://youtube.com/@rcmegaofficial",
    },
    technicalSpecs: [
      'Model Number: RGT 136100 PRO (SHOOTER）Brushless Crawler',
      'Scale: 1/10',
      'Top Speed: 30km/h',
      'Control Distance: 150 meters',
      'Weight: 2800g',
    ]
  },
  {
    _id: "prod0021",
    name: "LDRC LD1899 GTR R34 1/18 Scale High Speed RWD RC Drift Car RTR- India",
    brand: "LDRC",
    color: "Blue/Silver",
    modelCode: "LD1899",
    scale: "1:18",
    OutOfStock: false,
    price: 9500,
    slug: "ldrc-ld1899-gtr-r34-1-18-scale-high-speed-rwd-rc-drift-car-rtr-india",
    media: [
      { type: "image", url: "/products/Brand/LDRC/scale/1-18/LD1899/blue/LD1899image1.jpeg" },
      { type: "image", url: "/products/Brand/LDRC/scale/1-18/LD1899/blue/LD1899image1.jpg" },
      { type: "image", url: "/products/Brand/LDRC/scale/1-18/LD1899/blue/LD1899image2.png" },
      { type: "image", url: "/products/Brand/LDRC/scale/1-18/LD1899/blue/LD1899image4.jpeg" },
      { type: "image", url: "/products/Brand/LDRC/scale/1-18/LD1899/blue/LD1899image5.jpeg" },
      { type: "image", url: "/products/Brand/LDRC/scale/1-18/LD1899/blue/LD1899image6.jpeg" },
      { type: "image", url: "/products/Brand/LDRC/scale/1-18/LD1899/blue/LD1899image10.png" },
      { type: "image", url: "/products/Brand/LDRC/scale/1-18/LD1899/blue/LD1899image11.jpg" },
      { type: "image", url: "/products/Brand/LDRC/scale/1-18/LD1899/blue/LD1899image12.png" },
      { type: "image", url: "/products/Brand/LDRC/scale/1-18/LD1899/silver/LD1899image.jpeg" },
      { type: "image", url: "/products/Brand/LDRC/scale/1-18/LD1899/silver/LD1899image2.png" },
      { type: "image", url: "/products/Brand/LDRC/scale/1-18/LD1899/silver/LD1899image6.jpeg" },
      { type: "image", url: "/products/Brand/LDRC/scale/1-18/LD1899/silver/LD1899image6.jpeg" },
      { type: "image", url: "/products/Brand/LDRC/scale/1-18/LD1899/silver/LD1899image7.jpeg" },
      { type: "image", url: "/products/Brand/LDRC/scale/1-18/LD1899/silver/LD1899image8.jpeg" },
      { type: "image", url: "/products/Brand/LDRC/scale/1-18/LD1899/silver/LD1899image9.jpeg" },
      { type: "image", url: "/products/Brand/LDRC/scale/1-18/LD1899/silver/LD1899image10.png" },
      { type: "image", url: "/products/Brand/LDRC/scale/1-18/LD1899/silver/LD1899image11.jpg" },
      { type: "image", url: "/products/Brand/LDRC/scale/1-18/LD1899/silver/LD1899image12.png" },
      { type: "image", url: "/products/Brand/LDRC/scale/1-18/LD1899/silver/LD1899image13.jpeg" },
      { type: "image", url: "/products/Brand/LDRC/scale/1-18/LD1899/silver/LD1899image112.jpeg" }

    ],
    socialLinks: {
      instagram: "https://instagram.com/rcmegaofficial",
      facebook: "https://facebook.com/rcmegaofficial",
      youtube: "https://youtube.com/@rcmegaofficial",
    },
    technicalSpecs: [
      'Model Number: LDRC LD1899 GTR R34',
      'Scale: 1/18',
      'Top Speed: 60km/h',
      'Control Distance: Approx. 150 meters',
      'Weight: ~750g',
      'Motor: Brushed motor',
      'ESC: 30A brushed ESC',
      'Servo: Standard digital servo',
      'Differentials: Rear-wheel drive (single rear differential)',
      'Chassis: Lightweight injection-molded plastic chassis',
      'Tires: Drift tires with low-grip compound',
      'Body Shell: High-quality polycarbonate body styled as the GTR R34',
      'Battery Requirements: Includes a 7.2V rechargeable battery (RTR); Remote – requires 2 AA batteries (not included)'

    ]
  },
]


// Create sample spare parts data with product _id references
export const spareParts: SparePart[] = [
  {
    _id: "sp001",
    slug: "fms-hummer-h1-wheel-set",
    name: "FMS Hummer H1 Wheel Set (4pcs)",
    sku: "FMS-H1-WHL-001",
    price: 4999,
    stock: 15,
    outOfStock: false,
    categories: ["Wheels", "Exterior"],
    compatibleProductIds: ["prod001"], // Reference to FMS Hummer
    brand: "FMS",
    description: "Original replacement wheel set for FMS 1:12 Hummer H1 Alpha RS. Includes all four wheels with tires mounted.",
    media: [
      { type: "image", url: "/products/SpareParts/FMS/WheelSets/hummer-wheel-set.jpg" }
    ],
    weight: 250,
    dimensions: {
      length: 78,
      width: 78, 
      height: 25,
      unit: "mm"
    }
  },
  {
    _id: "sp002",
    slug: "fms-hummer-h1-motor-370-brushed",
    name: "FMS Hummer H1 Motor 370 Brushed",
    sku: "FMS-H1-MTR-370",
    price: 2999,
    stock: 10,
    outOfStock: false,
    categories: ["Motors", "Electronics"],
    compatibleProductIds: ["prod001"], // Reference to FMS Hummer
    brand: "FMS",
    description: "370 size brushed replacement motor for FMS 1:12 Hummer H1 Alpha RS.",
    media: [
      { type: "image", url: "/products/SpareParts/FMS/Motors/370-brushed-motor.jpg" }
    ],
    weight: 75,
    dimensions: {
      length: 30,
      width: 20,
      height: 20,
      unit: "mm"
    }
  },
  {
    _id: "sp003",
    slug: "rgt-136100-pro-brushless-motor",
    name: "RGT 136100 PRO Brushless Motor",
    sku: "RGT-136100-MTR-BL",
    price: 5999,
    stock: 8,
    outOfStock: false,
    categories: ["Motors", "Electronics", "Brushless"],
    compatibleProductIds: ["prod002"], // Reference to RGT crawler
    brand: "RGT",
    description: "Replacement brushless motor for RGT 136100 PRO (SHOOTER) crawler.",
    media: [
      { type: "image", url: "/products/SpareParts/RGT/Motors/brushless-motor.jpg" }
    ],
    weight: 120,
    dimensions: {
      length: 45,
      width: 36,
      height: 36,
      unit: "mm"
    }
  },
  {
    _id: "sp004",
    slug  : "rgt-136100-pro-body-shell-blue",
    name: "RGT Crawler Body Shell - Blue",
    sku: "RGT-136100-BODY-BLUE",
    price: 7999,
    stock: 5,
    outOfStock: false,
    categories: ["Body Shells", "Exterior"],
    compatibleProductIds: ["prod002"], // Reference to RGT crawler
    brand: "RGT",
    description: "Blue replacement body shell for RGT 136100 PRO (SHOOTER) crawler, complete with decals.",
    media: [
      { type: "image", url: "/products/SpareParts/RGT/BodyShells/136100-blue-body.jpg" }
    ],
    weight: 350,
    dimensions: {
      length: 480,
      width: 220,
      height: 180,
      unit: "mm"
    }
  },
  {
    _id: "sp005",
    slug: "rgt-136100-pro-body-shell-pink",
    name: "RGT Crawler Body Shell - Pink",
    sku: "RGT-136100-BODY-PINK",
    price: 7999,
    stock: 5,
    outOfStock: false,
    categories: ["Body Shells", "Exterior"],
    compatibleProductIds: ["prod002"], // Reference to RGT crawler
    brand: "RGT",
    description: "Pink replacement body shell for RGT 136100 PRO (SHOOTER) crawler, complete with decals.",
    media: [
      { type: "image", url: "/products/SpareParts/RGT/BodyShells/136100-pink-body.jpg" }
    ],
    weight: 350,
    dimensions: {
      length: 480,
      width: 220,
      height: 180,
      unit: "mm"
    }
  },
  {
    _id: "sp006",
    slug: "ldrc-ld1899-gtr-r34-body-shell-blue",
    name: "LDRC LD1899 GTR R34 Body Shell - Blue",
    sku: "LDRC-LD1899-BODY-BLUE",
    price: 2999,
    stock: 12,
    outOfStock: false,
    categories: ["Body Shells", "Exterior"],
    compatibleProductIds: ["prod003"], // Reference to LDRC drift car
    brand: "LDRC",
    description: "Blue polycarbonate body shell for the LDRC LD1899 GTR R34 drift car.",
    media: [
      { type: "image", url: "/products/SpareParts/LDRC/BodyShells/ld1899-blue-body.jpg" }
    ],
    weight: 120,
    dimensions: {
      length: 250,
      width: 120,
      height: 70,
      unit: "mm"
    }
  },
  {
    _id: "sp007",
    slug: "ldrc-ld1899-gtr-r34-body-shell-silver",
    name: "LDRC LD1899 GTR R34 Body Shell - Silver",
    sku: "LDRC-LD1899-BODY-SILVER",
    price: 2999,
    stock: 10,
    outOfStock: false,
    categories: ["Body Shells", "Exterior"],
    compatibleProductIds: ["prod003"], // Reference to LDRC drift car
    brand: "LDRC",
    description: "Silver polycarbonate body shell for the LDRC LD1899 GTR R34 drift car.",
    media: [
      { type: "image", url: "/products/SpareParts/LDRC/BodyShells/ld1899-silver-body.jpg" }
    ],
    weight: 120,
    dimensions: {
      length: 250,
      width: 120,
      height: 70,
      unit: "mm"
    }
  },
  {
    _id: "sp008",
    slug: "ldrc-ld1899-drift-tires",
    name: "LDRC LD1899 Drift Tire Set (4pcs)",
    sku: "LDRC-LD1899-TIRE-DRIFT",
    price: 1499,
    stock: 20,
    outOfStock: false,
    categories: ["Wheels", "Tires", "Exterior"],
    compatibleProductIds: ["prod003"], // Reference to LDRC drift car
    brand: "LDRC",
    description: "Set of 4 replacement drift tires for LDRC LD1899 GTR R34 drift car. Low-grip compound for optimal drift performance.",
    media: [
      { type: "image", url: "/products/SpareParts/LDRC/Tires/ld1899-drift-tires.jpg" }
    ],
    weight: 100,
    dimensions: {
      length: 60,
      width: 60,
      height: 25,
      unit: "mm"
    }
  },
  {
    _id: "sp009",
    slug: "universal-rc-battery-7-2v-1800mah",
    name: "Universal RC Battery 7.2V 1800mAh",
    sku: "BATT-7.2V-1800MAH",
    price: 1999,
    stock: 30,
    outOfStock: false,
    categories: ["Batteries", "Electronics", "Power"],
    compatibleProductIds: ["prod001", "prod003"], // Compatible with multiple products
    brand: "Generic",
    description: "Universal 7.2V 1800mAh NiMH battery pack compatible with various RC models. Features standard Tamiya connector.",
    media: [
      { type: "image", url: "/products/SpareParts/Batteries/7.2v-1800mah.jpg" }
    ],
    weight: 180,
    dimensions: {
      length: 100,
      width: 40,
      height: 20,
      unit: "mm"
    }
  },
  {
    _id: "sp010",
    slug: "universal-rc-battery-7-4v-2200mah",
    name: "Universal RC Car Charger",
    sku: "CHRGR-UNIV-1",
    price: 1499,
    stock: 25,
    outOfStock: false,
    categories: ["Chargers", "Electronics", "Power"],
    compatibleProductIds: ["prod001", "prod002", "prod003"], // Compatible with all products
    brand: "Generic",
    description: "Universal RC car battery charger supporting NiMH and LiPo batteries. Compatible with most RC vehicles.",
    media: [
      { type: "image", url: "/products/SpareParts/Chargers/universal-charger.jpg" }
    ],
    weight: 150,
    dimensions: {
      length: 120,
      width: 70,
      height: 30,
      unit: "mm"
    }
  }
];



// Create sample accessories data
export const accessories: Accessory[] = [
  {
    _id: "acc001",
    slug: "rc-display-stand-universal-1-10-scale",
    name: "RC Display Stand - Universal (1:10 Scale)",
    sku: "DISPLAY-110-UNIV",
    price: 1299,
    stock: 25,
    outOfStock: false,
    categories: ["Display", "Storage"],
    compatibleProductIds: ["prod002"], // Compatible with RGT crawler
    brand: "Generic",
    description: "Transparent acrylic display stand for 1:10 scale RC vehicles. Perfect for showcasing your model when not in use.",
    media: [
      { type: "image", url: "/products/Accessories/DisplayStands/acrylic-display-stand-110.jpg" }
    ],
    weight: 150,
    dimensions: {
      length: 300,
      width: 200,
      height: 100,
      unit: "mm"
    }
  },
  {
    _id: "acc002",
    name: "RC Display Stand - Universal (1:12 Scale)",
    slug: "rc-display-stand-universal-1-12-scale",
    sku: "DISPLAY-112-UNIV",
    price: 1199,
    stock: 20,
    outOfStock: false,
    categories: ["Display", "Storage"],
    compatibleProductIds: ["prod001"], // Compatible with FMS Hummer
    brand: "Generic",
    description: "Transparent acrylic display stand for 1:12 scale RC vehicles. Perfect for showcasing your model when not in use.",
    media: [
      { type: "image", url: "/products/Accessories/DisplayStands/acrylic-display-stand-112.jpg" }
    ],
    weight: 130,
    dimensions: {
      length: 280,
      width: 180,
      height: 90,
      unit: "mm"
    }
  },
  {
    _id: "acc003",
    slug: "rc-display-stand-universal-1-18-scale",
    name: "RC Display Stand - Universal (1:18 Scale)",
    sku: "DISPLAY-118-UNIV",
    price: 999,
    stock: 30,
    outOfStock: false,
    categories: ["Display", "Storage"],
    compatibleProductIds: ["prod003"], // Compatible with LDRC drift car
    brand: "Generic",
    description: "Transparent acrylic display stand for 1:18 scale RC vehicles. Perfect for showcasing your model when not in use.",
    media: [
      { type: "image", url: "/products/Accessories/DisplayStands/acrylic-display-stand-118.jpg" }
    ],
    weight: 100,
    dimensions: {
      length: 240,
      width: 140,
      height: 80,
      unit: "mm"
    }
  },
  {
    _id: "acc004",
    slug: "carrying-case-for-1-10-scale-crawler",
    name: "Carrying Case for 1:10 Scale Crawler",
    sku: "CASE-110-CRWLR",
    price: 3499,
    stock: 15,
    outOfStock: false,
    categories: ["Storage", "Transport", "Protection"],
    compatibleProductIds: ["prod002"], // Compatible with RGT crawler
    brand: "RC Mega",
    description: "Padded carrying case designed specifically for 1:10 scale crawler models. Features compartments for accessories and a shoulder strap.",
    media: [
      { type: "image", url: "/products/Accessories/Cases/case-110-crawler.jpg" }
    ],
    weight: 800,
    dimensions: {
      length: 550,
      width: 350,
      height: 250,
      unit: "mm"
    }
  },
  {
    _id: "acc005",
    slug: "carrying-case-for-1-12-scale-models",
    name: "Carrying Case for 1:12 Scale Models",
    sku: "CASE-112-UNIV",
    price: 2999,
    stock: 12,
    outOfStock: false,
    categories: ["Storage", "Transport", "Protection"],
    compatibleProductIds: ["prod001"], // Compatible with FMS Hummer
    brand: "RC Mega",
    description: "Padded carrying case designed for 1:12 scale RC vehicles. Features foam inserts and compartments for tools and accessories.",
    media: [
      { type: "image", url: "/products/Accessories/Cases/case-112-universal.jpg" }
    ],
    weight: 700,
    dimensions: {
      length: 500,
      width: 300,
      height: 200,
      unit: "mm"
    }
  },
  {
    _id: "acc006",
    slug: "drift-car-carrying-case-1-18-scale",
    name: "Drift Car Carrying Case (1:18 Scale)",
    sku: "CASE-118-DRIFT",
    price: 1999,
    stock: 18,
    outOfStock: false,
    categories: ["Storage", "Transport", "Protection"],
    compatibleProductIds: ["prod003"], // Compatible with LDRC drift car
    brand: "RC Mega",
    description: "Compact carrying case specially designed for 1:18 scale drift cars. Includes spaces for spare tires and tools.",
    media: [
      { type: "image", url: "/products/Accessories/Cases/case-118-drift.jpg" }
    ],
    weight: 500,
    dimensions: {
      length: 400,
      width: 250,
      height: 150,
      unit: "mm"
    }
  },
  {
    _id: "acc007",
    slug: "led-light-kit-for-hummer-h1",
    name: "LED Light Kit for Hummer H1",
    sku: "LED-HUMMER-H1",
    price: 1899,
    stock: 20,
    outOfStock: false,
    categories: ["Lighting", "Electronics", "Upgrades"],
    compatibleProductIds: ["prod001"], // Compatible with FMS Hummer
    brand: "FMS",
    description: "Complete LED lighting kit for the FMS 1:12 Hummer H1. Includes headlights, taillights, and underbody lighting with control module.",
    media: [
      { type: "image", url: "/products/Accessories/Lighting/hummer-led-kit.jpg" }
    ],
    weight: 50,
    dimensions: {
      length: 100,
      width: 80,
      height: 20,
      unit: "mm"
    }
  },
  {
    _id: "acc008",
    slug: "led-light-kit-for-drift-cars",
    name: "LED Light Kit for Drift Cars",
    sku: "LED-DRIFT-118",
    price: 1499,
    stock: 25,
    outOfStock: false,
    categories: ["Lighting", "Electronics", "Upgrades"],
    compatibleProductIds: ["prod003"], // Compatible with LDRC drift car
    brand: "LDRC",
    description: "LED lighting kit for 1:18 scale drift cars. Includes realistic headlights, taillights, and brake lights that respond to throttle input.",
    media: [
      { type: "image", url: "/products/Accessories/Lighting/drift-led-kit.jpg" }
    ],
    weight: 30,
    dimensions: {
      length: 80,
      width: 60,
      height: 15,
      unit: "mm"
    }
  },
  {
    _id: "acc009",
    slug: "rc-scale-driver-figure-1-10",
    name: "RC Scale Driver Figure (1:10)",
    sku: "FIGURE-DRIVER-110",
    price: 999,
    stock: 30,
    outOfStock: false,
    categories: ["Scale Accessories", "Figures", "Realism"],
    compatibleProductIds: ["prod002"], // Compatible with RGT crawler
    brand: "Generic",
    description: "Realistic driver figure for 1:10 scale RC vehicles. Painted and ready to install for added realism.",
    media: [
      { type: "image", url: "/products/Accessories/Figures/driver-figure-110.jpg" }
    ],
    weight: 20,
    dimensions: {
      length: 50,
      width: 20,
      height: 80,
      unit: "mm"
    }
  },
  {
    _id: "acc010",
    slug: "magnetic-body-mount-kit",
    name: "Magnetic Body Mount Kit",
    sku: "MOUNT-MAG-UNIV",
    price: 1499,
    stock: 40,
    outOfStock: false,
    categories: ["Body Mounts", "Upgrades", "Tools"],
    compatibleProductIds: ["prod001", "prod002", "prod003"], // Compatible with all products
    brand: "Generic",
    description: "Universal magnetic body mount kit for RC vehicles. Makes removing and installing the body shell quick and easy without body clips.",
    media: [
      { type: "image", url: "/products/Accessories/BodyMounts/magnetic-mount-kit.jpg" }
    ],
    weight: 40,
    dimensions: {
      length: 60,
      width: 40,
      height: 10,
      unit: "mm"
    }
  },
  {
    _id: "acc011",
    slug: "rc-car-maintenance-tool-kit",
    name: "RC Car Maintenance Tool Kit",
    sku: "TOOL-KIT-RC-1",
    price: 1999,
    stock: 35,
    outOfStock: false,
    categories: ["Tools", "Maintenance"],
    compatibleProductIds: ["prod001", "prod002", "prod003"], // Compatible with all products
    brand: "RC Mega",
    description: "Complete tool kit for RC car maintenance. Includes hex drivers, nut drivers, screwdrivers, and pliers in a compact carrying case.",
    media: [
      { type: "image", url: "/products/Accessories/Tools/rc-tool-kit.jpg" }
    ],
    weight: 300,
    dimensions: {
      length: 200,
      width: 150,
      height: 50,
      unit: "mm"
    }
  },
  {
    _id: "acc012",
    slug: "waterproof-electronics-cover-kit-1-10-scale",
    name: "Waterproof Electronics Cover Kit (1:10 Scale)",
    sku: "COVER-WATERPROOF-110",
    price: 1299,
    stock: 20,
    outOfStock: true,
    categories: ["Protection", "Electronics", "Waterproofing"],
    compatibleProductIds: ["prod002"], // Compatible with RGT crawler
    brand: "RGT",
    description: "Silicone waterproof covers for electronic components. Perfect for protecting your 1:10 scale crawler during water crossings and muddy conditions.",
    media: [
      { type: "image", url: "/products/Accessories/Waterproofing/waterproof-covers-110.jpg" }
    ],
    weight: 60,
    dimensions: {
      length: 100,
      width: 80,
      height: 30,
      unit: "mm"
    }
  }
];

// Function to get accessories for a specific product by product _id
export function getAccessoriesForProduct(product_id: string): Accessory[] {
  return accessories.filter(accessory => accessory.compatibleProductIds.includes(product_id));
}

// Example of how to extend the Product interface to include accessories
export interface ProductWithAccessories extends ProductWithSpareParts {
  compatibleAccessories?: Accessory[];
}

// Function to further enrich products with their compatible accessories
export function enrichProductsWithAccessories(productsList: ProductWithSpareParts[]): ProductWithAccessories[] {
  return productsList.map(product => ({
    ...product,
    compatibleAccessories: getAccessoriesForProduct(product._id)
  }));
}

// Get accessory by _id
export function getAccessoryBy_id(accessory_id: string): Accessory | undefined {
  return accessories.find(accessory => accessory._id === accessory_id);
}


// Categories of accessories for filtering
export const accessoryCategories = Array.from(
  new Set(accessories.flatMap(accessory => accessory.categories))
);

// Function to get a complete product with both spare parts and accessories
export function getCompleteProductInfo(product_id: string): ProductWithAccessories | undefined {
  const product = getProductBy_id(product_id);
  if (!product) return undefined;
  
  const withSpareParts: ProductWithSpareParts = {
    ...product,
    compatibleSpareParts: getSparePartsForProduct(product_id)
  };
  
  const withAccessories: ProductWithAccessories = {
    ...withSpareParts,
    compatibleAccessories: getAccessoriesForProduct(product_id)
  };
  
  return withAccessories;
}

// Function to get spare parts for a specific product by product _id
export function getSparePartsForProduct(product_id: string): SparePart[] {
  return spareParts.filter(part => part.compatibleProductIds.includes(product_id));
}

// Example of how to extend the Product interface to include spare parts
export interface ProductWithSpareParts extends Product {
  compatibleSpareParts?: SparePart[];
}

// Function to enrich products with their compatible spare parts
export function enrichProductsWithSpareParts(productsList: Product[]): ProductWithSpareParts[] {
  return productsList.map(product => ({
    ...product,
    compatibleSpareParts: getSparePartsForProduct(product._id)
  }));
}

// Get product by _id
export function getProductBy_id(product_id: string): Product | undefined {
  return products.find(product => product._id === product_id);
}


// Get spare part by _id
export function getSparePartBy_id(sparePart_id: string): SparePart | undefined {
  return spareParts.find(part => part._id === sparePart_id);
}

// Categories of spare parts for filtering
export const sparePartCategories = Array.from(
  new Set(spareParts.flatMap(part => part.categories))
);



// Get spare part by slug
export function getSparePartBySlug(sparePartSlug: string): SparePart | undefined {
  return spareParts.find((part) => part.slug === sparePartSlug)
}

// Get accessory by slug
export function getAccessoryBySlug(accessorySlug: string): Accessory | undefined {
  return accessories.find((accessory) => accessory.slug === accessorySlug)
}

// Get product by slug
export function getProductBySlug(productSlug: string): Product | undefined {
  return products.find((product) => product.slug === productSlug)
}


export const brands = Array.from(new Set(products.map((product) => product.brand)))

export const brandLogos: { [key: string]: string } = {
  "Rlaarlo": "/products/Brand/Rlaarlo/logo/rlaarlo.png",
  "FSR": "/products/Brand/FSR/logo/images.png",
  "Losi": "/products/Brand/FMS/logo/fmslogo.svg",
  "FMS": "/products/Brand/FMS/logo/fmslogo.svg",
  "MJX Hyper Go": "/products/Brand/MJX/logo/mjxlogo.png",
  "Traxxas": "/products/Brand/traxxas/logo/traxxas-vector-logo-xs.png",
  "LDRC": "/products/Brand/LDRC/logo/ldrclogo.png",
  "MNRC": "/products/Brand/MNRC/logo/MN-Logo.png",
  "RGT": "/products/Brand/RGT/logo/top_bg_m.png",
};