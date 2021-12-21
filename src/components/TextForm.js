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

    const handleClrClick = ()=>{
        setText('')
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const handleCopy = ()=>{
        var newText = document.getElementById('myBox');
        newText.select();
        navigator.clipboard.writeText(newText.value)
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }


    const [text, setText] = useState('');

    // text = "Change text" --> This is the wrong way to change state
    // setText("Change text") --> This is the right way to change state
    return (
        <>
            <div className="container">
                <h2>{props.heading}</h2>
                <div className="my-3">
                    <textarea value={text} onChange={handleOnChange} className="form-control" id="myBox" rows="8" style={{backgroundColor: props.mode === 'dark' ? 'grey': 'white', color: props.mode === 'dark' ? 'white': 'black'}}></textarea>
                </div>
                <div className="btn btn-primary m-1" onClick={handleUpClick}>Convert to Uppercase</div>
                <div className="btn btn-primary m-1" onClick={handleLowClick}>Convert to Lowercase</div>
                <div className="btn btn-primary m-1" onClick={handleExtraSpaces}>Remove Extra Spaces</div>
                <div className="btn btn-primary m-1" onClick={handleClrClick}>Clear Text</div>
                <div className="btn btn-primary m-1" onClick={handleCopy}>Copy Text</div>
            </div>
            <div className="container my-4">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p className='preview'>{text.length>0 ? text : "Enter something in the textarea to preview it here"}</p>
            </div>
        </>
    )
}
