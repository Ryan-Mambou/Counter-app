import React from 'react';
import Counter from './Counter';

function Counters({counters, onIncrement, onDelete, onReset, onDecrement}) {

  return (
    <div>
        <button className="btn btn-primary m-2" onClick={onReset}>Reset</button>
        {counters.map(counter => (
            <Counter key={counter.id} 
            valueProp={counter.value} 
            counter={counter}
            onDelete={onDelete} 
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            />
        ))}
    </div>
  )
}

export default Counters