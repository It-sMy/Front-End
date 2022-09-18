import React from "react";
import { googleLogout, googleSessionLogin } from "../apis/auth";
import { getData, setData} from "../apis/data";
import { useAppDispatch } from "../redux/hooks";
import { userDataCheckFB } from "../redux/modules/users";
import { introData } from "../types/data";

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
      <button onClick={clickToLogin}>구글 로그인 됨?</button>
      <button onClick={() => googleLogout()}>구글 로그아웃 됨?</button>
      <button onClick={() => setData(tmpData,"Intro")}>글 작성 됨?</button>
      <button onClick={() => getData("Intro")}>글 불러오기 됨?</button>
    </div>
  );
};

export default TestPage;
