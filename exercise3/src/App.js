import { useState, useEffect } from 'react'
import Country from './components/Country'
import Map from './components/Map.js'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import axios from 'axios'
import Search from './components/Search'
import Display from './components/Display'
import './App.css';
import './styles/globals.css'


function App(props) {
  // country used to fetch information on all possible countries
  const [country, setCountry] = useState([])
  const [showCountry, setShowCountry] = useState('')
  // const [showAll, setShowAll] = useState('')
  const [countryDetail, setCountryDetail] = useState(null); // Country detail object
  const [gMap, setGMap] = useState()
  const [filteredCountries, setFilteredCountries] = useState([]); // Country names : String

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
    const regex = new RegExp(event.target.value, 'i');
    const filtered = country.filter(name => regex.test(name));
    // set filtered countries
    setFilteredCountries(filtered)

    // Fetch country detail if only one country is found
    if (filtered.length === 1) {
      fetchCountryDetail(filtered[0])
    }
  }

  // Pre: Only one country is passed into this method
  const fetchCountryDetail = (countryName) => {
    console.log('Fetching Country Detail', countryName)
    console.log(typeof countryName)

    const encodedCountryName = encodeURIComponent(countryName)
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${encodedCountryName}`)
      .then(response => {
        console.log('Promise Fulfilled')
        const countryData = response.data[0];

        // store the extracted info in a state
        setFilteredCountries([countryData])
      })
      .catch(error => {
        console.error('Error fetching country data', error);
      });

  }

  useEffect(() => {
    if (filteredCountries.length === 1) {
      fetchCountryDetail(filteredCountries[0]);
    }

  }, [filteredCountries]);


  // Google Map functions
  const showMap = isLoaded
    ? <Map />
    : <div> Loading...</div>;


  return (
    <div>
      <h1> Your Country Lookup tool</h1>

      <div>
        {showAll()}
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

      </div>
      <div>
        <p> Show Countries in Map</p>
        {showMap}
      </div>
    </div>
  );
}

export default App;
