// src/App.js
import './App.css';
import Countries from './countries.json';
import NavBar from './components/NavBar.jsx';
import CountriesList from './components/CountriesList.jsx';
import CountryDetails from './components/CountryDetails.jsx';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Route, Routes, useParams } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState(Countries);
  

  const countryArray = countries.slice().map((country) => {
    return (
      <NavLink
        to={`/${country.alpha3Code}`}
        className="list-group-item list-group-item-action"
      >
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
          alt="country-flag"
          width="20px"
        />{' '}
        {country.name.common}{' '}
      </NavLink>
    );
  });


  return (
    <div className="App">
      <NavBar />

      <div className="container">
        <div className="row">
          <CountriesList countryArray={countryArray} />

          <Routes>
          <Route path="/:countryId" element={<CountryDetails countryArray={countries}  />} />
          </Routes>

          {/* <CountryDetails /> */}
        </div>
      </div>
    </div>
  );
}
export default App;
