import React, { useState, useEffect } from "react";
import {LoadImages} from './api'
import { Link } from 'react-router-dom';

function Home(props){
    const [query, setQuery] = useState()
    const apiData = LoadImages();
    useEffect(() => {
        setQuery(apiData.data);
    } , [apiData])
    if(props.loggedIn == 1){
        return (
            <div className="col-6 mx-auto py-5 justify-content-center">
            <Link to="/">Logout</Link> 
                <h1 className="text-center">Welcome</h1>
                <div className="text-center pt-5">
                {query && <BarChart data={query} />}
                <p className="mt-4">Here's the data coming from API</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className="col-3 mx-auto py-5">
                Session expired login again to continue. <Link to="/">Click here</Link> to login
            </div>
        );
    }
}
const Chart = ({children, width, height}) => (
  <svg
    viewBox={`0 0 ${width} ${height}`}
    width={width}
    height={height}
  >
    {children}
  </svg>
)

const Bar = ({x, y, width, height}) => (
  <rect
    x={x}
    y={y}
    width={width}
    height={height}
    fill={'#0ac'}
  />
)

const BarChart = ({ data }) => {
  const itemWidth = 20
  const itemMargin = 5
  const dataLength = data.length
  const massagedData = data.map(datum =>
    Object.assign({}, datum, { repos: datum.stat * 0.25 })
  )
  const mostRepos = massagedData.reduce((acc, cur) => {
    const { repos } = cur
    return repos > acc ? repos : acc
  }, 0)
  const chartHeight = mostRepos
  return (
    <Chart
      width={dataLength * (itemWidth + itemMargin)}
      height={chartHeight}
    >
      {massagedData.map((datum, index) => {
        const itemHeight = datum.stat
        return (
          <Bar
            key={datum.month}
            x={index * (itemWidth + itemMargin)}
            y={chartHeight - itemHeight}
            width={itemWidth}
            height={itemHeight}
          />
        )
      })}
    </Chart>
  )
}

export default Home;
