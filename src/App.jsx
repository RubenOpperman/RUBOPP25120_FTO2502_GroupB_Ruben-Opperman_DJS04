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

  const handleNavChange = (data) => {
    setSearch(data);
  };
  const handleGenreFilter = (data) => {
    setGenre(data);
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

  const podcasts = podcastData
    .filter((podcast) => {
      const matchesSearch = podcast.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const genreList = GetGenreIds(podcast.genres, genres);
      const matchesGenre = genre === "" || genreList.includes(genre);

      return (search === "" || matchesSearch) && matchesGenre;
    })
    .map((podcast) => (
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

  return (
    <>
      <Navbar onChange={handleNavChange} />
      <Filter genreFilter={handleGenreFilter} />

      {isLoading ? (
        <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
          <div className="text-xl font-bold animate-pulse">
            Loading Podcasts...
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-Background">
          {podcasts}
        </div>
      )}
    </>
  );
}

export default App;
