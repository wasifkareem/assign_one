import { useDispatch } from "react-redux";

const ConfWidget = (props) => {
  const handleClick = props.actionProvider.handleConf;

  return (
    <div>
      <button
        onClick={handleClick}
        className=" bg-cyan-100 border border-cyan-700 rounded p-1"
      >
        Got it
      </button>
    </div>
  );
};

export default ConfWidget;
