import { Constants } from "../constants";
import { useAxios } from "../hook/useAxios";
import User from "../pages/User";

export const Users = () => {
  const {
    data: users,
    setData: setUsers,
    refetch: refetchUsers,
  } = useAxios(`${Constants.API_URL}/users`, {
    selector: "users",
  });

  const handleDelete = (userId) => {
    setUsers(() => {
      return users.filter((user) => user.id !== userId);
    });
  };

  const handleReload = () => {
    refetchUsers();
  };

  return (
    <>
      <div className="flex justify-center flex-wrap gap-5 p-10 bg-slate-300 font-serif">
        <div className="flex flex-col w-max rounded overflow-hidden shadow-lg bg-slate-200 p-2">
          <p className="font-bold text-slate-800 text-2xl self-center">Users</p>
          <p className="font-semibold text-slate-800 text-xl">
            This is my Users.jsx component, i made it by calling this API:
            <br />
            "https://dummyjson.com/users" and, with .map array method im
            <br />
            rendering some cards, only 10, using the .slice array method.
            <br />
            Try to click on the
            <button className="text-white bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-800 shadow-lg shadow-slate-500/50 dark:shadow-lg dark:shadow-slate-800/80 font-small rounded-lg text-sm p-1 ml-2 mr-2 text-center">
              Delete
            </button>
            button in the cards and then 
            <br />
            click on
            <button
              className="text-white font-small bg-slate-700 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300 rounded-full text-sm px-5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
              onClick={handleReload}
            >
              Reload Users
            </button>
          </p>
        </div>
        <div className="flex w-max bg-slate-300">
          <div className="flex flex-wrap rounded overflow-hidden shadow-lg bg-slate-200 m-4 gap-10 p-10">
            {users &&
              users.length > 0 &&
              users
                .map((user) => (
                  <User
                    className="bg-slate-200"
                    key={user.id}
                    data={user}
                    onDelete={handleDelete}
                  />
                ))
                .slice(0, 14)}
          </div>
        </div>
      </div>
    </>
  );
};
