import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (url, ticker) => dispatch(actions.getData(url, ticker))
  }
}

const APIURL = 'https://api.iextrading.com/1.0/stock/market/batch?types=quote'

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
    this.props.getData(APIURL + `&symbols=${this.state.ticker}`, this.state.ticker);
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
