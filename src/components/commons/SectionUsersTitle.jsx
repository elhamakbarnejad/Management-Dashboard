import { useState } from "react";
import { useNavigate } from "react-router";

const SectionTitle = ({ title }) => {
  const navigate = useNavigate();

  const [isDirection, setIsDirection] = useState(false);
  const [isDirectionU, setIsDirectionU] = useState(false);
  const toggle = () => {
    setIsDirection(!isDirection);
  };
  const toggleU = () => {
    setIsDirectionU(!isDirectionU);
  };

  const CTAactionUsers = () => {
    const clickHandlerUsers = () => {
      toggleU();
      setTimeout(() => {
        navigate("/products");
      }, 2000);
    };
    return (
      <button
        onClick={clickHandlerUsers}
        className="px-3 py-2 primary-bg text-white rounded-md text-sm cursor-pointer hover:opacity-80 transition-all duration-150"
      >
        {isDirectionU ? "در حال انتقال ..." : "صفحه محصولات"}
      </button>
    );
  };

  const CTAactionHome = () => {
    const clickHandler = () => {
      toggle();
      setTimeout(() => {
        navigate("/");
      }, 2000);
    };
    return (
      <button
        onClick={clickHandler}
        className="px-3 py-2 primary-bg text-white rounded-md text-sm cursor-pointer hover:opacity-80 transition-all duration-150"
      >
        {isDirection ? "در حال انتقال ..." : "صفحه اصلی"}
      </button>
    );
  };

  return (
    <div className=" flex items-center justify-between px-5 py-5 shadow-[#00bf8f] border primary-border-color bg-[#00bf8f]/5">
      <div>
        <h2 className="text-2xl font-bold font-IRANSansX">{title}</h2>
      </div>
      <div className="flex items-center justify-center w-64  gap-2">
        {" "}
        <div className="flex items-center gap-3">
          <CTAactionUsers />
        </div>
        <div className="flex items-center gap-3">
          <CTAactionHome />
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
