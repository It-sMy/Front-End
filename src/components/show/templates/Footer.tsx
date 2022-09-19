import React from "react";

export interface LayoutProps  { 
  children?: React.ReactNode
}

const Footer = (props:LayoutProps) => {
  return (
    <>
      {props.children}
    </>
  );
};

export default Footer;