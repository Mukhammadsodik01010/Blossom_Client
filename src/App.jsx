import { Route, Routes } from "react-router-dom";
import HomeComp from "./components/home";
import NotFoundComp from "./components/pages/not_found";
import SignUpComp from "./components/Auth/sign_up";
import SignInComp from "./components/Auth/sign_in";
import ConfirmPassword from "./components/Auth/confirm_password";
import ResetPassword from "./components/Auth/reset_password";
import NewPassword from "./components/Auth/new_password";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomeComp />} />
      <Route path="/sign-up" element={<SignUpComp />} />
      <Route path="/sign-in" element={<SignInComp />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/confirm-password" element={<ConfirmPassword />} />
      <Route path="/new-password" element={<NewPassword />} />
      <Route path="*" element={<NotFoundComp />} />
    </Routes>
  );
}

export default Router;
