// react
import { useLoaderData } from "react-router";

// helpers
import { getAllMatchingItems } from "../helpers";

// loader
export async function budgetLoader({ params }) {
  const budget = await getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: params.id,
  })[0];

  return { budget };
}

export default function BudgetPage() {
  const { budget } = useLoaderData();

  return <div>{budget.name}</div>;
}
