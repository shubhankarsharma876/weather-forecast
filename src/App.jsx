import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="container mx-[auto] my-[150px] border-transparent border-2 rounded-[30px] w-6/12 bg-[#607EAA] shadow-2xl ">
      <h1 className="text-[40px] font-bold mt-10 flex justify-center text-center">
        ⛈️ Weather Forecast ☀️
      </h1>
      <div className="m-10 p-2 flex justify-center gap-3 text-[20px]  ">
        <input
          value={location}
          className="rounded-3xl w-[500px] border-black border-2 bg-transparent text-[25px]"
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div>
        <div className="location text-center  ">
          {data.name ? (
            <p className="text-2xl p-2">Location: {data.name}</p>
          ) : null}
        </div>
        <div className="top text-xl flex justify-center gap-4">
          <div className="temp text-center flex ">
            {data.main ? (
              <h1 className="flex-start">
                Temperature: {data.main.temp.toFixed()}°C
              </h1>
            ) : null}
          </div>
          <div className="description text-center flex">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom text-xl">
            <div className="flex gap-3 justify-center">
              <div className="feels text-center flex ">
                {data.main ? (
                  <p className="bold">
                    Feels Like: {data.main.feels_like.toFixed()}°C
                  </p>
                ) : null}
              </div>
              <div className="humidity text-center">
                {data.main ? (
                  <p className="bold">Humidity: {data.main.humidity}%</p>
                ) : null}
              </div>
            </div>
            <div className="wind text-center pb-10">
              {data.wind ? (
                <p className="bold">
                  Wind Speed: {data.wind.speed.toFixed()} KPH
                </p>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
