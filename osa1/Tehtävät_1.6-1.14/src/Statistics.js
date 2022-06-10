const Statistics = (props) => {
    let all = props.good + props.neutral + props.bad;
    let average = (props.good * 1 + props.neutral * 0 - props.bad * 1) / all;
    let positive = all > 0 ? props.good / all * 100 : 0;

    if (all === 0) {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    }

    return (
      <div>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p> all {all}</p>
        <p> average {average}</p>
        <p> positive {positive}</p>
      </div>
    )
  }

  export default Statistics;