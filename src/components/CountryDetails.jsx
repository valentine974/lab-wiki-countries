import {NavLink, useParams } from "react-router-dom"; 
import { useState, useEffect } from "react";

function CountryDetails(props) {

const [country, setCountry] = useState({})   
// const [border, setBorders]=useState({}) 
const {countryId}= useParams()
console.log(countryId)

useEffect(() => {                                    
   const selectedCountry =  props.countryArray.find((country)=>{
    return country.alpha3Code === countryId
   })
   setCountry(selectedCountry)
   console.log(selectedCountry)

  console.log(country)

//    const listBorders = props.countryArray.filter((country)=>{
//     return country.alpha3code ===
//    })



}, [props.countryArray, countryId]);

// const bordersArray = props.countryArray.borders.map((borderCountry) => {
//     return (
//         <NavLink to={`/${borderCountry}`}> TEST </NavLink> 
//     )
//   });

  
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
              <li>
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
