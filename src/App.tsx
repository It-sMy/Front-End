import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useNavigate } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import ShowPage from './pages/ShowPage';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <button onClick={()=>navigate("/create")}>글 작성페이지로</button>
      <button onClick={()=>navigate("/story")}>글 확인 페이지로</button>
      <Routes>
        <Route path={"/create"} element={<CreatePage/>}/>
        <Route path={"/story"} element={<ShowPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
