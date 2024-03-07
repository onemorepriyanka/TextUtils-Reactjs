import React from 'react'

export default function ALert(props) {
    const capitalize = (word) =>{
         let myword = word.toLowerCase();
         return myword.charAt(0).toUpperCase() + myword.slice(1);
    }
    return (
           props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show` } role="alert">
                <strong>{capitalize(props.alert.type)}:</strong> {props.alert.message}
            </div>

    )
}
