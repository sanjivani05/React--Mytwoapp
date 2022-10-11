import React,{useState} from 'react'

export default function TextForm(props) {

const handleupClick =()=>{
    console.log("upper case was clicked" +text)
    let newtext =text.toUpperCase()
    setText (newtext)
}
const handlelowClick =()=>{
    console.log("lower case was clicked" +text)
    let newtext =text.toLowerCase()
    setText (newtext)
}
const handleOnChange =(event)=>{
    console.log("handleOnChange");
    setText(event.target.value);
}

    const[text, setText] =useState("Enter text here");
  return (
    <>
    <div className='container'>
    <h1>{props.heading}</h1>    
<div class="mb-3">
  <textarea className="form-control" value={text}  onChange={handleOnChange}  id="myBox" rows="8"></textarea>
  
</div>
<button className='btn-primary mx-1' onClick={handleupClick}>Convert to Uppercase</button>
<button className='btn-primary mx-1' onClick={handlelowClick}>Convert to Lowercase</button>
    </div>
    <div className='container'>
        <h1> your text summary</h1>
        <p>{text.split("").length} words and {text.length} characters</p>
        <p>{0.008 *text.split("").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to previw it here"}</p>
    </div>
    </>
  )
}
