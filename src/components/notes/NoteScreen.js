import React from 'react';
import NotesAppBar from "./NotesAppBar";

function NoteScreen(props) {
    return (
        <div className='notes__main-content'>

          <NotesAppBar/>



            <div className="notes__content">
                <input
                 type="text"
                 placeholder="Some awesome Title"
                 className="notes__titles_input"

                />
                <textarea
                    placeholder="What happened today"
                    className="notes__textArea"
                />

                <div className="notes_image">
                    <img  src="https://i.pinimg.com/736x/ef/4a/ad/ef4aadc85771ce30f48b2a20db0e6330.jpg"  alt="imagen"/>

                </div>






            </div>







        </div>
    );
}

export default NoteScreen;
