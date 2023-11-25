import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/chat");
  };
  return (
    <div className=" flex justify-center">
      <div className=" flex flex-col w-[277px] h-[551.594px] shadow-md shadow-gray-500">
        <Navbar />
        <div className=" flex justify-between items-center p-3 bg-cyan-300 py-6">
          <div className="  ">
            <h2 className=" text-lg font-semibold text-cyan-700">
              Welcome to Happily Ever !
            </h2>
            <p className=" text-gray-900">Good Morning User</p>
          </div>
          <div className=" rounded-full bg-white px-4 mr-4 text-2xl font-semibold p-2">
            K
          </div>
        </div>

        <div>
          <div className=" shadow shadow-black p-2 py-4 my-5 mx-3 border-l-4 border-orange-600 rounded flex flex-col gap-10">
            <h2 className=" text-lg font-semibold">
              Enroll into student Info System
            </h2>

            <div className=" flex justify-end  mr-2">
              <button
                onClick={handleClick}
                className=" bg-cyan-600 text-white font-semibold rounded-md p-3"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
