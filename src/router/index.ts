import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
const NotFound = lazy(() => import("../pages/NotFound.tsx"));
const Home = lazy(() => import("../pages/Home.tsx"));
const Login = lazy(() => import("../pages/Login.tsx"));
const MedicinesPage = lazy(() => import("../layout/Main/MedicinesPage/index.tsx"));
const OrdersPage = lazy(() => import("../layout/Main/OrdersPage/index.tsx"));
const UsersPage = lazy(() => import("../layout/Main/UsersPage/index.tsx"));
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children:[
      {
        path: "orders",
        Component: OrdersPage
      },
      {
        path: "medicines",
        Component: MedicinesPage
      },
      {
        path: "users",
        Component: UsersPage
      }
    ]
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "*",
    Component: NotFound
  }
]);
