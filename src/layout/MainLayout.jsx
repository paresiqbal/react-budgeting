// react
import { Outlet, useLoaderData } from "react-router";

// assets
import wave from "../assets/wave.svg";

// helpers funtion
import { fetchData } from "../helpers";

// components
import Navbar from "../components/Navbar";

// loader
export function mainLayoutLoader() {
  // return username as a key
  const userName = fetchData("userName");

  return { userName };
}

export default function MainLayout() {
  const { userName } = useLoaderData();

  return (
    <div className="min-h-screen">
      <Navbar userName={userName} />
      <main>
        <Outlet />
      </main>
      <img
        src={wave}
        className="w-full absolute inset-x-0 bottom-0 object-bottom"
      />
    </div>
  );
}
