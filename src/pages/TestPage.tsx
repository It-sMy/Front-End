import React from "react";
import { googleLogout, googleSessionLogin } from "../apis/auth";
import { useAppDispatch } from "../redux/hooks";
import { userDataCheckFB } from "../redux/modules/users";

const TestPage = () => {
  const dispatch = useAppDispatch();

  const clickToLogin = () => {
    googleSessionLogin();
    dispatch(userDataCheckFB());
  };
  return (
    <div>
      <button onClick={clickToLogin}>구글 로그인 됨?</button>
      <button onClick={() => googleLogout()}>구글 로그아웃 됨?</button>
    </div>
  );
};

export default TestPage;
