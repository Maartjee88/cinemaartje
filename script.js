"use strict";

// Hardcoded reserved seats 
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
    let seatsHTML = "";
    let counter = 1;

    for (let i = 0; i < chairs; i++ ){
        seatsHTML += `<button id="C${counter}" class="text-gray-800 font-medium border-solid border-4 rounded-b-3xl border-green-700 bg-green-200 py-1 px-2 border-t-0 text-center seat available">${counter}</button>`;
        counter++;
    }

    document.querySelector('#seating').innerHTML = seatsHTML;
}

function alreadyReserved() {    // Check which seat is already taken, disable button to be clicked
    for (let key in reservedSeats) {
		let obj = reservedSeats[key]; //create variable with object, use object to alter the DOM.

		document.querySelector(`#${obj.chair}`).setAttribute("disabled", "true");   // add disabled attribute to disable button
		document.querySelector(`#${obj.chair}`).setAttribute("class", "text-gray-400 font-medium border-solid border-4 rounded-b-3xl border-gray-400 bg-gray-700 py-1 px-2 border-t-0 text-center cursor-not-allowed seat reserved");  // replace current classes with new ones.
	}
}

function getSeats() { // Let user select their chairs
    const allSeats = document.querySelectorAll('.seat'); // get all available seats
    const availableSeats = document.querySelectorAll('.available'); // get all available seats
    const reservedSeats = document.querySelectorAll('.reserved'); // get all reserved seats
    
    let selectedSeats = [];
    let amountTickets = document.querySelector('#amountTickets').value; // get value from inputfield
    let numSeats = parseInt( amountTickets, 10 );

    for (let i = 0; i < numSeats; i++ ) {
        console.log(availableSeats[i]);
        selectedSeats.push(availableSeats[i]);
    }
    
    console.log(selectedSeats);

    for (let key in selectedSeats) {
		let obj = selectedSeats[key]; //create variable with object, use object to alter the DOM.

		document.querySelector(`#${obj.chair}`).setAttribute("class", "text-gray-400 font-medium border-solid border-4 rounded-b-3xl border-yellow-400 bg-yellow-700 py-1 px-2 border-t-0 text-center cursor-not-allowed seat selected");  // replace current classes with new ones.
	}


    // for ( let seat in allSeats ) {

    //     if (availableSeats.includes(seat)) {
    //         console.log('Available');
    //     } else if (document.querySelector('.reserved')) {
    //         console.log('Reserved');
    //     }
    // }
    
    // console.log('Available: ', availableSeats); // debug
    // console.log('Reserved', reservedSeats); // debug
    // console.log('All', allSeats); // debug
    
    
    let ticketsHTML = `Tickets: ${selectedSeats.toString()}`;       // gives feedback on frontend on how many tickets

    document.querySelector('#selected-seats').innerHTML = ticketsHTML;
}

addSeats(9, 5);
alreadyReserved();