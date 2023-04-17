// helpers
import { formatCurrency, formatDateToLocaleString } from "../helpers";

export default function ExpenseItem({ expenses }) {
  return (
    <>
      <td>{expenses.name}</td>
      <td>{formatCurrency(expenses.amount)}</td>
      <td>{formatDateToLocaleString(expenses.createdAt)}</td>
    </>
  );
}
