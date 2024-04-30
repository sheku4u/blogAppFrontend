import { useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Bookmark } from "./pages";
import Layout from "./components/Layout.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";
import { AddStory, Login, Posts, Register,StoryHandler } from "./components/index.js";
function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/add-story",
          element: <AddStory />,
        },
        {
          path: "/posts",
          element: <Posts />,
        },
        {
          path: "/stories",
          element: <StoryHandler />,
        },

      ],
    },
    {
      path: "/bookmark",
      element: <Bookmark />,
    },
  ]);
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;
