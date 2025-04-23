import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError('There is a problem with fetching products!');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <main>
      <section className="container mx-auto flex max-w-screen-xl flex-col justify-center gap-6 px-4 py-10 xl:px-0">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Home;
