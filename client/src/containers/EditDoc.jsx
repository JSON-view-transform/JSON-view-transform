import React, { Component } from 'react';
import DocTitle from '../components/DocTitle';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  dispatch
});

class EditDoc extends Component{
  constructor(props) {
    super(props)

  }

  render() {
    return <DocTitle dispatch={this.props.dispatch}/>
  }
}


export default connect(mapDispatchToProps)(EditDoc);