import ProductsGrid from "@/components/product/ProductsGrid";
import { Button } from "@/components/ui/button";
import { searchProductsByName } from "@/sanity/lib/products/productQueries";
import Link from "next/link";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) => {
  const { query } = await searchParams;
  const products = await searchProductsByName(query);

  if (!products.length) {
    return (
      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
          <Link href="/">
            <Button className="mt-4">Back to Homepage</Button>
          </Link>
          <h1 className="text-3xl font-bold mb-6 text-center">
            No Products found for: {query}
          </h1>
          <p className="text-gray-600 text-center">
            Try searching with different keywords
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Search results for {query}
        </h1>
        <ProductsGrid products={products} />
      </div>
    </div>
  );
};
export default SearchPage;
