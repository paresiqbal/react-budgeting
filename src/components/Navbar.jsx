// react
import { NavLink, Form } from "react-router-dom";

// assets
import logomark from "../assets/logomark.svg";

// library
import { TrashIcon } from "@heroicons/react/24/solid";

export default function Navbar({ userName }) {
  const handleFormSubmit = (e) => {
    if (!confirm("Delete user and all data ? 🤔")) {
      e.preventDefault();
    }
  };

  return (
    <nav>
      <NavLink to={"/"} aria-label="Homepage">
        <img src={logomark} alt="" />
        <span>Budgetin</span>
      </NavLink>

      {userName && (
        <Form method="post" action="logout" onSubmit={handleFormSubmit}>
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
}
