import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/auth";
import SignIn from "../../Pages/SignIn";
import SignUp from "../../Pages/SignUp";

export const App = () => {
  const { isLogged } = useAuth();
  return (
    <>
      <Routes>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
};
