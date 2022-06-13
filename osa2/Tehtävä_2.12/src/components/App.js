import { useState, useEffect } from 'react';
import axios from 'axios';
import Country from "./Country";

const App = () =>  {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      })
  }, []);

  const handleFilterChange = (event) => {
    let name = event.target.value.toLowerCase();
    setFilter(name);

    if (name.length > 0) {
      var result = countries.filter(c => c.name.common.toLowerCase().includes(name.toLowerCase()));
      setFilteredCountries(result);  
    }
    else {
      setFilteredCountries([]);
    }
  };

  if (filteredCountries.length === 0) {
    return (
      <div>
        find countries: <input value={filter} onChange={handleFilterChange}/>
      </div>
    );
  }
  else if (filteredCountries.length === 1) {
    return (
      <div>
        <div>
          find countries: <input value={filter} onChange={handleFilterChange}/>
        </div>
        <Country country={filteredCountries[0]}/>
      </div>
    );
  }
  else if (filteredCountries.length <= 10) {
    return (
      <div>
        <div>
          find countries: <input value={filter} onChange={handleFilterChange}/>
        </div>
        {filteredCountries.map(c => <p key={c.name.official}>{c.name.common}</p>)}
      </div>
    );
  }
  else {
    return (
      <div>
        <div>
          find countries: <input value={filter} onChange={handleFilterChange}/>
        </div>
        <p>Too many matches, specify another filter</p>
      </div>
    );
  }
}

export default App;
