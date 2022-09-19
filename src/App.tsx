import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import ShowPage from "./pages/ShowPage";
import TestPage from "./pages/TestPage";
import { _session_key } from "./configs/configs";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { userDataCheckFB } from "./redux/modules/users";
import { Container } from "react-bootstrap";

function App() {
  const userData = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  React.useLayoutEffect(() => {
    if (is_session) {
      dispatch(userDataCheckFB());
    }
  }, []);
  console.log(userData);

  return (
    <div className="App">
        <button onClick={() => navigate("/create")}>글 작성페이지로</button>
        <button onClick={() => navigate("/story")}>글 확인 페이지로</button>
        <Routes>
          <Route index element={<TestPage />} />
          <Route path={"/create"} element={<CreatePage />} />
          <Route path={"/story"} element={<ShowPage />} />
        </Routes>
    </div>
  );
}

export default App;
