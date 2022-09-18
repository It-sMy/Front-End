import React from 'react'
import GageBar from '../components/show/atoms/GageBar'
import Image from '../components/show/atoms/Image'
import Label from '../components/show/atoms/Label'
import MarkdownList from '../components/show/molecules/MarkdownList'
import SkillStack from '../components/show/molecules/SkillStack'
import UnderLine from '../components/show/molecules/UnderLine'
import Body from '../components/show/templates/Body'
import Header from '../components/show/templates/Header'




const ShowPage = () => {
  return (
    <>
    <Header></Header>
    <SkillStack stackExp='Master'></SkillStack>
    <UnderLine text='FrontEnd ' fontSize={23} lineHeight={15} lineWidth={159} lineColor="#FEFFC6" xaxis={-10} yaxis={15}></UnderLine>
    <Body/>
    
    </>
    
  )
}

export default ShowPage