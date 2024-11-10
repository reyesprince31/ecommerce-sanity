import { Product } from "@/sanity.types";
import ProductsGrid from "./ProductsGrid";

interface ProductsViewProps {
  products: Product[];
}
const ProductsView = ({ products }: ProductsViewProps) => {
  return (
    <div>
      <div className="flex-1">
        <div className="">
          <ProductsGrid products={products} />
          <hr className="w-1/2 sm:w-3/4" />
        </div>
      </div>
    </div>
  );
};
export default ProductsView;
