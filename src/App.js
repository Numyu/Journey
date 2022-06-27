import './App.css';
import ItineraryPage from './Pages/ItineraryPage/ItineraryPage';
import LandingPage from "./Pages/LandingPage/LandingPage";
import TourPage from "./Pages/TourPage/TourPage";
import {Routes,Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/itineraries" element={<ItineraryPage/>} />
        <Route path="/itineraries/tour" element={<TourPage />} />
      </Routes>
      {/* <ItineraryPage/>
      <LandingPage />
      <TourPage /> */}
    </div>
  );
}

export default App;
