import { Link } from "react-router-dom";
import "./styles/Buttons.css"
import "./styles/App.css";
import "./styles/Title.css";

export default function App() {
  return (
    <>
    <h1 className="animated-title">Budgetplaner</h1>
    <div className="button-container">
      <button className="my-btn my-btn-übersicht">Übersicht</button>
      <button className="my-btn my-btn-jack">Jack</button>
      <button className="my-btn my-btn-isi">Isi</button>
    </div>
    </>
  );
}