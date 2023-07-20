import React from 'react';

const Selector = (props) => {
  return (
    <div>
      <h3 className='title is-2'>Курсы валют:</h3>
      <div className='select is-link'>
        <select multiple size='8'>
          {Object.keys(props.valutes).map(k =>
            <option onClick={() => props.setCurrentValute(k)}>{props.valutes[k].ID} - {props.valutes[k].Name}</option>)
          }
        </select>
      </div>
    </div>
  )
}

export default Selector;