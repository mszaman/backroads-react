import { useState } from "react";
import logo from "../assets/images/logo.svg";

export default function Navbar() {
  const [navClass, setNavClass] = useState("-translate-x-full");
  const [menuIconClass, setMenuIconClass] = useState("fa-bars");

  const toggleNavMenu = () => {
    setNavClass((nc) => {
      return nc === "-translate-x-full" ? "translate-x-0" : "-translate-x-full";
    });
    setMenuIconClass((mic) => {
      return mic === "fa-bars" ? "fa-xmark" : "fa-bars";
    });
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
          <ul
            id="nav-links"
            className={`absolute left-0 top-16 z-10 flex min-h-screen w-full ${navClass} flex-col gap-y-10 bg-white p-10 tracking-[0.25rem] text-grey-1 lg:static lg:top-0 lg:min-h-16 lg:-translate-x-0 lg:flex-row lg:items-center lg:justify-center lg:gap-x-3 lg:p-0`}
          >
            <li>
              <a className="duration-300 hover:text-primary-4" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="duration-300 hover:text-primary-4" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="duration-300 hover:text-primary-4" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="duration-300 hover:text-primary-4" href="#tours">
                Tours
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-x-10">
            <ul className="flex gap-x-5 text-primary-5">
              <li>
                <a href="">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-telegram"></i>
                </a>
              </li>
            </ul>
            <i
              className={`fa-solid ${menuIconClass} cursor-pointer text-2xl text-primary-5 lg:hidden`}
              onClick={toggleNavMenu}
            ></i>
          </div>
        </nav>
      </header>
    </>
  );
}
