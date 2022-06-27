import './App.css';
import ItineraryPage from './Pages/ItineraryPage/ItineraryPage';
import LandingPage from "./Pages/LandingPage/LandingPage";
import TourPage from "./Pages/TourPage/TourPage";
import {Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/itineraries/:monument" element={<ItineraryPage/>} />
        <Route path="/itineraries/:monument/:tour" element={<TourPage />} />
      </Routes>
    </div>
  );
}

export default App;
