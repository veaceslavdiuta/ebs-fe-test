interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

interface FilterAndSortProps {
  products: Product[];
  selectedFilter: string;
  setSelectedFilter: (value: string) => void;
  selectedSorting: string;
  setSelectedSorting: (value: string) => void;
}

function FilterAndSort({
  products,
  selectedFilter,
  setSelectedFilter,
  selectedSorting,
  setSelectedSorting,
}: FilterAndSortProps) {
  const categories = ['All', ...new Set(products.map((p) => p.category))];

  return (
    <div className="flex flex-col justify-around gap-4 sm:flex-row">
      <select
        className="rounded-lg border p-3 outline-none sm:w-1/3"
        name="category"
        value={selectedFilter}
        onChange={(event) => setSelectedFilter(event.target.value)}
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
        value={selectedSorting}
        onChange={(event) => setSelectedSorting(event.target.value)}
      >
        <option value="sort by">Sort by</option>
        <option value="low to high">Price: Low to High</option>
        <option value="high to low">Price: High to Low</option>
      </select>
    </div>
  );
}

export default FilterAndSort;
