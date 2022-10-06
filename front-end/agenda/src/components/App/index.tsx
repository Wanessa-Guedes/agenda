import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/auth";
import SignIn from "../../Pages/SignIn";
import SignUp from "../../Pages/SignUp";
import { Home } from "../../Pages/Home";

export const App = () => {
  const { isLogged } = useAuth();

  return (
    <>
      <Routes>
        {isLogged ? (
          <>
            <Route path="/" element={<Home />} />
          </>
        ) : (
          <>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </>
        )}
        <Route
          path="*"
          element={<Navigate to={isLogged ? "/" : "/sign-in"} />}
        />
      </Routes>
    </>
  );
};
