import { useState } from "react";
import "../styles/JackDashboard.css";

export default function JackDashboard() {
  const months = [
    "Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember"
  ];

  const [month, setMonth] = useState("Januar");
  const [income, setIncome] = useState(2500);
  const [expenses, setExpenses] = useState([]);

  const [newCategory, setNewCategory] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  const totalExpenses = expenses.reduce((s, e) => s + e.amount, 0);
  const balance = income - totalExpenses;

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (newCategory && newAmount && newDate) {
      setExpenses([
        ...expenses,
        {
          category: newCategory,
          amount: Number(newAmount),
          date: newDate
        }
      ]);
      setNewCategory("");
      setNewAmount("");
      setNewDate("");
    }
  };

  return (
    <div className="dash-container">
      <h1 className="dash-title">Monatsübersicht</h1>

      {/* Top Controls */}
      <div className="dash-controls">
        <div className="dash-control">
          <label>Monat auswählen</label>
          <select value={month} onChange={e => setMonth(e.target.value)}>
            {months.map(m => <option key={m}>{m}</option>)}
          </select>
        </div>
        <div className="dash-control">
          <label>Einkommen</label>
          <input
            type="number"
            value={income}
            onChange={e => setIncome(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="dash-content">
        {/* Tabelle */}
        <div className="dash-box dash-table">
          <h2>Ausgaben</h2>
          <table>
            <thead>
              <tr>
                <th>Kategorie</th>
                <th>Betrag (€)</th>
                <th>Datum</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((e, i) => (
                <tr key={i}>
                  <td>{e.category}</td>
                  <td>{e.amount.toFixed(2)}</td>
                  <td>{e.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <form className="add-expense-form" onSubmit={handleAddExpense}>
            <input
              type="text"
              placeholder="Kategorie"
              value={newCategory}
              onChange={e => setNewCategory(e.target.value)}
              required
            />
            <input
              type="number"
              step="0.01"
              placeholder="Betrag"
              value={newAmount}
              onChange={e => setNewAmount(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Datum"
              value={newDate}
              onChange={e => setNewDate(e.target.value)}
              required
            />
            <button type="submit">Hinzufügen</button>
          </form>
        </div>

        {/* Übersicht + Diagramm */}
        <div className="dash-box dash-summary">
          <h2>Übersicht</h2>
          <ul>
            <li><strong>Einkommen:</strong> {income.toFixed(2)} €</li>
            <li><strong>Ausgaben:</strong> {totalExpenses.toFixed(2)} €</li>
            <li><strong>Rest:</strong> {balance.toFixed(2)} €</li>
          </ul>

          <div className="dash-chart">
            <h3>Verteilung</h3>
            <div className="chart-placeholder">
              {/* Hier könnte später ein echtes Diagramm eingebaut werden */}
              <p>Diagramm Platzhalter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}