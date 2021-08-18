import React from 'react';
import Sidebar from "./sidebar";
import NothingSelect from "./NothingSelect";
import NoteScreen from "../notes/NoteScreen";

function JournalScreen(props) {
    return (
        <div className="journal__main_content">
         <Sidebar/>

            <main>
                {/*
                   <NothingSelect/>

                      */}

            <NoteScreen/>

            </main>










        </div>
    );
}

export default JournalScreen;