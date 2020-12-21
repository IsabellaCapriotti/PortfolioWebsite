// Project information 
const projects = {

    'weGrow': {
        'description': 'A cross-platform Xamarin Forms app aimed at users trying to gain weight for health reasons. Stores user data in a SQLite database, and offers a variety of different goal-tracking methods for a customized user experience. Features a plant-themed UI to fit with the message of growing into better things.', 
        'videoLink': 'https://www.youtube.com/embed/WfolQdgKDac',
        'fullEmbedCode': '<iframe width="560" height="315" src="https://www.youtube.com/embed/WfolQdgKDac" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        'name': 'WeGrow App',
        'languages': ['C#', 'XAML', 'Xamarin Forms' , '.NET Framework', 'SQLite'],
        'github': 'https://github.com/IsabellaCapriotti/WeGrowApp'
    },

    'mp3DB': {
        'description': '',
        'videoLink': 'https://www.youtube.com/embed/YZk3WO04750',
        'name': 'MP3 File Database',
        'languages': ['Python', 'SQLite'],
        'github': 'https://github.com/IsabellaCapriotti/PythonMusicDatabaseUpdater'
    },

    'cppUno': {
        'description': '',
        'videoLink': 'https://www.youtube.com/embed/mGSGeBLMdV4',
        'name': 'Command Line Uno',
        'languages': ['C++'],
        'github': 'https://github.com/IsabellaCapriotti/CommandLineUno'
    },

    'pokeInfo': {
        'description': '',
        'videoLink': 'https://www.youtube.com/embed/WWLIzPjz_bE',
        'name': 'Pokemon Info Grabber',
        'languages': ['Python'],
        'github': 'https://github.com/IsabellaCapriotti/PythonPokemonInfoGrabber'
    },

    'pulseLog':{
        'description': '',
        'videoLink': 'https://www.youtube.com/embed/LEJbQCE2cpU',
        'name': 'Pulse Logger',
        'languages': ['JavaScript', 'HTML', 'CSS'],
        'github': 'https://github.com/IsabellaCapriotti/JSPulseLogger'
    },

    'deathRow':{
        'description': '',
        'videoLink': 'https://www.youtube.com/embed/KuGycGZLDQU',
        'name': 'Death Row Data',
        'languages': ['Python', 'SQLite'],
        'github': 'https://github.com/IsabellaCapriotti/TexasDeathRowData'
    },

    'gameOfLife':{
        'description': '',
        'videoLink': 'https://www.youtube.com/embed/gA6SspptQug',
        'name': 'ASM Game of Life',
        'languages': ['x86 Assembly'],
        'github': 'https://github.com/IsabellaCapriotti/MIPSGameOfLife'
    },

    'markdownPreview':{
        'description': '',
        'videoLink': 'https://www.youtube.com/embed/M2euDW0ssxk',
        'name': 'Markdown Previewer',
        'languages': ['JavaScript', 'HTML', 'CSS', 'React'],
        'github': 'https://github.com/IsabellaCapriotti/JSMarkdownPreviewer'
    },

    'movieSearch':{
        'description': '',
        'videoLink': 'https://www.youtube.com/embed/mAXYRuXrXS0',
        'name': 'Movie Search',
        'languages': ['JavaScript', 'HTML', 'CSS', 'React'],
        'github': 'https://github.com/IsabellaCapriotti/TexasDeathRowData'
    },

}; 


// Generate project cards
function generateProjectCards(){

    const projectCardContainer = document.querySelector('.projectCardContainer'); 
    const allProjects = Object.keys(projects); 

    const saturation = 100; 
    const lightness = 85; 
    let hue = 13; 

    allProjects.forEach( (project) => {

        // Generate new card
        const newProjectCard = document.createElement('div'); 
        newProjectCard.classList.add('projectCard'); 
        newProjectCard.setAttribute('data-project-id', project); 

        project = projects[project]; 

        // Add background color
        newProjectCard.style["background-color"] = `hsl(${hue}, ${saturation}%, ${lightness}%)`; 
        hue = hue + 40; 

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
            
            projectDetailsContainer.appendChild(demoVideo); 

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

