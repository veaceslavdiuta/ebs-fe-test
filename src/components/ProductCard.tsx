interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}
function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col items-center justify-between gap-6 rounded-xl bg-stone-200 p-2 sm:p-4">
      <img
        className="h-40 w-full object-contain mix-blend-multiply"
        src={product.image}
        alt={product.title}
      />
      <div className="flex w-full flex-col items-center gap-4">
        <h3 className="line-clamp-1 text-center sm:line-clamp-2">
          {product.title}
        </h3>
        <p className="text-base font-normal">${product.price}</p>
        <button className="w-full rounded-xl bg-gray-700 py-4 font-sans text-base font-normal text-white transition duration-300 ease-in-out hover:bg-white hover:text-black">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
