import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Style/Style.css"
import "./Style/DayStyle.css"
import "./Style/Month.css"
import "./Style/NaviBar.css"
import HomePage from "Pages/HomePage";
import DayPage from "Pages/DayPage";
import MonthPage from "Pages/MonthPage";

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
