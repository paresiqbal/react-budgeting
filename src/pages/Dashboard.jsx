// react
import { useLoaderData } from "react-router";

// helpers function
import { fetchData } from "../helpers";

// components
import Intro from "../components/Intro";

// library
import { toast } from "react-toastify";

// loader
export function dashboardLoader() {
  // return username as a key
  const userName = fetchData("userName");

  return { userName };
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
  const { userName } = useLoaderData();

  return (
    <div>
      <>{userName ? <p>{userName}</p> : <Intro />}</>
    </div>
  );
}
