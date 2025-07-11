import { useState } from "react";

/**
 * Navigation bar component for the Podcast Explorer app.
 *
 * Features:
 * - Fixed top nav bar with logo and app title.
 * - Toggleable search bar for filtering podcast titles.
 *
 * @component
 * @param {Object} props - Component props
 * @param {(searchTerm: string) => void} props.onChange - Callback to update search state in parent
 * @returns {JSX.Element} The rendered navigation bar
 */

export default function Navbar({ onChange }) {
  /** @type {[boolean, Function]} State to toggle search bar visibility */
  const [searchBar, setSearchBar] = useState(false);
  /**
   * Handles search input change and passes the value to the parent via props.
   * @param {React.ChangeEvent<HTMLInputElement>} e - Input change event
   */
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };
  /**
   * Toggles the visibility of the search bar.
   */
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
          {/* Search input field (hidden/shown) */}
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
          {/* Search toggle button */}
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
