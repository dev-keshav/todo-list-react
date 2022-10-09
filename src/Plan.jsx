import React from 'react'

function Plan(props) {

  return (
    <>
        {/* {console.log("Plan")} */}
        <li className='shadow p-2 my-2 col-9 text-info'>{props.value}</li>
        <button className='btn btn-danger my-2 col-2 offset-0' onClick={()=> {props.sendData(props.id)}}>X</button>
    </>
  )
}

export default Plan;