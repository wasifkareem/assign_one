import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { GoTab } from "react-icons/go";

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <div className=" h-[8vh] shadow-md shadow-gray-500 flex  justify-between items-center p-6">
        <img
          className=" cursor-pointer"
          onClick={handleClick}
          width="40px"
          src={logo}
          alt="logo"
        />
        <GoTab className=" border  border-gray-500 text-gray-500 rounded-md h-7 w-6 p-1" />
      </div>
    </div>
  );
};

export default Navbar;
