import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/style.css'


import { PersonsDetails } from './components/PersonsDetails'

function App() {
  const [value, setValue] = useState("")

  /* const filterHandle = (e) => {
    setValue(e.target.value)
    let val = value;
    const persons = PersonsDetails.filter(item => {
      if(item.name.toLowerCase().includes(val.toLocaleLowerCase())){
        return item.name
      }
    })

    console.log(persons)
  }
 */

 useEffect(() => {
  const person = PersonsDetails.filter(item => item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
  console.log("person", person)
 },[value])



  return (
    <>
      <div className="box-search">   
        <h3>Search....</h3>     
        <form>
            <input 
            type="text" 
            className='form-control' 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder='Search....' />
        </form>

        {PersonsDetails.filter(person => {
          if(person.name.toLowerCase().includes(value.toLocaleLowerCase())){
            return person.name
          }
        }).map((person, index) => <p key={index}>{person.name}</p>)

        }
      </div>
    </>
  );
}

export default App;
