import React from 'react'
import { useState } from 'react'
import { Person } from './Person';

export const Persons = () => {

  const [ persons, setPersons ] = useState([
    {
      id: 1,
      name: "Marlon Gomez",
      role: "Backend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar5.png",
    },
    {
      id: 2,
      name: "Andrea",
      role: "Frontend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar3.png",
    },
    {
      id: 3,
      name: "Martin",
      role: "UI/UX Designer",
      img: "https://bootdey.com/img/Content/avatar/avatar4.png",
    },
  
  ]);

  return (
    <div>
      <h2>IT Team</h2>
      <div className='container d-flex justify-center'>
        <div className='d-flex flex-row'>
        {persons.map((person) => {
            return (
            <div>
                <Person
                key={person.id}
                name={person.name}
                role={person.role}
                img={person.img}
                />
            </div>
            )
        })}
        </div>
      </div>
      
    </div>
  )
}


