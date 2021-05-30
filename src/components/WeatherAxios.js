import React from 'react'
import axios from 'axios'

function WeatherAxios({placeName, setPlaceName}) {
    
    function placeNameHandler(e){
        placeName = e.target.value;
        setPlaceName(placeName);
        // console.log(placeName);
    }

    function getWeatherHandler(){
    const params = {
        access_key: '8a52be27c0a588fb8cc6399aae47f0be',
        query: placeName
    }
    
    axios.get('http://api.weatherstack.com/current', {params})
    .then(response => {
        console.log(response.data);
        const apiResponse = response.data;
        console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
    }).catch(error => {
        console.log(error);
    });
    
    }

function getForecastHandler(){
    const params = {
        key: 'c5371861b5714ad183b81959212905',
        q: placeName,
        days: 7
        // forecast_days: 1,
        // hourly: 1 
    }
    
    axios.get('http://api.weatherapi.com/v1/forecast.json', {params})
    .then(response => {
        console.log(response.data);
        const apiResponse = response.data.current.temp_c;
        console.log(apiResponse)
    }).catch(error => {
        console.log(error);
    });
    
    }
    
    return (
        <div>
            <input onChange={placeNameHandler} type="text" />            
            <br />
            <button onClick={getWeatherHandler}>Get Weather</button>
            <br />
            <br />
            <button onClick={getForecastHandler}>Get Forecast</button>
        </div>
    )
}

export default WeatherAxios
