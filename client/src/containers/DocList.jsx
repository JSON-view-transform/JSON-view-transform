import React, { Component } from 'react';
import DocRowElement from '../components/DocRowElement';

export default class DocList extends Component {
  constructor(props){
    super(props)
    this.state = {
      yourDocs: null
    }
  }
  componentDidMount(){
    //axios call to get docs for user
    //this.setState({yourDocs: })
  }

  render(){
    //loop through yourDocs to map the arr with doc title and create DocRowElement with title and pass down on props
    return(

    <div className="yourDocsList">
    <h1> Your Docs</h1>
      <td>
        <DocRowElement key={1} onEditDocClick={this.onEditDocClick} onDeleteDocClick={this.onDeleteDocClick} name="test2" />
        <DocRowElement key={2} onEditDocClick={this.onEditDocClick} onDeleteDocClick={this.onDeleteDocClick} name="test1" />
        <DocRowElement key={3} onEditDocClick={this.onEditDocClick} onDeleteDocClick={this.onDeleteDocClick} name="test6" />
        <DocRowElement key={4} onEditDocClick={this.onEditDocClick} onDeleteDocClick={this.onDeleteDocClick} name="test5" />
        <DocRowElement key={5} onEditDocClick={this.onEditDocClick} onDeleteDocClick={this.onDeleteDocClick} name="test4" />
      </td>
    </div>
    )
  }
}