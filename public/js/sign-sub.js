
async function signupSubFormHandler(event) {
    event.preventDefault();

        const candybox_id = document.querySelector('input[name="candybox"]:checked').value;

        const id = window.location.toString().split('/')
        [window.location.toString().split('/').length - 1];

        const response = await fetch(`/api/sub/${id}`, {
            method: 'post',
            body: JSON.stringify({
                candybox_id,
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
            document.location.replace('/thankYou');
        } else {
            alert('Faliure to subscribe :(');
        }
}

document.querySelector('.sign-sub-form').addEventListener('submit', signupSubFormHandler);

