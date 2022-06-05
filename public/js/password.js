
async function editPasswordHandler(event) {
    event.preventDefault();
    

    const password = document.querySelector('#edit-password').value
    const confirmPassword = document.querySelector('#edit-confirm-password').value;

        // variable for the id of the post using the url 
        //   const id = window.location.toString().split('/')
        //   [window.location.toString().split('/').length - 1];

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    } 

    const response = await fetch(`/api/users/`, {
        method: 'put',
        body: JSON.stringify({
            password,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-password-form').addEventListener('submit', editPasswordHandler);
