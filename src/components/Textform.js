import React, { useState } from 'react'


export default function Textform(props) {
    const handleUpclick = () => {
        console.log("Uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        // let newText = text.toUpperCase();
        // setText(newText);
    }

    const handleDownclick = () => {
        console.log( " lowercase was clicked" + text);
        let newtext1 = text.toLowerCase();
        setText(newtext1);
    }
    const handleonchange = (event) => {
        console.log("Lowercase was clicked");
        // let newText = text.toLowerCase();
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // setText("new text");
    return (
        <>
        <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="myBox" className="form-label">Example textarea</label> <br /> */}
                    <textarea className="form-control" value={text} onChange={handleonchange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleDownclick}>Convert to Lowercase</button>
        </div>

        <div className="container my-3">
            <h1>your text summary </h1>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p> { 0.008 * text.split(" ").length } Minutes will be required to read it</p>
            <h2>preview</h2>
            <p> {text} </p>
        </div>

        </>
    )
}
