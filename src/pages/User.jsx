const User = ({ data }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-800">
      <img className="w-full" src={data.image} alt="Propic" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">
          <p>
            {data.firstName} {data.lastName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
