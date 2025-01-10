import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { UserContextProvider } from "./Contexts/UserContext";
import { LangContextProvider } from "./Contexts/LangContext";
import About from "./Pages/User/About";
import Inspections from "./Pages/User/Inspections";
import Main from "./Pages/User/Main";
import Training from "./Pages/User/Training";
import Approvals from "./Pages/User/Approvals";
import Gallery from "./Pages/User/Gallery";
import ContactUs from "./Pages/User/ContactUs";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import AdminMain from "./Pages/Admin/AdminMain";
import AdminAbout from "./Pages/Admin/AdminAbout";
import AdminInspections from "./Pages/Admin/AdminInspections";
import AdminTraining from "./Pages/Admin/AdminTraining";
import AdminApprovals from "./Pages/Admin/AdminApprovals";
import AdminGallery from "./Pages/Admin/AdminGallery";
import AdminContactus from "./Pages/Admin/AdminContactus";
import AdminFooter from "./Pages/Admin/AdminFooter";
import EditPage from "./Pages/EditPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <ChakraProvider>
      <UserContextProvider>
        <LangContextProvider>
          <Router>
            <Routes>
              <Route path="*" element={<NotFound />} />
  
              {/* user path */}
              <Route path="/" element={<Main />} />
              <Route path="/About" element={<About />} />
              <Route path="/Inspections" element={<Inspections />} />
              <Route path="/Training" element={<Training />} />
              <Route path="/Approvals" element={<Approvals />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/Login" element={<Login />} />
  
              {/* Protected Admin path */}
              <Route path="/Admin" element={<Dashboard />}>
                <Route
                  path="main"
                  element={<ProtectedRoute element={AdminMain} />}
                />
  
                <Route
                  path="about"
                  element={<ProtectedRoute element={AdminAbout} />}
                />
  
                <Route
                  path="inspections"
                  element={<ProtectedRoute element={AdminInspections} />}
                />
  
                <Route
                  path="training"
                  element={<ProtectedRoute element={AdminTraining} />}
                />
  
                <Route
                  path="approvals"
                  element={<ProtectedRoute element={AdminApprovals} />}
                />
  
                <Route
                  path="gallery"
                  element={<ProtectedRoute element={AdminGallery} />}
                />
  
                <Route
                  path="contactus"
                  element={<ProtectedRoute element={AdminContactus} />}
                />
  
                <Route
                  path="footer"
                  element={<ProtectedRoute element={AdminFooter} />}
                />
  
                <Route
                  path="editor"
                  element={<ProtectedRoute element={EditPage} />}
                />
              </Route>
            </Routes>
          </Router>
        </LangContextProvider>
      </UserContextProvider>
    </ChakraProvider>
  );
}

export default App;
