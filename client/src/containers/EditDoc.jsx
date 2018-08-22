import React, { Component } from 'react';
import DocTitle from '../components/DocTitle';
import { connect } from 'react-redux';
import { pasteData} from '../actions/actions';
import IsObject from '../components/IsObject';
import IsArray from '../components/IsArray';
import Primitive from '../components/Primitive';


const mapDispatchToProps = dispatch => ({
  dispatch
});

class EditDoc extends Component{
  constructor(props) {
    super(props)

    this.state = {
      code: '',
      data: '',
      json: { "/auth/google": { "get": [], "get_functions": ["authenticate"] }, "/auth/google/callback": { "get": [], "get_functions": ["authenticate", "anonymous"] }, "/auth/github": { "get": [], "get_functions": ["authenticate"] }, "/auth/github/callback": { "get": [], "get_functions": ["authenticate", "anonymous"] }, "/api/logout": { "get": [], "get_functions": ["anonymous"] }, "/api/current_user": { "get": [], "get_functions": ["anonymous"] }, "/api/hello": { "get": [], "get_functions": ["anonymous"] }, "/api/createdoc": { "post": [], "post_functions": ["requireLogin", "createDoc", "createFile", "addPermittedUsers", "anonymous"] }, "/api/docSettings": { "post": [], "post_functions": ["requireLogin", "requirePermissions", "editDocTitle", "deletePermittedUsers", "addPermittedUsers", "anonymous"] }, "/api/docSettings/:id": { "get": [], "get_functions": ["requireLogin", "requirePermissions", "getDocTitle", "getPermittedUsers", "anonymous"] }, "/api/getdocuments": { "get": [[{ "authenticate": { "duration": 0.078453, "start": 13376.773424, "end": 13376.851877000001 } }, { "initialize": { "duration": 0.34915, "start": 13376.585927, "end": 13376.935077 } }, { "_cookieSession": { "duration": 0.623138, "start": 13376.380407, "end": 13377.003545000001 } }, { "jsonParser": { "duration": 0.730797, "start": 13376.344549, "end": 13377.075346 } }, { "expressInit": { "duration": 2.615654, "start": 13374.541871, "end": 13377.157524999999 } }, { "query": { "duration": 2.70348, "start": 13374.513854, "end": 13377.217334 } }], [{ "authenticate": { "duration": 0.078453, "start": 13376.773424, "end": 13376.851877000001 } }, { "initialize": { "duration": 0.34915, "start": 13376.585927, "end": 13376.935077 } }, { "_cookieSession": { "duration": 0.623138, "start": 13376.380407, "end": 13377.003545000001 } }, { "jsonParser": { "duration": 0.730797, "start": 13376.344549, "end": 13377.075346 } }, { "expressInit": { "duration": 2.615654, "start": 13374.541871, "end": 13377.157524999999 } }, { "query": { "duration": 2.70348, "start": 13374.513854, "end": 13377.217334 } }], [{ "authenticate": { "duration": 0.078453, "start": 13376.773424, "end": 13376.851877000001 } }, { "initialize": { "duration": 0.34915, "start": 13376.585927, "end": 13376.935077 } }, { "_cookieSession": { "duration": 0.623138, "start": 13376.380407, "end": 13377.003545000001 } }, { "jsonParser": { "duration": 0.730797, "start": 13376.344549, "end": 13377.075346 } }, { "expressInit": { "duration": 2.615654, "start": 13374.541871, "end": 13377.157524999999 } }, { "query": { "duration": 2.70348, "start": 13374.513854, "end": 13377.217334 } }], [{ "authenticate": { "duration": 0.078453, "start": 13376.773424, "end": 13376.851877000001 } }, { "initialize": { "duration": 0.34915, "start": 13376.585927, "end": 13376.935077 } }, { "_cookieSession": { "duration": 0.623138, "start": 13376.380407, "end": 13377.003545000001 } }, { "jsonParser": { "duration": 0.730797, "start": 13376.344549, "end": 13377.075346 } }, { "expressInit": { "duration": 2.615654, "start": 13374.541871, "end": 13377.157524999999 } }, { "query": { "duration": 2.70348, "start": 13374.513854, "end": 13377.217334 } }], [{ "authenticate": { "duration": 0.078453, "start": 13376.773424, "end": 13376.851877000001 } }, { "initialize": { "duration": 0.34915, "start": 13376.585927, "end": 13376.935077 } }, { "_cookieSession": { "duration": 0.623138, "start": 13376.380407, "end": 13377.003545000001 } }, { "jsonParser": { "duration": 0.730797, "start": 13376.344549, "end": 13377.075346 } }, { "expressInit": { "duration": 2.615654, "start": 13374.541871, "end": 13377.157524999999 } }, { "query": { "duration": 2.70348, "start": 13374.513854, "end": 13377.217334 } }], [{ "authenticate": { "duration": 0.078453, "start": 13376.773424, "end": 13376.851877000001 } }, { "initialize": { "duration": 0.34915, "start": 13376.585927, "end": 13376.935077 } }, { "_cookieSession": { "duration": 0.623138, "start": 13376.380407, "end": 13377.003545000001 } }, { "jsonParser": { "duration": 0.730797, "start": 13376.344549, "end": 13377.075346 } }, { "expressInit": { "duration": 2.615654, "start": 13374.541871, "end": 13377.157524999999 } }, { "query": { "duration": 2.70348, "start": 13374.513854, "end": 13377.217334 } }]], "get_functions": ["requireLogin", "getMyDocs", "getPermittedDocs", "anonymous"] }, "/api/document/:id": { "get": [], "get_functions": ["requireLogin", "requirePermissions", "getDocFiles", "anonymous"], "put": [], "put_functions": ["requireLogin", "requirePermissions", "saveDocumentContent", "anonymous"] }, "/api/document/40": { "get": [[{ "authenticate": { "duration": 0.057352, "start": 12244.377337, "end": 12244.434689 } }, { "initialize": { "duration": 0.346703, "start": 12244.19147, "end": 12244.538172999999 } }, { "_cookieSession": { "duration": 0.460172, "start": 12244.11599, "end": 12244.576162 } }, { "jsonParser": { "duration": 0.526659, "start": 12244.092435, "end": 12244.619094 } }, { "expressInit": { "duration": 1.044259, "start": 12243.603419, "end": 12244.647678 } }, { "query": { "duration": 1.149513, "start": 12243.519214, "end": 12244.668727 } }], [{ "authenticate": { "duration": 0.057352, "start": 12244.377337, "end": 12244.434689 } }, { "initialize": { "duration": 0.346703, "start": 12244.19147, "end": 12244.538172999999 } }, { "_cookieSession": { "duration": 0.460172, "start": 12244.11599, "end": 12244.576162 } }, { "jsonParser": { "duration": 0.526659, "start": 12244.092435, "end": 12244.619094 } }, { "expressInit": { "duration": 1.044259, "start": 12243.603419, "end": 12244.647678 } }, { "query": { "duration": 1.149513, "start": 12243.519214, "end": 12244.668727 } }], [{ "authenticate": { "duration": 0.057352, "start": 12244.377337, "end": 12244.434689 } }, { "initialize": { "duration": 0.346703, "start": 12244.19147, "end": 12244.538172999999 } }, { "_cookieSession": { "duration": 0.460172, "start": 12244.11599, "end": 12244.576162 } }, { "jsonParser": { "duration": 0.526659, "start": 12244.092435, "end": 12244.619094 } }, { "expressInit": { "duration": 1.044259, "start": 12243.603419, "end": 12244.647678 } }, { "query": { "duration": 1.149513, "start": 12243.519214, "end": 12244.668727 } }], [{ "authenticate": { "duration": 0.057352, "start": 12244.377337, "end": 12244.434689 } }, { "initialize": { "duration": 0.346703, "start": 12244.19147, "end": 12244.538172999999 } }, { "_cookieSession": { "duration": 0.460172, "start": 12244.11599, "end": 12244.576162 } }, { "jsonParser": { "duration": 0.526659, "start": 12244.092435, "end": 12244.619094 } }, { "expressInit": { "duration": 1.044259, "start": 12243.603419, "end": 12244.647678 } }, { "query": { "duration": 1.149513, "start": 12243.519214, "end": 12244.668727 } }], [{ "authenticate": { "duration": 0.057352, "start": 12244.377337, "end": 12244.434689 } }, { "initialize": { "duration": 0.346703, "start": 12244.19147, "end": 12244.538172999999 } }, { "_cookieSession": { "duration": 0.460172, "start": 12244.11599, "end": 12244.576162 } }, { "jsonParser": { "duration": 0.526659, "start": 12244.092435, "end": 12244.619094 } }, { "expressInit": { "duration": 1.044259, "start": 12243.603419, "end": 12244.647678 } }, { "query": { "duration": 1.149513, "start": 12243.519214, "end": 12244.668727 } }], [{ "authenticate": { "duration": 0.057352, "start": 12244.377337, "end": 12244.434689 } }, { "initialize": { "duration": 0.346703, "start": 12244.19147, "end": 12244.538172999999 } }, { "_cookieSession": { "duration": 0.460172, "start": 12244.11599, "end": 12244.576162 } }, { "jsonParser": { "duration": 0.526659, "start": 12244.092435, "end": 12244.619094 } }, { "expressInit": { "duration": 1.044259, "start": 12243.603419, "end": 12244.647678 } }, { "query": { "duration": 1.149513, "start": 12243.519214, "end": 12244.668727 } }]] } }
    }
  }

