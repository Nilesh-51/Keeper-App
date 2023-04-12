import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isClick,setClick]=useState(false);
  function handleClick(){
    setClick(true);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    setNote(() => { return { title: "", content: "" }; });
    event.preventDefault();
  }
  return (
    <div>

      <form className="create-note">
        {isClick && <input name="title" value={note.title} onChange={handleChange} placeholder="Title" />}
        <textarea name="content" onClick={handleClick} value={note.content} onChange={handleChange} placeholder="Take a note..." rows={isClick?"3":"1"} />
        <Zoom in={isClick}><Fab color="primary" onClick={submitNote}><AddIcon /></Fab></Zoom>
      </form>

    </div>
  );
}

export default CreateArea;
