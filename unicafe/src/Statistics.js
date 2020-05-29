import React from 'react'
import Statistic from "./Statistic"
const Statistics = ({ statistics }) => {
    return (
        <div>
            <h1>statistics</h1>
            <table>
                <tbody>
                    <Statistic text="good" value={statistics.good}></Statistic>
                    <Statistic text="neutral" value={statistics.neutral}></Statistic>
                    <Statistic text="bad" value={statistics.bad}></Statistic>
                    <Statistic text="all" value={statistics.all}></Statistic>
                    <Statistic text="average" value={statistics.average}></Statistic>
                    <Statistic text="positive" value={statistics.positive}></Statistic>
                </tbody>
            </table>
        </div>
    )
}

export default Statistics