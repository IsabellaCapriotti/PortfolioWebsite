// Validate email address when it is changed
const emailAddressEntry = document.querySelector('.emailAddressEntry'); 
let isValidEmail = false; 
emailAddressEntry.addEventListener('change', () => {

    if(validateEmail(emailAddressEntry.value) == true){
        emailAddressEntry.classList.remove('invalidEmailAddress'); 
        isValidEmail = true; 
    }

    else{
        emailAddressEntry.classList.remove('invalidEmailAddress'); 

        setTimeout( () => {
            emailAddressEntry.classList.add('invalidEmailAddress'); 
        }, 1); 

        isValidEmail = false; 
    }

}); 

function validateEmail(email){
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
    {
      return true; 
    }
    
    return (false); 
}