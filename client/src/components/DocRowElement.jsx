import React from 'react';

const DocRowElement = (props) => {
  return (
      <div>
       
        <tr> {props.name}</tr>
        <button onClick={props.onEditDocClick}>Edit Doc</button>
        <button onClick={props.onDeleteDocClick}>Delete Doc</button>
      </div>
  )
}

export default DocRowElement;