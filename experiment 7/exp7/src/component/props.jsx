import React from 'react'

function Props(props) {
  return (
    <>
    <div style={{display:'flex', gap: '20px', margin: '0 auto', width: '50%', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '10px'}}>

      <div style={{backgroundColor: '#c0c0c0', padding: '10px', borderRadius: '5px'}}>  
    <h1>{props.name}</h1>
    <h2>{props.rollno}</h2>
    <h3>{props.course}</h3>
    <h4>{props.branch}</h4>
    </div>
  </>
) 
}

export default Props
