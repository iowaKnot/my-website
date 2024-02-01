import { useEffect, useState } from "react";

export const GithubUser = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.github.com/users/iowaKnot");

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
      <div className="w-max rounded overflow-hidden shadow-lg bg-slate-100 p-2">
        {data && (
          <>
            <img src={data.avatar_url} className="w-[150px] h-[150px]"/>
            <div>{data.login}</div>
            <div>{data.name}</div>
          </>
        )}
      </div>
    </>
  );
};
