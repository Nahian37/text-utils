import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaking...","success");
    }    
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard","success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed","success");
    }
    const wordCount = (sentence)=>{
        let count = sentence.trim().length;
        if(count>0){
            let textArray = sentence.trim().split(/[ ]+/);
           count = textArray.length;
        }else{
            count=0;
        }
        return count;
    }
    const [text, setText] = useState("");
  return (
    <>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        <button type="submit" onClick={handleCopy} className="btn btn-success mx-2 my-2">Copy Text</button>
        <button type="submit" onClick={handleExtraSpaces} className="btn btn-secondary mx-2 my-2">Remove Spaces</button>
    </div>
    <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h2>Your text summary</h2>
        <p>{wordCount(text)} words and {text.length} characters</p>
        <p>{wordCount(text)*0.008} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
      
  )
}
