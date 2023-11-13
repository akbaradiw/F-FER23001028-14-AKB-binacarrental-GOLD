import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ResultPage from "./pages/ResultPage";
import CarDetailPage from "./pages/carDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/detail/:id" element={<CarDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
