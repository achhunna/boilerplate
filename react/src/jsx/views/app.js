import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Stock from '../components/stock';

const mapStateToProps = (state) => {
  return {
    data: state.data,
    stock: state.stock
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

class App extends React.Component {
  render() {
    return(
      <div>
        Stock: {this.props.stock && this.props.stock.ticker} <br />
        Company: {this.props.stock && this.props.stock.name} <br />
        Price: {this.props.stock && this.props.stock.price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')} <br />
        Market Cap: {this.props.stock && this.props.stock.marketCap.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}
        <Stock />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
