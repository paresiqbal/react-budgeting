// react
import { useLoaderData } from "react-router";

// helpers function
import { fetchData } from "../helpers";

// loader
export function dashboardLoader() {
  // return username as a key
  const userName = fetchData("userName");

  return { userName };
}

export default function Dashboard() {
  const { userName } = useLoaderData();

  return (
    <div>
      Dashboard
      <h1>{userName}</h1>
    </div>
  );
}
