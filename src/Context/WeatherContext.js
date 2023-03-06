import { createContext , useState, useEffect, useContext} from "react";
import axios from "axios";
import CityContext from "../Context/CityContext";

const WeatherContext = createContext("");

export const WeatherProvider =({children}) =>{
       // const url = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=e49bc7e80fc2b631da624116671e5192'



    const {city} = useContext(CityContext);

    const initialValue = [
        {
          dt_txt: "",
          weather: [{ icon: "" }],
          main: { temp_max: 0, temp_min: 0, humidity: 0},
        },
        {
          dt_txt: "",
          weather: [{ icon: "" }],
          main: { temp_max: 0, temp_min: 0, humidity: 0 },
        },
        {
          dt_txt: "",
          weather: [{ icon: "" }],
          main: { temp_max: 0, temp_min: 0, humidity: 0 },
        },
        {
          dt_txt: "",
          weather: [{ icon: "" }],
          main: { temp_max: 0, temp_min: 0, humidity: 0  },
        },
        {
          dt_txt: "",
          weather: [{ icon: "" }],
          main: { temp_max: 0, temp_min: 0, humidity: 0  },
        },
      ];

      const [weather, setWeather] = useState(initialValue);

      useEffect(() => {
        
        let arr = [];
        axios(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e49bc7e80fc2b631da624116671e5192`
        ).then((res) => {
        //   setWeather(res.data);     
        //   console.log(weather)
        let todayHour = res.data.list[0].dt_txt;
          todayHour = todayHour.substring(11, 19);
          res.data.list.map((item) => {
            if (item.dt_txt.substring(11, 19) === todayHour) {
              arr.push(item);
            }
            setWeather(arr);
            return "";  
        });  
        });
      }, [city]);

      let daysInWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
    
      let hour = weather[0].dt_txt.substring(11, 16);
      let days = [];
      let icons = [];
      let temps = [];
      let humidities =[];
    
      for (let item of weather) {
        let date = new Date(item.dt_txt);
        date = date.getDay();
        days.push(daysInWeek[date]);
        icons.push(item.weather[0].icon);
        temps.push({
          temp_max: (item.main.temp_max - 273).toFixed(),
          temp_min: (item.main.temp_min - 273).toFixed(),
        });
        humidities.push(item.main.humidity);
      }

      const vals = {
        hour,
        days,
        icons,
        temps,
        humidities,
      };

    return <WeatherContext.Provider value={vals}>
        {children}
    </WeatherContext.Provider>

}
export default WeatherContext;




