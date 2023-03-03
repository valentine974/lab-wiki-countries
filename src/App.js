// src/App.js
import './App.css';
import Countries from './countries.json';
import NavBar from './components/NavBar.jsx';
import CountriesList from './components/CountriesList.jsx';
import CountryDetails from './components/CountryDetails.jsx';
// import { useState } from 'react'; 
import { Route, Routes} from 'react-router-dom';
import ErrorPage from './components/ErrorPage'

function App() {
  // const [countries, setCountries] = useState(Countries);


  return (
    <div className="App">
      <NavBar />

      <div className="container">
        <div className="row"> 

          

          <Routes>
          <Route path="/" element={<CountriesList countryList={Countries}  />} />
          <Route path="/:countryId" element={<CountryDetails countryList={Countries}  />} />

          <Route path="/*" element={<ErrorPage />} />
          </Routes>
 
        </div>
      </div>
    </div>
  );
}
export default App;
