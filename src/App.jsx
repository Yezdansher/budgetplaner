import { Link } from "react-router-dom";
import "./styles/Buttons.css"
import "./styles/App.css";
import "./styles/Title.css";

export default function App() {
  return (
    <>
    <h1 className="animated-title">Budgetplaner</h1>
    <div className="button-container">
      <Link to="/übersicht" className="my-btn my-btn-übersicht">Übersicht</Link>
      <Link to="/jack" className="my-btn my-btn-jack">Jack</Link>
      <Link to="/isi" className="my-btn my-btn-isi">Isi</Link>
    </div>
    </>
  );
}