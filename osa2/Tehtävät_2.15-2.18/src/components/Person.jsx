const Person = (props) => {
    return (
      <>
        <p>{props.name} {props.number} <button onClick={() => props.deletePerson(props.id)}>delete</button></p>
      </>
    )
  }
  
  export default Person;
  