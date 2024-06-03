import Logo from "../ressources/logos_linux-tux.svg";
import Drop from "./Drop";
import NavItem from "./NavItem";
import { useState, useEffect, useRef } from "react";
const Nav = () => {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const [navPaddingY, setNavPaddingY] = useState("0.75rem");
  const [borderWidth, setBorderWidth] = useState("0px");
  const nav = useRef(null);

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleClosingBurger = () => {
    if (window.innerWidth >= 1024) {
      setIsBurgerOpen(false);
    }
  };

  const handleBurgerClick = () => {
    if (isBurgerOpen) {
      setIsBurgerOpen(false);
      window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
    } else {
      setIsBurgerOpen(true);
      setnavSize("70vh");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleClosingBurger, false);
    return () => {
      window.removeEventListener("resize", handleClosingBurger);
    };
  }, []);

  const listenScrollEvent = () => {
    window.scrollY > 10
      ? (setnavColor("#020F13"), setBorderWidth("1px"))
      : (setnavColor("transparent"), setBorderWidth("0px"));
    window.scrollY > 10
      ? (setnavSize("5rem"), setNavPaddingY("1rem"))
      : (setnavSize("10rem"), setNavPaddingY("1.25rem"));
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <header
      ref={nav}
      className={`flex font-DMMono capitalize lg:flex-row lg:items-center lg:justify-between flex-col fixed w-full top-0 left-0 z-50 lg:px-5 px-4 lg:py-5 border-raven
       ${isBurgerOpen ? "top-section justify-start " : ""}`}
      style={{
        backgroundColor: navColor,
        height: navSize,
        paddingTop: navPaddingY,
        paddingBottom: navPaddingY,
        borderBottomWidth: borderWidth,
        transition: "all 0.7s ease-in-out",
      }}
    >
      {/* LOGO */}
      <div className="flex lg:w-auto w-full lg:block justify-between items-center ">
        <div className="flex items-center justify-between ">
          <div className="mr-3">
            <img src={Logo} className=" w-12 lg:w-16 h-auto" />
          </div>
          <div className=" h-6 text-2xl lg:text-3xl text-white text-center  Kontes-Compressed sm:block">
            Why not <span className="color-yellow-sea">Linux</span>
          </div>
        </div>

        {/* BURGER BUTTON FOR SMALL SCREEN */}
        <button
          className="lg:hidden flex flex-col relative"
          onClick={() => handleBurgerClick()}
        >
          <span
            className={`w-6 h-1 bg-white mb-1 transition-[transform_0.5s] duration-500 ${
              isBurgerOpen
                ? " -translate-x-1/2 rotate-45 absolute -translate-y-1/2 top-1/2 left-1/2"
                : ""
            }`}
          ></span>
          <span
            className={`w-6 h-1 bg-white mb-1 transition-opacity ${
              isBurgerOpen ? "opacity-0" : " delay-100"
            }`}
          ></span>
          <span
            className={`w-6 h-1 bg-white mb-1 transition-[tranform_0.7s] duration-700 ${
              isBurgerOpen
                ? " -translate-x-1/2 -rotate-45 bg-red-300 absolute -translate-y-1/2 top-1/2 left-1/2 "
                : ""
            }`}
          ></span>
        </button>
      </div>

      {/* MENU FOR LARGE SCREEN AND WHEN BURGER IS OPEN FOR SMALL SCREEN */}
      <div
        className={`lg:flex lg:h-auto lg:flex-row flex-col  items-center leading-5 gap-10 overflow-hidden ${
          isBurgerOpen ? "space-y-5 h-full py-10 flex " : "hidden"
        }`}
      >
        <NavItem>À propos</NavItem>
        <Drop />
        <NavItem>Archive</NavItem>
        <NavItem>FaQ</NavItem>

        <button
          type="button"
          className=" text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
        >
          Inscription
        </button>
      </div>
    </header>
  );
};
export default Nav;
