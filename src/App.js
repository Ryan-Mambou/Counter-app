import React from 'react';
import './App.css';
import Counters from './Components/Counters';
import NavBar from './Components/NavBar';
import { useState } from 'react';

function App() {
  const [counters, setCounters] = useState([
    {id: 1, value: 0},
    {id: 2, value: 0},
    {id: 3, value: 0},
    {id: 4, value: 0},
 ])
 //const [counter, setCounter] = useState({})

 const handleDelete = (id) => {
    setCounters(counters.filter(c => c.id !== id));
 }

 const handleIncrement = (counter) => {
  const countersClone = [...counters];
  const index = countersClone.indexOf(counter);
  countersClone[index].value++
  //countersClone[index] = {...counter}
  setCounters([...countersClone])
 }

 const handleDecrement = (counter) => {
  const countersClone = [...counters];
  const index = countersClone.indexOf(counter);
  countersClone[index].value--
  setCounters([...countersClone])
 }

 const handleReset = () => {
  const resetCounter = counters.map(c => {
     c.value = 0
     return c
  })
  setCounters([...resetCounter])
 }
  return (
    <>
    <NavBar numberOfCounters = {counters.filter(c => c.value !== 0).length} />
    <main className='container'>
      <Counters counters={counters} onDelete={handleDelete} 
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onReset={handleReset}/>
    </main>
    </>
  );
}

export default App;
