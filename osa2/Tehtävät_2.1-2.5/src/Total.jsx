const Total = (props) => {
    let exercises = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;
    return (
      <div>
        <p>Number of exercises {exercises}</p>
      </div>
    )
  }

  export default Total;