function getFormvalue() {
    //Write your code here
	event.preventDefault();

    // Get the form element
    const form = document.getElementById('form1');

    // Retrieve the values of the first name and last name fields
    const firstName = form.elements['fname'].value;
    const lastName = form.elements['lname'].value;

    // Display the first name and last name using an alert
    alert(firstName + " " + lastName);
}
getFormvalue();