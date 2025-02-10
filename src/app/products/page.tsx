import { Metadata } from "next";


export const metadata: Metadata = {
  title: "E-shop | Produkty",
  description: "Prohlédněte si naši nabídku produktů.",
};

const products = [
  { id: 1, name: "Produkt 1", price: "299 Kč" },
  { id: 2, name: "Produkt 2", price: "499 Kč" },
  { id: 3, name: "Produkt 3", price: "799 Kč" },
];

export default function ProductsPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center">Naše produkty</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}