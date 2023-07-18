import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter'
import Display from './Display'
import '../styles/globals.css'


function Home() {
  // country used to fetch information on all possible countries
  const [country, setCountry] = useState([])
  const [allCountries, setAllCountries] = useState([])
  const [newFilter, setNewFilter] = useState(''); // Country names : String

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
        setAllCountries(response.data)
        console.log(response.data)
      })
  }, [])

  /**
   * Filters a country name by its common name.
   * Country's common name must exist
   * @param {} event 
   */
  const handleShowCountry = (event) => {
    console.log(event.target.value)
    const newFilter = event.target.value
    setNewFilter(newFilter)

    if (newFilter) {
      console.log('Filter is working')
      const regex = new RegExp( newFilter, 'i' )
      const filteredCountries = allCountries.filter(country => country.name.common && regex.test(country.name.common))
      setCountry(filteredCountries)
      console.log('setCountry is set with Filter', filteredCountries)
    } else {
      setCountry(allCountries)
    }
  }



  return (
    <div>

      <Filter value={newFilter} onChange={handleShowCountry} />

      <div>
        <Display countries={country} setCountries={setCountry}/>
      </div>

    </div>
  );
}

export default Home;