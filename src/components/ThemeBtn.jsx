import { useContext } from "react";
import ThemeContext from "../context/Theme";
import { FaMoon, FaSun } from "react-icons/fa6";

const ThemeBtn = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer text-3xl border-2 primary-border-color rounded-full p-2 transition-all duration-150 hover:bg-amber-500"
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeBtn;
