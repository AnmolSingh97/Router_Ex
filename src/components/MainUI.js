import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


function MainUI({placeName, setPlaceName, cityName, setCityName, stateName, setstateName, tempIcon, setTempIcon, temp, setTemp, condition, setcondition, updated, setUpdated, aqi, setAqi, wind, setWind, humidity, setHumidity, sunrise, setSunrise, sunset, setSunset, moonPhase, setMoonPhase, forecastDateOne, setForecastDateOne, forecastDateTwo, setForecastDateTwo, forecastDateThree, setForecastDateThree}) {
    function placeNameHandler(e){
        placeName = e.target.value;
        setPlaceName(placeName);
        // console.log(placeName);
    }

    function getWeatherHandler()
    {
        const params = {
            key: 'c5371861b5714ad183b81959212905',
            q: placeName,
            days: 3,
            aqi: 'yes'
            // forecast_days: 1,
            // hourly: 1 
        }
        
        axios.get('http://api.weatherapi.com/v1/forecast.json', {params})
        .then(response => {
            const apiResponse = response.data;
            setCityName(apiResponse.location.name)
            setstateName(apiResponse.location.region)
            setTemp(apiResponse.current.temp_c)
            setTempIcon(apiResponse.current.condition.icon)
            setUpdated(apiResponse.current.last_updated)
            setcondition(apiResponse.current.condition.text)
            // setAqi(apiResponse.air_quality.pm10)
            setWind(apiResponse.current.wind_kph)
            setHumidity(apiResponse.current.humidity)
            setMoonPhase(apiResponse.forecast.forecastday[0].astro.moon_phase)
            setSunrise(apiResponse.forecast.forecastday[0].astro.sunrise)
            setSunset(apiResponse.forecast.forecastday[0].astro.sunset);
            setForecastDateOne(apiResponse.forecast.forecastday[0]);
            setForecastDateTwo(apiResponse.forecast.forecastday[1]);
            setForecastDateThree(apiResponse.forecast.forecastday[2]);
        }).catch(error => {
            console.log(error);
    });
    
    }
    return (
        <div className="container main-container p-5">
            <div className="card content">
               <div className="card-body">
                   {/* search bar */}
                   <div className="row">
                       <div className="col-md-6">
                           Search :<input onChange={placeNameHandler} className="form-control mb-2" type="text" />
                           <button onClick={getWeatherHandler} className="btn border-secondary">Search</button>
                       </div>
                   </div>
                   {/* hero-content */}
                   <div className="text-center">
                       <div className="city-name">{`${cityName} ${stateName}`}</div>
                       <div className="current-temp">
                           <span className="temp-icon"><img src={tempIcon} width={'60px'} height={'60px'} alt=" " /></span>
                           <span className="temp-current">{temp}</span>
                           <span className="unit-icon">&#8451;</span>
                        </div>
                       <div className="condition-text">{condition}</div>
                       <div className="updated-on">Updated on {updated}</div>
                       {/* mini info bar */}
                       <div className="row">
                            <div className="col-md-4"></div>
                            {/* lsajkbdnkjasdbn */}
                            <div className="col-md-4">
                                <div className="row mt-4 mini-bar">
                                    <div className="col-md-4">AQI (pm10): {aqi}</div>
                                    <div className="col-md-4">Wind : {wind}km/h</div>
                                    <div className="col-md-4">Humidity : {humidity}</div>
                                </div>
                            </div>
                            {/* a;ksdjasbndkjbansd */}
                            <div className="col-md-4"></div>
                       </div>
                       {/* Astro Info bar */}
                       <div className="row">
                            <div className="col-md-4"></div>
                            {/* lsajkbdnkjasdbn */}
                            <div className="col-md-4">
                                <div className="row mt-4 astro-bar">
                                    <div className="col-md-4">Sunrise: {sunrise}</div>
                                    <div className="col-md-4">Sunset: {sunset}</div>
                                    <div className="col-md-4">Moonphase:{moonPhase}</div>
                                </div>
                            </div>
                            {/* a;ksdjasbndkjbansd */}
                            <div className="col-md-4"></div>
                       </div>
                       {/* Astro Info bar end */}
                   </div>
                   {/* hero content end */}
                   {/* Forecast */}
                   <div className="row mt-5">
                       <div className="col-md-4">
                            <div className="card w-5" style={{width: '18rem'}}>
                                <div className="card-body">
                                    <h5 className="card-title">{forecastDateOne.date}</h5>
                                    <span className="temp-icon"><img src={forecastDateOne ? forecastDateOne.day.condition.icon : ''} width={'60px'} height={'60px'} alt=" " /></span>
                                    <span className="card-text forecast-max-temp">{forecastDateOne ? forecastDateOne.day.maxtemp_c : ''}</span>
                                    <span className="card-text forecast-max-temp">&#8451; &emsp;&emsp;&emsp;&emsp;</span>
                                    <span className="card-text forecast-min-temp">{forecastDateOne ? forecastDateOne.day.mintemp_c : ''}</span>
                                    <span className="card-text forecast-min-temp">&#8451; &emsp;&emsp;&emsp;&emsp;</span>
                                    <p className="card-text forecast-condition">{forecastDateOne ? forecastDateOne.day.condition.text : ''}</p>
                                </div>
                            </div>
                       </div>
                       <div className="col-md-4">
                            <div className="card w-5" style={{width: '18rem'}}>
                                <div className="card-body">
                                <h5 className="card-title">{forecastDateTwo.date}</h5>
                                    <span className="temp-icon"><img src={forecastDateTwo ? forecastDateTwo.day.condition.icon : ''} width={'60px'} height={'60px'} alt=" " /></span>
                                    <span className="card-text forecast-max-temp">{forecastDateTwo ? forecastDateTwo.day.maxtemp_c : ''}</span>
                                    <span className="card-text forecast-max-temp">&#8451; &emsp;&emsp;&emsp;&emsp;</span>
                                    <span className="card-text forecast-min-temp">{forecastDateTwo ? forecastDateTwo.day.mintemp_c : ''}</span>
                                    <span className="card-text forecast-min-temp">&#8451; &emsp;&emsp;&emsp;&emsp;</span>
                                    <p className="card-text forecast-condition">{forecastDateTwo ? forecastDateTwo.day.condition.text : ''}</p>
                                </div>
                            </div>
                       </div>
                       <div className="col-md-4">
                            <div className="card w-5" style={{width: '18rem'}}>
                                <div className="card-body">
                                <h5 className="card-title">{forecastDateThree.date}</h5>
                                    <span className="temp-icon"><img src={forecastDateThree ? forecastDateThree.day.condition.icon : ''} width={'60px'} height={'60px'} alt=" " /></span>
                                    <span className="card-text forecast-max-temp">{forecastDateThree ? forecastDateThree.day.maxtemp_c : ''}</span>
                                    <span className="card-text forecast-max-temp">&#8451; &emsp;&emsp;&emsp;&emsp;</span>
                                    <span className="card-text forecast-min-temp">{forecastDateThree ? forecastDateThree.day.mintemp_c : ''}</span>
                                    <span className="card-text forecast-min-temp">&#8451; &emsp;&emsp;&emsp;&emsp;</span>
                                    <p className="card-text forecast-condition">{forecastDateThree ? forecastDateThree.day.condition.text : ''}</p>
                                </div>
                            </div>
                       </div>
                   </div>

                   {/* Forecast end */}
               </div>
            </div>
        </div>
    )
}

export default MainUI
