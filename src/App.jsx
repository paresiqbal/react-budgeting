// react
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import MainLayout, { mainLayoutLoader } from "./layout/MainLayout";

// route pages
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import ExpensesPage, {
  expensesAction,
  expensesLoader,
} from "./pages/ExpensesPage";
import Error from "./pages/Error";
import BudgetPage, { budgetAction, budgetLoader } from "./pages/BudgetPage";

// actions
import { logoutAction } from "./actions/logout";

// library
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "budget/:id",
        element: <BudgetPage />,
        // load data from expensesPage
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <Error />,
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
        // load data from expensesPage
        loader: expensesLoader,
        action: expensesAction,
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
      <ToastContainer />
    </div>
  );
}

export default App;
