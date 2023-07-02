import { Outlet } from "react-router-dom";
import HeroNavigation from "../components/HeroNavigation";

function HeroRootLayout() {
  return (
    <>
      <HeroNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default HeroRootLayout;
