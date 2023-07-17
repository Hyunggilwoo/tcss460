import { useState, useEffect } from 'react'
import Country from './components/Country'
import Map from './components/Map.js'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import axios from 'axios'
import Search from './components/Search'
import Filter from './components/Filter'
import Display from './components/Display'
import './App.css';
import './styles/globals.css'


function App(props) {
  // country used to fetch information on all possible countries
  const [country, setCountry] = useState([])
  const [searchCountry, setSearchCountry] = useState('')


  // const [gMap, setGMap] = useState()
  const [newFilter, setNewFilter] = useState(''); // Country names : String

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  /**
   * This function filters the list of countries based on user input and displays the filtered list and a map.
   *
   * @return {list of string} Returns a list of countries that matches the regex pattern.
   */
  // let query = user input
  // while all of the country names are to be found: 
  //  if input changes, render a new list
  // fetch all of the country names
  //
  useEffect(()=> {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        console.log('promise fulfilled')
        setCountry(response.data)
      })
  }, [])

  const handleShowCountry = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)

    if (newFilter) {
      const regex = new RegExp( newFilter, 'i' )
      const filteredCountries = () => searchCountry.filter(country => country.name.match(regex))
      setCountry(filteredCountries)
    }
  }

  console.log('render', country.length, 'country')


  // Google Map functions
  const showMap = isLoaded
    ? <Map />
    : <div> Loading...</div>;


  return (
    <div>
      <h1> Your Country Lookup tool</h1>
      <Filter value={newFilter} onChange={handleShowCountry} />

      <div>
        <Display countries={country} setCountries={setCountry}/>
      </div>

      <div>

      </div>
      <div>
        <p> Show Countries in Map</p>
        {showMap}
      </div>
    </div>
  );
}

export default App;
