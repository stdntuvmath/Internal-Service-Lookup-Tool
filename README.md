
# Internal Service Lookup Tool

A lightweight internal web application that simulates how operations or sales staff can quickly look up customer or service information without reloading the page.

This project demonstrates client-side validation, asynchronous data loading (AJAX), and dynamic UI updates using jQuery — patterns commonly found in internal business tools and legacy web applications.

---

## 🔍 What This Tool Does

- Accepts a customer or service identifier (e.g. `CUST-1001`)
- Loads service data asynchronously from a JSON source
- Finds and displays matching service details
- Handles invalid input and “not found” states gracefully
- Updates the page dynamically without a full reload

---

## 🧰 Technologies Used

- **HTML** – Semantic structure and form handling
- **CSS** – Basic layout and readability styling
- **JavaScript (jQuery)** – Event handling, DOM updates, and AJAX
- **JSON** – Mock service data source

---

## ⚙️ How It Works (High Level)

1. User submits a lookup request via a form
2. JavaScript intercepts the submission to prevent page reload
3. jQuery performs an AJAX request to load service data
4. The data is searched for a matching service ID
5. Results are rendered dynamically into the page

This mirrors how many internal tools interact with APIs or backend services.

---

## :running: Running the Project Locally

Because the project uses AJAX, it must be served via a local web server. Because of this a batch file was created to provide easy startup of the program.

Double-click the start_local_server.bat file. This will start a local server on port 8000 and open the Internal Service Lookup web page. At this point, you can look in the services.json file for any of the employer id's listed and search them.



