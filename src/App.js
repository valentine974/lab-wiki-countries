// src/App.js
import "./App.css";
import Countries from './countries.json'
import NavBar from './components/NavBar.jsx'
import CountriesList from './components/CountriesList.jsx'
import CountryDetails from './components/CountryDetails.jsx'

function App() {
  return (
    <div className="App">
    <NavBar />

    <div className="container">
      <div className="row">
    <CountriesList />
    <CountryDetails />

  </div>
  </div>

  </div>
  )

}
export default App;
