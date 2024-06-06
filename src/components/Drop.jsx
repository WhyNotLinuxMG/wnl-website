import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-scroll";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Drop() {
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
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5  font-DMMono text-white  sm:flex">
          Activités
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
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
        <Menu.Items className="absolute lg:right-0 -right-1/2 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <DropLink to={"conference"}>Conférence</DropLink>
            <DropLink to={"stand"}>Stand</DropLink>
            <DropLink to={"salle_expo"}>Salle d'exposition</DropLink>
            <DropLink to={"statistique"}>Statistiques</DropLink>
            <DropLink to={"competition"}>Compétition</DropLink>
          </div>
        </Menu.Items>
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
      className={"block px-4 py-2 text-sm font-DMMono cursor-pointer"}
    >
      {children}
    </Link>
  );
}
