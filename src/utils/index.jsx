import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (price) => {
  const dollaramount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return dollaramount;
};

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_,index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
// ! console.log(generateAmountOptions(23));
export const paginationAmount = (number) => {
  return Array.from({ length: number }, (_,index) => {
    const amount = index + 1;
    return (
      <button className="btn mr-2 rounded-md  shadow-xl hover:shadow-2xl duration-300 " key={amount} value={amount}>
        {amount}
      </button>
    );
  });
};
// ! console.log(generateAmountOptions(23));