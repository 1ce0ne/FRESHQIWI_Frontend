import React, { useState } from 'react';
import Selector from './Selector/Selector';
import InformWindow from './Selector/ImformWindow/InformWindow';

const ExchangeRates = (props) => {
  return (
    <div>
      <Selector valutes={props.valutes} currentValute={props.currentValute} setCurrentValute={props.setCurrentValute} date={props.date} />
      <InformWindow valutes={props.valutes} date={props.date}
        previousDate={props.previousDate} currentValute={props.currentValute} />
    </div>
  )
}


export default ExchangeRates;