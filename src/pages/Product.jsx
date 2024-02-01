export const Product = ({ data }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-800">
      <img className="w-full" src={data.thumbnail} alt="Propic" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">
          <p>
            {data.title} {data.brand}
          </p>
        </div>
      </div>
    </div>
  );
};
