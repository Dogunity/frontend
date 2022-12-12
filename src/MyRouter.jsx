import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/loader/Loader";

const MainPage = lazy(() => import("./pages/main/MainPage"));
const AuthSignInPage = lazy(() => import("./pages/auth/AuthSignInPage"));
const AuthSignUpPage = lazy(() => import("./pages/auth/AuthSignUpPage"));
const CommunityPage = lazy(() => import("./pages/community/CommunityPage"));
const CommunityPostPage = lazy(() =>
  import("./pages/community/CommunityPostPage")
);
const FeedPage = lazy(() => import("./pages/feed/FeedPage"));
const AuthMyPage = lazy(() => import("./pages/auth/AuthMyPage"));

function MyRouter() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<AuthSignInPage />} />
          <Route path="/register" element={<AuthSignUpPage />} />
          <Route path="/mypage" element={<AuthMyPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/community/post" element={<CommunityPostPage />} />
          <Route path="/feed" element={<FeedPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default MyRouter;
