
async function editPasswordHandler(event) {
    event.preventDefault();
    

    const password = document.querySelector('#edit-password').value.trim();
    const confirmPassword = document.querySelector('#edit-confirm-password').value.trim();

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

        // variable for the id of the post using the url 
          const id = window.location.toString().split('/')
          [window.location.toString().split('/').length - 1];

    const response = await fetch(`/api/users/${id}`, {
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
