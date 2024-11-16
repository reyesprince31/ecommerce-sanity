import BlackFridayBanner from "@/components/banners/BlackFridayBanner";
import ProductsView from "@/components/product/ProductsView";
import { getAllCategories } from "@/sanity/lib/products/categoriesQueries";
import { getAllProducts } from "@/sanity/lib/products/productQueries";

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  return (
    <div>
      <BlackFridayBanner />
      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
        <ProductsView products={products} categories={categories} />
      </div>
    </div>
  );
}
