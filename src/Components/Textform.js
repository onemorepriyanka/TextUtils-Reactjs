import React from 'react'
import { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("");
    function handleChange(){
        // let newtext = text.toUpperCase();
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase", 'success');
    }
    function handleChange2(){
        // let newtext = text.toUpperCase();
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase", 'success')
    }
    function handleClear(){
        // let newtext = text.toUpperCase();
        setText('');
        props.showAlert("Text Cleared", 'success')
    }
    function handleValue(e){
        console.log(e);
        setText(e.target.value);
    }
    function countWord(text){
        let newArr = text.split(" ");
        let count = 0;
        newArr.forEach((e)=>{
            if(e!=="") {count++;}
        })
        return count;
    }
    return (
    <div className={`text-${props.mode === 'dark'?'light':'dark'}`} style={{backgroundColor:props.mode==='dark'?'#234665':'white'}}>
        <div className="container">
            <div className="mb-3" >
                <h1 >Enter the text here </h1>
               <textarea className="form-control" value = {text} onChange = {handleValue} style={{backgroundColor:props.mode==='dark'?'grey':'white'}}id="exampleFormControlTextarea1" rows="8"></textarea>
               <button className="btn btn-primary my-2 " onClick={handleChange}>Convert to uppercase</button>
               <button className="btn btn-primary my-2 mx-2" onClick={handleChange2}>Convert to lowercase</button>
               <button className="btn btn-primary my-2 mx-2" onClick={handleClear}>Clear text</button>
            </div>
        </div>
        <div className="container">
            <h1>Text Summary</h1>
            <p>{countWord(text)} Word and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
        </div>
        <div className="container">
            <h3>Preview</h3>
            <p>{text}</p>
            {/* <p>{text.length>0?text:"Enter something to preview it here"}</p> */}
        </div>
    </div>
    )
}
