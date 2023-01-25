import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import LandingPage from "./Pages/LandingPage";
import January from "./Pages/January";
import February from "./Pages/February";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/january" element={<January />} />
        <Route path="/february" element={<February />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
