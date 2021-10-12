import React from 'react'

const Graph = (props) => {
    const { coin } = props;
    console.log(coin);
    return (
        <div>
            <h1>GRAPH for {coin.symbol}</h1>
        </div>
    )
}

export default Graph
