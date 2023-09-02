// import React from 'react'

import { Route, Routes } from "react-router";
import LoginPage from "./components/LoginPage";

const App = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/login" element={<LoginPage />}/>
        </Routes>
      </main>
    </>
  );
};

export default App;
