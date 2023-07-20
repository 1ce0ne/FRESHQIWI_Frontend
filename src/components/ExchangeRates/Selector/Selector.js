import React from "react";

const Selector = (props) => {
  return (
    <div>
      <div class="select is-link">
        <select multiple size="8">
          {Object.keys(props.valutes).map(k =>
            <option onClick={() => props.setCurrentValute(k)}>{props.valutes[k].ID} - {props.valutes[k].Name}</option>)
          }
        </select>
      </div>
    </div>
  )
}

export default Selector;