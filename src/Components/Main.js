import { useContext } from "react";
import WeatherContext from "../Context/WeatherContext";
import CityContext from "../Context/CityContext";
//import WeatherBox from "../WeatherBox"


function Main() {

    const city = useContext(CityContext);
    const { hour, days, icons, temps, humidities } = useContext(WeatherContext);



    return (
        <div className="Main">

            <div className="WeatherBox">
                <div className="Days">
                    <p>{days[0]}</p>
                </div>
                <div className="Icon">
                    <img
                        src={`https://openweathermap.org/img/wn/${icons[0]}@2x.png`}
                        alt=""
                    />
                </div>
                <div className="Celcius">
                    <span>{temps[0].temp_max}º</span>
                    <span>{temps[0].temp_min}º</span>
                </div>
                <div className="Humidity">
                    <p>Humidity: {humidities[0]}</p>
                </div>

            </div>

            <div className="WeatherBox">
                <div className="Days">
                    <p>{days[1]}</p>
                </div>
                <div className="Icon">
                    <img
                        src={`https://openweathermap.org/img/wn/${icons[1]}@2x.png`}
                        alt=""
                    />
                </div>
                <div className="Celcius">
                    <span>{temps[1].temp_max}º</span>
                    <span>{temps[1].temp_min}º</span>
                </div>
                <div className="Humidity">
                    <p>Humidity: {humidities[1]}</p>
                </div>

            </div>

            <div className="WeatherBox">
                <div className="Days">
                    <p>{days[2]}</p>
                </div>
                <div className="Icon">
                    <img
                        src={`https://openweathermap.org/img/wn/${icons[2]}@2x.png`}
                        alt=""
                    />
                </div>
                <div className="Celcius">
                    <span>{temps[2].temp_max}º</span>
                    <span>{temps[2].temp_min}º</span>
                </div>
                <div className="Humidity">
                    <p>Humidity: {humidities[2]}</p>
                </div>

            </div>

            <div className="WeatherBox">
                <div className="Days">
                    <p>{days[3]}</p>
                </div>
                <div className="Icon">
                    <img
                        src={`https://openweathermap.org/img/wn/${icons[3]}@2x.png`}
                        alt=""
                    />
                </div>
                <div className="Celcius">
                    <span>{temps[3].temp_max}º</span>
                    <span>{temps[3].temp_min}º</span>
                </div>
                <div className="Humidity">
                    <p>Humidity: {humidities[3]}</p>
                </div>

            </div>

            <div className="WeatherBox">
                <div className="Days">
                    <p>{days[4]}</p>
                </div>
                <div className="Icon">
                    <img
                        src={`https://openweathermap.org/img/wn/${icons[4]}@2x.png`}
                        alt=""
                    />
                </div>
                <div className="Celcius">
                    <span>{temps[4].temp_max}º</span>
                    <span>{temps[4].temp_min}º</span>
                </div>
                <div className="Humidity">
                    <p>Humidity: {humidities[4]}</p>
                </div>

            </div>

        </div>

    );





}
export default Main;