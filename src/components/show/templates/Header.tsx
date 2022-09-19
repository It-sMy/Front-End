import React from "react";
import NavBarSection from "../organisms/NavBarSection";

export interface LayoutProps  { 
  children?: React.ReactNode
}

const Header = (props:LayoutProps) => {
  return (
    <>
    <NavBarSection/>
      {props.children}
    </>
  );
};

export default Header;
