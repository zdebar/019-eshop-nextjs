import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-shop | Home",
  description: "Browse our latest products and enjoy shopping.",
};

export default function HomePage() {
  return (
    <div className="p-4">
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold">Vítejte v našem e-shopu!</h1>
        <p className="mt-4 text-lg">Prozkoumejte naše produkty a nakupujte jednoduše.</p>
      </section>

      <section className="py-16">
        <h2 className="text-2xl font-semibold text-center">Nejnovější produkty</h2>
        {/* TODO: Přidat dynamické produkty */}
      </section>
    </div>
  );
}