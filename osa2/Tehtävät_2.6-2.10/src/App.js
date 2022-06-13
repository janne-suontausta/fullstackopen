
import { useState } from 'react';
import Person from "./Person";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);

    let name = event.target.value.toLowerCase();

    if (nameFilter.length > 0) {
      let filtered = persons.filter(p => p.name.toLowerCase().includes(name));
      setFilteredPersons(filtered);
    }
    else {
      setFilteredPersons(persons);
    }
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.findIndex(p => p.name === newName) === -1 && persons.findIndex(p => p.number === newNumber) === -1) {
      const newPerson = {
        name: newName,
        number: newNumber
      };
      setPersons(persons.concat(newPerson));
    }
    else {
      alert(`${newName} or ${newNumber} is already added to phonebook`);
    }
    setNewName('');
    setNewNumber('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          filter shown with: <input value={nameFilter} onChange={handleNameFilterChange}/>
        </div>
        <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map(p => <Person key={p.name} name={p.name} number={p.number} />)}
    </div>
  )

}

export default App;
