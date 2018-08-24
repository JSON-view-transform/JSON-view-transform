import React, { Component } from 'react';
import axios from 'axios';
import DocTitle from '../components/DocTitle';
import { connect } from 'react-redux';
import { pasteData} from '../actions/actions';
import IsObject from '../components/IsObject';
import IsArray from '../components/IsArray';
import Primitive from '../components/Primitive';

import {default_code} from '../constants.js';

const mapDispatchToProps = dispatch => ({
  dispatch
});

class EditDoc extends Component{
  constructor(props) {
    super(props)

    this.state = {
      code: default_code,
      data: '',
      processed: '',
    }
  }

  handleOnchange =(e) => {
    this.setState({code: e.target.value})
  }

  pasteFromClipBoard = () => {
    navigator.clipboard.readText()
       .then(text => {
             this.setState({data: JSON.parse(text)})
       })
      .then(() => this.props.dispatch(pasteData(this.state.data)))
      .catch(err => {
        console.log('Something went wrong', err);
      })
  }

  // to do: runCode, utilize the post request to make the web worker
  runCode = () => {
    // produce web worker in file
    const body = {json_data: this.state.data, transform_code: this.state.code};
    axios.post('/worker/write_worker', body).then(res => {
      // create web worker
      const worker = new Worker('worker/worker.js');
      // define worker event handler (which needs to delete the worker)
      worker.onmessage = event => {
        console.log(event.data);
        this.setState({processed: event.data})
        worker.terminate();
      };
    }).catch(error => {
      console.log('error:');
      console.log(error);
    });
  }

  viewMyDocs = () => {
    console.log('write function to redirect to mydocs page')
  }

  save = () => {
    console.log('save code')
  }
  uploadFromFile = () => {
    console.log('upload from file')
  }
  // componentDidMount(){

  //   this.setState({processedArr: processedMap})
  // }

  render() {
    let obj = this.state.data;

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
    let processedData = this.state.processed;
    let processedMap;
    if (processedData) {

      let processedArr = Object.keys(processedData)
      processedMap = processedArr.map((e, i) => {
        if (processedData[e] instanceof Array) {
          return <IsArray key={i} name={e} data={processedData[e]} collapsed={true} indent={1} />;
        } else if (processedData[e] !== null && typeof processedData[e] === 'object') {
          return <IsObject key={i} name={e} data={processedData[e]} collapsed={true} indent={1} />;
        } else {
          return <Primitive key={i} name={e} data={processedData[e]} indent={1} />;
        }
      })
    }



    return (
      <div className="editDocContainer">
        <div className="docTitle" style={{fontSize: '2em', marginBottom: '20px'}}>
          <DocTitle dispatch={this.props.dispatch}/>
        </div>
        <div className="myDocs" style={{float: 'left'}}>
          <button className="viewMyDocs" onClick={this.viewMyDocs}>View My Docs</button>
        </div>
        <div className="pasteButton" style={{marginBottom: '25px'}}>
          <button className="paste" onClick={this.pasteFromClipBoard}> Paste from Clipboard</button>
          <button className="upload" onClick={this.uploadFromFile}> Upload JSON from file</button>

        </div>
        <div className="viewContainer">
          <div className="jsonView" style={{marginBottom: '10px'}}>
            <button className="save" onClick={this.save}>Save</button>
            <h1> Json View </h1>
            {mapped}
          </div>
          <div className="processedView">
            <h1> Processed Json View</h1>
            {processedMap}
          </div>
        </div>

        <div className="codeEditor">
          <textarea style={{fontFamily: 'monospace'}} rows="10" cols="100" onChange={this.handleOnchange} value={this.state.code}
          />
          <button onClick={this.runCode}> Run Code </button>
        </div>
      </div>
  )
  }
}

export default connect(mapDispatchToProps)(EditDoc);
