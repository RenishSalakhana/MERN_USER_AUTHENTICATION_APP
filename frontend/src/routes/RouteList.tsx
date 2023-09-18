import { lazy, useState, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Loader from "../common/Loader";
import { RoutesArrays } from "../interface/interface";
import store from "../redux/store";

const RouteList = () => {
  const [state, setState] = useState<RoutesArrays>({
    arrUsers: [],
    loginUserIndex: -1,
  });

  const LoginLazy = lazy(() => import("../pages/login/Login"));
  const SignupLazy = lazy(() => import("../pages/signup/Signup"));
  const HomeLazy = lazy(() => import("../components/Home"));
  const ProfileLazy = lazy(() => import("../pages/profile/Profile"));
  const UserListLazy = lazy(() => import("../pages/userlist/UserList"));
  const isLoggedIn = state.loginUserIndex !== -1;
  const user_email = localStorage.getItem("LOGGEDIN_USER_EMAIL");


  return (
    <Provider store={store}>
      <Routes>
        {!isLoggedIn && (
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <LoginLazy />
              </Suspense>
            }
          />
        )}
        {user_email && (
          <Route
            path="/profile"
            element={
              <Suspense fallback={<Loader />}>
                <ProfileLazy />
              </Suspense>
            }
          />
        )}
        <Route
          path="/register"
          element={
            <Suspense fallback={<Loader />}>
              <SignupLazy />
            </Suspense>
          }
        />
        <Route
          path="/home"
          element={
            <Suspense fallback={<Loader />}>
              <HomeLazy />
            </Suspense>
          }
        />
        <Route
          path="/list"
          element={
            <Suspense fallback={<Loader />}>
              <UserListLazy />
            </Suspense>
          }
        />
      </Routes>
    </Provider>
  );
};

export default RouteList;
