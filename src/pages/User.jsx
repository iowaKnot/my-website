const User = ({ data, onDelete }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-1">
      <img className="w-[200px] h-[200px]" src={data.image} alt="Propic" />
      <div className="font-bold text-2xl mb-2 border-2 rounded-md border-transparent w-max self-center text-slate-800">
        {data.firstName}
      </div>
      <div className="font-bold text-2xl mb-2 border-2 rounded-md border-transparent w-max self-center text-slate-800">
        {data.lastName}
      </div>
      <button
        className="text-white bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-800 shadow-lg shadow-slate-500/50 dark:shadow-lg dark:shadow-slate-800/80 font-medium rounded-lg text-md p-1 text-center"
        onClick={() => onDelete(data.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default User;
