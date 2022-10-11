import React from "react";

import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import NotFound from "../pages/NotFound";

import Login from "../components/Login";
import MonsterCard from "../components/MonsterCard/MonsterCard";
import MonsterDetails from "../components/MonsterDetails";
import ProtectedRoute from "../components/ProtectedRoute";

export const APP_ROUTES = [
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/search-page",
    element: (
      <ProtectedRoute>
        <SearchPage />
      </ProtectedRoute>
    )
  },
  {
    path: "/monster/:monsterName",
    element: (
      <ProtectedRoute>
        <MonsterCard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "details",
        element: <MonsterDetails />
      }
    ]
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "*",
    element: <NotFound />
  }
];
