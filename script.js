function getCharacterBackground() {
    const displayCharacterBackgrounds = document.querySelector('#display-character-backgrounds');
    const btnRandomBackground = document.querySelector('#btn-random-background');
    const displayRandomBackground = document.querySelector('#display-random-background');

    const list_backgrounds = [];

    character_assets.forEach(item => {
        list_backgrounds.push(item.background);
    });

    displayCharacterBackgrounds.innerHTML = list_backgrounds.join(", ");

    btnRandomBackground.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * character_assets.length);
        const randomEntry = character_assets[randomIndex].background;
        displayRandomBackground.innerHTML = " " + randomEntry;
    });
}


// Helper Function - Get & Display Data (as <list>)
function displayDataAsList(data, randomItemSelector, rndBtnSelector, allItemsSelector) {
    const randomItemDisplay = document.querySelector(randomItemSelector);
    const rndBtn = document.querySelector(rndBtnSelector);
    const allItemsDisplay = document.querySelector(allItemsSelector);

    data.forEach(item => {
        const element = document.createElement('li');
        element.innerHTML = item;
        allItemsDisplay.appendChild(element);
    });

    rndBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * data.length);
        randomItemDisplay.innerHTML = " " + data[randomIndex];
    });
    
}


// Helper Function - Get & Display Data (as <details>)
function setupAssetsDisplay(data, displayAllSelector, randomDisplaySelector, buttonSelector) {
    const displayContainer = document.querySelector(displayAllSelector);
    const randomDisplay = document.querySelector(randomDisplaySelector);
    const button = document.querySelector(buttonSelector);

    data.forEach(item => {
        const element_details = document.createElement('details');
        const element_summary = document.createElement('summary');

        element_summary.innerHTML = item.name;
        element_details.innerHTML = `${item.level1}<br>${item.level2}<br>${item.level3}<br>${item.other}<br><br>`;
        element_details.prepend(element_summary);

        displayContainer.appendChild(element_details)
    });

    button.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * data.length);
        randomDisplay.innerHTML = " " + data[randomIndex].name;
    });

}

getCharacterBackground();
displayDataAsList(character_paths, '#display-random-path', '#btn-random-path', '#display-character-paths');
displayDataAsList(character_backstory_prompts, '#display-random-backstory', '#btn-random-backstory', '#display-backstories');
displayDataAsList(starship_histories, '#display-random-starship-history', '#btn-random-starship-history', '#display-starship-histories')
displayDataAsList(starship_characteristics, '#display-random-starship-characteristic', '#btn-random-starship-characteristic', '#display-starship-characteristics');
displayDataAsList(starship_names, '#display-random-starship-name', '#btn-random-starship-name', '#display-starship-names');
setupAssetsDisplay(array_modules, "#display-modules", "#display-random-module", "#btn-random-module");
setupAssetsDisplay(array_support_vehicles, "#display-vehicles", "#display-random-vehicle", "#btn-random-vehicle");
setupAssetsDisplay(array_companions, "#display-companions", "#display-random-companion", "#btn-random-companion");

