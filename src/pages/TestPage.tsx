import React from "react";
import { googleLogout, googleSessionLogin } from "../apis/auth";
import { getData, setData } from "../apis/data";
import { useAppDispatch } from "../redux/hooks";
import { userDataCheckFB } from "../redux/modules/users";
import { introData } from "../types/data";
import styled from "styled-components";
import { getIconURL } from "../apis/icon";

const TestPage = () => {
  const dispatch = useAppDispatch();

  const clickToLogin = () => {
    googleSessionLogin();
    dispatch(userDataCheckFB());
  };

  const tmpData: introData = {
    name: "송하준",
    stack: "FrontEnd",
  };

  return (
    <div>
      <ICON />
      <button onClick={clickToLogin}>구글 로그인 됨?</button>
      <button onClick={() => googleLogout()}>구글 로그아웃 됨?</button>
      <button onClick={() => setData(tmpData, "Intro")}>글 작성 됨?</button>
      <button onClick={() => getData("Intro")}>글 불러오기 됨?</button>
      <button onClick={() => getIconURL("visual studio code")}>해보자</button>
      
    </div>
  );
};

const url = "https://img.shields.io/badge/-EBF1F3.svg?&style=for-the-badge&logo=React&logoColor=333"
const ICON = styled.div`
width: 42px;
height: 42px;
aspect-ratio:1;
background-image:url(${url});
background-position: -10px;
background-size: 200%;
`
export default TestPage;
