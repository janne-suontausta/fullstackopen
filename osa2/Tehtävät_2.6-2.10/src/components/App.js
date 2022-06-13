
import { useState } from 'react';
import Filter from "./Filter"
import Persons from "./Persons";
import PersonForm from "./PersonForm";

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
      let newPersons = persons.concat(newPerson);

      setPersons(newPersons);
      setFilteredPersons(newPersons);
    }
    else {
      alert(`${newName} or ${newNumber} is already added to phonebook`);
    }
    setNewName('');
    setNewNumber('');
    setNameFilter('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter name={nameFilter} filterChange={handleNameFilterChange} />
      <h2>Add a new</h2>
      <PersonForm name={newName} nameChange={handleNameChange} number={newNumber} numberChange={handleNumberChange} addPerson={addPerson}/>
      <h2>Numbers</h2>
      <Persons persons={filteredPersons}/>
    </div>
  )

}

export default App;
