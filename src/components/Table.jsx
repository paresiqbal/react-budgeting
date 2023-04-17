// custom components
import ExpenseItem from "./ExpenseItem";

export default function Table({ expenses }) {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {["Name", "Amount", "Date"].map((i, index) => (
              <th key={index}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expenses) => (
            <tr key={expenses.id}>
              <ExpenseItem expenses={expenses} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
