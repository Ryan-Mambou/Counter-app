import React from 'react'

function Counter({onDelete, onIncrement, onDecrement, counter}) {

    const formatCount = () => {
        return counter.value === 0 ? 'Zero' : counter.value;
    }

    function getBadgeClass() {
        let classes = 'badge p-2 badge-';
        classes += counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

  return (
    <div className='m-2 row d-flex align-items-center'>
        <div className="col-1"><span className={getBadgeClass()}>{formatCount()}</span></div>
        <div className="col"> <button
        onClick={() => {onIncrement(counter)}}
        className='btn btn-secondary btn-sm m-2'
        >+</button>
        <button
        onClick={() => {onDecrement(counter)}}
        className='btn btn-secondary btn-sm m-2'
        disabled={counter.value === 0 ? 'disabled' : ''}
        >-</button>
        <button className="btn btn-danger" 
        onClick={() => {onDelete(counter.id)}}>X</button>
        </div>
    </div>
  )

}

export default Counter