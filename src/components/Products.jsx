import { useEffect, useState } from "react";
import { Product } from "../pages/Product";

export const Products = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (error) {
      setError(null);
    }

    try {
      const response = await fetch("https://dummyjson.com/products");

      const result = await response.json();

      setData(result.products);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-center p-2 bg-slate-300">
        <div className="flex flex-col w-max rounded overflow-hidden shadow-lg bg-slate-200 p-2">
          <p className="font-bold text-slate-800 text-2xl self-center">Products</p>
          <p className="font-semibold text-slate-800 text-xl">
            This is my Products.jsx component, i made it by calling this API:
            <br />
            "https://dummyjson.com/products" and, with .map array method im
            <br />
            rendering some cards, only 14, using the .slice array method.
          </p>
        </div>
      </div>
      <div className="flex justify-center bg-slate-300">
        <div className="flex flex-wrap w-full gap-10 p-10">
          {data &&
            data.length > 0 &&
            data
              .map((product) => <Product key={product.id} data={product} />)
              .slice(0, 14)}
        </div>
      </div>
    </>
  );
};
