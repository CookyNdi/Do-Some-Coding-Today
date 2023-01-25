import "./Styles/Style.css";
import "./Styles/DayStyle.css";
import "./Styles/Month.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DayPage from "./Pages/DayPage";
import MonthPage from "./Pages/MonthPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/january/:id" element={<DayPage />} />
        <Route path="/month" element={<MonthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
