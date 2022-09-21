import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IntroSection from "../components/createPage/IntroSection";
import ProfileSection from "../components/createPage/ProfileSection";
import ProjectSection from "../components/createPage/ProjectSection";
import SkillSection from "../components/createPage/SkillSection";

const CreatePage = () => {
  const [thisState, setThisState] = useState("Intro");

  useEffect(() => {
    console.log("유즈이펙트", thisState);
  }, [thisState]);

  return (
    <div>
      {thisState == "Intro" && <IntroSection setThisState={setThisState} />}

      {thisState == "Profile" && <ProfileSection setThisState={setThisState} />}

      {thisState == "Skill" && <SkillSection setThisState={setThisState} />}

      {thisState == "Project" && <ProjectSection setThisState={setThisState} />}
    </div>
  );
};

export default CreatePage;
