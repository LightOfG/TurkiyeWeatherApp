import { useContext } from "react"
import City_Info from "../Assests/City_Info.json"
import CityContext from "../Context/CityContext"


function Info (){

    const {city} = useContext(CityContext);


    return(
        <div className="Info">
            <p> Latitude: {City_Info.find(c => c.name===city).latitude}</p>
            <p> Longtitude: {City_Info.find(c => c.name===city).longitude}</p>
            <p> Population: {City_Info.find(c => c.name===city).population}</p>
            
        </div>
    )
}
export default Info;