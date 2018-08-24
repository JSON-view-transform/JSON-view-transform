import React, { Component } from 'react';
import axios from 'axios';
import DocRowElement from '../components/DocRowElement';

export default class DocList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myDocs: []
    }
    
    this.onEditDocClick = this.onEditDocClick.bind(this);
    this.onDeleteDocClick = this.onDeleteDocClick.bind(this);
    this.renderDocList = this.renderDocList.bind(this);
  }
  
  componentDidMount() {
    //axios call to get docs for user
    axios.get('/api/get_docs').then(response => {
      const myDocs = response.data;
      this.setState({myDocs});
    }).catch(error => {
      console.log(error);
    });
  }
  
  onEditDocClick(doc_id) {
    this.props.history.push(`/doc/${doc_id}`);
  }
  
  onDeleteDocClick() {
    
  }
  
  renderDocList() {
    return this.state.myDocs.map(doc => {
      return <DocRowElement key={doc.doc_id} onEditDocClick={() => this.onEditDocClick(doc.doc_id)} onDeleteDocClick={this.onDeleteDocClick} name={doc.name} />;
    });
  }
  
  render() {
    return(

      <div className="yourDocsList" style={{marginBottom: '15px'}}>

    <h1> Your Docs</h1>
      <div>
        {this.renderDocList()}
      </div>
    </div>
    )
    
  }
}

