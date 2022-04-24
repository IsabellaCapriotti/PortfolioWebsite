// Generate accurate number of dunes according to screen width
function generateDunes(){
    const desertContainer = document.querySelector('.desert'); 
    let numDunes = Math.ceil(desertContainer.getBoundingClientRect().width / 415); 
    const duneContainer = document.querySelector('.sandDunes'); 

    for(let i=0; i < numDunes; i++){
        const newDune = document.createElement('div'); 
        newDune.classList.add('sandDune'); 

        if(i % 2 == 0){
            newDune.classList.add('sandDuneL'); 
        }
        else{
            newDune.classList.add('sandDuneR'); 
        }

        duneContainer.appendChild(newDune); 
    }
}

// Helper function to return current hour
function getHour(){
    return new Date().getHours(); 
}
// Determine stylings to use based on date and time
function setTimeAppearance(){
    const desertContainer = document.querySelector('.desert'); 
    const hours = getHour(); 

    // Hour 15 - Hour 5: Nighttime appearance
    if(hours >= 17 || hours <= 5){
        console.log('night'); 

        // Switch sun for moon
        const sun = document.querySelector('.desertSun'); 
        desertContainer.removeChild(sun); 

        const moon = document.querySelector('.moon'); 
        moon.classList.remove('hidden'); 
        desertContainer.appendChild(moon); 
        
        // Switch to night background
        desertContainer.classList.add("nightBG");
        
        // Switch to night navbar
        const navBar = document.querySelector('nav'); 
        navBar.classList.add('nightNav');
        
        const linkBoxes = Array.from(navBar.querySelectorAll('li'));
        linkBoxes.forEach( (box) => {
            box.classList.add('nightLinkBox'); 
        }) 

        const links = Array.from(navBar.querySelectorAll('a'));
        links.forEach( (link) => {
            link.classList.add('nightLink'); 
        })

        // Switch to night mobile navbar nutton
        const mobileNavBtn = document.querySelector('.navBtn'); 
        mobileNavBtn.classList.add('nightBtn'); 

    }
}

window.addEventListener('resize', generateDunes); 
window.addEventListener('load', setTimeAppearance); 
window.addEventListener('load', generateDunes); 


// Display nav bar for mobile when nav button clicked
const mobileNavBtn = document.querySelector('.navBtn'); 
const mainContainer = document.querySelector('.mainContainer'); 
mobileNavBtn.addEventListener('click', (e) => {

    // Get hours to determine if night mode is needed
    const hours = getHour(); 
    let nightMode = false; 

    if(hours >= 17 || hours <= 5){
        nightMode = true; 
    }
    else{
        nightMode = false; 
    }

    // Create container for modal, gray out rest of display
    const mobileNavContainer = document.createElement('div'); 
    mobileNavContainer.classList.add('mobileNavContainer'); 

 
    // Add event listener so that it exits out of modal when tapped
    mobileNavContainer.addEventListener('click', (e) => {

        if(e.target.className != 'mobileNavContainer'){
            return; 
        }
        
        mainContainer.removeChild(mobileNavContainer); 
        
    }); 

    mainContainer.appendChild(mobileNavContainer); 

    // Create actual navigation bar
    const mobileNavModal = document.createElement('div'); 
    mobileNavModal.classList.add('mobileNavModal');
    if(nightMode){
        mobileNavModal.classList.add('nightNav'); 
    }
    mobileNavContainer.appendChild(mobileNavModal);


    // Fill in with link content
    const navLinks = document.querySelector('.navLinks').cloneNode(true); 

    if(nightMode){
        const linkBoxes = Array.from(navLinks.querySelectorAll('li'));
        linkBoxes.forEach( (box) => {
            box.classList.add('nightLinkBox'); 
        }) 

        const links = Array.from(navLinks.querySelectorAll('a'));
        links.forEach( (link) => {
            link.classList.add('nightLink'); 
        })
    }

    mobileNavModal.appendChild(navLinks); 

     
}); 




