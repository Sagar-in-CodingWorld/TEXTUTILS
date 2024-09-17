import React, { useState } from "react";

export default function TextForm({ heading }) {
  const [text, setText] = useState("");
  // const [count, setCount] = useState(0);
  // let name = "bgfnfnfnfm nunia";
  const handleOnChange = (event) => {
    console.log("OnChange Working");
    setText(event.target.value);
  };
  const handleUpCase = () => {
    // console.log("UpperCase button Clicked");
    if (text) {
      // console.log("TEXT = true");
      let UpperCase = text.toUpperCase();
      setText(UpperCase);
    } else {
      // console.log("TEXT = false");
      alert(
        "Unable to change the blank text \nPlease write something in the text area"
      );
    }
  };
  const handleLoCase = () => {
    // console.log("LowerCase Button have Clicked");
    if (text) {
      let LowerCase = text.toLowerCase();
      setText(LowerCase);
    } else {
      alert(
        "Unable to change the blank text \nPlease write something in the text area"
      );
    }
  };

  const handleTitleCase = () => {
    let words = text.toLowerCase().split(" ");
    console.log("words are " + words);
    let titleCase = [];
    for (let i = 0; i < words.length; i++) {
      titleCase[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    // console.log("final array " + titleCase);
    let result = titleCase.join(" ");
    setText(result);
    // console.log("final result " + result);
  };
  
  // function wordCounter(){
  //   // console.log("TEXT IS : "+text);
  //   let words = text.split(" ");
  //   // console.log("words are :-"+words);
  //   let index0 = words[0];
  //   console.log("0index of words is :-"+words);
  //   let sp = " ";

  //   if(index0 == sp){
  //     console.log("SPACE DETECTED");
  //   }else{
  //     console.log("NO_SPACE");
  //   }
  //   // if ()
  //   // console.log("WORD IS : "+words);
  // }

  // function wordCount() {
  //   // let n = 0;
  //   if (words[0].length) {
  //     // let n = ;
  //     // console.log(n);
  //     let oneSpaceStr = text;
  //     oneSpaceStr.replace(/\s+/g, " ");
  //     // words = oneSpaceStr.split(" ");
  //     // console.log("spaceless "+oneSpaceStr);
  //     return (oneSpaceStr.split(" ").length);
  //   } else {
  //     // console.log("FALSE");
  //     return 0;
  //   }
    
  // }
  let words = text.split(" ");
  let time = (0.008 * words.length).toFixed(2);
  // console.log("type of text veriable :"+typeof(text));
  return (
    <>
      <div>

        <h1>{heading} -</h1>
        <div className="mb-3">
          <textarea placeholder="Enter text here"
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="6"
          />
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpCase}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoCase}>
          Convert to LowerCase
        </button>
        <button className="btn mx-1 btn-primary" onClick={handleTitleCase}>Title Case</button>
        <button className="btn btn-primary mx-1" onClick={() => { setText("") }}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={() => {navigator.clipboard.writeText(text)}}>Copy to Clipboard</button>
      </div>
      <div className="my-2">
        <h2>Text Summery</h2>
        <p> {words.length} words and {text.length} Characters</p>
        <p> {time} Minutes read</p>
        <h3>Preview</h3>
        <div className="border p-2 preview ">
          {text}
          {/* {regexp} */}
        </div>
      </div>
    </>
  );
}
