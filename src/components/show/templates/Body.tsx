import React from "react";

export interface LayoutProps  { 
  children?: React.ReactNode
}

const Body = (props:LayoutProps) => {
  return (
    <>
      {props.children}
    </>
  );
};

export default Body;