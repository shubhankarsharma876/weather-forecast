import React, { useState } from "react";

const Searchbar = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=8b012c901bf163a9fdf5e605be074fe4`;

  const handleChange = (e) => {
    setCity(e.target.value);
    console.log(city);
  };

  const searchLocation = async (e) => {
    if(e.key == 'Enter'){
      await fetch(url)
        .then((res) => setData(res.data))
    }
  };


  return (
    <div>
      <div className="m-8 p-8 flex justify-center gap-3 ">
        <input
          type="text"
          value={city}
          className="rounded-xl w-[500px] border-black border-2 bg-transparent"
          placeholder="Enter city name"
          onChange={handleChange}
          onKeyUp={searchLocation}
        ></input>
        <button
          className="text-2xl border-2 rounded-xl p-1 cursor-pointer border-black bg-sky-500 hover:bg-sky-700 "
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
