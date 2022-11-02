import React from "react";

export default function Alert(props) {
    const capatilize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1); 
    }
    
  return (
    props.Alert && (
      <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capatilize(props.Alert.type)}</strong>: {props.Alert.msg}
      </div>
    )
  );
}
