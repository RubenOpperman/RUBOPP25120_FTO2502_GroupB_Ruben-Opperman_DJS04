import { useEffect, useState } from "react";

import Navbar from "./components/header";
import Filter from "./components/filter";
import MainContent from "./components/mainContent";
import PageNav from "./components/PageNav";

import { genres } from "./data/genreData";
import { fetchPodcastData } from "./data/podcastData";
import GetGenreIds from "./utils/getGenreIds";
import "./App.css";

/**
 * Main application component for the Podcast Explorer.
 *
 * Responsibilities:
 * - Fetch podcast data on mount
 * - Handle search, genre filtering, sorting
 * - Manage pagination
 * - Display podcast cards and loading state
 *
 * @component
 * @returns {JSX.Element} The rendered application
 */
function App() {
  /** @type {[Object[], Function]} Podcast data state */
  const [podcastData, setPodcastData] = useState([]);

  /** @type {[boolean, Function]} Loading state */
  const [isLoading, setIsLoading] = useState(true);

  /** @type {[string, Function]} Search input state */
  const [search, setSearch] = useState("");

  /** @type {[string, Function]} Genre filter state */
  const [genre, setGenre] = useState("");

  /** @type {[string, Function]} Sort option state */
  const [sort, setSort] = useState("");

  /** @type {[number, Function]} Current pagination page */
  const [currentPage, setCurrentPage] = useState(1);

  /** @constant {number} Items shown per page */
  const itemsPerPage = 8;

  /**
   * Handles changes from the Navbar search input
   * @param {string} data - New search term
   */
  const handleNavChange = (data) => {
    setSearch(data);
  };
  /**
   * Handles genre filter selection
   * @param {string} data - Selected genre ID
   */
  const handleGenreFilter = (data) => {
    setGenre(data);
    setCurrentPage(1);
  };

  /**
   * Handles sort option selection
   * @param {string} data - Sort option ("A-Z", "Z-A", "Newest")
   */
  const handleAsc = (data) => {
    setSort(data);
    setCurrentPage(1);
  };

  const prevBtn = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const nextBtn = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  useEffect(() => {
    /**
     * Fetch podcast data on component mount
     */
    async function getData() {
      setIsLoading(true);
      const data = await fetchPodcastData();
      setPodcastData(data);
      setIsLoading(false);
    }
    getData();
  }, []);
  /**
   * Filter and sort the podcast data
   * @returns {Object[]} Filtered and sorted podcast list
   */
  const filteredAndSorted = podcastData
    .filter((podcast) => {
      const genreList = GetGenreIds(podcast.genres, genres);
      const matchesSearch = podcast.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesGenre = genre === "" || genreList.includes(genre);
      return (search === "" || matchesSearch) && matchesGenre;
    })
    .sort((a, b) => {
      if (sort === "A-Z") return a.title.localeCompare(b.title);
      if (sort === "Z-A") return b.title.localeCompare(a.title);
      if (sort === "Newest") return new Date(b.updated) - new Date(a.updated);
      return 0;
    });

  /** @type {number} Index of the last item on the current page */
  const indexOfLastItem = currentPage * itemsPerPage;

  /** @type {number} Index of the first item on the current page */
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  /** @type {Object[]} Current page's podcast items */
  const currentItems = filteredAndSorted.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  /** @type {number} Total number of pages */
  const totalPages = Math.ceil(filteredAndSorted.length / itemsPerPage);

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

      <PageNav
        currentPage={currentPage}
        totalPages={totalPages}
        prevBtn={prevBtn}
        nextBtn={nextBtn}
      />
    </>
  );
}

export default App;
