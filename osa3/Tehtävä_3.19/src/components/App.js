
import { useState, useEffect } from 'react';
import Filter from "./Filter"
import Persons from "./Persons";
import PersonForm from "./PersonForm";
import personService from "../services/persons.js";
import Note from "./Note";
import ErrorNote from "./ErrorNote";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [note, setNote] = useState(null);
  const [errorNote, setErrorNote] = useState(null);

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response);
        setFilteredPersons(response);
      })
  }, [])

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

    if (persons.findIndex(p => p.name === newName) === -1) {
      const newPerson = {
        name: newName,
        number: newNumber
      };

      personService.create(newPerson).then(response => {
        let newPersons = persons.concat(response);
        setPersons(newPersons);
        setFilteredPersons(newPersons);

        setNote(`Added ${newName}`);
        setTimeout(() => {
          setNote(null);
        }, 2000)
      })
      .catch(error => {
        setErrorNote(error.response.data.error);
        setTimeout(() => {
          setErrorNote(null);
        }, 2000)
      });
    }
    else {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one`)) {
        let person = filteredPersons.find(p => p.name === newName);
        person = {...person, number: newNumber};
  
        personService.update(person.id, person).then(response => {
          let newPersons = persons.map(p => p.id !== person.id ? p : response);
          setPersons(newPersons);
          setFilteredPersons(newPersons);
        });          
      }
    }
    setNewName('');
    setNewNumber('');
    setNameFilter('');
  };

  const deletePerson = (id) => {
    personService.deletePerson(id).then(p => {
      let newPersons = persons.filter(p => p.id !== id);
      setPersons(newPersons);
      setFilteredPersons(newPersons);  
    });
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Note note={note} />
      <ErrorNote note={errorNote} />
      <Filter name={nameFilter} filterChange={handleNameFilterChange} />
      <h2>Add a new</h2>
      <PersonForm name={newName} nameChange={handleNameChange} number={newNumber} numberChange={handleNumberChange} addPerson={addPerson}/>
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} deletePerson={deletePerson}/>
    </div>
  )

}

export default App;
