import { useParams } from "react-router-dom"; 
import { useState, useEffect } from "react";

function CountryDetails({countryList}) {

const [country, setCountry] = useState({})    
const {countryId}= useParams() 

useEffect(() => {                                    
   const selectedCountry =  countryList.find((country)=>{ 
    return countryId.toLowerCase() === country.alpha3Code.toLowerCase();
   })
   setCountry(selectedCountry)  

}, [countryList, countryId, country]);

 

  
  return ( 
     <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr> 
            <td style={{width: '30%'}}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
            {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
              <li> item test
              {/* {bordersArray} */}
              </li> 
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div> 
  );
}
export default CountryDetails;
