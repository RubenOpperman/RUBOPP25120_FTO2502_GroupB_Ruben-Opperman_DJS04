export default function Filter({ genreFilter }) {
  const handelGenrePicked = () => {
    const selectGenreElement = document.getElementById("genre");
    const selectGenreValue = selectGenreElement.value;
    genreFilter(selectGenreValue);
    console.log(selectGenreValue);
  };

  return (
    <div className="flex p-5 gap-5 bg-Background font-serif">
      <h3 className=" text-white text-xl py-2 px-4 rounded-2xl">Filter by:</h3>
      <form className="border-2 bg-white py-2 px-4 rounded-2xl">
        <label htmlFor="genre"></label>
        <select onChange={handelGenrePicked} name="genre" id="genre">
          <option value="GENRE">GENRE</option>
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
      <form className="border-2 bg-white py-2 px-4 rounded-2xl">
        <label htmlFor="SORT"></label>
        <select name="sort" id="sort">
          <option value="sort">SORT</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="newest">newest</option>
        </select>
      </form>
    </div>
  );
}
