import { useParams } from "react-router-dom"; 
import { useState, useEffect } from "react";

function CountryDetails({countryList}) {

const [countrySelected, setCountry] = useState({})    
const {countryId}= useParams() 
console.log(countryId)
useEffect(() => {    
    console.log("useEffect working")                                
   const selectedCountry =  countryList.find((countryChecked)=>{ 
    return countryId  === countryChecked.alpha3Code 
   })
   setCountry(selectedCountry)   

}, [countryId, countryList]);

  
  return (  
     <div className="col-7">
      <h1>{countrySelected.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr> 
            <td style={{width: '30%'}}>Capital</td>
            <td>{countrySelected.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
            {countrySelected.area} km
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
