const CountryList = ({country, showCountry}) => {

    return (
        <div>
            <p key={country.name.official}>{country.name.common} <button onClick={() => showCountry(country)}>show</button></p>
        </div>
    )
  }
  
  export default CountryList;