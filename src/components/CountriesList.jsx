import { NavLink } from "react-router-dom";


function CountriesList(props) {



  return (
    <div class="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">


        {props.countryArray}

      </div>
    </div>
  );
}
export default CountriesList;
