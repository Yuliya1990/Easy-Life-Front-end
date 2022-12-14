import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TheApp from './Components/Pages/TheApp/TheApp';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import WorkWithUs from './Components/Pages/WorkWithUs/WorkWithUs';
import CleaningTypes from './Components/Pages/CleaningTypes/CleaningTypes';
import LogIn from './Components/Pages/GetStarted/LogIn/LogIn';
import CleaningComponents from './Components/Pages/CleaningComponents/CleaningComponents';
import GetStarted from './Components/Pages/GetStarted/GetStarted';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TheApp />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/WorkWithUs" element={<WorkWithUs />} />
          <Route path="/CleaningTypes" element={<CleaningTypes />} />
          <Route path="/components/:cleaningTypeid" element={<CleaningComponents />}></Route>
          <Route path="/GetStarted" element={<GetStarted />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
