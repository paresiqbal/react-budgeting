// react
import { Link, useFetcher, Form } from "react-router-dom";

// helpers
import {
  formatCurrency,
  formatDateToLocaleString,
  getAllMatchingItems,
} from "../helpers";
import { TrashIcon } from "@heroicons/react/24/solid";

export default function ExpenseItem({ expenses }) {
  const fetcher = useFetcher();

  const budget = getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: expenses.budgetId,
  })[0];

  return (
    <>
      <td>{expenses.name}</td>
      <td>{formatCurrency(expenses.amount)}</td>
      <td>{formatDateToLocaleString(expenses.createdAt)}</td>
      <td>
        <Link to={`\budget\${budget.id}`} style={{ "--accent": budget.color }}>
          {budget.name}
        </Link>
      </td>
      <td>
        <fetcher.Form method="post">
          <input type="hidden" name="_action" value="deleteExpense" />
          <input type="hidden" name="expenseId" value={expenses.id} />
          <button
            type="submit"
            className="btn btn--warning"
            aria-label={`Delete &{expense.name} expense`}
          >
            <TrashIcon width={15} />
          </button>
        </fetcher.Form>
      </td>
    </>
  );
}
