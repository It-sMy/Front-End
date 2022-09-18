import React from 'react'
import GageBar from '../components/show/atoms/GageBar'
import Label from '../components/show/atoms/Label'
import MarkdownList from '../components/show/molecules/MarkdownList'
import Body from '../components/show/templates/Body'
import Header from '../components/show/templates/Header'




const ShowPage = () => {
  return (
    <>
    <Header></Header>
    <GageBar stackExp='Tried'></GageBar>
    <hr/>
    <GageBar stackExp='Experiencer'></GageBar>
    <hr/>
    <GageBar stackExp='Expert'></GageBar>
    <hr/>
    <GageBar stackExp='Master'></GageBar>
    <Body/>
    
    </>
    
  )
}

export default ShowPage