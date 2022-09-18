import React from "react";

import Container from "react-bootstrap/Container";

import Body from "../components/show/templates/Body";
import Footer from "../components/show/templates/Footer";
import Header from "../components/show/templates/Header";

import ShowIntroSection from "../components/show/organisms/ShowIntroSection";
import ShowProfileSection from "../components/show/organisms/ShowProfileSection";
import ShowSkillSection from "../components/show/organisms/ShowSkillSection";
import ShowProjectSection from "../components/show/organisms/ShowProjectSection";
import ShowBlogSectrion from "../components/show/organisms/ShowBlogSectrion";
import { ThickBr } from "../styles/common";

const ShowPage = () => {
  return (
    <>
      <Container>
        <Header>
          <ThickBr />
        </Header>
        <Body>
          <ShowIntroSection />
          <ShowProfileSection />
          <ShowSkillSection />
          <ShowProjectSection />
          <ShowBlogSectrion />
        </Body>
        <Footer></Footer>
      </Container>
    </>
  );
};

export default ShowPage;
