"use strict";

const reservedSeats = ['C3', 'C4', 'C5', 'C10', 'C11', 'C14', 'C15', 'C16', 'C21', 'C22', 'C26', 'C32', 'C33','C42', 'C43' ]; // Hardcoded reserved seats 

const addSeats = ( chairCols, chairRows ) => {  // Function to add seats to the HTML
    const chairs = chairCols * chairRows;       // amount of cols times amount or rows makes amount of chairs. (9*5=45)
    let seatsHTML = '';                         // empty string so we can fill it with the chairs for frontend 
    let counter = 1;                            // first chairnumber for dynamically chairs

    for (let i = 0; i < chairs; i++ ){
        seatsHTML += `<span id="C${counter}" class="text-gray-800 font-medium border-solid border-4 rounded-b-3xl border-green-700 bg-green-200 py-1 px-2 border-t-0 text-center seat available">${counter}</span>`;
        counter++;
    }

    document.querySelector('#seating').innerHTML = seatsHTML; // adds the HTML string to the actual HTML
}

function alreadyReserved() {            // Check which seat is already taken, disable button to be clicked
    for (let key in reservedSeats) {
		let seat = reservedSeats[key];  // Create variable with seat, uses seat to get ID to alter the DOM.

		document.querySelector(`#${seat}`).setAttribute("class", "text-gray-400 font-medium border-solid border-4 rounded-b-3xl border-gray-400 bg-gray-700 py-1 px-2 border-t-0 text-center seat reserved");  
        // replace current classes with new ones to visually let know which seat is taken.
	}
}

function getSeats() { // Let user select their chairs
    const allSeats = document.querySelectorAll('.seat');            // get all seats
    const availableSeats = document.querySelectorAll('.available'); // get all available seats
    
    let takenSeats = [];
    let selectedSeats = [];
    let amountTickets = document.querySelector('#amountTickets').value; // get value from inputfield
    let numSeats = parseInt( amountTickets, 10 );

    for (let i = 0; i < numSeats; i++ ) {
        selectedSeats.push(availableSeats[i]);
    }

    for (let key in selectedSeats) {
		let obj = selectedSeats[key]; //create variable with object, use object to alter the DOM.

        takenSeats.push(obj.id);
		document.querySelector(`#${obj.id}`).setAttribute("class", "w-16 text-gray-800 font-medium border-solid border-4 rounded-b-3xl border-yellow-500 bg-yellow-200 py-1 px-2 border-t-0 text-center seat selected");  
        // replace current classes with new ones.
	}

    /* 
        How to split array availableSeats in chunks to compare amountTickets with
        THOUGHT: if next seat in allSeats is not in availableSeats. Create new array
    */
   
    // for ( let j in allSeats ) {
    //     console.log(j);
    // }
    
    let ticketsHTML = `Tickets: ${takenSeats.toString()}`; // gives feedback on frontend on which tickets they got

    document.querySelector('#selected-seats').innerHTML = ticketsHTML;
    // Gives user feedback on which seat they have gotten
}

addSeats(9, 5); // 9 cols and 5 rows of chairs
alreadyReserved(); // call function to check which seat is already taken


/* 
    BUG: Previous reserved seats are staying yellow after new selection
    TODO: 
*/