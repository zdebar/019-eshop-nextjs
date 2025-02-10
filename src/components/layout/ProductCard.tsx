interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
      <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
}




