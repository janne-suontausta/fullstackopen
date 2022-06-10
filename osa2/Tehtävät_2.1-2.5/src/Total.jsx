const Total = (props) => {
    let exercises = 0;
    props.parts.forEach(p => exercises += p.exercises);
    return (
      <div>
        <p>total of {exercises} exercises</p>
      </div>
    )
  }

  export default Total;