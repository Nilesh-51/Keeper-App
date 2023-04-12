import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes,setNote]=useState([]);
  function addNote(note){
    setNote((preVal)=>{return [...preVal,note]});
  }
  function deleteNote(id){
    setNote((preVal)=>{
      return preVal.filter((note,index)=>{return index!==id;});
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((note,i)=>{return <Note onDelete={deleteNote} key={i} id={i} title={note.title} content={note.content}/>})}
      <Footer />
    </div>
  );
}

export default App;
