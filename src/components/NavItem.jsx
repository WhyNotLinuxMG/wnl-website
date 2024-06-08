import { Link } from "react-router-dom";


function NavItem({to='', children}) {
  // return (
  //   <a href="#" className="hidden font-DMMono text-white sm:block">
  //     {props.children}
  //   </a>
  // );

  
  return (
    <Link to={to} className="font-DMMono text-white">
      {children}
    </Link>
  );
}
export default NavItem;
