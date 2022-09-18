import React from "react";
import { text } from "stream/consumers";
import Label from "../atoms/Label";

interface Iprops {
  text: string;
  fontsize?: Number;
  color?: string;
  scrollHeight: Number;
//   children: JSX.Element;
}

const ScrollLabel = (props:Iprops) => {
    const {text,fontsize,color,scrollHeight,}=props;
  return (
    <div>
      <Label text={text} fontSize={fontsize} color={color}></Label>
    </div>
  );
};

export default ScrollLabel;
