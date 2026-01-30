import { useContext } from "react";
import { LogoutContext } from "../../../context/Logout";
import clsx from "clsx";

const LogoutBtn = () => {
  const { logoutHandler, logineduser } = useContext(LogoutContext);
  return (
    <button
      onClick={logoutHandler}
      className={clsx(
        "px-6 py-2  text-white rounded-md text-sm cursor-pointer hover:opacity-80 transition-all duration-150",
        logineduser === null ? "bg-red-800" : "bg-[#019d79]",
      )}
    >
      {logineduser === null ? "Logout" : "Login"}
    </button>
  );
};

export default LogoutBtn;
