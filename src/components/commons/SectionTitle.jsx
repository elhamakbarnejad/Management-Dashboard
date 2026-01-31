import { useState } from "react";
import { useNavigate } from "react-router";

const CTAactionUsers = ({ path, label, loadingLabel }) => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const clickHandler = () => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
    }, 2000);
  };
  return (
    <button
      onClick={clickHandler}
      disabled={loading}
      className="px-3 py-2 primary-bg text-white rounded-md text-sm cursor-pointer hover:opacity-80 transition-all duration-150"
    >
      {loading ? loadingLabel : label}
    </button>
  );
};

const SectionTitle = ({ title }) => {
  return (
    <div className=" flex items-center justify-between px-5 py-5 shadow border primary-border-color">
      <div>
        <h2 className="text-2xl font-bold font-IRANSansX">{title}</h2>
      </div>
      <div className="flex items-center justify-center w-64  gap-2">
        {" "}
        <div className="flex items-center gap-3">
          <CTAactionUsers
            label="صفحه محصولات"
            path="/products"
            loadingLabel="در حال انتقال ..."
          />
        </div>
        <div className="flex items-center gap-3">
          <CTAactionUsers
            label="صفحه کاربران"
            path="/users"
            loadingLabel="در حال انتقال ..."
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
