import React from 'react'
import Statistic from "./Statistic"
const Statistics = ({ statistics }) => {
    const { good, neutral, bad, all, average, positive } = statistics
    return (
        <div>
            <h1>statistics</h1>
            <table>
                <tbody>
                    <Statistic text="good" value={good}></Statistic>
                    <Statistic text="neutral" value={neutral}></Statistic>
                    <Statistic text="bad" value={bad}></Statistic>
                    <Statistic text="all" value={all}></Statistic>
                    <Statistic text="average" value={average}></Statistic>
                    <Statistic text="positive" value={positive}></Statistic>
                </tbody>
            </table>
        </div>
    )
}

export default Statistics