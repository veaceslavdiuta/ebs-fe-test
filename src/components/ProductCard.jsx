import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import Snackbar from './Snackbar';

function ProductCard(props) {
  const { addProductToCart } = useContext(CartContext);
  const [isVisible, setIsVisible] = useState(false);

  const showSnackbar = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  const addItemToCart = (product) => {
    addProductToCart(product);
    showSnackbar();
  };

  return (
    <div className="flex flex-col items-center justify-between gap-6 rounded-xl bg-stone-200 p-2 sm:p-4">
      <img
        className="h-40 w-full object-contain mix-blend-multiply"
        src={props.product.image}
        alt={props.product.title}
      />
      <div className="flex w-full flex-col items-center gap-4">
        <h3 className="line-clamp-1 text-center sm:line-clamp-2">
          {props.product.title}
        </h3>
        <p className="text-base font-normal">${props.product.price}</p>
        <button
          onClick={() => addItemToCart(props.product)}
          className="w-full rounded-xl bg-gray-700 py-4 font-sans text-base font-normal text-white transition duration-300 ease-in-out hover:bg-white hover:text-black"
        >
          Add to Cart
        </button>
      </div>

      {isVisible && <Snackbar isVisible={isVisible} />}
    </div>
  );
}

export default ProductCard;
