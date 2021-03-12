// Project information 
const projects = {

    'weGrow': {
        'description': 'A cross-platform Xamarin Forms app aimed at users trying to gain weight for health reasons. Stores user data in a SQLite database, and offers a variety of different goal-tracking methods for a customized user experience. Features a plant-themed UI to fit with the message of growing into better things.', 
        'videoLink': 'https://www.youtube.com/embed/WfolQdgKDac',
        'name': 'WeGrow App',
        'languages': ['C#', 'XAML', 'Xamarin Forms' , '.NET Framework', 'SQLite', 'Microsoft Visual Studio'],
        'github': 'https://github.com/IsabellaCapriotti/WeGrowApp'
    },

    'mp3DB': {
        'description': 'A tool that populates a SQLite database with metadata on all MP3 files in a given folder. Uses the EyeD3 library to extract information including the artist, album, creation date, and length of each song, if available.',
        'videoLink': 'https://www.youtube.com/embed/YZk3WO04750',
        'name': 'MP3 File Database',
        'languages': ['Python', 'SQLite'],
        'github': 'https://github.com/IsabellaCapriotti/PythonMusicDatabaseUpdater'
    },

    'cppUno': {
        'description': 'A command-line implementation of the popular card game, Uno! Implements the classic ruleset of the game by using multiple classes to represent game constructs such as cards, decks, and players. Allows up to 4 human-controlled players. Provides an engaging way to pass time, even without a WiFi connection.',
        'videoLink': 'https://www.youtube.com/embed/mGSGeBLMdV4',
        'name': 'Command Line Uno',
        'languages': ['C++'],
        'github': 'https://github.com/IsabellaCapriotti/CommandLineUno'
    },

    'mushroomClassifier': {
        'description': 'A logistic regression model trained on data from The Audobon Society Field Guide to North American Mushrooms that predicts whether a mushroom is poisonous or edible. Achieves 95-98% accuracy on both training and test data. A small game also accompanies the model to demonstrate what it can do. The game generates random mushrooms, uses the trained model to predict their edibility, and challenges the player to make as many correct decisions as they can.',
        'videoLink': 'https://www.youtube.com/embed/iPCGTIvfJhk',
        'name': 'Mushroom Classifier',
        'languages': ['Python','Logistic Regression', 'Machine Learning', 'Numpy', 'Pandas', ],
        'github': 'https://github.com/IsabellaCapriotti/MushroomClassifier'
    },

    'pokeInfo': {
        'description': 'An application that parses data from The Pokemon Database to serve a variety of information on the Pokemon games to the user, including stats, moves, abilities, types, and items.',
        'videoLink': 'https://www.youtube.com/embed/WWLIzPjz_bE',
        'name': 'Pokemon Info Grabber',
        'languages': ['Python'],
        'github': 'https://github.com/IsabellaCapriotti/PythonPokemonInfoGrabber'
    },

    'goodMemories':{
        'description': 'A Xamarin Forms application that helps you to remember all the small, happy memories that make life full! After you add some memories, the app will pick a memory to highlight once every 24 hours, which you can easily view from the home page. Additionally, you can always look through all of the memories you\'ve added and edit previous entries.',
        'videoLink': 'https://www.youtube.com/embed/1guS3rkeHTQ',
        'name' : 'Good Memories App',
        'languages': ['C#', '.NET Framework', 'XAML', 'Xamarin Forms', 'SQLite', 'Microsoft Visual Studio'],
        'github': 'https://github.com/IsabellaCapriotti/GoodMemoriesApp'
    },

    'pulseLog':{
        'description': 'A web app that allows the user to track their resting and active heart rates across a series of days. Users local browser storage to persist state across uses.',
        'videoLink': 'https://www.youtube.com/embed/LEJbQCE2cpU',
        'name': 'Pulse Logger',
        'languages': ['JavaScript', 'HTML', 'CSS'],
        'github': 'https://github.com/IsabellaCapriotti/JSPulseLogger'
    },

    'deathRow':{
        'description': "An application that parses web data from Texas's state death row database, and populates a SQLite database with the information it gathered. After the data has been loaded, it will display a randomly chosen individual's information upon running. While information was not available for all the subjects' last words, those who did make a statement are represented in this database.",
        'videoLink': 'https://www.youtube.com/embed/KuGycGZLDQU',
        'name': 'Death Row Data',
        'languages': ['Python', 'SQLite'],
        'github': 'https://github.com/IsabellaCapriotti/TexasDeathRowData'
    },

    'gameOfLife':{
        'description': "Conway's Game of Life implemented in MIPS Assembly. Uses a two-dimensional array with wrap-around edges to simulate an infinite board. Originally developed to run on the QTSpim simulator.",
        'videoLink': 'https://www.youtube.com/embed/gA6SspptQug',
        'name': 'ASM Game of Life',
        'languages': ['MIPS Assembly'],
        'github': 'https://github.com/IsabellaCapriotti/MIPSGameOfLife'
    },

    'flamingoGame':{
        'description': 'A game built with C# in Unity where you play as a flamingo and try to eat as much shrimp as you can in one minute. Incorporates user controls, automated spawning of game objects, a basic user interface, water and terrain elements, and the ability to continually reset and replay the game.',
        'videoLink': 'https://www.youtube.com/embed/qDMmyU3g2Kk',
        'name': 'Flamingo Game',
        'languages': ['C#', 'Unity'],
        'github': 'https://play.unity.com/mg/other/flamingo-game',
        'gameDemo': true
    },
    
    'markdownPreview':{
        'description': 'A web application that allows the user to type markdown in the top pane, and dynamically see a formatted preview in the bottom pane.',
        'videoLink': 'https://www.youtube.com/embed/M2euDW0ssxk',
        'name': 'Markdown Previewer',
        'languages': ['JavaScript', 'HTML', 'CSS', 'React'],
        'github': 'https://github.com/IsabellaCapriotti/JSMarkdownPreviewer'
    },

    'movieSearch':{
        'description': 'A web application that lets the user search for a title or keyword of a movie, and returns the search results through calls to the TheMovieDB API.',
        'videoLink': 'https://www.youtube.com/embed/mAXYRuXrXS0',
        'name': 'Movie Search',
        'languages': ['JavaScript', 'HTML', 'CSS', 'React', 'API'],
        'github': 'https://github.com/IsabellaCapriotti/MovieSearch'
    },

    'portfolioWebsite':{
        'description': 'No explanation or demo needed, but you can take a look at the source code for this website here!',
        'videoLink': '',
        'name': 'This Website',
        'languages': ['JavaScript', 'HTML', 'CSS'],
        'github': 'https://github.com/IsabellaCapriotti/PortfolioWebsite'
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
        const projectID = project; 
        newProjectCard.setAttribute('data-project-id', projectID); 

        project = projects[project]; 

        // Add background color
        newProjectCard.style["background-color"] = `hsl(${hue}, ${saturation}%, ${lightness}%)`; 
        hue = hue + 40; 

        const newTitle = document.createElement('div'); 
        newTitle.classList.add('projectTitle'); 
        newTitle.setAttribute('data-project-id', projectID); 
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

            if(currentProject.hasOwnProperty("gameDemo")){
                gitHubLinkText.textContent = "Play it here!"; 
            }

            else{
                gitHubLinkText.textContent = "Git it here!"; 
            }
            gitHubLink.appendChild(gitHubLinkText); 
            
            infoPanelItems.push(gitHubLink); 
            
    
            //YouTube demo
            if(currentProject.videoLink != ''){
                const demoVideo = document.createElement('iframe'); 
                demoVideo.classList.add('demoVideo'); 
                demoVideo.setAttribute('src', currentProject.videoLink);
                demoVideo.setAttribute('allowfullscreen', 'true'); 
                projectDetailsContainer.appendChild(demoVideo); 
            }

            // Add all items to info panel
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

