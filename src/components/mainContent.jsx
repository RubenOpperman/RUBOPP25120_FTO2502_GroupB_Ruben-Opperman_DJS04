import TimeUpdated from "../utils/formatDate";
import Genres from "./genres";
import { genres } from "../data/genreData";
import GetGenreIds from "../utils/getGenreIds";

/**
 * Renders a podcast card displaying podcast details such as:
 * - Image, title, number of seasons, genre tags, and last updated date.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.id - Unique identifier for the podcast.
 * @param {string} props.title - Title of the podcast.
 * @param {string} props.description - Description of the podcast (unused here but passed).
 * @param {number} props.seasons - Number of seasons available.
 * @param {string} props.img - Image URL for the podcast cover.
 * @param {string} props.updated - Last updated date in ISO format.
 * @param {number[]} props.genres - Array of genre IDs associated with the podcast.
 *
 * @returns {JSX.Element} The rendered podcast card.
 */
export default function MainContent(props) {
  const updateDate = TimeUpdated(props.updated);
  const genreList = GetGenreIds(props.genres, genres);

  return (
    <div className="rounded-lg border-2 border-[#9CA3AF] bg-Podcast-card p-2 shadow-lg  font-serif ">
      <div className="p-2">
        <div className="w-full h-full  mx-auto rounded-lg mb-2 overflow-hidden">
          <img
            src={props.img}
            className="w-full h-full object-cover block rounded-2xl"
            alt="podcast image"
          />
        </div>

        <h2 className="text-lg font-bold p-1">{props.title}</h2>

        <div className="flex mb-2">
          <img
            className="w-5 pr-2 h-auto"
            src="src/assets/gray-calendar-25911.svg"
            alt="grey calander"
          />
          <p className="text-sm text-gray-700 p-1 font-medium">
            {props.seasons} seasons
          </p>
        </div>

        <div id="genre-container" className="flex flex-wrap gap-2 mb-2">
          <Genres genreList={genreList} />
        </div>

        <p className="text-xs text-gray-500 py-1 font-semibold">
          updated : {updateDate}
        </p>
      </div>
    </div>
  );
}
