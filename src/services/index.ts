import { Item } from "@/types/Item";
import { Order } from "@/types/order";

/**
 * Fetches data from the specified API endpoint and returns it as JSON
 * @param url The API endpoint URL
 * @param options Optional fetch configuration options
 * @returns A promise that resolves to the parsed JSON data
 * @throws Will throw an error if the fetch fails or the response is not valid JSON
 */
async function fetchData<T>(
  url: string,
  method: string,
  options?: RequestInit
): Promise<T> {
  try {
    // Make the API request
    const response = await fetch(url, {
      method, // Default method
      headers: {
        "Content-Type": "application/json",
        // Add any other headers you need
      },
      ...options, // Spread any additional options passed
    });

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    // Parse and return the JSON data
    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw to allow handling by the caller
  }
}
const apiUrl =
  process.env.NEXT_PUBLIC_API_URL ?? "https://api.eayni.info/store/public";

/**
 * Fetches all marketplace/products from the API
 * @returns A promise that resolves to an array of categories
 * @throws Will throw an error if the fetch fails
 */
export const getAllItems = async (): Promise<Item[]> => {
  try {
    // The generic type parameter ensures type safety for the returned data
    const userData = await fetchData<Item[]>(
      apiUrl + "/marketplace/products/all",
      "GET"
    );
    return userData;
  } catch (error) {
    console.error(`Failed to fetch marketplace/products API:`, error);
    throw error;
  }
};

/**
 * Fetches a single order by its ID from the API
 * @param id The ID of the order to fetch
 * @returns A promise that resolves to the order data
 * @throws Will throw an error if the fetch fails
 */
export const getOrderById = async (id: string): Promise<Order> => {
  try {
    // The generic type parameter ensures type safety for the returned data
    const userData = await fetchData<Order>(
      apiUrl + "/marketplace/order/" + id,
      "GET"
    );
    return userData;
  } catch (error) {
    console.error(`Failed to fetch marketplace/products API:`, error);
    throw error;
  }
};

/**
 * init Order and Payment Redirect
 * @returns A promise that resolves to an array of categories
 * @throws Will throw an error if the fetch fails
 */
export const initOrderPaymentRedirect = async (
  payload: object
): Promise<string> => {
  try {
    // The generic type parameter ensures type safety for the returned data
    const initData = await fetchData<{ url: string; message: string }>(
      apiUrl + "/marketplace/order",
      "POST",
      {
        body: JSON.stringify(payload),
      }
    );
    return initData.url;
  } catch (error) {
    console.error(`Failed to fetch initOrderPaymentRedirect API:`, error);
    throw error;
  }
};
