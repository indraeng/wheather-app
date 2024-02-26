import React from 'react'
import { useWeather } from '../context/Weather'

export default function Input() {
    const weather = useWeather();
    // console.log('weather',weather)
    return (
        <>
            <input
                className='input'
                placeholder='Search here'
                value={weather.searchCity}
                onChange={(e) => weather.setSearchCity(e.target.value)} />
        </>
    )
}
