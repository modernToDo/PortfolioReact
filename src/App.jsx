import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./component/about/About";
import Header from "./component/header/Header";
import Main from "./component/main/Main";
import Skills from "./component/skills/Skills";
import Contact from "./component/contact/Contact";
import Resume from "./component/resume/Resume";
import Portfolio from "./component/portfolio/Portfolio";
import AllProjects from "./component/portfolio/AllProjects";
import Development from "./component/portfolio/development/Development";
import Design from "./component/portfolio/Design/Design";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/skills",
          element: <Skills />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
          children: [
            {
              path: "/portfolio",
              element: <AllProjects />,
            },
            {
              path: "/portfolio/dev",
              element: <Development />,
            },
            {
              path: "/portfolio/design",
              element: <Design />,
            },
          ],
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/resume",
          element: <Resume />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
