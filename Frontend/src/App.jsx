import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import Footer from "./Pages/Footer";
import AnimatedCursor from "./Components/Cursour";
import LogoLoader from "./Components/Loder";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WhatsAppFloat from "./Components/Whatsapp";
import Popup from "./Components/Popup"; // 👈 import popup

function App() {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  // Show popup after site loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000); // show after 2 seconds
    return () => clearTimeout(timer);
  }, []);

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
          {showPopup && <Popup onClose={() => setShowPopup(false)} />}
        </>
      )}
    </>
  );
}

export default App;
