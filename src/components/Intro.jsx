// react
import { Form } from "react-router-dom";

// assests
import illustration from "../assets/illustration.jpg";

// library
import { UserPlusIcon } from "@heroicons/react/24/solid";

export default function Intro() {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <p>
          Personal budgeting is the secrete to financial freedom. Start your
          journey today.
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name ?"
            aria-label="Your Name"
            autoComplete="given-name"
          />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
        <img src={illustration} alt="Person with money" width={600} />
      </div>
    </div>
  );
}
