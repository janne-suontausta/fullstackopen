const Total = ({parts}) => {
    const total = parts.reduce( (acc, part) => {
      return acc + part.exercises;
    }, 0);

    return (
      <div>
        <p>total of {total} exercises</p>
      </div>
    )
  }

  export default Total;