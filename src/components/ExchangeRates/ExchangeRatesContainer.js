import React from 'react';
import { connect } from 'react-redux';
import ExchangeRates from './ExchangeRates';
import { setValutes, toggleIsFetching, setDate, setPreviousDate } from '../../redux/valutes-reducer';
import { getValutes } from '../../api/api';
import Preloader from '../common/Preloader/Preloader';

class ExchangeRatesContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.toggleIsFetching(true);
    getValutes().then( data => {
      this.props.setValutes(data.Valute);
      this.props.setDate(data.Date);
      this.props.setPreviousDate(data.PreviousDate);
      this.props.toggleIsFetching(false);
    })
  }
  render() {
   return <div>
      <ExchangeRates {...this.props} />
   </div>
  }
}

let mapStateToProps = (state) => {
  return {
    valutes: state.valutesPage.valutes,
    date: state.valutesPage.date,
    previousDate: state.valutesPage.previousDate,
    isFetching: state.valutesPage.isFetching,
  } 
}

export default connect(mapStateToProps, {setValutes, toggleIsFetching, setDate, setPreviousDate})(ExchangeRatesContainer);