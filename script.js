"use strict";

function htmloption() {
    let departure = document.querySelector("#departure");
    let arrival = document.querySelector("#arrival");

    airports.forEach((ap) => {
        let option = document.createElement("option");
        option.value = ap.iata;
        option.textContent = `${ap.name} (${ap.iata})`;
        departure.appendChild(option);
        arrival.appendChild(option.cloneNode(true));
        
    });

    // airports.forEach((ap) => {
    //     let optionAp = `<option value=${ap.iata}" > ${pa.name} (${ap.iata})></option`;
    //     departure.insertAdjacentHTML("beforebegin", optionAp);
    //     arrival.insertAdjacentHTML("beforebegin", optionAp);
    // })

}

function checkFlight() {
    let departureIATA = document.querySelector("#departure").value;
    let arrivalIATA = document.querySelector("#arrival").value;
    let showResult = document.querySelector("#result");

    if (!departureIATA || !arrivalIATA) {
        console.log("Error");
        showResult.textContent = `select both departure and arrival airports!`;

        // return;
    }

    let flight = flights.find(
        (f) => f.departureIATA === departureIATA && f.arrivalIATA === arrivalIATA
    );

    let departureAp = airports.find((a) => a.iata === departureIATA);
    let arrivalAp = airports.find((a) => a.iata === arrivalIATA);

    if (flight && departureAp && arrivalAp) {
        showResult.innerHTML = `
        <h2 class="resulth2">Flight Status</h2>
        <p class="subTitle">Departure Airport: <span class="details">${departureAp.name} (${departureAp.iata})</span></p>
        <p class="subTitle">Arrival Airport: <span class="details">${arrivalAp.name} (${arrivalAp.iata})</span></p>
        <p class="subTitle">Departure Time: <span class="details">${flight.departureTime}</span></p>
        <p class="subTitle">Arrival Time: <span class="details">${flight.arrivalTime}</span></p>
        <p class="subTitle">Departure Date: <span class="details">${flight.departureDate}</span></p>
        <p class="subTitle">Arrival Date: <span class="details">${flight.arrivalDate}</span></p>
        <p class="subTitle">Status: <span class="details">${flight.status}</span></p>
        <p class="subTitle">Duration: <span class="details">${flight.duration}</span></p>
        `;
    } else {
        showResult.innerHTML = "Flight details NOT found!";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    htmloption();
    checkFlight();
    document.querySelector("#checkStatus").addEventListener("click", checkFlight);
});


// fetch("https://open.er-api.com/v6/latest/USD")
// .then(Response => {
//     if (!response.ok) {
//         throw new Error('Network response was not ok ' + response.statusText);
//     }
//     return response.json();
// })
// .then(data => {
//     console.log(data); // Corrected the typo here
// })
// .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
// });