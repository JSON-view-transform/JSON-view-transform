import React from 'react';
const Primitive = (props) => {

  return <div className="primitive" style= {{ textIndent: `${props.indent}px` }}>
      {props.name} : "{props.data}"
    </div>
}
export default Primitive;