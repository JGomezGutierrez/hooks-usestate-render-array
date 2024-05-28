import React from 'react'
import { Person } from './Person';
import { useState } from 'react';

export const Persons = ({ persons, setPersons}) => {

  const [editingId, setEditingID] = useState(null);
  
  const [editedPerson, setEditedPerson] = useState({
    name:'',
    role:'',
    img:'',
  });

  const [isEditing, setIsEditing  ] = useState (false);

  const handlechange = (e) => {
    const { name, value} = e.target;
    setEditedPerson(prevState=>({
      ...prevState,
      [name] : value
    }))
  }

  const handleEdit = (id) => {
    //Establece el ID de la persona que queremos buscar
    setEditingID(id);
    //Activamos el estado de edicion
    setIsEditing(true);
    //Buscamos la persona a editar por medio del ID
    const personToEdit = persons.find(person => person.id === id);
    //Establecemos los datos de la persona
    setEditedPerson({...personToEdit})                                              
  }

  const handleSave = (e) => {
    // Actualizar el array de persons con los cambios que tenemos en el formulario
    setPersons(persons.map(person => person.id === editingId ? editedPerson : person ));
    // Resetear el ID a null, de la persona que ya se editó 
    setEditingID (null);
    //Resetear los datos de la persona editada
    setEditedPerson ({name: '', role: '', img:''})
    //Desactiva el estado de edicion
    setIsEditing(false);
  }

  return (
    <div>
      <h2>IT Team</h2>
      <div className='container d-flex justify-content-center '>
        <div className='d-flex flex-row'>
        {persons.map((person) => {
            return (
            <div>
                <Person
                key={person.id}
                name={person.name}
                role={person.role}
                img={person.img}
                handleEdit={() => handleEdit(person.id)}
                />
            </div>
            )
        })}
        </div>
      </div>
       <div className='mt-4 col'> {/*margin  */}
          <h2>Modificar datos</h2>
          <div className='row p-2'>
            <input type="text" name="name" value ={editedPerson.name} onChange={handlechange} placeholder='Nombre' 
            className='form-control mb-2'/>
            <input type="text" name="role" value ={editedPerson.role} onChange={handlechange} placeholder='Rol' 
            className='form-control mb-2'/>
            <input type="text" name="img"  value ={editedPerson.img}  onChange={handlechange} placeholder='Url de la Imagen'
            className='form-control mb2'/>
          </div>  
          <div className='mt-2'>
            <button className='btn btn-primary' onClick={handleSave}>Guardar</button>
          </div>
        </div>
    </div>
  )
}


