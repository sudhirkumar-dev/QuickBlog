// import React from 'react'

import { Route, Routes } from "react-router";
import LoginPage from "./components/LoginPage";
import AllPosts from "./components/AllPosts";

const App = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<AllPosts />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
