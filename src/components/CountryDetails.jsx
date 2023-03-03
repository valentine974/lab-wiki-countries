import { useParams, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { values } from "lodash";

function CountryDetails({ countryList }) {

  const [countrySelected, setCountry] = useState({})

  const { countryId } = useParams()

  useEffect(() => {
    setCountry(countryList.find(countryChecked => countryChecked.alpha3Code === countryId))
  }, [countryList, countryId]);

  const selectedCountry = countryList.find(countryChecked => countryChecked.alpha3Code === countryId)

  // const bordersArray = selectedCountry.borders.map((country) => {
  //   return (
  //     // <NavLink to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action" key={country.alpha3Code}>
  //     //   {' '} {country.name.common}{' '}
  //     // </NavLink>

  //     { country }
  //   );
  // });

  // original code for useEffect - Omar why is this not working?
  // useEffect(() => {
  //   console.log("useEffect working")
  //   const selectedCountry = countryList.find((countryChecked) => {
  //     return countryId === countryChecked.alpha3Code
  //   })
  //   setCountry(selectedCountry)

  // }, [countryId, countryList]);


  return (
    <div className="col-7">
      <h1>{selectedCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{selectedCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {selectedCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>

              {selectedCountry.borders.map((value) => {
                return (
                  <ul>
                    <li>
                      {value}
                    </li>
                  </ul>
                );
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default CountryDetails;
