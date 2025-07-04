
import { Product } from "../types/Product";

const PRODUCTS_API = "https://fakestoreapi.com/products";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(PRODUCTS_API);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const fetchProductById = async (productId: string): Promise<Product | null> => {
  try {
    const response = await fetch(`${PRODUCTS_API}/${productId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching product with id ${productId}:`, error);
    return null;
  }
};

export const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
  try {
    const response = await fetch(`${PRODUCTS_API}/category/${encodeURIComponent(category)}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching products in category ${category}:`, error);
    return [];
  }
};
