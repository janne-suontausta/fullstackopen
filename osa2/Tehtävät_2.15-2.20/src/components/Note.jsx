const Note = ({note}) => {

    const noteClass = {
        color: 'green',
        fontSize: 16,
        borderStyle: 'solid',
        borderSadius: 5,
        padding: 10,
        marginBottom: 10,
        width: 500
      }

    if (note === null) {
        return null;
    }

    return (
      <div style={noteClass}>
        {note}
      </div>
    )
}
  
export default Note;
