import Header from "../src/Components/Header";
import Main from "../src/Components/Main";
import Info from "../src/Components/Info";
import {CityProvider} from "../src/Context/CityContext";
import "./index.css";
import {WeatherProvider} from "./Context/WeatherContext";




function App() {
  return (
    <div className="App">
      <CityProvider>
        <WeatherProvider>
          <Header />
          <Main />
          <Info />
        </WeatherProvider>
      </CityProvider>
      
    </div>
  );

}

export default App;
/**
 * 
 * 
 */

