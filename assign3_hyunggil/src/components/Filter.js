import Person from "./Person"

const Filter = ({ persons, filteredPersons, setFilteredPersons,
                filterQuery, setFilterQuery }) => {
      /**
   * Handler of filtering the search.
   * 
   * @param {} event 
   */
  const handleFilter = (event) => {
    console.log(event.target.value)
    console.log('filter begins')
    const query = event.target.value
    
    setFilterQuery(query)
  
    const filteredNames = persons.filter((person) => 
      person.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPersons(filteredNames)

    console.log('filter finished')
    console.log(persons)
  }

  return (
    <div>
        <div>
        <h2>Filter your search</h2>
        
        filter shown with <input 
                            value={filterQuery}
                            onChange={handleFilter}
                        />
    </div>
    <div>
        <h2> Filtered Customer List</h2>
        <ul>
        {filteredPersons.map((person) => 
            <Person key={person.id} person={person} />
        )}

        </ul>
    </div>
    </div>

  )
}

export default Filter;