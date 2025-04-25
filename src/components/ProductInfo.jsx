import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function ProductInfo(props) {
  const { addProductToCart } = useContext(CartContext);

  const showSnackbar = () => {
    props.setIsVisible(true);
    setTimeout(() => {
      props.setIsVisible(false);
    }, 3000);
  };

  const addItemToCart = (productData) => {
    addProductToCart(productData);
    showSnackbar();
  };
  return (
    <section className="flex w-full flex-col items-center justify-between gap-10 sm:flex-row">
      <img
        className="w-1/2 sm:w-1/3"
        src={props.productData.image}
        alt={props.productData.title}
      />
      <div className="flex flex-col gap-4 sm:w-1/2">
        <h3 className="text-xl font-medium sm:text-2xl">
          {props.productData.title}
        </h3>
        <p className="text-base font-semibold sm:text-lg">
          ${props.productData.price}
        </p>
        <p className="text-sm opacity-75 sm:text-base">
          {props.productData.description}
        </p>
        <p className="text-base font-medium sm:text-lg">
          {props.productData.category}
        </p>
        <button
          onClick={() => addItemToCart(props.productData)}
          className="rounded-2xl border-2 border-black bg-white py-4 transition duration-300 ease-in-out hover:bg-black hover:text-white"
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
}

export default ProductInfo;
