import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Instagram, LogoFooter } from "./static/index";
export const Footer = () => {
  return (
    <footer className="container mx-auto mb-20  px-6 ">
      <div className="flex flex-col items-center gap-12 bg-dark-indigo py-14 lg:flex-row lg:justify-around">
        <div className="flex flex-col gap-12 md:gap-8 lg:flex-row lg:gap-20">
          <LogoFooter />
          <div className="flex flex-col gap-6 text-center font-barlow text-xs font-bold text-light-gray md:flex-row md:gap-8">
            <NavLink className="uppercase hover:text-white" to="/">
              Home
            </NavLink>
            <NavLink className="uppercase hover:text-white" to="/about">
              About Us
            </NavLink>
            <NavLink className="uppercase hover:text-white" to="/create">
              Create Your Plan
            </NavLink>
          </div>
        </div>

        <div className="flex justify-center  gap-6 ">
          <Facebook className="cursor-pointer" />
          <Twitter className="cursor-pointer" />
          <Instagram className="cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};
