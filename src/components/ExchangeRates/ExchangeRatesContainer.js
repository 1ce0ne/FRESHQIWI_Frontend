import React from 'react';
import { connect } from 'react-redux';
import ExchangeRates from './ExchangeRates';
import { getValutes } from '../../redux/valutes-reducer';

class ExchangeRatesContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getValutes();
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

export default connect(mapStateToProps, {getValutes})(ExchangeRatesContainer);