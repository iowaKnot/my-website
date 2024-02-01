import { useNavigate } from "react-router-dom";

export const Homepage = () => {
  const navigate = useNavigate();

  const handleButtonHome = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <button
        onClick={handleButtonHome}
        className="font-semibold text-xl tracking-tight"
      >
        Tommaso Merli
      </button>
    </div>
  );
};
