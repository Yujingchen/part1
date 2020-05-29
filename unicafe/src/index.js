import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from "./Button"
import Statistics from "./Statistics"
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + bad + neutral
  const average = all === 0 ? 0 : (good - bad) / all
  const positive = all === 0 ? 0 : good / all * 100

  const statistics = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: all,
    average: average,
    positive: `${positive} %`
  }

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick}>good</Button>
      <Button handleClick={handleNeutralClick}>neutral</Button>
      <Button handleClick={handleBadClick}>bad</Button>
      <Statistics statistics={statistics}></Statistics>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)