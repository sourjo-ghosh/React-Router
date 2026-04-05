import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Products from "./components/Products/Products.jsx";
import Users from "./components/Users/Users.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import About from "./components/About/About.jsx";
import PostDetails from "./components/PostDetails/PostDetails.jsx";
import Posts from "./components/posts/Posts.jsx";

const PostPromises = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => res.json(),
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      { path: "blogs", Component: Blogs },
      {
        path: "posts",
        element: (
          <Suspense fallback={<span>Loading....</span>}>
            <Posts PostPromises={PostPromises}></Posts>
          </Suspense>
        ),
      },
      {
        path: "posts/:postId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails,
      },
      { path: "about", Component: About },
    ],
    
  },
  {path: "*", element: <h1>404 not found</h1>}
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
