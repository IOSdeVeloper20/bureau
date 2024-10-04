import About from "./Pages/About";
import Inspections from "./Pages/Inspections";
import Main from "./Pages/Main";
import Training from "./Pages/Training";
import Approvals from "./Pages/Approvals";
import Gallery from "./Pages/Gallery";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { UserContextProvider } from "./Contexts/UserContext";

function App() {
  return (
    <ChakraProvider>
      <UserContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/About" element={<About />} />
            <Route path="/Inspections" element={<Inspections />} />
            <Route path="/Training" element={<Training />} />
            <Route path="/Approvals" element={<Approvals />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Router>
      </UserContextProvider>
    </ChakraProvider>
  );
}

export default App;
