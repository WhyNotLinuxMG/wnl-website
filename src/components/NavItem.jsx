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
      <span className=" hover:text-yellow ">{children}</span>
    </Link>

    // <Link to={to} className="font-DMMono text-white">
    //   {children}
    // </Link>
  );
}
export default NavItem;
