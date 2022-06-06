//  a synchrnous function to logout
async function logout() {
    // this variable will respond to the response from the server and will be used to send the response to the client.
    const response = await fetch('/api/users/logout', { // fetch the users with the email and password provided to logoout
        // the method is POST
        method: 'post',
        // the headers are the headers we want to send to the server
        headers:  {'Content-Type': 'application/json'}
    });

    // if the response is ok we send the response to the client and we redirect to the homepage
    if (response.ok) {
        document.location.replace('/');
    } else {
        // if the response is not ok we send the response to the client
        alert(response.statusText);
    };
};

// add the event listener to the logout button with the id of logout
document.querySelector('#logout').addEventListener('click', logout);