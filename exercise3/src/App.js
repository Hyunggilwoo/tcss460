import { useState, useEffect } from 'react'
import Country from './components/Country'
import Map from './components/Map.js'
import axios from 'axios'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import './App.css';
import './styles/globals.css'


function App(props) {
  const [country, setCountry] = useState([])
  const [showCountry, setShowCountry] = useState('')
  // const [showAll, setShowAll] = useState('')
  const { countries } = props
  const [gMap, setGMap] = useState()
  const [filteredCountries, setFilteredCountries] = useState([])

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  // const hook = () => {
  //   console.log('effect')
  //   axios
  //     .get('https://studies.cs.helsinki.fi/restcountries/api/name/finland')
  //     .then(response => {
  //       console.log('promise fulfilled');
  //       const commonName = response.data.name.common
  //       setCountry(commonName)
  //       console.log(commonName)
  //     })
  //     .catch(error => {
  //       console.error('Error fetching country data', error);
  //     });
  // }

  // useEffect(hook, [])

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
  const fetchCountries = () => {
    console.log('Filtering Countries')
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        console.log('Promise fulfilled')
        const countryNames = response.data.map( country => country.name.common)
        console.log(countryNames)
        setCountry(countryNames)
      })
      .catch(error => {
        console.error('Error fetching country data', error);
      })
  }

  useEffect(fetchCountries, [])

  console.log('render', country.length, 'country')

  const handleShowCountry = (event) => {
    console.log(event.target.value)
    setShowCountry(event.target.value)

    // Filter stuff
    const regex = new RegExp(showCountry, 'i');
    const filtered = country.filter(name => regex.test(name));
    setFilteredCountries(filtered)
  }

  const searchCountry = (event) => {
    event.preventDefault();
    const regex = new RegExp(showCountry, 'i');
    const filtered = country.filter(name => regex.test(name));
    setFilteredCountries(filtered)
  }

  // Google Map functions
  const showMap = isLoaded
    ? <Map />
    : <div> Loading...</div>;


  return (
    <div>
      <h1> Your Country Lookup tool</h1>

      <div>
        {filteredCountries.length > 10
          ? <div>
              <p> Too many matches, please be more specific </p> 
              console.log('Too many matches')
            </div>
            
          : filteredCountries.map((country, index )=>
          <li key={index}>
            {country.common}
          </li>
        )}
        {/* {filteredCountries} */}
      </div>

      <div>
        <p>Find Countries</p>
        {/* <form onSubmit={searchCountry}> */}
          <input 
            value={showCountry}
            onChange={handleShowCountry}
          />
          {/* <button type="submit">Search</button> */}
        {/* </form> */}
      </div>

      <div>
        <p> Show Countries in Map</p>
        {showMap}
      </div>
    </div>
  );
}

export default App;
