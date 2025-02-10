import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container hover:text-gray-300 mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">E-shop</Link>
        <div className="space-x-4">
          <Link href="/products" className="hover:text-gray-300">Produkty</Link>
          <Link href="/cart" className="hover:text-gray-300">Košík</Link>
        </div>
      </div>
    </nav>
  );
}
