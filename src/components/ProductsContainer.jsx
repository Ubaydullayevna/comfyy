import ProductsGrid from "./ProductsGrid";
import { useLoaderData } from "react-router-dom";
import ProductsList from "./ProductsList";
import { useState } from "react";
import { BsGridFill, BsList } from "react-icons/bs";

function ProductsContainer() {
  const { meta } = useLoaderData();
  console.log(meta);
  const totalUser = meta.pagination.total;
  console.log(totalUser);
  const [layout, setlayout] = useState("grid");

  const setActiveStyle = (patter) => {
    return `text btn btn-circle btn-sm ${
      patter === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-based-content"
    }`;
  };
  return (
    <>
      <div className="border-b border-base-300 flex mt-8 pb-4 justify-between items-center">
        <h4 className="">
          {totalUser} product{totalUser > 1 && "s"}{" "}
        </h4>
        <div className="flex gap-x-2">
          <button
            type="button"
            className={setActiveStyle("grid")}
            onClick={() => setlayout("grid")}
          >
            <BsGridFill />
          </button>
          <button
            type="button"
            onClick={() => setlayout("list")}
            className={setActiveStyle("list")}
          >
            <BsList />
          </button>
        </div>
        
      </div>
      {totalUser === 0 ? (
          <h4 className="text-2xl mt-16">
            Sorry, no product matched your search
          </h4>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
    </>
  );
}

export default ProductsContainer;
