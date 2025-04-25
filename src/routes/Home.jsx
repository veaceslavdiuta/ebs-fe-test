import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import FilterAndSort from '../components/FilterAndSort';
import { useSearchParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedSorting, setSelectedSorting] = useState('sort by');
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get('search');
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      setError('Failed to fetch products. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let updatedProducts = [...products];

    if (selectedFilter !== 'All') {
      updatedProducts = updatedProducts.filter(
        (p) => p.category === selectedFilter
      );
    }

    if (selectedSorting === 'low to high') {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedSorting === 'high to low') {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    if (searchValue) {
      const lowerCaseValue = searchValue.toLowerCase();
      updatedProducts = updatedProducts.filter((p) =>
        `${p.title} ${p.description} ${p.category}`
          .toLowerCase()
          .includes(lowerCaseValue)
      );
    }

    setFilteredProducts(updatedProducts);
  }, [selectedFilter, selectedSorting, searchValue, products]);

  return (
    <main>
      <section className="container mx-auto flex max-w-screen-xl flex-col justify-center gap-6 px-4 py-10 xl:px-0">
        <FilterAndSort
          products={products}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          selectedSorting={selectedSorting}
          setSelectedSorting={setSelectedSorting}
        />

        {error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {loading ? (
              <div className="col-span-full flex items-center justify-center py-20">
                <LoadingSpinner />
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="col-span-full flex items-center justify-center py-20">
                <p className="text-red-400">No products found!</p>
              </div>
            ) : (
              filteredProducts.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))
            )}
          </div>
        )}
      </section>
    </main>
  );
}

export default Home;
