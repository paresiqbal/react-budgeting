// react
import { Link, useFetcher } from "react-router-dom";

// helpers
import {
  formatCurrency,
  formatDateToLocaleString,
  getAllMatchingItems,
} from "../helpers";

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
        </fetcher.Form>
      </td>
    </>
  );
}
