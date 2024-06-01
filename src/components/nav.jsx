import Logo from "../ressources/logos_linux-tux.svg";
import Drop from "./Drop";
import NavItem from "./NavItem";
import React, { useState, useEffect } from "react";

const Nav = () => {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleClosingBurger = () => {
    if (window.innerWidth >= 1024) {
      setIsBurgerOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleClosingBurger, false);
    return () => {
      window.removeEventListener("resize", handleClosingBurger);
    };
  }, []);
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#252734") : setnavColor("transparent");
    window.innerWidth >= 1024
      ? window.scrollY > 10
        ? setnavSize("5rem")
        : setnavSize("10rem")
      : window.scrollY > 10
      ? setnavSize("5rem")
      : setnavSize("7rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <header
      //   className="flex lg:flex-row flex-col h-screen bg-yellow fixed w-full top-0 left-0 z-50 px-5  items-center justify-between py-5"
      className={`flex  fixed w-full top-0 left-0 z-50 lg:px-5 px-4 py-5  items-center justify-between
       `}
      style={
        !isBurgerOpen
          ? {
              backgroundColor: navColor,
              height: navSize,
              transition: "all 1s",
            }
          : {
              backgroundColor: navColor,
              height: navSize,
              transition: "all 1s",
            }
      }
    >
      <div className="flex lg:w-auto w-full lg:block justify-between items-center">
        <div className="flex items-center justify-between ">
          <div className="mr-3">
            <img src={Logo} className=" w-12 lg:w-16 h-auto" />
          </div>
          <div className=" h-6 text-3xl text-white text-center  Kontes-Compressed sm:block">
            Why not <span className="color-yellow-sea">Linux</span>
          </div>
        </div>
        <button
          className="lg:hidden flex flex-col"
          onClick={() => setIsBurgerOpen(!isBurgerOpen)}
        >
          <span className="w-6 h-1 bg-white mb-1"></span>
          <span className="w-6 h-1 bg-white mb-1"></span>
          <span className="w-6 h-1 bg-white mb-1"></span>
        </button>
      </div>

      <div
        className={`lg:flex items-center leading-5 lg:gap-10 ${
          isBurgerOpen ? "flex flex-col" : "hidden"
        }`}
      >
        <NavItem>À propos</NavItem>
        <Drop />
        <NavItem>Archive</NavItem>
        <NavItem>FaQ</NavItem>

        <button
          type="button"
          className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
        >
          inscription
        </button>
      </div>
    </header>
  );
};
export default Nav;
