import ProductsView from "@/components/product/ProductsView";
import { getAllProducts } from "@/sanity/lib/products/productQueries";

export default async function Home() {
  const products = await getAllProducts();

  return (
    <div>
      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
        <ProductsView products={products} />
      </div>
    </div>
  );
}
