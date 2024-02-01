import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Close, Logo, Menu } from "./static/index";

const commonStylesNav = "hover:text-dark-gray-blue md:uppercase";
const bgSidebar =
  "bg-gradient-to-t from-white/50  from-10% via-white/60 via-30% to-white/100 to-60%";

export const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const handlerMenu = () => {
    setSidebar(!sidebar);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="container  mx-auto flex items-center justify-between  px-6 py-8 md:px-10">
      <Logo className="text-dark-gray-blue" />

      <div
        className={`${sidebar ? "flex" : "hidden"} ${bgSidebar} absolute left-0 top-20 z-10 min-h-screen min-w-full flex-col items-center gap-8  pt-10 font-fraunces text-2xl  font-bold text-dark-gray-blue md:static md:flex md:min-h-0 md:w-auto md:min-w-0 md:flex-row md:bg-inherit md:pt-0 md:font-barlow md:text-base md:text-light-gray`}
      >
        <NavLink className={commonStylesNav} to="/">
          Home
        </NavLink>
        <NavLink className={commonStylesNav} to="/about">
          About Us
        </NavLink>
        <NavLink className={commonStylesNav} to="/create">
          Create Your Plan
        </NavLink>
      </div>

      <div onClick={handlerMenu} className="cursor-pointer md:hidden">
        {sidebar ? <Close /> : <Menu />}
      </div>
    </header>
  );
};
