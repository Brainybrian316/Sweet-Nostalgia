// a anonymous function is used to avoid global variables
function validate() {
    // we make a variable for the form using querySelector to select all forms with the class
    const forms = document.querySelectorAll('.requires-validation')
    // we loop through the forms using the Array.form method, which returns an array of all elements in the list based on the specified selector.
    Array.from(forms)
    //  we use the forEach method to loop through the array and call a function for each element
      .forEach(function (form) {
        //   we add an event listener to the form and when the submit event is triggered we call the function
        form.addEventListener('submit', function (event) {
            // we check if the form is valid and match the required pattern
        if (!form.checkValidity()) {
            // if the form is not valid we prevent the form from submitting
            event.preventDefault()
            // we stop the form from submitting and we return false required fields to be correctly filled out based on bootstrap validation
            event.stopPropagation()
        }
        // we add the class was-validated to the form to allow the validation to work if the pattern is matched
          form.classList.add('was-validated')
        }, false) // we add the false to the end of the function to prevent the event from bubbling up the DOM tree
      })
    }validate() // we call the anonymous function to prevent any variables from leaking into the global scope