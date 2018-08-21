import React, { Component } from 'react';
import DocTitle from '../components/DocTitle';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  dispatch
});

class EditDoc extends Component{
  constructor(props) {
    super(props)
    this.state = {code: ''}
  }
  handleOnchange =(e) => {
    this.setState({code: e.target.value})
  }
  signOut = () => {
    console.log('sign out')
  }

  pasteFromClipBoard = (e) => {
    navigator.clipboard.readText()
    .then(text => {
      console.log(  text )
    })
    .catch(err => {
      console.log('Something went wrong', err);
    })
  }
  
  save = () => {
    console.log('saving document')
  }
  runCode = () => {
    console.log(this.state.code)
  }

  render() {
    return (
      <div className="editDocContainer">
        <div className="docTitle">
          <DocTitle dispatch={this.props.dispatch}/>
          <button className="signOut" onClick={this.signOut}>Sign out</button>
        </div>
        <div className="pasteButton">
          <button className="paste" onClick={(e) => this.pasteFromClipBoard(e)}> Paste from Clipboard</button>
        </div>
        <div className="JSON VIEWS">
          <button className="save" onClick={this.save}>Save</button>
          <h1> JSON VIEW COMPONENT HERE</h1>
          <h1> PROCESSED JSON VIEW COMPONENT HERE</h1>

        </div>
        <div className="codeEditor">
          <textarea rows="10" onChange={this.handleOnchange} value={this.state.code}
          />
          <button onClick={this.runCode}> Run Code </button>
        </div>
      </div>
  )
  }
}


export default connect(mapDispatchToProps)(EditDoc);