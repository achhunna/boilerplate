import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (url) => dispatch(actions.getData(url)),
  }
}

const API_URL = 'https://financialmodelingprep.com/api/v3/stock/real-time-price/';

class Stock extends React.Component {

  constructor() {
    super();
    this.state = {
      ticker: 'aapl'
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getData() {
    this.props.getData(API_URL + `${this.state.ticker}`);
  }

  handleChange(e) {
    this.setState({
      ticker: e.target.value
    });
  }

  handleClick() {
    this.getData();
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.ticker} onChange={this.handleChange} />
        <button onClick={this.handleClick}>
          Get Stock
        </button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stock);
