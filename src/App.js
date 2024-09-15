import "./App.css";
import About from "./Pages/About";
import Inspections from "./Pages/Inspections";
import Main from "./Pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Training from "./Pages/Training";
import Approvals from "./Pages/Approvals";
import Gallery from "./Pages/Gallery";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/About" element={<About />} />
        <Route path="/Inspections" element={<Inspections />} />
        <Route path="/Training" element={<Training />} />
        <Route path="/Approvals" element={<Approvals />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
