import { Link } from "react-router-dom";
import { Constants } from "../constants";
import { useAxios } from "../hook/useAxios";
import User from "../pages/User";

export const Users = () => {
  const { data: users, setData: setUsers } = useAxios(`${Constants.API_URL}/users`, {
    selector: "users",
  });

  return (
    <>
      <div className="flex justify-center bg-white">
        <div className="flex flex-wrap w-full gap-10 p-10">
          {users &&
            users.length > 0 &&
            users
              .map((user) => <User key={user.id} data={user} />)
              .slice(0, 10)}
        </div>
      </div>
    </>
  );
};
