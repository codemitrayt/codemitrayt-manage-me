import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "./layouts/root-layout";
import GuestLayout from "./layouts/guest-layout";

import Home from "./pages/home";
import SignIn from "./pages/auth/sign-in";
import SignUp from "./pages/auth/sign-up";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="auth">
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>

      <Route element={<GuestLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Route>
  )
);

export default Router;
