// react
import { useEffect, useRef } from "react";
import { Form, useFetcher } from "react-router-dom";

// library
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

export default function AddBudgetForm() {
  const fetcher = useFetcher();
  const isSubmiting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    // clear form after submiting
    if (!isSubmiting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmiting]);

  return (
    <div className="form-wrapper">
      <h2 className="h3">Create Budget</h2>
      <fetcher.Form method="post" className="grid-sm" ref={formRef}>
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget Name</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g, Groceries"
            required
            ref={focusRef}
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="newBudgetAmount">Amount</label>
          <input
            type="number"
            name="newBudgetAmount"
            id="newBudgetAmount"
            step={0.01}
            placeholder="e.g, Rp 10.000"
            required
            inputMode="decimal"
          />
        </div>
        <input type="hidden" name="_action" value="createBudget" />
        <button type="submit" className="btn btn--dark" disabled={isSubmiting}>
          {isSubmiting ? (
            <span>Creating budget...</span>
          ) : (
            <>
              <span>Create Budget</span>
              <CurrencyDollarIcon width={20} />
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
}
