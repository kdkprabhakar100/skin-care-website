function SearchBar({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => setSearch(e.target.value)}
      className="border p-2 rounded w-full"
    />
  );
}

export default SearchBar;