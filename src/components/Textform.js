import React, { useState } from 'react'


export default function Textform(props) {
    const handleUpclick = () => {
        console.log("Uppercase was clicked");
        setText("You have clicked on handleUpclick");
        // let newText = text.toUpperCase();
        // setText(newText);
    }
    const handleonchange = (event) => {
        console.log("Lowercase was clicked");
        // let newText = text.toLowerCase();
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    // setText("new text");
    return (
        <div>
            <>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="myBox" className="form-label">Example textarea</label> <br /> */}
                    <textarea className="form-control" value={text} onChange={handleonchange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpclick}>Convert to Uppercase</button>
            </>
        </div>
    )
}
