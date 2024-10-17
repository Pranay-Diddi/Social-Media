import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PostList />,
      },
      { path: "/create-post", element: <CreatePost /> },
    ],
  },

  // {
  //   path: "/",
  //   element: <App />,
  //   children: [
  //     { path: "/", element: <PostList /> },
  //     { path: "/create-post", element: <CreatePost /> },
  //   ],
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
