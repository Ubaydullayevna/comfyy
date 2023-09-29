import { useLoaderData, Link } from "react-router-dom";
import { formatPrice } from "../utils";
function ProductsList() {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <div className="pt-12 grid gap-y-6 ">
      {products.map((product) => {
        const { title, image, price, company } = product.attributes;
        const dollaramount = formatPrice(price);
        return (
          <Link
          to={`/products/${product.id}`}
            key={product.id}
            className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group"
          >
            <figure>
              <img
                src={image}
                alt={title}
                className=" h-24 w-24 md:h-32 group-hover:scale-105 transition duration-300 object-cover rounded-lg"
              />
            </figure>
            <div className="ml-0 sm:ml-16 ">
                <h3 className="text-lg capitalize font-bold">{title}</h3>
                <h5 className="capitalize text-lg font-medium">{company}</h5>
            </div>
            <p className="font-medium text-lg ml-0 sm:ml-auto">{dollaramount}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsList;
