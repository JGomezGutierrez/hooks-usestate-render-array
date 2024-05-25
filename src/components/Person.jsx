
import React from 'react'

export const Person = (props) => {
  return (
    <div>
        <div className='row'>
            <div>
                <img src={props.img} alt={props.name} />
            </div>
            <div>
                <h3>{props.name}</h3>
            </div>
            <div>
                <h3>{props.role}</h3>
            </div>
      </div>
    </div>
    
  )
}

