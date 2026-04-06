function FilterSidebar({ setCategory }) {
  return (
    <div>
      <h2>Categories</h2>

      <button onClick={() => setCategory("Moisturizer")}>
        Moisturizer
      </button>

      <button onClick={() => setCategory("Serum")}>
        Serum
      </button>
    </div>
  );
}

export default FilterSidebar;