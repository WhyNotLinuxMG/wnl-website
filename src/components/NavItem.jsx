function NavItem({ className = "link", children, gotolink = "#" }) {
  // return (
  //   <a href="#" className="hidden font-DMMono text-white sm:block">
  //     {props.children}
  //   </a>
  // );

  return (
    <a href={gotolink} className={`font-DMMono text-white ${className}`}>
      {children}
    </a>
  );
}
export default NavItem;
