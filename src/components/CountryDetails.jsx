import { useParams, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function CountryDetails({ countryList }) {

  const [countrySelected, setCountry] = useState(null)

  const { countryId } = useParams()

  // useEffect(() => {
  //   setCountry(countryList.find(countryChecked => countryChecked.alpha3Code === countryId))
  // }, [countryList, countryId]);

  // const selectedCountry = countryList.find(countryChecked => countryChecked.alpha3Code === countryId)

  // original code for useEffect - Omar why is this not working?
  // useEffect(() => {
  //   console.log("useEffect working")
  //   const selectedCountry = countryList.find((countryChecked) => {
  //     return countryId === countryChecked.alpha3Code
  //   })
  //   setCountry(selectedCountry)

  // }, [countryId, countryList]);

  // when do we need a key and when do we not?? (maping, navlink) why??

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((result) => {
        setCountry(result.data)
      })
  }, [countryId]);


  if (countrySelected) {
    return (
      <div className="col-7">
        <h1>{countrySelected.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
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

                {countrySelected.borders.map((value) => {
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
}
export default CountryDetails;
