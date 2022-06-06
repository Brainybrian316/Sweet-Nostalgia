// a syncrhonous function to get the user's profile
async function editFormHandler(event) {
    //  preventDefault method prevents the form from submitting
    event.preventDefault();

    const  first_name = document.querySelector('#edit-first-name').value;
    const  last_name = document.querySelector('#edit-last-name').value;
    const  email = document.querySelector('#edit-email').value;
    const address = document.querySelector('#edit-address').value;
    const city = document.querySelector('#edit-city').value;
    const state = document.querySelector('#edit-state').value;
    const zipCode = document.querySelector('#edit-zipCode').value;

      // variable for the id of the post using the url 
      const id = window.location.toString().split('/')
      [window.location.toString().split('/').length - 1];

    const response = await fetch(`/api/users/${id}`, {
        method: 'put',
        body: JSON.stringify({
            first_name,
            last_name,
            email,
            address,
            city,
            state,
            zipCode,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-profile-form').addEventListener('submit', editFormHandler);
