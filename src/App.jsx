import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Payment from "./pages/Payment";
import Deploy from "./pages/Deploy";
import Success from "./pages/Success";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Offset for fixed navbar */}
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/deploy" element={<Deploy />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
