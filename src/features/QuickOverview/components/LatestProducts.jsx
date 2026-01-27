import { useNavigate } from "react-router";
import SectionTitle from "../../../components/commons/SectionTitle";
import { products } from "../../../data/products";
import ProductCard from "./ProductCard";

const LatestProducts = () => {
  const Button = () => {
    const navigate = useNavigate();
    const CTAaction = () => {
      navigate("/products");
    };
    return (
      <button className="primary-bg py-2 px-3" onClick={CTAaction}>
        صفحه محصولات
      </button>
    );
  };

  return (
    <div>
      <SectionTitle title="لیست آخرین محصولات" Button={<Button />} />
      <div className="space-y-3">
        {products.slice(0, 5).map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default LatestProducts;
