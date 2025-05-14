import { Item } from "@/types/Item";

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

export const getAllItems = async (): Promise<Item[]> => {
  try {
    // The generic type parameter ensures type safety for the returned data
    const userData = await fetchData<Item[]>(
      apiUrl + "/marketplace/products/all",
      "GET"
    );
    return userData;
  } catch (error) {
    console.error(`Failed to fetch getAllCategories API:`, error);
    throw error;
  }
};
