/**
 * Displays a list of genre tags as styled badges.
 *
 * @param {Object} props
 * @param {string[]} props.genreList - An array of genre names to display.
 *
 * @returns {JSX.Element} A container with genre badges.
 */
export default function Genres(props) {
  return (
    <div className="flex flex-wrap">
      {props.genreList.map((genre, index) => (
        <span
          key={index}
          className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium m-1"
        >
          {genre}
        </span>
      ))}
    </div>
  );
}
