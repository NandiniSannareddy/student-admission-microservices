import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdmissionPage from "./pages/AdmissionPage";
import StudentsPage from "./pages/StudentsPage";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<AdmissionPage />} />
        <Route path="/students" element={<StudentsPage />} />
      </Routes>
    </Router>
  );
}

export default App;