// import { Product, Accessory, SparePart } from "@/data/products";

import { IAccessory, IProduct, ISparePart } from "@/types/product";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:6500/api";

// Helper function to handle API responses
async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || `API responded with status ${response.status}`);
  }
  
  try {
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Failed to parse API response:", err);
    throw new Error("Invalid response from API");
  }
}

// Products API
export async function getProducts(): Promise<IProduct[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    const data = await handleResponse<IProduct[]>(response);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getProductBySlug(slug: string): Promise<IProduct | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/products/slug/${slug}`);
    return await handleResponse<IProduct>(response);
  } catch (error) {
    console.error(`Error fetching product with slug ${slug}:`, error);
    return null;
  }
}

export async function getProductById(id: string): Promise<IProduct | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    return await handleResponse<IProduct>(response);
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    return null;
  }
}

// Accessories API
export async function getAccessories(): Promise<IAccessory[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/accessories`);
    const data = await handleResponse<IAccessory[]>(response);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching accessories:", error);
    return [];
  }
}

export async function getAccessoryBySlug(slug: string): Promise<IAccessory | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/accessories/slug/${slug}`);
    return await handleResponse<IAccessory>(response);
  } catch (error) {
    console.error(`Error fetching accessory with slug ${slug}:`, error);
    return null;
  }
}

export async function getAccessoriesForProduct(productId: string): Promise<IAccessory[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/accessories?compatibleProductIds=${productId}`);
    const data = await handleResponse<IAccessory[]>(response);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error(`Error fetching accessories for product ${productId}:`, error);
    return [];
  }
}

// Spare Parts API
export async function getSpareParts(): Promise<ISparePart[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/spare-parts`);
    const data = await handleResponse<ISparePart[]>(response);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching spare parts:", error);
    return [];
  }
}

export async function getSparePartBySlug(slug: string): Promise<ISparePart | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/spare-parts/slug/${slug}`);
    return await handleResponse<ISparePart>(response);
  } catch (error) {
    console.error(`Error fetching spare part with slug ${slug}:`, error);
    return null;
  }
}

export async function getSparePartsForProduct(productId: string): Promise<ISparePart[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/spare-parts?compatibleProductIds=${productId}`);
    const data = await handleResponse<ISparePart[]>(response);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error(`Error fetching spare parts for product ${productId}:`, error);
    return [];
  }
}

// Combined product info
export async function getCompleteProductInfo(productId: string) {
  try {
    const [product, compatibleAccessories, compatibleSpareParts] = await Promise.all([
      getProductById(productId),
      getAccessoriesForProduct(productId),
      getSparePartsForProduct(productId)
    ]);

    if (!product) return null;

    return {
      ...product,
      compatibleAccessories: compatibleAccessories || [],
      compatibleSpareParts: compatibleSpareParts || []
    };
  } catch (error) {
    console.error(`Error fetching complete product info for ${productId}:`, error);
    return null;
  }
} 

export const getBrands = async () => {

  try {
    const res = await fetch(`${API_BASE_URL}/brands`);
    const data = await res.json()
    if (!res.ok) {
      throw new Error(data.message || "Failed to fetch brands");
    }else{
      return data.data;
    }
  } catch (error) {
    console.error("Error fetching brands:", error);
    return [];
  }
}