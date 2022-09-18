import React from "react";
import styled from "styled-components";
import { FlexRowDiv } from "../../../styles/common";
import Label from "../atoms/Label";
import Logo from "../molecules/Logo";
import ScrollLabel from "../molecules/ScrollLabel";

const Header = () => {
  const scrollLabelList:Array<any> = [
    { text: "profile", scrollHeight: 89 },
    { text: "Skills", scrollHeight: 523 },
    { text: "Blogs", scrollHeight: 837 },
    { text: "Project", scrollHeight: 1320 },
  ];
  return (
    <Wrap>
      <LocationLogo>
        <Logo></Logo>
      </LocationLogo>
      <WrapScrollLabel>
        {scrollLabelList.map((v, i) => (
          <ScrollLabel
            key={i}
            text={v.text}
            scrollHeight={v.scrollHeight}
            color="#8CC9EB"
          ></ScrollLabel>
        ))}
      </WrapScrollLabel>
      <LocationLogin>
        <Label text="로그인" fontSize={13} color="#A8C4D3"></Label>
      </LocationLogin>
    </Wrap>
  );
};

export default Header;

const Wrap = styled(FlexRowDiv)`
  width: 852px;
  justify-content: center;
  align-items: center;
`;
const LocationLogo = styled.div`
  margin-left: 58px;
`;
const WrapScrollLabel = styled(FlexRowDiv)`
  margin-left: 87.35px;
  width: 462.08px;
  justify-content: space-between;
`;

const LocationLogin = styled.div`
  margin-left: 63.92px;
  cursor: pointer;
`;
