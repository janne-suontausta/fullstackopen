import { useState } from 'react';
import Header from "./Header";
import Button from "./Button";
import Statistics from "./Statistics";

const App = () => {
  // tallenna napit omaan tilaansa
  const header = "give feedback";
  const statistics="statistics";
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header title={header} />
      <Button name="good" handleClick={() => setGood(good + 1)} />
      <Button name="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button name="bad" handleClick={() => setBad(bad + 1)} />
      <Header title={statistics} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
