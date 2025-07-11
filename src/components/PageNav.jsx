/**
 * Pagination navigation component.
 *
 * Renders "Previous" and "Next" buttons along with the current page indicator.
 * Buttons are disabled when at the beginning or end of the page range.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {number} props.currentPage - The currently active page (1-based index).
 * @param {number} props.totalPages - The total number of pages available.
 * @param {Function} props.nextBtn - Function to call when the "Next" button is clicked.
 * @param {Function} props.prevBtn - Function to call when the "Previous" button is clicked.
 * @returns {JSX.Element} A React component that displays pagination controls.
 */
export default function PageNav({ currentPage, totalPages, nextBtn, prevBtn }) {
  return (
    <div className="flex justify-center gap-4 py-4 bg-NavBar-bg">
      <button
        onClick={prevBtn}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-white rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span className="text-white">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={nextBtn}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-white  rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
