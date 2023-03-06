import {createContext, useState } from "react"
import City_Info from "../Assests/City_Info.json";

const CityContext = createContext("");

export const CityProvider = ({children}) => {

    const [city, setCity] = useState('Ankara');

    const val ={
        city,
        setCity
    }

    return(
        <CityContext.Provider value={val}>
            {children}
        </CityContext.Provider>
    );
}
export default CityContext;
