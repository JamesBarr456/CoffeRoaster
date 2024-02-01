import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Instagram, LogoFooter } from "./static/index";
const classLink = "uppercase hover:text-white"
const classSocial = "cursor-pointer text-white hover:text-light-pink"
export const Footer = () => {
  return (
    <footer className="container mx-auto mb-20  px-6 transition-all">
      <div className="flex flex-col items-center gap-12 bg-dark-indigo py-14 lg:flex-row lg:justify-around">
        <div className="flex flex-col gap-12 md:gap-8 lg:flex-row lg:gap-20">
          <LogoFooter />
          <div className="flex flex-col gap-6 text-center font-barlow text-xs font-bold text-light-gray md:flex-row md:gap-8">
            <NavLink className={classLink} to="/">
              Home
            </NavLink>
            <NavLink className={classLink} to="/about">
              About Us
            </NavLink>
            <NavLink className={classLink} to="/create">
              Create Your Plan
            </NavLink>
          </div>
        </div>

        <div className="flex justify-center  gap-6 ">
          <Facebook className={classSocial} />
          <Twitter className={classSocial} />
          <Instagram className={classSocial} />
        </div>
      </div>
    </footer>
  );
};
