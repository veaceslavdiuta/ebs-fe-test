import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartProduct from '../components/CartProduct';
import { Link } from 'react-router-dom';
import CartSummary from '../components/CartSummary';

function Cart() {
  const { cartProducts, removeAllProducts } = useContext(CartContext);

  return (
    <main className="w-full">
      {cartProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-10 py-36">
          <h5 className="text-3xl">The shopping cart is empty!</h5>
          <Link
            to={'/'}
            className="w-full max-w-96 rounded-2xl border-2 py-4 text-center hover:bg-black hover:text-white"
          >
            Go to shopping
          </Link>
        </div>
      ) : (
        <section className="container mx-auto flex max-w-screen-xl flex-col items-start justify-between gap-12 px-4 py-20 lg:flex-row">
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex justify-between">
              <h3 className="text-2xl font-semibold leading-6">
                Shopping Cart
              </h3>
              <button
                onClick={() => removeAllProducts()}
                className="rounded-md border px-4 py-2 hover:border-red-500 hover:bg-red-500 hover:text-white"
              >
                Clear cart
              </button>
            </div>
            <div className="flex flex-col items-center gap-10">
              {cartProducts.map((product) => (
                <CartProduct key={product.id} product={product} />
              ))}
            </div>
          </div>

          {cartProducts.length && <CartSummary />}
        </section>
      )}
    </main>
  );
}

export default Cart;
