let Search = (countries, substring) => {
    let filteredCountries = countries.filter(country => country.name.includes(substring))
    return filteredCountries
}

export default Search