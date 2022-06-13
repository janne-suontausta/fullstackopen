
import { useState } from 'react';
import Person from "./Person";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);
  const [newName, setNewName] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.findIndex(p => p.name === newName) === -1) {
      const newPerson = {
        name: newName,
      };
      setPersons(persons.concat(newPerson));
    }
    else {
      alert('${newName} is already added to phonebook');
    }
    setNewName('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(p => <Person key={p.name} name={p.name} />)}
    </div>
  )

}

export default App;
