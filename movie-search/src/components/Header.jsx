/* ======================================================
    Lab 8 - Header.jsx starter
====================================================== */

export default function Header({ title, searchTerm }) {
    // TODO 12: Create the entire Header component.
    return(
    <header className="hero">
      <h1>{title}</h1>
      <p>Search for movies using the OMDb API and save your favorites to a watchlist.</p>
      <p className="heroMeta">Showing results for: <strong>{searchTerm}</strong></p>
    </header>
  );
}