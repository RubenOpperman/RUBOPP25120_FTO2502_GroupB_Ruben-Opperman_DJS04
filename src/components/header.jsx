/**
 * Navigation bar component for the Podcast Explorer app.
 *
 * Displays a fixed top navigation bar with a podcast icon and the app title.
 *
 * @returns {JSX.Element} The rendered navigation bar.
 */

export default function Navbar() {
  return (
    <>
      <nav className="w-full h-20 bg-NavBar-bg text-Podcast-card flex items-center  font-serif">
        <div>
          <img src="../src/assets/apple-podcast.svg" alt="podcast icon" />
        </div>
        <div className="text-2xl p-5 font-bold">PodcastAPP</div>
      </nav>
    </>
  );
}
