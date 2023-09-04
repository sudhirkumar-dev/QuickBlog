// import React from 'react'

import { Route, Routes } from "react-router";
import LoginPage from "./components/LoginPage";
import AllPosts from "./Pages/AllPosts";
import Layout from "./Layout";

const App = () => {
  return (
    <>
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<AllPosts/>}/>
            <Route path="/login" element={<LoginPage />}/>
          </Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
