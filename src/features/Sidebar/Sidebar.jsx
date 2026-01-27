import menus from "../../data/menus";
import Menus from "../Sidebar/components/Menus";
import SidebarHeader from "../Sidebar/components/SidebarHeader";
const Sidebar = () => {
  return (
    <aside className="w-68 h-screen max-[1026px]:w-62  sticky top-0 z-10 border primary-border-color p-6 shadow">
      <SidebarHeader />
      <Menus menus={menus} />
    </aside>
  );
};

export default Sidebar;
