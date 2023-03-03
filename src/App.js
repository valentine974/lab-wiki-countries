// src/App.js
import './App.css';
import Countries from './countries.json';
import NavBar from './components/NavBar.jsx';
import CountriesList from './components/CountriesList.jsx';
import CountryDetails from './components/CountryDetails.jsx';
// import { useState } from 'react'; 
import { Route, Routes} from 'react-router-dom';

function App() {
  // const [countries, setCountries] = useState(Countries);


  return (
    <div className="App">
      <NavBar />

      <div className="container">
        <div className="row"> 

          <CountriesList countryList={Countries}  />

          <Routes>
          <Route path="/:countryId" element={<CountryDetails countryList={Countries}  />} />
          </Routes>
 
        </div>
      </div>
    </div>
  );
}
export default App;
