import React from 'react';
import { Routes, Route } from 'react-router-dom'

const Login = React.lazy(() => import('./pages/Login'));
const SignUp = React.lazy(() => import('./pages/SignUp'));
const ForgotPassword = React.lazy(() => import('./pages/ForgotPassword'));
const Home = React.lazy(() => import('./pages/Home'));
// api.js signinform.jss emailsignup.js fb chalu krna chahiye ya ni?
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/emailsignup' element={<SignUp />} />
        <Route path='/password/reset' element={<ForgotPassword />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;