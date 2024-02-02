import { useEffect, useState } from "react";

export const Posts = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (error) {
      setError(error);
    }

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const result = await response.json();

      setData(result);
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
      {data &&
        data.length > 0 &&
        data
          .map((post) => (
            <div className="flex flex-col rounded overflow-hidden shadow-lg bg-slate-300 p-2 m-4" key={post.id}>
              <div className="font-bold text-2xl mb-2 border-2 rounded-md border-transparent w-max self-center text-slate-800">Title</div>
              <div className="font-semibold text-md mb-2 bg-slate-300">{post.body}</div>
            </div>
          ))
          .slice(0, 7)}
    </>
  );
};
