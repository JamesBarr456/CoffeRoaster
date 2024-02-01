import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Close, Logo, Menu } from "./static/index";

const barra = "after:content-[''] after:bg-dark-gray-blue  after:absolute  after:w-full after:h-1 after:-bottom-1  after:left-0  after:scale-x-0 after:duration-500 after:ease-in-out hover:after:transform hover:after:scale-x-100";
const commonStylesNav = `transition-all relative  md:hover:text-dark-gray-blue md:uppercase ${barra}`;
const bgSidebar = "bg-gradient-to-t from-white/50  from-10% via-white/60 via-30% to-white/100 to-60%";

export const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const handlerMenu = () => {
    setSidebar(!sidebar);
  };

  const handleNavLinkClick = () => {
    if (window.innerWidth <= 765) {
      setSidebar(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 765) {
        setSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="container  transition-all mx-auto flex items-center justify-between  px-6 py-8 md:px-10">
      <Logo className="text-dark-gray-blue" />

      <div
        className={`${sidebar ? "flex" : "hidden"} ${bgSidebar} absolute transition-all left-0 top-20 z-10 min-h-screen min-w-full flex-col items-center gap-8  pt-10 font-fraunces text-2xl  font-bold text-dark-gray-blue md:static md:flex md:min-h-0 md:w-auto md:min-w-0 md:flex-row md:bg-inherit md:pt-0 md:font-barlow md:text-base md:text-light-gray`}
      >
        <NavLink
          className={commonStylesNav}
          to="/"
          onClick={handleNavLinkClick}
        >
          Home
        </NavLink>
        <NavLink
          className={commonStylesNav}
          to="/about"
          onClick={handleNavLinkClick}
        >
          About Us
        </NavLink>
        <NavLink
          className={commonStylesNav}
          to="/create"
          onClick={handleNavLinkClick}
        >
          Create Your Plan
        </NavLink>
      </div>

      <div onClick={handlerMenu} className="cursor-pointer md:hidden">
        {sidebar ? <Close /> : <Menu />}
      </div>
    </header>
  );
};