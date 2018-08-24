import React from 'react';

const DocRowElement = (props) => {
  return (
    <div style={{ border: '1px solid black', marginBottom: '15px', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto'}}>

        <tr style={{fontSize: '1.5em', }}> {props.name}</tr>
        <button onClick={props.onEditDocClick}>Edit Doc</button>
        <button onClick={props.onDeleteDocClick}>Delete Doc</button>
      </div>
  )
}

export default DocRowElement;