import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function CountryDetails({ countryList }) {

  const [countrySelected, setCountry] = useState({})

  const { countryId } = useParams()

  useEffect(() => {
    setCountry(countryList.find(countryChecked => countryChecked.alpha3Code === countryId))
  }, [countryList, countryId]);

  const selectedCountry = countryList.find(countryChecked => countryChecked.alpha3Code === countryId)

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
