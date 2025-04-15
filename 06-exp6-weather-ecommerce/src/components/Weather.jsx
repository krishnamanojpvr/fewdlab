import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState(''); // For user input
  const [searchedCity, setSearchedCity] = useState(null); // For searched city weather

  const API_KEY = '1e3e8f230b6064d27976e41163a82b77'; // Replace with your API key

  // Default cities
  const defaultCities = [
    { name: 'Hyderabad', country: 'IN' },
    { name: 'New York', country: 'US' },
  ];

  // Fetch weather for default cities
  useEffect(() => {
    const fetchDefaultWeather = async () => {
      try {
        const weatherPromises = defaultCities.map(async (city) => {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city.name},${city.country}&appid=${API_KEY}&units=metric`
          );
          return response.data;
        });

        const weatherResults = await Promise.all(weatherPromises);
        setWeatherData(weatherResults);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDefaultWeather();
  }, [API_KEY]);

  // Fetch weather for searched city
  const fetchWeather = async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      setSearchedCity(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
    }
  };

  // Handle closing the searched city card
  const handleClose = () => {
    setSearchedCity(null);
  };

  if (loading) {
    return <div>Loading weather data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="weather-container">
      {/* Default Cities Weather */}
      <div className="row mb-4">
        {weatherData.map((data, index) => (
          <div key={index} className="col-md-6 mb-3">
            <div className="weather-widget p-3 bg-light rounded shadow-sm">
              <h3 className="mb-3">
                Weather in {data.name}, {data.sys.country}
              </h3>
              <div className="d-flex align-items-center mb-3">
                <img
                  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt={data.weather[0].description}
                  className="me-3"
                />
                <div>
                  <p className="mb-1">
                    <strong>{data.main.temp}°C</strong>
                  </p>
                  <p className="mb-0 text-capitalize">
                    {data.weather[0].description}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p>
                    <span role="img" aria-label="Feels Like">🌡️</span>{' '}
                    <strong>Feels Like:</strong> {data.main.feels_like}°C
                  </p>
                  <p>
                    <span role="img" aria-label="Humidity">💧</span>{' '}
                    <strong>Humidity:</strong> {data.main.humidity}%
                  </p>
                  <p>
                    <span role="img" aria-label="Pressure">🌫️</span>{' '}
                    <strong>Pressure:</strong> {data.main.pressure} hPa
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    <span role="img" aria-label="Wind Speed">🌬️</span>{' '}
                    <strong>Wind Speed:</strong> {data.wind.speed} m/s
                  </p>
                  <p>
                    <span role="img" aria-label="Wind Direction">🧭</span>{' '}
                    <strong>Wind Direction:</strong> {data.wind.deg}°
                  </p>
                  <p>
                    <span role="img" aria-label="Cloudiness">☁️</span>{' '}
                    <strong>Cloudiness:</strong> {data.clouds.all}%
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <iframe
                  title={`${data.name} Map`}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&q=${data.name},${data.sys.country}`}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Search for a City */}
      <div className="mb-4">
        <form onSubmit={handleSearch} className="d-flex">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="form-control me-2"
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>

      {/* Display Searched City Weather */}
      {searchedCity && (
        <div className="row">
          <div className="col-md-6">
            <div className="weather-widget p-3 bg-light rounded shadow-sm position-relative">
              {/* Close Button */}
              <button
                className="btn btn-sm btn-danger position-absolute top-0 end-0 m-2"
                onClick={handleClose}
                style={{ zIndex: 1 }}
              >
                &times;
              </button>
              <h3 className="mb-3">
                Weather in {searchedCity.name}, {searchedCity.sys.country}
              </h3>
              <div className="d-flex align-items-center mb-3">
                <img
                  src={`http://openweathermap.org/img/wn/${searchedCity.weather[0].icon}@2x.png`}
                  alt={searchedCity.weather[0].description}
                  className="me-3"
                />
                <div>
                  <p className="mb-1">
                    <strong>{searchedCity.main.temp}°C</strong>
                  </p>
                  <p className="mb-0 text-capitalize">
                    {searchedCity.weather[0].description}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p>
                    <span role="img" aria-label="Feels Like">🌡️</span>{' '}
                    <strong>Feels Like:</strong> {searchedCity.main.feels_like}°C
                  </p>
                  <p>
                    <span role="img" aria-label="Humidity">💧</span>{' '}
                    <strong>Humidity:</strong> {searchedCity.main.humidity}%
                  </p>
                  <p>
                    <span role="img" aria-label="Pressure">🌫️</span>{' '}
                    <strong>Pressure:</strong> {searchedCity.main.pressure} hPa
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    <span role="img" aria-label="Wind Speed">🌬️</span>{' '}
                    <strong>Wind Speed:</strong> {searchedCity.wind.speed} m/s
                  </p>
                  <p>
                    <span role="img" aria-label="Wind Direction">🧭</span>{' '}
                    <strong>Wind Direction:</strong> {searchedCity.wind.deg}°
                  </p>
                  <p>
                    <span role="img" aria-label="Cloudiness">☁️</span>{' '}
                    <strong>Cloudiness:</strong> {searchedCity.clouds.all}%
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <iframe
                  title={`${searchedCity.name} Map`}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&q=${searchedCity.name},${searchedCity.sys.country}`}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;