  handleOnchange =(e) => {
    this.setState({code: e.target.value})
  }
  signOut = () => {
    console.log('sign out')
  }
  pasteFromClipBoard = () => {
    navigator.clipboard.readText()
       .then(text => {
             this.setState({data: text})
       })
      .then(() => this.props.dispatch(pasteData(this.state.data)))
      .catch(err => {
        console.log('Something went wrong', err);
      })
  }

  runCode = () => {
    if(this.state.code){
      console.log(this.state.code)
    }
  }

  save = () => {
    console.log('saving document')
  }
  uploadFromFile = () => {
    console.log('upload from file')
  }

  render() {
    let obj = this.state.json;
    let arr = Object.keys(obj)
    let mapped = arr.map((e, i)=> {
      if (obj[e] instanceof Array) {
        return <IsArray key={i} name={e} data={obj[e]} collapsed={true} indent={1} />;
      } else if (obj[e]!== null && typeof obj[e]=== 'object') {
        return <IsObject key={i} name={e} data={obj[e]} collapsed={true} indent={1} />;
      } else {
        return <Primitive key={i} name={e} data={obj[e]} indent={1} />;
      }
    })
    return (
      <div className="editDocContainer">
        <div className="docTitle">
          <DocTitle dispatch={this.props.dispatch}/>
          <button className="signOut" onClick={this.signOut}>Sign out</button>
        </div>
        <div className="pasteButton">
          <button className="paste" onClick={this.pasteFromClipBoard}> Paste from Clipboard</button>
          <button className="upload" onClick={this.uploadFromFile}> Upload JSON from file</button>

        </div>
        <div className="JSON VIEWS">
          <button className="save" onClick={this.save}>Save</button>
          <h1> JSON VIEW COMPONENT HERE</h1>

          {mapped}
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