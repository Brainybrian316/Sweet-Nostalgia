async function signupFormHandles(event) {
    event.preventDefault();

    const first_name = document.querySelector('#first-input-signup').value.trim();
    const last_name = document.querySelector('#last-input-signup').value.trim();
    const email = document.querySelector('#email-input-signup').value.trim();
    const password = document.querySelector('#password-input-signup').value.trim();
    const address = document.querySelector('#address-input-signup').value.trim();
    const city = document.querySelector('#city-input-signup').value.trim();
    const state = document.querySelector('#state-input-signup').value.trim();
    const zipCode = document.querySelector('#zip-input-signup').value.trim();


    if (first_name && last_name && email && password && address && city && state && zipCode) {
        const response = await fetch('/api/users', { // fetch the users with the username, email and password provided to signup
            // the method is POST to create a new user
            method: 'post',
            // body is the data we want to send to the server
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                password,
                address,
                city,
                state,
                zipCode
            }),
            // the headers are the headers we want to send to the server
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // check the response status
        if (response.ok) {
            //  if the response is ok we send the response to the client and we redirect to the dashboard page
            document.location.replace('/subscription');
        } else {
            alert('Faliure to sign up :(');
        }
    };
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandles);