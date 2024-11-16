import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllCategories = async () => {
  const GET_ALL_CATEGORIES = defineQuery(`
        *[_type=="category"] | order(name asc)`);
  try {
    const categories = await sanityFetch({
      query: GET_ALL_CATEGORIES,
    });
    return categories.data || [];
  } catch (error) {
    console.log("Unable to fetch categories", error);
    return [];
  }
};

export const getProductsByCategory = async (slug: string) => {
  const GET_PRODUCT_BY_CATEGORY = defineQuery(`
    *[_type=="product" && references(*[_type=='category' && slug.current == $slug]._id)] | order(name asc)
    `);
  try {
    const products = await sanityFetch({
      query: GET_PRODUCT_BY_CATEGORY,
      params: { slug },
    });
    return products.data || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
