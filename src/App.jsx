// react
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// route pages
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    // load data from dashboardLoader
    loader: dashboardLoader,
    errorElement: <Error />,
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
