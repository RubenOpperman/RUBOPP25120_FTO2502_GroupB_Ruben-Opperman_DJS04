import { useEffect, useState } from "react";

import Navbar from "./components/header";
import MainContent from "./components/mainContent";

import { fetchPodcastData } from "./data/podcastData";

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

  const podcasts = podcastData.map((podcast) => (
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
      <Navbar />

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
