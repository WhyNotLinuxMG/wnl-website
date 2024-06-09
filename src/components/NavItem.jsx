import { Link } from "react-scroll";

function NavItem({ className = "link", children, gotolink = "#" }) {
  // return (
  //   <a href="#" className="hidden font-DMMono text-white sm:block">
  //     {props.children}
  //   </a>
  // );

  return (
    <Link
      to={gotolink}
      className={`font-DMMono text-white cursor-pointer relative ${className}`}
    >
      <span
        className="hover:before:block before:left-1/2 before:absolute before:w-2 before:rounded-full
       before:h-2 before:bg-yellow before:-translate-x-1/2 before:-bottom-2 before:hidden"
      >
        {children}
      </span>
    </Link>

    // <Link to={to} className="font-DMMono text-white">
    //   {children}
    // </Link>
  );
}
export default NavItem;
