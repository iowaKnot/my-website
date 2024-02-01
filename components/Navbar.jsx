import { Link } from "react-router-dom";
import { Homepage } from "./Homepage";

const Navbar = () => {
  return (
    <nav className="flex items-center flex-wrap bg-slate-800 p-6 font-serif">
      <Homepage />
      <div className="flex w-auto gap-5 items-center">
        <div className="text-sm lg:flex-grow">
          <Link
            to="/users"
            className="block mt-4 text-white text-lg lg:inline-block lg:mt-0"
          >
            Users
          </Link>
        </div>
        <div className="text-sm lg:flex-grow">
          <Link
            to="/products"
            className="block mt-4 text-white text-lg lg:inline-block lg:mt-0"
          >
            Products
          </Link>
        </div>
        <div>
          <Link
            to="/login"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-slate-800 hover:text-slate-800 hover:bg-white mt-4 lg:mt-0"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
