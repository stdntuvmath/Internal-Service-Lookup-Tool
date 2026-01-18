$(document).ready(function () {

    $("#lookup-form").on("submit", function (event) {
        event.preventDefault();

        const query = $("#lookup-input").val().trim().toLowerCase();

        if (query === "") {
            $("#status").text("Please enter a customer ID or service address.");
            $("#results").empty();
            return;
        }

        $("#status").text("Looking up service information...");
        $("#results").empty();

        $.getJSON("data/services.json", function (data) {

            // 1️⃣ Extract the services array
            const services = data.services;

            // 2️⃣ Find a matching service by ID
            const match = services.find(function (service) {
                return service.id.toLowerCase() === query;
            });

            // 3️⃣ Handle "not found"
            if (!match) {
                $("#status").text("No matching service found.");
                return;
            }

            // 4️⃣ Success
            $("#status").text("Service found.");

            // Build a simple HTML block for the result
            const resultHtml = `
                <div class="service-result">
                    <p><strong>Customer:</strong> ${match.customer_name}</p>
                    <p><strong>Service ID:</strong> ${match.id}</p>
                    <p><strong>Service Type:</strong> ${match.service_type}</p>
                    <p><strong>Status:</strong> ${match.status}</p>
                    <p><strong>Location:</strong> ${match.location}</p>
                    <p><strong>Last Updated:</strong> ${match.last_updated}</p>
                </div>
            `;

            // Insert it into the page
            $("#results").html(resultHtml);

            // log it to the console
            console.log("Matched service:", match);
        });

    });
    
});
