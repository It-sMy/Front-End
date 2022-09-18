import React from 'react'
import styled from 'styled-components';
import { FlexRowDiv } from '../../../styles/common';
import GageBar from '../atoms/GageBar'
import Image from '../atoms/Image'

interface IProps{
    stackExp: "Tried" | "Experiencer" | "Expert" | "Master";

}

const SkillStack = ({stackExp}:IProps) => {
    

  return (
    <Wrap>
    <Image></Image>
    <LovationGageBar>
    <GageBar stackExp={stackExp}></GageBar>
    </LovationGageBar>
    </Wrap>
  )
}

export default SkillStack

const Wrap=styled(FlexRowDiv)`
align-items: center;
`

const LovationGageBar=styled.div`
    margin-left: 24px;
`