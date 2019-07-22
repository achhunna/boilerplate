import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Stock from '../components/stock';

const mapStateToProps = (state) => {
  return {
    stock: state.stock,
    err: state.err,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

class App extends React.Component {
  render() {
    const stockElement = this.props.err
      ? (<div>{this.props.err}</div>)
      : (<div>
          <div>Stock: {this.props.stock && this.props.stock.name}</div>
          <div>Price: {this.props.stock && this.props.stock.price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</div>
      </div>);
    return(
      <div>
        {stockElement}
        <Stock />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
