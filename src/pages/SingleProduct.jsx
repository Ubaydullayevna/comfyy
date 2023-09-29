import React from "react";
import { customFetch, formatPrice, generateAmountOptions } from "../utils";
import { useLoaderData, Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";

export const loader = async ({ params }) => {
  const req = await customFetch(`/products/${params.id}`);

  return { product: req.data.data };
};



function SingleProduct() {
  const[amount, setAmount] = useState(1)
  const { product } = useLoaderData();
  console.log(product);
  const { title, image, price, colors, company, description } =
    product.attributes;
  const [productColor, setProductColor] = useState(colors[0]);
  const dollar = formatPrice(price);

 const handleAmount = (e) => {
  setAmount(parseInt(e.target.value))
 }
console.log(amount);

const dispatch = useDispatch()
const cartProduct = {
  cartId:product.id + productColor,
  productID : product.id,
  image,
  title,
  price,
  amount,
  productColor,
  company
}

const addToCart = () => {
  dispatch(addItem({product:cartProduct}))
  
}



  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Product</Link>
          </li>
        </ul>
        <div className="mt-6 gap-y-8 grid lg:grid-cols-2 lg:gap-x-6">
          <img
            src={image}
            alt={title}
            className="w-96 h-96 rounded-lg lg:w-full object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold capitalize">{title}</h1>
            <h3 className="text-neutral-100 capitalize font-semibold tracking-wider mt-3">
              {company}
            </h3>
            <h3 className="mt-3">{dollar}</h3>
            <p className="mt-8 leading-8">{description}</p>

            {/* <p className="mt-4 font-semibold">Colors</p> */}
            {/* <span>{colors}</span> */}
            <div className="form-control w-full max-w-xs mt-7">
              <h4 className="flex flex-col gap-y-5 text-md font-medium tracking-wider capitalize">
                <span>Colors:</span>
                <span>
                  {colors.map((color) => {
                    return (
                      <button
                        key={color}
                        type="button"
                        className={`badge h-6 w-6 mr-2 ${
                          color === productColor && "border-2 border-secondary"
                        }`}
                        style={{ background: color }}
                        onClick={() => {
                          setProductColor(color);
                        }}
                      ></button>
                    );
                  })}
                </span>
              </h4>
            </div>
            <div className="form-control">
              <label htmlFor="" className="label">
                <h4 className="text-md font-medium tracking-wider capitalize">
                  Amount:
                </h4>
              </label>
              <select
                name=""
                value={amount}
                id="amount"
                className="select select-secondary select-bordered select-md"
                onChange={handleAmount} 
              >
                {generateAmountOptions(15)}
              </select>
            </div>
            <div className="mt-4"><button onClick={()=> addToCart ()} type="button" className="btn btn-primary ">add to bag</button></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
