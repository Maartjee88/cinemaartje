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
        html += `<button id="C${counter}" class="border-solid border-4 rounded-md border-green-500 m-2 py-1 px-2 border-t-0 text-center">${counter}</button>`;
        counter++;
    }

    document.querySelector('#seating').innerHTML = html;
}

function alreadyReserved() {
    // Check which seat is already taken, disable button to be clicked
    for (let key in reservedSeats) {
        //create variable with object, use object to alter the DOM.
		let obj = reservedSeats[key];

        // add disabled attribute to disable button
		document.querySelector(`#${obj.chair}`).setAttribute("disabled", "true"); 
        // replace current classes with new ones.
		document.querySelector(`#${obj.chair}`).setAttribute("class", "border-solid border-4 rounded-md border-gray-500 m-2 py-1 px-2 border-t-0 text-center cursor-not-allowed");
		
	}
}

function selectSeats() {
    // Let user select their chairs

}

addSeats(9, 5);
alreadyReserved();