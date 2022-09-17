import React, { useState } from 'react'
import styled from 'styled-components';
import IntroSection from '../components/createPage/IntroSection';
import ProfileSection from '../components/createPage/ProfileSection';
import ProjectSection from '../components/createPage/ProjectSection';
import SkillSection from '../components/createPage/SkillSection';

const CreatePage = () => {

  return (
    <div>
      <IntroSection/>
      <ProfileSection/>
      <SkillSection/>
      <ProjectSection/>
    </div>
  )
}

export default CreatePage;