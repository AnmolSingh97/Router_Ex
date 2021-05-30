import {useState} from "react";
import WeatherAxios from './components/WeatherAxios';
import MainUI from './components/MainUI';
import './assets/bg.jpg'

function App() {

  const [placeName, setPlaceName] = useState('');
  const [cityName, setCityName] = useState('')
  const [stateName, setstateName] = useState('')
  const [tempIcon, setTempIcon] = useState('')
  const [temp, setTemp] = useState('')
  const [condition, setcondition] = useState('')
  const [updated, setUpdated] = useState('')
  const [aqi, setAqi] = useState('')
  const [wind, setWind] = useState('')
  const [humidity, setHumidity] = useState('')
  const [sunrise, setSunrise] = useState('')
  const [sunset, setSunset] = useState('')
  const [moonPhase, setMoonPhase] = useState('')
  const [forecastDateOne, setForecastDateOne] = useState('')
  const [forecastDateTwo, setForecastDateTwo] = useState('')
  const [forecastDateThree, setForecastDateThree] = useState('')

  return (
    <div className="App" style={{backgroundImage: `url('https://homongst.sirv.com/bg.jpg')`}}>
      <MainUI
       placeName={placeName}
       setPlaceName={setPlaceName}
       cityName={cityName}
       setCityName={setCityName}
       stateName={stateName}
       setstateName={setstateName}
       tempIcon={tempIcon}
       setTempIcon={setTempIcon}
       temp={temp}
       setTemp={setTemp}
       condition={condition}
       setcondition={setcondition}
       updated={updated}
       setUpdated={setUpdated}
       aqi={aqi}
       setAqi={setAqi}
       wind={wind}
       setWind={setWind}
       humidity={humidity}
       setHumidity={setHumidity}
       sunrise={sunrise}
       setSunrise={setSunrise}
       sunset={sunset}
       setSunset={setSunset}
       moonPhase={moonPhase}
       setMoonPhase={setMoonPhase}
       forecastDateOne={forecastDateOne}
       setForecastDateOne={setForecastDateOne}
       forecastDateTwo={forecastDateTwo}
       setForecastDateTwo={setForecastDateTwo}
       forecastDateThree={forecastDateThree}
       setForecastDateThree={setForecastDateThree}
       />
      {/* <WeatherAxios placeName={placeName} setPlaceName={setPlaceName}  /> */}
    </div>
  );
}

export default App;
