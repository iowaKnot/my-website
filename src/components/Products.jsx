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
      <div className="flex justify-center bg-white">
        <div className="flex flex-wrap w-full gap-10 p-10">
          {data &&
            data.length > 0 &&
            data
              .map((product) => <Product key={product.id} data={product} />)
              .slice(0, 10)}
        </div>
      </div>
    </>
  );
};
