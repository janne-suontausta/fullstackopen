import StatisticsLine from "./StatisticsLine";

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
        <StatisticsLine text="good" value={props.good}/>
        <StatisticsLine text="neutral" value={props.neutral}/>
        <StatisticsLine text="bad" value={props.bad}/>
        <StatisticsLine text="all" value={all}/>
        <StatisticsLine text="average" value={average}/>
        <StatisticsLine text="positive" value={positive}/>
      </div>
    )
  }

  export default Statistics;