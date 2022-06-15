import Person from "./Person";

const Persons = (props) => {
    return (
      <>
        {props.persons.map(p => <Person key={p.name} name={p.name} number={p.number} deletePerson={props.deletePerson} id={p.id}/>)}
      </>
    )
  }
  
  export default Persons;