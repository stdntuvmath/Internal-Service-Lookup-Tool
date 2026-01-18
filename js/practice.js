


/*************************************************************
 * main.js
 *
 * This file controls HOW the page behaves.
 * HTML defines WHAT exists.
 * CSS defines HOW it looks.
 * JavaScript (jQuery here) defines WHAT HAPPENS.
 * 
 * 
 * 
 * 
 *************************************************************/


/*************************************************************
 * $(document).ready(...)
 *
 * This tells the browser:
 * "Do not run this code until the entire HTML page
 *  has been fully loaded into memory and is ready to use."
 *
 * Without this, JavaScript might try to access elements
 * (like #lookup-form) BEFORE they exist.
 *************************************************************/
$(document).ready(function () {

    /*********************************************************
     * Attach an event handler to the form submission.
     *
     * "#lookup-form" refers to:
     *   <form id="lookup-form"> in index.html
     *
     * We are saying:
     * "When this form is submitted, run this function."
     *********************************************************/
    $("#lookup-form").on("submit", function (event) {

        /*****************************************************
         * event.preventDefault()
         *
         * Forms normally do this when submitted:
         *   1. Send data
         *   2. Reload the page
         *
         * We STOP that behavior because:
         *   - We want a smooth, single-page experience
         *   - We are handling everything with JavaScript
         *****************************************************/
        event.preventDefault();


        /*****************************************************
         * Get the value from the input field.
         *
         * "#lookup-input" refers to:
         *   <input id="lookup-input">
         *
         * .val()     → gets the text the user typed
         * .trim()    → removes extra spaces at the start/end
         *****************************************************/
        const query = $("#lookup-input").val().trim();


        /*****************************************************
         * Basic validation:
         * If the user submitted an empty input,
         * show a message and STOP.
         *****************************************************/
        if (query === "") {

            // Update the status message area
            $("#status").text(
                "Please enter a customer ID or service address."
            );

            // Clear any previous results
            $("#results").empty();

            // Exit this function early
            return;
        }


        /*****************************************************
         * If input is valid:
         * - Show a loading message
         * - Clear old results
         *****************************************************/
        $("#status").text("Looking up service information...");
        $("#results").empty();


        /*****************************************************
         * This is where data fetching will go later.
         * For now, we just log to the console.
         *
         * Console logs are for YOU, not the user.
         *****************************************************/
        console.log("Searching for:", query);

    });

});
