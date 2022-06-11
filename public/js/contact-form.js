// a syncrhonous function to get the user's profile
async function ContactFormHandler(event) {
    //  preventDefault method prevents the form from submitting
    event.preventDefault();

    const Email = document.querySelector('#Email').value.trim();
    const Interested = document.querySelector('input[name="Interested"]:checked').value


    const response = await fetch(`https://sheet.best/api/sheets/b9fe723c-069f-4998-81e4-62587ebfca84`, {
        method: 'post',
        body: JSON.stringify({
          Email,
          Interested,

        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.contact-form').addEventListener('submit', ContactFormHandler);
