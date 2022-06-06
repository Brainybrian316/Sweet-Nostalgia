//  a synchrnous function to login
const loginFormHandles = async function (event) {
    // preventDefault method prevents the form from submitting and reloading the page until the form is submitted
    event.preventDefault();

    // variable for the email using the id of "email-input-login"  we get the value of the input and trim() removes the white space from the beginning and end of the string
    const email = document.querySelector('#email-input-login').value.trim();
    // variable for the password using the id of "password-input-login" we get the value of the input and trim() removes the white space from the beginning and end of the string
    const password = document.querySelector('#password-input-login').value.trim();

    // if the email and password are not empty
    if (email && password) {
        // this variable will respond to the response from the server and will be used to send the response to the client.
        const response = await fetch('api/users/login', { // fetch the users with the email and password provided to login
            // the method is POST request
            method: 'post',
            // body is the data we want to send to the server
            body: JSON.stringify({
                // the email of the user
                email,
                // the password of the user
                password
            }),
            // the headers are the headers we want to send to the server
            headers: {
                'Content-Type': 'application/json'
            },
        });


        // if the response is ok we send the response to the client and we redirect to the dashboard page
        if (response.ok) {
            document.location.replace('/dashboard')
        } else {
            // if the response is not ok we send the response to the client
            alert('Incorrect username or password');
        }
    }
};


document.querySelector('.login-form').addEventListener('submit', loginFormHandles);