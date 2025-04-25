import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Snackbar from '../components/Snackbar';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ProductInfo from '../components/ProductInfo';

function ProductDetails() {
  const [productData, setProductData] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const [error, setError] = useState('');
  const { id } = useParams();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getProductById = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setProductData(data);
    } catch (error) {
      setError('Oops! Something went wrong while fetching the product');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSimilarProducts = async () => {
    if (!productData || !productData.category || !productData.id) return;

    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      const filtered = data.filter(
        (p) => p.category === productData.category && p.id !== productData.id
      );
      setSimilarProducts(filtered);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductById();
  }, [id]);

  useEffect(() => {
    if (productData && productData.category && productData.id) {
      fetchSimilarProducts();
    }
  }, [productData]);

  return (
    <main className="container mx-auto flex max-w-screen-lg flex-col justify-center gap-28 px-4 py-28 xl:px-0">
      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <p className="text-center text-base text-red-600 sm:text-lg">{error}</p>
      ) : (
        <>
          <ProductInfo productData={productData} setIsVisible={setIsVisible} />
          <section className="flex flex-col gap-10">
            <h3 className="text-2xl">Related Products</h3>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {similarProducts.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          </section>
        </>
      )}

      {isVisible && <Snackbar isVisible={isVisible} />}
    </main>
  );
}

export default ProductDetails;
