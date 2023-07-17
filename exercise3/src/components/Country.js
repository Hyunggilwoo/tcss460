const Country = ({ name, capital, languages, flag }) => {
    // const { name, capital, languages, flag } = countryData

    const languagesList = languages ? Object.values(languages) : [];

    return (
        <div>
            <h3>{name ? name.common : 'No Country Selected'}</h3>
            <p>Capital: {capital}</p>
            <p>Languages:</p>
            <ul>
                {languagesList.map((lang, index) => <li key={index}>{lang}</li>)}
            </ul>
            <p><img src={flag ? flag : ''} alt="Country Flag"/>{flag}</p>
        </div>
        
    )
    // Need to return the list of languages used in each country
}


export default Country