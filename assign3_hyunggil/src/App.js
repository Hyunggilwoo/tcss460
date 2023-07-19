import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Person from './components/Person'
import NameInput from './components/NameInput'
import WeightInput from './components/WeightInput'
import Filter from './components/Filter'
import './App.css';
import './styles/customerList.css'

function App(props) {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: 'Hyunggil Woo',
      weight: 150,
      important: true
    },
    {
      id: 2,
      name: 'Orie Abe',
      important: false
    },
    {
      id: 3,
      name: 'Issac Granstrom',
      important: true
    }
  ])

  // const [filteredNames, setFilteredNames] = useState([])
  const [newName, setNewName] = useState('')

  const [newWeight, setNewWeight] = useState(''); 
  const [filteredPersons, setFilteredPersons] = useState(persons)
  const [filterQuery, setFilterQuery] = useState('')
  const { filter } = props;

  /**
   * Adds a person's name on the list only if it is new.
   * Optionally, user adds weight.
   * 
   * if person's name already exist, then name will not be added.
   * Person's name is required to enter but the weight is not.
   * @param {*} event 
   */
  const addPerson = (event) => {
    event.preventDefault()

    const names = persons.map((person) => person.name);
    console.log('finding array', typeof persons)
    console.log('button clicked', event.target)

    if (names.includes(newName)) {
      alert(`Server: ${newName} already exists in health record.`)
    } else if (newName.trim() === '') {
      alert('Please enter a name')
    } else {

      const personObject = {
        name: newName,
        important: Math.random() < 0.5,
        id: persons.legnth + 1
      }

      if (newWeight !== '') {
        personObject.weight = newWeight;
      }

      setPersons(persons.concat(personObject))
      setNewName('')
      setNewWeight('')
    }
  }

  return (
    <div>

      <h2>Community Health Calculator</h2>
      <form onSubmit={addPerson}>
        
        <NameInput 
          newName={newName} 
          setNewName={setNewName}
          />

        <WeightInput
          newWeight={newWeight}
          setNewWeight={setNewWeight}
          />


        <div>
          <button type="submit">add</button>
        </div>

        <div>
          <h2> Health Customer List </h2>
          <ul className="customer-List">
            {persons.map(person => 
              <Person key={person.id} person={person} />
              
            )}
            
          </ul>
        </div>

      </form>

      <form onSubmit={(event) => event.preventDefault()}>
        {/* <div>
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
        </div> */}
        <Filter
          persons={persons}
          filteredPersons={filteredPersons}
          setFilteredPersons={setFilteredPersons} 
          filterQuery={filterQuery}
          setFilterQuery={setFilterQuery}
        />
        <button type="submit"> Search </button>
      </form>
    </div>
  );
}

export default App;
