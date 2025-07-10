/**
 * Fetches podcast data from the remote API.
 *
 * Makes a GET request to the podcast API endpoint and returns the parsed JSON data.
 * Logs an error message if the fetch fails or the response is not OK.
 *
 * @async
 * @function
 * @returns {Promise<Object[]|undefined>} A promise that resolves to an array of podcast data objects,
 * or `undefined` if there was an error during fetching.
 */
export async function fetchPodcastData() {
  try {
    const response = await fetch("https://podcast-api.netlify.app/");

    if (!response.ok) {
      throw new Error("HTTP error status: " + response.status);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("error fetching data: ", error);
  }
}
