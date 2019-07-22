import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

class About extends React.Component {
  render() {
    return(
      <div>
        About Me
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
