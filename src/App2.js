import { useState, useEffect } from "react";

function App2() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("i run only once");
  },[]);
  useEffect(()=> {
    // if(keyword !== "" && keyword.length > 5) {
    //   console.log("SEARCH FOR", keyword);
    // }

    console.log("I run when 'keyword' changes...")
  },[keyword]);

  useEffect(() => {
    console.log("i run when 'counter' changes...");
  },[counter]);

  return (
    <div>
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here" />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App2;
