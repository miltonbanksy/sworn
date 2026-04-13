const displayCharacterBackgrounds = document.querySelector('#display-character-backgrounds');

const list_backgrounds = [];
character_assets.forEach(item => {
    list_backgrounds.push(item.background);
});

displayCharacterBackgrounds.innerHTML = list_backgrounds.join(", ");

const displayCharacterPaths = document.querySelector('#display-character-paths');
displayCharacterPaths.innerHTML = character_paths.join(", ");

const btnRandomBackground = document.querySelector('#btn-random-background');
const displayRandomBackground = document.querySelector('#display-random-background');

btnRandomBackground.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * character_assets.length);
    const randomEntry = character_assets[randomIndex].background;
    displayRandomBackground.innerHTML = " " + randomEntry;
});

const btnRandomPath = document.querySelector('#btn-random-path');
const displayRandomPath = document.querySelector('#display-random-path');

btnRandomPath.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * character_paths.length);
    const randomEntry = character_paths[randomIndex];
    displayRandomPath.innerHTML = " " + randomEntry;
});

// CHARACTER BACKSTORY
const displayBackstories = document.querySelector('#display-backstories');
const btnRandomBackstory = document.querySelector('#btn-random-backstory');
const displayRandomBackstory = document.querySelector('#display-random-backstory');

const list_backstories = [];

character_backstory_prompts.forEach(item => {
    list_backstories.push(item);
});

displayBackstories.innerHTML = list_backstories.join(", ");

btnRandomBackstory.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * character_backstory_prompts.length);
    const randomEntry = character_backstory_prompts[randomIndex];
    displayRandomBackstory.innerHTML = " " + randomEntry;
});


// STARSHIP HISTORY
const displayRandomStarshipHistory = document.querySelector('#display-random-starship-history');
const btnRandomStarshipHistory = document.querySelector('#btn-random-starship-history');
const displayStarshipHistories = document.querySelector('#display-starship-histories');

const list_starship_histories = [];

starship_histories.forEach(item => {
    const element = document.createElement('li');
    element.innerHTML = item;
    displayStarshipHistories.appendChild(element);
});

btnRandomStarshipHistory.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * starship_histories.length);
    const randomEntry = starship_histories[randomIndex];
    displayRandomStarshipHistory.innerHTML = " " + randomEntry;
});

// STARSHIP CHARACTERISTICS
const displayRandomStarshipCharacteristic = document.querySelector('#display-random-starship-characteristic');
const btnRandomStarshipCharacteristic = document.querySelector('#btn-random-starship-characteristic');
const displayStarshipCharacteristics = document.querySelector('#display-starship-characteristics');


const list_starship_characteristics = [];

starship_characteristics.forEach(item => {
    const element = document.createElement('li');
    element.innerHTML = item;
    displayStarshipCharacteristics.appendChild(element);
});

btnRandomStarshipCharacteristic.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * starship_characteristics.length);
    const randomEntry = starship_characteristics[randomIndex];
    displayRandomStarshipCharacteristic.innerHTML = " " + randomEntry;
});



// Attempt to create 1 helper function
function displayDataAsList(data, randomItemSelector, rndBtnSelector, allItemsSelector) {
    const randomItemDisplay = document.querySelector(randomItemSelector);
    const rndBtn = document.querySelector(rndBtnSelector);
    const allItemsDisplay = document.querySelector(allItemsSelector);

    data.forEach(item => {
        const element = document.createElement('li');
        element.innerHTML = item;
        allItemsDisplay.appendChild(element);
    });
}

// STARSHIP NAME
const displayRandomStarshipName = document.querySelector('#display-random-starship-name');
const btnRandomStarshipName = document.querySelector('#btn-random-starship-name');
const displayStarshipNames = document.querySelector('#display-starship-names');


const list_starship_names = [];

starship_names.forEach(item => {
    const element = document.createElement('li');
    element.innerHTML = item;
    displayStarshipNames.appendChild(element);
});

btnRandomStarshipName.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * starship_names.length);
    const randomEntry = starship_names[randomIndex];
    displayRandomStarshipName.innerHTML = " " + randomEntry;
});


// Process asset arrays - refactored into 1 (big!) function.
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

    if (button) {
        button.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * data.length);
            randomDisplay.innerHTML = " " + data[randomIndex].name;
        });
    }
};

setupAssetsDisplay(array_modules, "#display-modules", "#display-random-module", "#btn-random-module");
setupAssetsDisplay(array_support_vehicles, "#display-vehicles", "#display-random-vehicle", "#btn-random-vehicle");
setupAssetsDisplay(array_companions, "#display-companions", "#display-random-companion", "#btn-random-companion");

