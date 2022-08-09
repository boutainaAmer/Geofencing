import React from 'react'
import roads from "./../roads.json"

export default function Data() {
  return (
    <div className="App">
      {roads && roads.map(({coordinates }) =>(
        <div className ="row">
        <strong>{coordinates}</strong>
        </div>
      ))}
    </div>
  )
}
