import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState } from 'react';
import './App.css';
import axios from 'axios';

import Header from './components/Header';
import CityInput from './components/CityInput';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';


function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetchedCity, setFetchedCity] = useState('');

  // function to fetch weather data  
  const fetchWeatherData = async (city) => {
    try {
      // Set loading
      setLoading(true);

      setError('');
      // fetch weather data from the API
      const response = await axios.get(`https://goweather.herokuapp.com/weather/${city}`);
      console.log(`[${response.status}] Fetching weather data for city: ${city}`, response.data);
      if (response.status === 200) {
        setFetchedCity(city);
        setWeatherData(response.data);
      }
    } catch (error) {
      if (error.status === 404) {
        setError('City not found');
        setWeatherData(null);
      } else {
        setError('Error fetching weather data');
      }
    } finally {
      // Reset loading state
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  // Handle button click
  const handleFetchWeather = () => {
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }
    fetchWeatherData(city);
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleFetchWeather();
    }
  };

  return (
    <div className="App">
        <Header />
        <CityInput
          city={city}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          onFetch={handleFetchWeather}
          loading={loading}
        />
        <ErrorMessage message={error} />
        {weatherData && <WeatherCard data={weatherData} city={fetchedCity} />}

    </div>
  );
}

export default App;
