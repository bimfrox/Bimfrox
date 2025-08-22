import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import Footer from "./Pages/Footer";
import AnimatedCursor from "./Components/Cursour";
import LogoLoader from "./Components/Loder";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WhatsAppFloat from "./Components/Whatsapp";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Hide Navbar & Footer on admin routes
  const hideLayout = location.pathname.startsWith("/admin");

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      {loading && <LogoLoader onFinish={() => setLoading(false)} />}
      {!loading && (
        <>
          {!hideLayout && <Navbar />}
          <AllRoutes />
          <WhatsAppFloat />
          <AnimatedCursor />
          {!hideLayout && <Footer />}
        </>
      )}
    </>
  );
}

export default App;
