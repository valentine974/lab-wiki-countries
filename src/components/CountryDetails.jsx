import {NavLink } from "react-router-dom"; 

function CountryDetails() {
  return ( 
     <div className="col-7">
      <h1>France</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr> 
            <td style={{width: '30%'}}>Capital</td>
            <td>Paris</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              551695 km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
              {/* <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}> Home </NavLink>  */}
                <li>
                  <a href="/AND">Andorra</a>
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
