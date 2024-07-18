function getFormvalue() {
    //Write your code here
	
	const form = document.getElementById('userForm');

    
    form.addEventListener('submit', function(event) {
        
        event.preventDefault();

       
        const firstName = document.getElementById('fname').value;
        const lastName = document.getElementById('lname').value;

        
        alert(`${firstName} ${lastName}`);
    });
}
getFormvalue();