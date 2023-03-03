import { useParams, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";


function CountryDetails({ countryList }) {

  const [countrySelected, setCountry] = useState({})

  const { countryId } = useParams()

  useEffect(() => {
    setCountry(countryList.find(countryChecked => countryChecked.alpha3Code === countryId))
  }, [countryList, countryId]);

  const selectedCountry = countryList.find(countryChecked => countryChecked.alpha3Code === countryId)

  // original code for useEffect - Omar why is this not working?
  // useEffect(() => {
  //   console.log("useEffect working")
  //   const selectedCountry = countryList.find((countryChecked) => {
  //     return countryId === countryChecked.alpha3Code
  //   })
  //   setCountry(selectedCountry)

  // }, [countryId, countryList]);

  // when do we need a key and when do we not?? (maping, navlink) why??


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
                    <li key={value}>
                      <NavLink to={`/${value}`}>
                        {
                          countryList.find(
                            (country) => country.alpha3Code === value
                          ).name.common
                        }
                      </NavLink>
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
