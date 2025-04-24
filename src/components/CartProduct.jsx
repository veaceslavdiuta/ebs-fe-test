import { useContext } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { MdOutlineClose } from 'react-icons/md';
import { CartContext } from '../contexts/CartContext';

function CartProduct(props) {
  const {
    removeProductFromCart,
    increaseProductQuantity,
    decreaseProductQuantity,
    addProductToCart,
  } = useContext(CartContext);

  return (
    <>
      <div className="flex w-full items-center gap-4 py-4">
        <img
          className="w-20"
          src={`${props.product.image}`}
          alt={props.product.title}
        />
        <div className="flex w-full flex-col items-center justify-between gap-2 sm:flex-row">
          <h4 className="line-clamp-2 w-full text-base font-medium leading-6 sm:w-1/2">
            {props.product.title}
          </h4>

          <div className="flex w-full justify-between gap-2 sm:w-1/2">
            <div className="flex items-center gap-2">
              <button onClick={() => decreaseProductQuantity(props.product)}>
                <FiMinus />
              </button>
              <p className="rounded border border-[#D9D9D9] px-4 py-2 text-base font-medium leading-4">
                {props.product.quantity}
              </p>
              <button onClick={() => addProductToCart(props.product)}>
                <FiPlus />
              </button>
            </div>

            <p className="text-lg font-medium leading-8">
              ${props.product.price}
            </p>
            <button onClick={() => removeProductFromCart(props.product)}>
              <MdOutlineClose className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full border-b border-[#A3A3A3]"></div>
    </>
  );
}

export default CartProduct;
