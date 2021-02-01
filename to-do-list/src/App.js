import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  const [ContentList,setContent]=useState([]);
  let items=[];
  
  return (
    <div>
      <form action="/create_process" method="post" onSubmit={function(e){
        e.preventDefault();
        const addNewContent=Array.from(ContentList)
        addNewContent.push(e.target.content.value);
        setContent(addNewContent)
      }}>
        <label for="to-do">Write down what you have to do  </label>
        <input type="text" id="to-do" name="content"></input>
        <input type="submit"></input>
      </form>
      <p>To Do List</p>
      {ContentList}
    </div>
  );
}

export default App;
