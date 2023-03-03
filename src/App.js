// src/App.js
import './App.css';
import Countries from './countries.json';
import NavBar from './components/NavBar.jsx';
import CountriesList from './components/CountriesList.jsx';
import CountryDetails from './components/CountryDetails.jsx';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './components/ErrorPage'
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState(Countries);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((result) => {
        console.log(result.data)
        setCountries(result.data);
      })
  }, []);


  return (
    <div className="App">
      <NavBar />

      <div className="container">
        <div className="row">
          <CountriesList countryList={countries} />
          <Routes>
            <Route path="/:countryId" element={<CountryDetails countryList={countries} />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
