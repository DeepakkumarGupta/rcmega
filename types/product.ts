export interface IDimensions {
    length: number;
    width: number;
    height: number;
    unit: "mm" | "cm" | "in";
}

export interface IMedia {
    type: "image" | "video" | "instagram";
    url: string;
    mediaId?: string;
}

export interface IProduct {
  _id: string
  id: string
  name: string
  sku: string
  description: string
  categories: string[]
  brand: string
  color: string
  modelCode: string
  scale: string
  stock: number
  OutOfStock: boolean
  price: number
  slug: string
  media:IMedia[]
  technicalSpecs: string[]
  weight: number
  dimensions: IDimensions
  discountPercentage?: number
  finalPrice?: number
}

export interface IAccessory {
    _id: string;
    name: string;
    slug: string;
    sku: string;
    price: number;
    stock: number;
    outOfStock: boolean;
    categories: string[];
    compatibleProductIds: string[];
    brand: string;
    description: string;
    media: IMedia[];
    weight: number;
    dimensions?: IDimensions;
}

export interface ISparePart {
    _id: string;
    name: string;
    slug: string;
    sku: string;
    price: number;
    stock: number;
    outOfStock: boolean;
    categories: string[];
    compatibleProductIds: string[];
    brand: string;
    description: string;
    media: IMedia[];
    weight: number;
    dimensions?: IDimensions;
}

export interface ICategoryAccessory {
    _id: string;
    name: string
    logo: string
  }

export interface IBrand {
    _id: string;
    name: string;
    logo: string;
}