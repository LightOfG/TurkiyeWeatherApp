import CityContext from "../Context/CityContext";
import City_Info from "../Assests/City_Info.json";
import { useContext } from "react";
import WeatherContext from "../Context/WeatherContext";



function Header() {
    const { city, setCity } = useContext(CityContext);
    const { hour } = useContext(WeatherContext);



    return (
        <div className="Header">
            <div className="Head">
                <h3>Turkiye Weather App</h3>
            </div>
            <div className="SubHeader">
                <div >
                    <label htmlFor="select" style={{fontSize:"20px"}}>Cities: </label>
                    <select className="SelectTag" id="select" value={city} onChange={(c) => setCity(c.target.value)}>

                        <option>Please choose one option</option>

                        {City_Info.map((cities) =>
                            <option key={cities.id} value={cities.name}>
                                {cities.name}
                            </option>
                        )}

                    </select>
                </div>
                <div className="CurrentHour">
                    {hour}
                </div>
            </div>
        </div>
    );




}
export default Header;