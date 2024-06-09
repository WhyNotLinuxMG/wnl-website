import { Fragment, useEffect } from "react";
import { Menu, MenuButton, MenuItems, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-scroll";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Drop({ setIsBurgerOpen }) {
  useEffect(() => {
    document.querySelectorAll(".link").forEach((link) => {
      link.addEventListener("click", () => setIsBurgerOpen(false));
    });
    return () => {
      document.querySelectorAll(".link").forEach((link) => {
        link.removeEventListener("click", () => setIsBurgerOpen(false));
      });
    };
  }, []);

  //smoth scroll
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5  font-DMMono text-white  sm:flex">
          <span className="hover:text-yellow">Activités</span>
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </MenuButton>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute lg:right-0 -right-1/2 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <DropLink to={"conference"} className="link">
              Conférence
            </DropLink>
            <DropLink to={"stand"} className="link">
              Stand
            </DropLink>
            <DropLink to={"salle_expo"} className="link">
              Salle d'exposition
            </DropLink>
            <DropLink to={"statistique"} className="link">
              Statistiques
            </DropLink>
            <DropLink to={"competition"} className="link">
              Compétition
            </DropLink>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
}

function DropLink({ to, children }) {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      offset={-50}
      className={
        "block px-4 py-2 text-sm font-DMMono cursor-pointer hover:bg-yellow"
      }
    >
      {children}
    </Link>
  );
}
