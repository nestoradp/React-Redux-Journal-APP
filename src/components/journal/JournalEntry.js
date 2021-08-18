import React from 'react';

function JournalEntry(props) {
    return (
        <div className="journal__entry pointer">

            <div className="journal__entry-picture"
            style={{
            backgroundSize: 'cover',
                backgroundImage:'url(https://astelus.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg)'
            }}></div>

            <div className="journal__entry-body">

                <h5 className="journal__entry-title"> Un nuevo dia</h5>


                <p className="journal__entry-content">

                fbdfbfdbdfbdfbfdbfd
                fbfdbfbfbfbfff
                    fbfbf
                </p>



            </div>


            <div className="journal__entry-date">
                <span>Monday</span>
                <h4>28</h4>


            </div>


        </div>
    );
}

export default JournalEntry;

