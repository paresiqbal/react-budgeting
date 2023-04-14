// react
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import MainLayout, { mainLayoutLoader } from "./layout/MainLayout";

// route pages
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

// actions
import { logoutAction } from "./actions/logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: mainLayoutLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        // load data from dashboardLoader
        loader: dashboardLoader,
        errorElement: <Error />,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
