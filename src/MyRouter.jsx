import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/loader/Loader";

const MainPage = lazy(() => import("./pages/main/MainPage"));
const AuthSignInPage = lazy(() => import("./pages/auth/AuthSignInPage"));
const AuthSignUpPage = lazy(() => import("./pages/auth/AuthSignUpPage"));

function MyRouter() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<AuthSignInPage />} />
          <Route path="/register" element={<AuthSignUpPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default MyRouter;
