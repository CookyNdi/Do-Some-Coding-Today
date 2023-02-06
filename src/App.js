import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Style/Style.css";
import "./Style/DayStyle.css";
import "./Style/Month.css";
import "./Style/NaviBar.css";
import HomePage from "Pages/HomePage";
import JanuaryPage from "Pages/JanuaryPage";
import MonthPage from "Pages/MonthPage";
import FebruaryPage from "Pages/FebruaryPage";
import MarchPage from "Pages/MarchPage";
import AprilPage from "Pages/AprilPage";
import MayPage from "Pages/MayPage";
import JunePage from "Pages/JunePage";
import JulyPage from "Pages/JulyPage";
import AugustPage from "Pages/AugustPage";
import SeptemberPage from "Pages/SeptemberPage";
import OctoberPage from "Pages/OctoberPage";
import NovemberPage from "Pages/NovemberPage";
import DecemberPage from "Pages/DecemberPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/january/:id" element={<JanuaryPage />} />
        <Route path="/february/:id" element={<FebruaryPage />} />
        <Route path="/march/:id" element={<MarchPage />} />
        <Route path="/april/:id" element={<AprilPage />} />
        <Route path="/may/:id" element={<MayPage />} />
        <Route path="/june/:id" element={<JunePage />} />
        <Route path="/july/:id" element={<JulyPage />} />
        <Route path="/august/:id" element={<AugustPage />} />
        <Route path="/september/:id" element={<SeptemberPage />} />
        <Route path="/october/:id" element={<OctoberPage />} />
        <Route path="/november/:id" element={<NovemberPage />} />
        <Route path="/december/:id" element={<DecemberPage />} />
        <Route path="/month" element={<MonthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
