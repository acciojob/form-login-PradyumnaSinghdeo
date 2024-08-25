function getFormvalue(event) {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page

    // Get the values of the input fields
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;

    // Display an alert with the first and last name
    alert(firstName + " " + lastName);
}
