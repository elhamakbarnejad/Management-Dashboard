import AdvSection from "./components/AdvSection";
import Divided from "./components/Divided";
import AvatarSection from "./components/AvatarSection";
import ManagerSection from "./components/ManagerSection";
import SearchSection from "./components/SearchSection";
import LogoutBtn from "./components/LogoutBtn";
const Topbar = () => {
  return (
    <div className="w-full h-20 relative z-10 px-5 border-b primary-border-color flex items-center justify-between *:flex *:items-center *:gap-3">
      <div>
        <AdvSection />
      </div>
      <SearchSection />

      <div className="flex items-center justify-end gap-2 w-80 ">
        <AvatarSection />
        <Divided />
        <ManagerSection />
        <Divided />
        <LogoutBtn />
      </div>
    </div>
  );
};

export default Topbar;
