"use strict";

// Hardcoded reserved seats. 
const reservedSeats = {
    1:  {
        chair:  'C4',
        owner:  'S. Wiggle'
    },
    2:  {
        chair:  'C5',
        owner:  'S. Wiggle'
    },
    3:  {
        chair:  'C6',
        owner:  'S. Wiggle'
    },
    4:  {
        chair:  'C16',
        owner:  'G. Rogu'
    },
    5:  {
        chair:  'C17',
        owner:  'G. Rogu'
    },
    6:  {
        chair:  'C30',
        owner:  'M. Ammoet'
    },
    7:  {
        chair:  'C31',
        owner:  'M. Ammoet'
    },
    8:  {
        chair:  'C32',
        owner:  'M. Ammoet'
    },
    9:  {
        chair:  'C33',
        owner:  'G. Rogu'
    },
    10:  {
        chair:  'C40',
        owner:  'M. Ammoet'
    },
    11:  {
        chair:  'C41',
        owner:  'M. Ammoet'
    },
    12:  {
        chair:  'C42',
        owner:  'M. Ammoet'
    },
}

// Add seats to the HTML
const addSeats = ( chairCols, chairRows ) => {
    const chairs = chairCols * chairRows;
    let html = "";
    let counter = 1;

    for (let i = 0; i < chairs; i++ ){
        html += `<button id="C${counter}" onclick="selectSeats()" class="text-gray-800 font-medium border-solid border-4 rounded-b-3xl border-green-700 bg-green-200 py-1 px-2 border-t-0 text-center available">${counter}</button>`;
        counter++;
    }

    document.querySelector('#seating').innerHTML = html;
}

function alreadyReserved() {    // Check which seat is already taken, disable button to be clicked
    for (let key in reservedSeats) {
		let obj = reservedSeats[key]; //create variable with object, use object to alter the DOM.

		document.querySelector(`#${obj.chair}`).setAttribute("disabled", "true");   // add disabled attribute to disable button
		document.querySelector(`#${obj.chair}`).setAttribute("class", "text-gray-400 font-medium border-solid border-4 rounded-b-3xl border-gray-400 bg-gray-700 py-1 px-2 border-t-0 text-center cursor-not-allowed unavailable");  // replace current classes with new ones.
	}
}

function selectSeats() {    // Let user select their chairs
    let selectedSeats = ['']; // array of selected seats
    const seats = document.querySelectorAll('.available');

    console.log('click!', seats);
    const seatSelection = (seat) => {
        let pickedSeat = seat; //seat which is currently selected

        if ( !querySelector(pickedSeat).classList.contains('.unavailable') ) {
            if ( selectedSeats.indexOf(pickedSeat) > -1 ) {
                let currentSeat = selectSeats.indexOf(pickedSeat); 
                
                selectedSeats.splice(currentSeat, 1);
                document.querySelector(thisSeat).setAttribute("class", "text-gray-800 font-medium border-solid border-4 rounded-b-3xl border-green-500 bg-green-200 py-1 px-2 border-t-0 text-center");

            } else {
                selectedSeats.push(pickedSeat);
                document.querySelector(thisSeat).setAttribute("class", "text-gray-800 font-medium border-solid border-4 rounded-b-3xl border-yellow-500 bg-yellow-200 py-1 px-2 border-t-0 text-center selected");
            }

            console.log(selectedSeats);
        }
     }
}

addSeats(9, 5);
alreadyReserved();