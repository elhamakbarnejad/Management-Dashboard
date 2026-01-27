import clsx from "clsx";
import { NavLink } from "react-router";

const Menus = ({ menus }) => {
  return (
    <div className="space-y-3 mt-10">
      {menus.map((menu) => (
        <div key={menu.id}>
          <p className="text-md  font-bold select-none">{menu.title}:</p>
          <div className="mt-2 *:w-full *:flex *:items-center *:gap-2 *:h-10 *:duration-150 space-y-1  *:px-3 *:rounded-md ">
            {menu.items.map((nav) => (
              <NavLink
                to={nav.href}
                key={nav.id}
                className={({ isActive }) =>
                  clsx(isActive ? "bg-zinc-300" : "")
                }
              >
                <nav.icon />
                <span>{nav.title}</span>
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menus;
