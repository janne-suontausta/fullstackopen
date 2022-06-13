const Country = ({country}) => {
    let values = Object.values(country.languages);
    let keys = Object.getOwnPropertyNames(country.languages);

    let languages = [];
    for (let i = 0; i < keys.length; i++) {
        languages.push({key: keys[i], value: values[i]});
    }

    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>capital {country.capital}</p>
            <p>capital {country.area}</p>
            <h3>languages</h3>
            <ul>
                {languages.map(l => <li key={l.key}>{l.value}</li>)}
            </ul>
            <img src={country.flags.png}></img>
        </div>
    )
  }
  
  export default Country;
