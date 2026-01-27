import { FaEllipsis } from "react-icons/fa6";
import { Link } from "react-router";

const ProductCard = ({ ...product }) => {
  const { img, title, description, price } = product;
  return (
    <article className="flex items-center gap-3 p-3 mt-3  border primary-border-color shadow rounded-md   hover:scale-101 duration-150 hover:bg-linear-to-t hover:from-neutral-200/50">
      <div className="size-24! min-w-24 max-w-24">
        <img
          src={img}
          alt={title}
          className="size-full object-cover rounded-lg"
        />
      </div>
      <div className="h-full flex-justify-between flex-col">
        <div className="space-y-3">
          <p>
            <strong>{title}</strong>
          </p>
          <p className="text-sm  line-clamp-3">{description}</p>
        </div>
        <div className="flex gap-1 items-center">
          <span className="font-black">{price?.toLocaleString("fa-IR")}</span>
          <span className="text-sm ">تومان</span>
        </div>
        <div className=" flex items-center justify-between gap-1 w-fit text-rose-400">
          <span className="text-sm">بیشتر</span>
          <Link to="/products" className="text-2xl cursor-pointer">
            <FaEllipsis />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
