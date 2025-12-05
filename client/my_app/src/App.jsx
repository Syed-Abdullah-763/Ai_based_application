import { useState } from "react";
import PrivateRoute from "./routes/private";
import PublicRoute from "./routes/public";
import LandingPage from "./pages/landing";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/notFound";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import OtpVerify from "./pages/otp";
import ForgotPassword from "./pages/forgetPassword";
import ChangePassword from "./pages/changePassword";
import RequestOtp from "./pages/requestOtp";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route index element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/request-otp" element={<RequestOtp />} />
          <Route path="/otp-verification" element={<OtpVerify />} />
          <Route path="/forget-password" element={<ForgotPassword />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
