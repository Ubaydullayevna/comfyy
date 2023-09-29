import React from "react";
import {
  Filters,
  PaginationsContainer,
  ProductsContainer,
} from "../components";
import { customFetch } from "../utils";

const url = "/products";

export const loader = async ({ request }) => {
  
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries()
  ])
  const response = await customFetch(url, {
    params
  });
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, params, meta };
};

function Products() {
  return (
    <div className="py-20">
      <Filters />
      <ProductsContainer />
      <PaginationsContainer />
    </div>
  )
}

export default Products;
