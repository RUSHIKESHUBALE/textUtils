import React, {useState} from "react";
import propTypes from 'prop-types';

export default function TextArea(props) {

    const handleUpClick = function(){
        console.log(text);
        setText(newText);
    }
    const [text, setText] = useState("This is default text appearing!");
    let newText = text.toUpperCase();
    
    const handleOnChange = function(event){
        console.log("something changed");
        setText(event.target.value);                  // Use this line to make changes in the text area 
    }

    const handleClear = () =>{
        newText = "";
        setText(newText);
    }

    return (

        <>
        <div className="container">
            <h2>
                {props.heading}
            </h2>
            <div className="form-group">
                <textarea className="form-control" id="mybox" onChange={handleOnChange} value = {text} rows="8">{props.sent}</textarea>
                <button className = "btn btn-primary my-3" onClick={handleUpClick} >Upperize</button>
                <button className = "btn btn-primary my-3 mx-2" onClick={handleClear} >Clear all</button>
            </div>
        </div>
        <div className="container">
            <h3>     
                Your Text Summary!
            </h3>
            <p>
                {text.split(" ").length} Words and {text.length} character.
            </p>
        </div>
        </>
    )
} 

TextArea.protoTypes = {
    heading : propTypes.string
}