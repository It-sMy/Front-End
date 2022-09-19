import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import IntroSection from '../components/createPage/IntroSection';
import ProfileSection from '../components/createPage/ProfileSection';
import ProjectSection from '../components/createPage/ProjectSection';
import SkillSection from '../components/createPage/SkillSection';

const CreatePage = () => {

  const [thisState,setThisState] = useState('');

  useEffect(()=>{
    console.log('유즈이펙트',thisState)
  },[thisState])

  return (
    <div>
      {
        thisState == 'Intro' || thisState == ''?
        (<IntroSection setThisState={setThisState}/>):null
      }

      {
        thisState == 'Profile'?
        (<ProfileSection setThisState={setThisState}/>):null
      }

      {
        thisState == 'Skill'?
        (<SkillSection setThisState={setThisState}/>):null
      }

      {
        thisState == 'Project'?
        (<ProjectSection setThisState={setThisState}/>):null
      }
    </div>
  )
}

export default CreatePage;