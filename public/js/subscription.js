async function subscriptionFormHandler(event) {
    event.preventDefault();

        const candybox_id = document.querySelector('input[name="candybox"]:checked').value;
             // variable for the id of the post using the url 
      const id = window.location.toString().split('/')
      [window.location.toString().split('/').length - 1];
        
        const response = await fetch(`/api/sub/${id}`, {
            method: 'put',
            body: JSON.stringify({
                candybox_id
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Faliure to subscribe :(');
        }
        console.log(response);
}

console.log('you made it to the subscriptionFormHandler');


document.querySelector('.subscription-form').addEventListener('submit', subscriptionFormHandler);

