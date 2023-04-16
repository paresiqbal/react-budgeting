// react
import { useLoaderData } from "react-router";

// helpers function
import { fetchData } from "../helpers";

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
  const formData = Object.fromEntries(data);

  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName));

    return toast.success(`Welcome, ${formData.userName} 😄`);
  } catch (error) {
    throw Error("There was a problem creating your account 😥");
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
