import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
  import Signup from "../../Views/Signup/signup"
  import Signin from "../../Views/Signin/signin"
  import ForgetPassword from '../../Views/ForgetPassword/forgetPassword'
  import Home from '../../Views/Home/home';

function MainRoute() {
  return <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/forgot_password" element={<ForgetPassword />} />
  </Routes>
</BrowserRouter>;
}

export default MainRoute;
