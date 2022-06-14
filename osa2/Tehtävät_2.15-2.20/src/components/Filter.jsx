const Filter = (props) => {
    return (
        <div>
            filter shown with: <input value={props.name} onChange={props.filterChange}/>
        </div>
    )
  }
  
  export default Filter;
