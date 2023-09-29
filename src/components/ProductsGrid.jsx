import { useLoaderData, Link } from "react-router-dom";
import { formatPrice } from "../utils";
function ProductsGrid() {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, image, price } = product.attributes;
        const dollaramount = formatPrice(price);
        return (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure>
              <img
                src={image}
                alt={title}
                className="rounded-xl h-64 md:h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body text-center items-center">
              <h2 className="carf-title capitalize tracking-wider">{title}</h2>
              <p className="font-medium text-secondary">{dollaramount}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsGrid;
