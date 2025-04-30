import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="p-4 bg-sky-700 text-white h-28 flex justify-between items-center gap-8">
      PARKINGS
      <div className="mr-8 flex items-center gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline underline-offset-8" : "text-sky-500"
          }>
          <p>Lijst</p>
        </NavLink>
        <NavLink
          to="map"
          className={({ isActive }) =>
            isActive ? "underline underline-offset-8" : "text-sky-500"
          }>
          <p>Kaart</p>
        </NavLink>
        <NavLink
          to="account"
          className={({ isActive }) =>
            isActive ? "underline underline-offset-8" : "text-sky-500"
          }>
          <p>Account</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
