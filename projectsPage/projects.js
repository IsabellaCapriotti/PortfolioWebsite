// Project information 
const projects = {

    'weGrow': {
        'description': 'A cross-platform Xamarin Forms app aimed at users trying to gain weight for health reasons. Stores user data in a SQLite database, and offers a variety of different goal-tracking methods for a customized user experience. Features a plant-themed UI to fit with the message of growing into better things.', 
        'videoLink': 'https://www.youtube.com',
        'bgImage': 'weGrowBG.png',
        'name': 'WeGrow App',
        'languages': ['C#', 'XAML', 'Xamarin Forms' , '.NET Framework', 'SQLite'],
        'github': 'https://github.com/IsabellaCapriotti/WeGrowApp'
    },

    'cppUno': {
        'description': '',
        'videoLink': 'https://www.youtube.com',
        'bgImage': 'uno.jpg',
        'name': 'Command Line Uno',
        'languages': ['C++'],
        'github': 'https://github.com/IsabellaCapriotti/CommandLineUno'
    },

    'pokeInfo': {
        'description': '',
        'videoLink': 'https://www.youtube.com',
        'bgImage': 'pokeball.jpg',
        'name': 'Pokemon Info Grabber',
        'languages': ['Python'],
        'github': 'https://github.com/IsabellaCapriotti/PythonPokemonInfoGrabber'
    },

    'pulseLog':{
        'description': '',
        'videoLink': 'https://www.youtube.com',
        'bgImage': 'pulse.png',
        'name': 'Pulse Logger',
        'languages': ['JavaScript', 'HTML', 'CSS'],
        'github': 'https://github.com/IsabellaCapriotti/JSPulseLogger'
    },

    'deathRow':{
        'description': '',
        'videoLink': 'https://www.youtube.com',
        'bgImage': 'prison.jpg',
        'name': 'Death Row Data',
        'languages': ['Python', 'SQLite'],
        'github': 'https://github.com/IsabellaCapriotti/TexasDeathRowData'
    },

    'gameOfLife':{
        'description': '',
        'videoLink': 'https://www.youtube.com',
        'bgImage': 'cells.jpg',
        'name': 'ASM Game of Life',
        'languages': ['x86 Assembly'],
        'github': 'https://github.com/IsabellaCapriotti/TexasDeathRowData'
    },

}; 


// Generate project cards
function generateProjectCards(){

    const projectCardContainer = document.querySelector('.projectCardContainer'); 
    const allProjects = Object.keys(projects); 

    allProjects.forEach( (project) => {

        // Generate new card
        const newProjectCard = document.createElement('div'); 
        newProjectCard.classList.add('projectCard'); 
        newProjectCard.setAttribute('data-project-id', project); 

        project = projects[project]; 

        // Add appropriate background image and title
        newProjectCard.style["background"] = `url("projectPictures/${project['bgImage']}")`;
        newProjectCard.style["background-size"] = "contain"; 

        const newTitle = document.createElement('div'); 
        newTitle.classList.add('projectTitle'); 
        newTitle.textContent = project.name;  

        newProjectCard.appendChild(newTitle); 


        // Event listener to pop-up details on click
        newProjectCard.addEventListener('click', (e) => {

            // Modal cover
            const mainContainer = document.querySelector('.pageContainer'); 
            const modalCover = document.createElement('div'); 
            modalCover.classList.add('modalCover'); 

            // Event listener to exit modal cover on click
            modalCover.addEventListener('click', (e) => {
                
                if(e.target.className != 'modalCover'){
                    return; 
                }

                mainContainer.removeChild(modalCover); 
            }); 

            mainContainer.appendChild(modalCover); 

            // Project details box
            const projectDetailsContainer = document.createElement('div'); 
            projectDetailsContainer.classList.add('projectDetailsContainer'); 

            // Get corresponding project to clicked card
            const projectName = e.target.getAttribute('data-project-id'); 
            console.log(projectName); 
            currentProject = projects[projectName]; 

            // Project info panel
            const projectInfoPanel = document.createElement('div'); 
            projectInfoPanel.classList.add('projectInfoPanel'); 

            const infoPanelItems = []

            // Name of project
            const nameHeader = document.createElement('h1'); 
            nameHeader.classList.add('nameHeader'); 
            nameHeader.textContent = currentProject.name; 
            infoPanelItems.push(nameHeader); 

            // Technologies used
            const technologiesUsed = document.createElement('p');
            technologiesUsed.classList.add('projectInfoText');  
            const techLabel = document.createElement('span'); 
            techLabel.classList.add('projectInfoSectionHead'); 
            techLabel.textContent = 'Technologies used: '; 
            technologiesUsed.appendChild(techLabel); 

            const technologyInfoList = currentProject.languages;
            const technologyInfoElement = document.createElement('span'); 
            let technologyInfoString = ''; 
            
            for(let i=0; i < technologyInfoList.length; i++){
                if(i == technologyInfoList.length - 1){
                    technologyInfoString = technologyInfoString + technologyInfoList[i]; 
                }
                else{
                    technologyInfoString = technologyInfoString + `${technologyInfoList[i]}, `; 
                }
            }

            technologyInfoElement.textContent = technologyInfoString; 
            technologiesUsed.appendChild(technologyInfoElement); 
            
            infoPanelItems.push(technologiesUsed); 

            // Description 
            const description = document.createElement('p');
            description.classList.add('projectInfoText'); 

            const descriptionLabel = document.createElement('span'); 
            descriptionLabel.classList.add('projectInfoSectionHead'); 
            descriptionLabel.innerText = "Description: ";  
            description.appendChild(descriptionLabel); 

            const descriptionText = document.createElement('span'); 
            descriptionText.textContent = currentProject.description; 
            description.appendChild(descriptionText); 

            infoPanelItems.push(description); 

            // GitHub link
            const gitHubLink = document.createElement('a'); 
            gitHubLink.classList.add('gitHubLink'); 
            gitHubLink.setAttribute('href', currentProject.github);
            gitHubLink.setAttribute('target', '_blank'); 

            const gitHubLinkText = document.createElement('p'); 
            gitHubLinkText.classList.add('projectInfoSectionHead'); 
            gitHubLinkText.textContent = "Git it here!"; 
            gitHubLink.appendChild(gitHubLinkText); 
            
            infoPanelItems.push(gitHubLink); 
            
    
            //YouTube demo
            const demoVideo = document.createElement('iframe'); 
            demoVideo.classList.add('demoVideo'); 
            demoVideo.setAttribute('src', currentProject.videoLink);
            infoPanelItems.push(demoVideo); 
    
            infoPanelItems.forEach( (item) => {
                projectInfoPanel.appendChild(item); 
            });


            projectDetailsContainer.appendChild(projectInfoPanel); 
            modalCover.appendChild(projectDetailsContainer); 
        }); 
        
        projectCardContainer.appendChild(newProjectCard); 
    }); 

}



window.addEventListener('load', generateProjectCards); 

