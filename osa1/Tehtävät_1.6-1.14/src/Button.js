const Buttons = (props) => {
    return (
      <button onClick={props.handleClick}>
        {props.name}
      </button>
    )
  }

  export default Buttons;