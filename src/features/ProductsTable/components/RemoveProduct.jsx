import { BiTrash } from "react-icons/bi";

const RemoveProduct = ({ product, onRemove }) => {
  return (
    <div>
      <button
        className="text-rose-700 hover:opacity-80 transition-all duration-150 text-xl hover:text-lg"
        onClick={() => onRemove(product.id)}
      >
        <BiTrash />
      </button>
    </div>
  );
};

export default RemoveProduct;
