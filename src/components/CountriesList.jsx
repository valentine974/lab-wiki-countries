import { NavLink } from "react-router-dom";


function CountriesList({countryList}) { 

    const countryArray = countryList.map((country) => {
        return (
          <NavLink to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action"  key={country.alpha3Code}>
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt="country-flag"
              width="20px"/>{' '} {country.name.common}{' '} </NavLink>
        );
      });
 
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">


        {countryArray}

      </div>
    </div>
  );
}
export default CountriesList;
