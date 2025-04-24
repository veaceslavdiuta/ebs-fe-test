import { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const addProductToCart = (product) => {
    if (!product.id) return;

    const existingProduct = cartProducts.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cartProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartProducts(updatedCart);
    } else {
      setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
    }
  };

  const decreaseProductQuantity = (product) => {
    const existingProduct = cartProducts.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cartProducts.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity === 1 ? item.quantity : item.quantity - 1,
            }
          : item
      );
      setCartProducts(updatedCart);
    }
  };

  const removeProductFromCart = (product) => {
    const updatedCart = cartProducts.filter((p) => p.id !== product.id);
    setCartProducts(updatedCart);
  };

  const removeAllProducts = () => {
    setCartProducts([]);
  };

  const subtotal = Number(
    cartProducts
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2)
  );

  const total = (subtotal + 50 + 29).toFixed(2);

  const cartCount = cartProducts.reduce(
    (count, item) => (count += item.quantity),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addProductToCart,
        decreaseProductQuantity,
        removeAllProducts,
        removeProductFromCart,
        subtotal,
        total,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
