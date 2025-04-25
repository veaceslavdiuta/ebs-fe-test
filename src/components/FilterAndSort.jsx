function FilterAndSort(props) {
  const categories = ['All', ...new Set(props.products.map((p) => p.category))];

  return (
    <div className="flex flex-col justify-around gap-4 py-10 sm:flex-row">
      <select
        className="rounded-lg border p-3 outline-none sm:w-1/3"
        name="category"
        value={props.selectedFilter}
        onChange={(event) => props.setSelectedFilter(event.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <select
        className="rounded-lg border p-3 outline-none sm:w-1/3"
        name="sort"
        value={props.selectedSorting}
        onChange={(event) => props.setSelectedSorting(event.target.value)}
      >
        <option value="sort by">Sort by</option>
        <option value="low to high">Price: Low to High</option>
        <option value="high to low">Price: High to Low</option>
      </select>
    </div>
  );
}

export default FilterAndSort;
