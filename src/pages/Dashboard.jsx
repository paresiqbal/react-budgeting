// react
import { useLoaderData } from "react-router";

// helpers function
import { createBudget, fetchData } from "../helpers";

// components
import Intro from "../components/Intro";

// library
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";

// loader
export function dashboardLoader() {
  // return username as a key
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");

  return { userName, budgets };
}

// action
export async function dashboardAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  // new user submission
  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));

      return toast.success(`Welcome, ${values.userName} 😄`);
    } catch (error) {
      throw Error("There was a problem creating your account 😥");
    }
  }

  if (_action === "createBudget") {
    try {
      // create budget
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      });

      return toast.success("Budget Created 😉");
    } catch (error) {
      throw new Error("There was a problem creating your budget 😭");
    }
  }
}

export default function Dashboard() {
  const { userName, budgets } = useLoaderData();

  return (
    <div>
      <>
        {userName ? (
          <div className="dashboard">
            <h1>
              Welcome back, <span>{userName}</span>
            </h1>
            <div className="grid-sm">
              {/* {budgets ? () : ()} */}
              <div className="grid-lg">
                <div className="flex-lg">
                  <AddBudgetForm />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Intro />
        )}
      </>
    </div>
  );
}
