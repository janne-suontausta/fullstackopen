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
        <table>
            <tbody>
                <tr>
                    <td>good</td>
                    <td>{props.good}</td>
                </tr>
                <tr>
                    <td>neutral</td>
                    <td>{props.neutral}</td>
                </tr>
                <tr>
                    <td>bad</td>
                    <td>{props.bad}</td>
                </tr>
                <tr>
                    <td>all</td>
                    <td>{all}</td>
                </tr>
                <tr>
                    <td>average</td>
                    <td>{average}</td>
                </tr>
                <tr>
                    <td>positive</td>
                    <td>{positive}</td>
                </tr>
            </tbody>
        </table>
      </div>
    )
  }

  export default Statistics;