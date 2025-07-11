import { useEffect, useState, useContext } from "react";

import Navbar from "./components/header";
import Filter from "./components/filter";
import MainContent from "./components/mainContent";
import { genres } from "./data/genreData";
import { fetchPodcastData } from "./data/podcastData";
import GetGenreIds from "./utils/getGenreIds";
import "./App.css";

/**
 * Main application component for the Podcast Explorer.
 *
 * - Fetches podcast data on initial render.
 * - Displays a loading screen while fetching data.
 * - Renders the navigation bar and a grid of podcast cards.
 *
 * @returns {JSX.Element} The rendered application UI.
 */
function App() {
  const [podcastData, setPodcastData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [sort, setSort] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handleNavChange = (data) => {
    setSearch(data);
  };
  const handleGenreFilter = (data) => {
    setGenre(data);
  };

  const handleAsc = (data) => {
    setSort(data);
  };

  useEffect(() => {
    /**
     * Fetches podcast data asynchronously and updates state.
     * Shows loading screen while data is being fetched.
     */
    async function getData() {
      setIsLoading(true);
      const data = await fetchPodcastData();
      setPodcastData(data);
      setIsLoading(false);
    }
    getData();
  }, []);

  const filteredAndSorted = podcastData
    .filter((podcast) => {
      const genreList = GetGenreIds(podcast.genres, genres);
      const matchesSearch = podcast.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesGenre =
        genre === "" || genre === "GENRE" || genreList.includes(genre);
      return (search === "" || matchesSearch) && matchesGenre;
    })
    .sort((a, b) => {
      if (sort === "A-Z") return a.title.localeCompare(b.title);
      if (sort === "Z-A") return b.title.localeCompare(a.title);
      if (sort === "Newest") return new Date(b.updated) - new Date(a.updated);
      return 0;
    });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAndSorted.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredAndSorted.length / itemsPerPage);

  {
    currentItems.map((podcast) => (
      <MainContent
        key={podcast.id}
        id={podcast.id}
        title={podcast.title}
        description={podcast.description}
        seasons={podcast.seasons}
        img={podcast.image}
        updated={podcast.updated}
        genres={podcast.genres}
      />
    ));
  }

  return (
    <>
      <Navbar onChange={handleNavChange} />
      <Filter sort={handleAsc} genreFilter={handleGenreFilter} />

      {isLoading ? (
        <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
          <div className="text-xl font-bold animate-pulse">
            Loading Podcasts...
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-Background">
          {currentItems.map((podcast) => (
            <MainContent
              key={podcast.id}
              id={podcast.id}
              title={podcast.title}
              description={podcast.description}
              seasons={podcast.seasons}
              img={podcast.image}
              updated={podcast.updated}
              genres={podcast.genres}
            />
          ))}
        </div>
      )}
      <div className="flex justify-center gap-4 py-4 bg-NavBar-bg">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-white">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-white  rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default App;
