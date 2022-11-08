import React from 'react'

const Weather = () => {
  return (
    <div>
      <div className="header text-center ...">CityName:</div>
      <div className="middle flex gap-5 justify-center">
        <div className="Day Date text-center ...">Date/Date:</div>
        <div className="description text-center ...">Weather:</div>
      </div>
      <div className="lower flex gap-5 justify-center">
        <div className="temperature text-center ...">Temperature:</div>
        <div className="humidity text-center ...">Humidity:</div>
      </div>
    </div>
  )
}

export default Weather
