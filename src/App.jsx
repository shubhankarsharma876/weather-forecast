import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=8b012c901bf163a9fdf5e605be074fe4`;

 

  const searchLocation = async (e) => {
    if (e.key == "Enter") {
      await fetch(url).then((res) => {
        setData(res.data);
        console.log(city);
      });

      setCity("");
    }
  };

  const handleClick = async () => {
    await fetch(url)
      .then((res) => {
        setData(res.data);
        console.log(city);
      })
      .catch((err) => console.log(err));

    setCity("");
  };

  return (
    <div>
      <h1 className="text-[40px] font-bold mt-6 flex justify-center">
        ⛈️ Weather Forecast ☀️
      </h1>
      <div className="m-8 p-8 flex justify-center gap-3 ">
        <input
          type="text"
          value={city}
          className="rounded-xl w-[500px] border-black border-2 bg-transparent"
          placeholder="Enter city name"
          onChange={event => setCity(event.target.value)}
          onKeyUp={searchLocation}
        ></input>
        <button
          className="text-2xl border-2 rounded-xl p-1 cursor-pointer border-black bg-sky-500 hover:bg-sky-700 "
          onClick={handleClick}
        >
          Search
        </button>
      </div>

      
      <div>
        <div className="header text-center text-2xl ">{`CityName: ${data.name}  `}</div>
        <div className="middle flex gap-5 justify-center">
          <div className="Day Date text-center">Date/Date:</div>
          <div className="description text-center">Weather:</div>
        </div>
        <div className="lower flex gap-5 justify-center">
          <div className="temperature text-cente">Temperature:</div>
          <div className="humidity text-center">Humidity:</div>
        </div>
      </div>
    </div>
  );
}

export default App;
