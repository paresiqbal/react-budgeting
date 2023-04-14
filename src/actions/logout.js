// react
import { redirect } from "react-router";

// helpers
import { deleteItem } from "../helpers";

export async function logoutAction() {
  // delete user
  deleteItem({
    key: "userName",
  });

  return redirect("/");
}
