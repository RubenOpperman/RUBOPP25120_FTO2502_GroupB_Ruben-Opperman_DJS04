/**
 * Maps an array of genre IDs to their corresponding genre titles.
 *
 * @param {number[]} ids - Array of genre IDs to look up.
 * @param {Object[]} allGenres - Array of genre objects with `id` and `title` properties.
 * @param {number} allGenres[].id - The unique ID of the genre.
 * @param {string} allGenres[].title - The display title of the genre.
 *
 * @returns {string[]} Array of genre titles corresponding to the provided IDs.
 *                      If an ID does not match, returns "unknown" for that entry.
 */
export default function GetGenreIds(ids, allGenres) {
  return ids.map((id) => {
    const genre = allGenres.find((g) => g.id === id);
    return genre ? genre.title : "unknown";
  });
}
