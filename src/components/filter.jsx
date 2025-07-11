/**
 * Filter component for selecting podcast genres and sort order.
 *
 * @component
 * @param {Object} props - Component props
 * @param {(genre: string) => void} props.genreFilter - Callback for when a genre is selected
 * @param {(sort: string) => void} props.sort - Callback for when a sort option is selected
 * @returns {JSX.Element} The rendered Filter component
 */
export default function Filter({ genreFilter, sort }) {
  /**
   * Handles changes to the genre dropdown and passes selected value to the parent.
   */
  const handleGenrePicked = () => {
    const selectGenreElement = document.getElementById("genre");
    const selectGenreValue = selectGenreElement.value;
    genreFilter(selectGenreValue);
  };
  /**
   * Handles changes to the sort dropdown and passes selected value to the parent.
   */
  const handleSortPicked = () => {
    const selectAlphabetElement = document.getElementById("sort");
    const selectSortValue = selectAlphabetElement.value;
    sort(selectSortValue);
  };

  return (
    <div className="flex flex-wrap p-5 gap-5 bg-Background font-serif ">
      <h3 className=" text-white text-lg md:text-xl py-2 px-4 rounded-2xl">
        Filter by:
      </h3>
      <form
        onSubmit={(event) => event.preventDefault()}
        className="border-2 flex wrap bg-white py-2 px-4 rounded-2xl"
      >
        <label htmlFor="genre">Genres:</label>
        <select onChange={handleGenrePicked} name="genre" id="genre">
          <option value="">ALL</option>
          <option value="Personal Growth">Personal Growth</option>
          <option value="Investigative Journalism">
            Investigative Journalism
          </option>
          <option value="History">History</option>
          <option value="Comedy">Comedy</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Business">Business</option>
          <option value="Fiction">Fiction</option>
          <option value="News">News</option>
          <option value="Kids and Family">Kids and Family</option>
        </select>
      </form>
      <form
        onSubmit={(event) => event.preventDefault()}
        className="border-2 bg-white py-2 px-4 rounded-2xl"
      >
        <label htmlFor="SORT">SORT:</label>
        <select onChange={handleSortPicked} name="sort" id="sort">
          <option value="sort">NONE</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="Newest">newest</option>
        </select>
      </form>
    </div>
  );
}
