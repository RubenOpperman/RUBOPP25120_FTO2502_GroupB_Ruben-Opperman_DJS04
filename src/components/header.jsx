import { useState } from "react";

/**
 * Navigation bar component for the Podcast Explorer app.
 *
 * Displays a fixed top navigation bar with a podcast icon and the app title.
 *
 * @returns {JSX.Element} The rendered navigation bar.
 */

export default function Navbar({ onChange }) {
  const [searchBar, setSearchBar] = useState(false);
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  function ToggleSearch() {
    setSearchBar((prevSearchBarState) => !prevSearchBarState);
  }

  return (
    <>
      <nav className="w-full h-[10wh] bg-NavBar-bg text-Podcast-card flex items-center  font-serif flex-wrap">
        <div>
          <img src="../src/assets/apple-podcast.svg" alt="podcast icon" />
        </div>
        <div className="text-2xl p-5 font-bold">PodcastAPP</div>

        <div className="ml-auto px-10 cursor-pointer flex gap-5 sm:mb-0 mb-4   ">
          <div
            className={`border-2 border-white rounded-2xl py-1 px-2 ${
              !searchBar ? "hidden" : null
            }  `}
          >
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <input
                onChange={handleInputChange}
                id="search"
                type="text"
                placeholder="search podcast title"
              />
            </form>
          </div>
          <button onClick={() => ToggleSearch()} className="w-10 h-auto ">
            <img
              src="src/assets/585e4ae1cb11b227491c3393.png"
              alt="search icon"
            />
          </button>
        </div>
      </nav>
    </>
  );
}
