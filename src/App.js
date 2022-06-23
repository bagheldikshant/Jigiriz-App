import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";
import Navbar from "./Components/Navbar";
import Support from "./pages/Support";
import Messages from "./pages/Messages";
import CardDetails from "./Components/CardDetails";
import About from "./pages/About"
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Sidebar/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/products" element={<Products />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/cart/:id" element={<CardDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
