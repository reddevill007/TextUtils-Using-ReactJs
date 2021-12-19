import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState('');

    // text = "Change text" --> This is the wrong way to change state
    // setText("Change text") --> This is the right way to change state
    return (
        <>
            <div className="container">
                <h2>{props.heading}</h2>
                <div className="my-3">
                    <textarea value={text} onChange={handleOnChange} className="form-control" id="myBox" rows="8"></textarea>
                </div>
                <div className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</div>
                <div className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</div>
            </div>
            <div className="container my-4">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p className='preview'>{text}</p>
            </div>
        </>
    )
}
