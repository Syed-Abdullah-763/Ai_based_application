import { useState } from "react";
import PrivateRoute from "./routes/private";
import PublicRoute from "./routes/public";
import LandingPage from "./pages/landing";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/motFound";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route index element={<LandingPage />} />
        </Route>

        <Route element={<PrivateRoute />}></Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
