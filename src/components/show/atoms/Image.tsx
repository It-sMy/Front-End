import React from 'react'
import styled from 'styled-components';
import dummy from"../../../assets/images/dummy24px.png"

interface IProps{
imageUrl?:string,
width?:number,
height?:number
}
const Image = (props:IProps) => {
    const {imageUrl ,width,height}=props;
    
    console.log(typeof(dummy))
  return (
    <MyImg src={imageUrl?imageUrl:dummy} width={width} height={height} alt="없음"></MyImg>
  )
}

export default Image

const MyImg=styled.img<IProps>`
   ${(props)=>props.width&&`width:${props.width}`+"px;"}
   ${(props)=>props.height&&`height:${props.height}`+"px;"}
`