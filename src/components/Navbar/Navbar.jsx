import { useState } from "react";
import logo from "../../assets/images/logo.svg";
import MenuItem from "./NavItems/MenuItem";
import SocialItem from "./NavItems/SocialItem";

export default function Navbar() {
  const [toggleNavBtn, setToggleNavBtn] = useState(false);

  const toggleNavMenu = () => {
    setToggleNavBtn((tnb) => !tnb);
  };

  return (
    <>
      <header className="absolute h-16 w-full bg-white">
        <nav className="mx-auto flex h-16 w-[90vw] max-w-[1170px] items-center justify-between">
          {/* Nav Logo */}
          <div>
            <img src={logo} alt="" />
          </div>

          {/* Nav Menu Items */}
          <MenuItem
            className={`absolute left-0 top-16 z-10 flex min-h-screen w-full ${toggleNavBtn ? "translate-x-0" : "-translate-x-full"} flex-col gap-y-10 bg-white p-10 tracking-[0.25rem] text-grey-1 lg:static lg:top-0 lg:min-h-16 lg:-translate-x-0 lg:flex-row lg:items-center lg:justify-center lg:gap-x-3 lg:p-0`}
          />

          {/* Social Icons */}
          <div className="flex items-center gap-x-10">
            <SocialItem className={`flex gap-x-5 text-primary-5`} />
            <i
              className={`fa-solid ${toggleNavBtn ? "fa-xmark" : "fa-bars"} cursor-pointer text-2xl text-primary-5 lg:hidden`}
              onClick={toggleNavMenu}
            ></i>
          </div>
        </nav>
      </header>
    </>
  );
}
