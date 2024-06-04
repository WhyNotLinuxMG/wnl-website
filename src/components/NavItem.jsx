function NavItem(props) {
  // return (
  //   <a href="#" className="hidden font-DMMono text-white sm:block">
  //     {props.children}
  //   </a>
  // );

  
  return (
    <a href="#" className="font-DMMono text-white">
      {props.children}
    </a>
  );
}
export default NavItem;
