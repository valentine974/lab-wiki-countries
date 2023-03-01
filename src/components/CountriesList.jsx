import {NavLink } from "react-router-dom"; 

function CountriesList() {
  return ( 
        <div class="col-5" style={{maxHeight:'90vh', overflow: 'scroll'}}>
          <div className="list-group">

            <a className="list-group-item list-group-item-action" href="/ABW">
              🇦🇼 Aruba
            </a>

            {/* <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}> Home </NavLink> */}
          </div>
        </div> 
  );
}
export default CountriesList;
