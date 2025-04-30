import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col grow">
      <Header />
      <div className="flex flex-col grow p-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
