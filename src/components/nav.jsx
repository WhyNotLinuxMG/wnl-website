import Logo from '../ressources/logos_linux-tux.svg'
import Drop from './Drop'
import NavItem from './NavItem'
import React, { useState, useEffect } from "react";
const Nav = () => {
    const [navSize, setnavSize] = useState("10rem");
    const [navColor, setnavColor] = useState("transparent");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("#252734") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    return <header className="flex fixed w-full top-0 left-0 z-50 px-5  items-center justify-between py-5" style={{
        backgroundColor: navColor,
        height: navSize,
        transition: "all 1s"
    }}>
        <div>
            <div className="flex items-center justify-between">
                <div className="mr-3">
                    <img src={Logo} />

                    </div>
                    <div className="hidden h-6 text-3xl text-white text-center  Kontes-Compressed sm:block">Why not <span className='color-yellow-sea'>Linux</span></div>
                </div>
                <div className="hidden h-6 text-3xl text-white text-center  Kontes-Compressed sm:block">Why not <span className='color-yellow-sea'>Linux</span></div>
            </div>
        </div>

            <div className='flex items-center space-x-6 leading-5 sm:space-x-10'>
                <NavItem>À propos</NavItem>
                <Drop/>
                <NavItem>Archive</NavItem>
                <NavItem>FaQ</NavItem>
                <button type="button" className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">inscription</button>

        </div>
    </header>
}
export default Nav
