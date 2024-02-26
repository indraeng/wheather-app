import { useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import Input from './components/Input';
import { useWeather } from './context/Weather';

function App() {
  const weather = useWeather();
  useEffect(()=>{
    //get current user location data
    weather.fetchCurrUserLocationData();
  },[])
  return (
    <div className="App">
      <h1>Weather forecast app</h1>
      <Input />
      <Button onClick={weather.fetchData} value='Search' />
      <Card />
      <Button value='Refresh' />
    </div>
  );
}

export default App;
