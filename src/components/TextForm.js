import React,{useState}  from 'react'

export default function TextForm(props){
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleDownClick = ()=>{
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleOnChange = (event)=>{
        console.log("onChange");
        setText(event.target.value);
    }
    const handleClearClick = ()=>{
       let newText = "";
       setText(newText);
       props.showAlert("Cleared!","Success");
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied!","success");
    }
    const handleremoveExtraSpaes = ()=>{
        let newtext = text.split(/[ ]+/) 
        setText(newtext.join(" "));
        props.showAlert("Extra Spaces Removed!","success");
    }
    const[text, setText] = useState('')
    // text = "jhdjfjjd" // wrong way to change the text value
    // setText("Ryjhh") // Right way to change the syntax

    const  getWordCount = (text)=>{
        return text.split(/\s+/).filter(function(n){
            return n!== '';
        }).length
    }
    return(
        <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 style={{margin : '25px' , color: props.mode==='dark'?'white':'#042743'}}>{props.heading} </h1>
    <textarea className="form-control" id="text" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} ></textarea>
    <br/>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>clear</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleremoveExtraSpaes}>Remove Extra Spaces</button>
    </div>
    <br/>
    <br/>

    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}} >
        <h2>Your Text Summery</h2>
        <p>{getWordCount(text)} words and {text.length} characters</p>
        <p>{0.08*getWordCount(text)} minutes to read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Nothing To Preview"}</p>
    </div>

    </>
    

    )
}

