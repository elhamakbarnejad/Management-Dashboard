import { HiEye } from "react-icons/hi";

const ChangeVisibility = ({ product, onChangeVisibility }) => {
  return (
    <div>
      <button
        className="text-sky-700 hover:opacity-80 transition-all duration-150 text-xl hover:text-lg"
        onClick={() => onChangeVisibility(product.id)}
      >
        <HiEye />
      </button>
    </div>
  );
};

export default ChangeVisibility;
