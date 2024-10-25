document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation
    const fname = document.getElementById('fname').value.trim();
    const mname = document.getElementById('mname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const date = document.getElementById('date').value;
    const hour = document.getElementById('hour').value;
    const minute = document.getElementById('minute').value;
    const amPm = document.getElementById('amPm').value;
    const messageDiv = document.getElementById('message');
    
// Validation for all fields
    //if(fname == "" || mname == "" || lname == "" || email == ""){
        //messageDiv.innerHTML = '<div class="alert alert-danger">Fill all fields.</div>';
        //return;
    //}

    if (!fname || !mname || !lname || !email) {
        messageDiv.innerHTML = '<div class="alert alert-danger">Fill all fields.</div>';
        return;
    }

    if (fname === mname || fname === lname || mname === lname) {
    messageDiv.innerHTML = '<div class="alert alert-danger">Fields must be unique.</div>';
    return;
}


    

    // Validation for time selection
    if (!hour || !minute || !amPm) {
        messageDiv.innerHTML = '<div class="alert alert-danger">Please select a valid time.</div>';
        return;
    }

    // Combine hour, minute, and AM/PM into a formatted time
    const time = `${hour}:${minute} ${amPm}`;
    
    // Ensure date and time are valid
    if (date) {
        const selectedDateTime = new Date(`${date}T${hour}:${minute} ${amPm}`);
        const now = new Date();

        if (selectedDateTime < now) {
            messageDiv.innerHTML = '<div class="alert alert-danger">Appointment date and time cannot be in the past.</div>';
        } else {
            messageDiv.innerHTML = '<div class="alert alert-success">Appointment successfully booked for ' + time + '!</div>';
            // Form submission logic here
        }
    } else {
        messageDiv.innerHTML = '<div class="alert alert-danger">Please select a valid date and time.</div>';
    }
});


window.onload = function() {
    const dateInput = document.getElementById('date');
    const today = new Date();
    
    
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 2);

    
    const year = tomorrow.getFullYear();
    const month = ('0' + (tomorrow.getMonth() + 1)).slice(-2);
    const day = ('0' + tomorrow.getDate()).slice(-2);
    const minDate = `${year}-${month}-${day}`;

    
    dateInput.setAttribute('min', minDate);
};
