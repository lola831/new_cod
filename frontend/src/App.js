import Navigation from "./components/navbar/Navigation";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Availability from "./pages/Availability";
import FishReport from "./pages/FishReport";
import Recipes from "./pages/Recipes";
import Footer from "./components/Footer/Footer";
import TripInfo from "./pages/TripInfo";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "./store/session";
import Login from "./pages/Login";
import FAQ from "./pages/FAQ";

function App() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(authenticate());

    // Load Google Maps JavaScript API
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup function to remove the script when unmounting
      document.head.removeChild(script);
    };
  }, [dispatch]);

  console.log("sessionUser: ", sessionUser);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/availability" element={<Availability />} />
        <Route path="/trip-info" element={<TripInfo />} />
        <Route
          path="/fish-report"
          element={<FishReport isAdmin={sessionUser ? sessionUser.admin : false} />}
        />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
