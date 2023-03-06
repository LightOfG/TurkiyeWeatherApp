import { useContext } from "react";
import WeatherContext from "../Context/WeatherContext";
import CityContext from "../Context/CityContext";


function WeatherBox () {

    const city = useContext(CityContext);
    const {weather, hour, days, icons, temps, humidities} = useContext(WeatherContext);

    return(
        <div className="WeatherBox">
            <div className="Days">

            </div>
            <div className="Icon">

            </div>
            <div className="Celcius">

            </div>
            <div className="Humidity">

            </div>

        </div>
    )

}
export default WeatherBox;