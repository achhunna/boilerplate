import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import Stock from './stock';

const mapStateToProps = (state) => {
  return {
    data: state.data,
    stock: state.stock
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateName: (name) => dispatch(actions.updateName(name))
  }
}

class App extends React.Component {

  componentDidMount() {
    setTimeout(() => this.props.updateName('Mali'), 3000);
  }

  render() {
    return(
      <div>
        Name: {this.props.data.name} <br />
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
