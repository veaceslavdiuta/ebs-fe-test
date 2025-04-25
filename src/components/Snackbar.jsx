import { GoCheck } from 'react-icons/go';

function Snackbar({ isVisible }) {
  return (
    <div
      className={`fixed bottom-8 right-4 z-50 flex items-center gap-3 rounded bg-green-600 p-4 text-white transition-all ${
        isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
      } ${isVisible ? 'animate-fadeIn' : 'animate-fadeOut'}`}
    >
      <GoCheck className="h-5 w-5" />
      <h1 className="text-sm font-normal md:text-base">
        Product added to cart!
      </h1>
    </div>
  );
}

export default Snackbar;
