import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function CartSummary() {
  const { subtotal, total } = useContext(CartContext);

  return (
    <div className="flex flex-col gap-10 rounded-xl border border-[#EBEBEB] px-4 py-14 sm:px-16 lg:w-1/2">
      <h4 className="text-xl font-semibold leading-4">Oder Summary</h4>
      <ul className="flex flex-col gap-4">
        <li className="flex justify-between text-base font-semibold leading-6">
          Subtotal <span>${subtotal}</span>
        </li>
        <li className="flex justify-between text-base font-medium leading-6 text-[#545454]">
          Estimated Tax <span className="font-semibold text-black">$50</span>
        </li>
        <li className="flex justify-between text-base font-medium leading-6 text-[#545454]">
          Estimated shipping & Handling
          <span className="font-semibold text-black">$29</span>
        </li>
        <li className="flex justify-between text-base font-semibold leading-6">
          Total <span>${total}</span>
        </li>
      </ul>

      <button className="rounded-md border bg-black py-4 text-base font-medium leading-6 text-white">
        Checkout
      </button>
    </div>
  );
}

export default CartSummary;
