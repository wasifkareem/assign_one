import { useDispatch } from "react-redux";

const ConfWidget = (props) => {
  const handleClick = props.actionProvider.handleConf;

  return (
    <div className=" w-full flex justify-center">
      <button
        onClick={handleClick}
        className=" bg-cyan-100 border text-cyan-700 border-cyan-700 rounded p-1 px-4"
      >
        Got it
      </button>
    </div>
  );
};

export default ConfWidget;
