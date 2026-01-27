import { Outlet } from "react-router";
import BackgroundOverlay from "../commons/BackgroundOverlay/BackgroundOverlay";
import Sidebar from "../../features/Sidebar/Sidebar";
import Topbar from "../../features/Topbar/Topbar";
import ThemeBtn from "../ThemeBtn";

const DashboardLayout = () => {
  return (
    <main id="root" className="flex">
      <Sidebar />
      <section className="grow">
        <Topbar />
        <div id="content" className="container mx-auto">
          <div className="relative z-10">
            <Outlet />
          </div>
          <div className="fixed bottom-4 right-4 p-4 z-100 *:bg-black *:text-white">
            {" "}
            <ThemeBtn />
          </div>
          {/* <BackgroundOverlay /> */}
        </div>
      </section>
    </main>
  );
};

export default DashboardLayout;
