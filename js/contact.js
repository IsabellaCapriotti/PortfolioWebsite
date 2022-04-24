// Validate email address when it is changed
const emailAddressEntry = document.querySelector('.emailAddressEntry'); 


emailAddressEntry.addEventListener('change', () => {

    if(validateEmail(emailAddressEntry.value) == true){
        emailAddressEntry.classList.remove('invalidField'); 
    }

    else{
        emailAddressEntry.classList.remove('invalidField'); 

        setTimeout( () => {
            emailAddressEntry.classList.add('invalidField'); 
        }, 1); 

    }

}); 

function validateEmail(email){
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
    {
      return true; 
    }
    
    return (false); 
}




// Send button functionality
const sendBtn = document.querySelector('.sendBtn');
const subject = document.querySelector('.emailSubject'); 
const emailBody = document.querySelector('.emailBody'); 
const form = document.querySelector("form"); 


sendBtn.addEventListener('click', (e) => {


    // Check that all input fields are valid
    
    if(!validateEmail(emailAddressEntry.value)){
        emailAddressEntry.classList.remove('invalidField'); 

        setTimeout( () => {
            emailAddressEntry.classList.add('invalidField'); 
        }, 1); 

        e.preventDefault(); 


        return;
    }
    

    if(!subject.value || subject.value.length == 0){
        subject.classList.remove('invalidField'); 

        setTimeout( () => {
            subject.classList.add('invalidField'); 
        }, 1); 

        e.preventDefault(); 

        return;
    }

    if(!emailBody.value || emailBody.value.length == 0){
        emailBody.classList.remove('invalidField'); 

        setTimeout( () => {
            emailBody.classList.add('invalidField'); 
        }, 1); 

        e.preventDefault(); 

        return;
    }


    //Verify reCAPTCHA
    if(grecaptcha.getResponse()){
        let actionField = `mailto:isabellamcapriotti@gmail.com?subject=${subject.value}&body=${emailBody.value}`; 
        form.setAttribute("action", actionField); 
    }



}); 
