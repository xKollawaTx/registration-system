import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegistrationProvider } from "./contexts/RegistrationContext";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <RegistrationProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </RegistrationProvider>
  );
}

export default App;
