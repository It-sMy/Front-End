import React from "react";
import styled from "styled-components";
import { Wrap } from "../../../styles/common";
import Image from "../atoms/Image";
import UnderLine from "../molecules/UnderLine";

const ShowProjectSection = () => {
  return (
    <Wrap id="Project">
      <WrapNameAndProfile>
        <LocationImage></LocationImage>
      </WrapNameAndProfile>
    </Wrap>
  );
};

export default ShowProjectSection;

const WrapNameAndProfile = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;
const LocationImage = styled.div`
  margin-top: 25px;
`;
