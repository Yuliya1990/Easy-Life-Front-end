import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TheApp from './Components/Pages/TheApp/TheApp';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import WorkWithUs from './Components/Pages/WorkWithUs/WorkWithUs';
import CleaningTypes from './Components/Pages/CleaningTypes/CleaningTypes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TheApp />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/WorkWithUs" element={<WorkWithUs />} />
          <Route path="/CleaningTypes" element={<CleaningTypes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
