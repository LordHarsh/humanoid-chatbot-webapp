import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import logo from "./logo.svg";
import "./index.css";
import Header from "./components/header";
import ConversationPage from "./pages/ConversationPage";
import AboutPage from "./pages/AboutPage";
function App() {
  return (
    <div className="App h-screen">
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<ConversationPage />} />
            <Route path="/about" element={<AboutPage/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
