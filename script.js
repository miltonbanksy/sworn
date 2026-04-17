function roll_1d100() {
    return Math.floor(Math.random() * 100) +1;
}

function getRandomFromArray(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

function getActionAndTheme() {
    const rndAction = getRandomFromArray(oracle_actions);
    const rndTheme = getRandomFromArray(oracle_themes);
    return `${rndAction}, ${rndTheme}`;
}

function getDescriptorAndFocus() {
    const rndDescriptor = getRandomFromArray(oracle_descriptors);
    const rndFocus = getRandomFromArray(oracle_focuses);
    return `${rndDescriptor}, ${rndFocus}`;
}

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


// Create a helper function here for all functions below:
function displayDataFromTableBasedOnDiceRoll(data, value, buttonSelector, displaySelector) {
    const btnRnd = document.querySelector(buttonSelector);
    const displayRnd = document.querySelector(displaySelector)
    value = value;
    
    btnRnd.addEventListener('click', () => {
        const roll = roll_1d100();
        const obj = data.find(s => roll >= s.min && roll <= s.max);
        displayRnd.innerHTML = obj[value]();
    });
}

displayDataFromTableBasedOnDiceRoll(settlement_location, 'location', '#btn-rnd-settlement-location', '#display-rnd-settlement-location');
displayDataFromTableBasedOnDiceRoll(settlement_authority, 'authority', '#btn-rnd-settlement-authority', '#display-rnd-settlement-authority');
displayDataFromTableBasedOnDiceRoll(settlement_projects, 'project', '#btn-rnd-settlement-project', '#display-rnd-settlement-project');
displayDataFromTableBasedOnDiceRoll(settlement_first_look, 'first_look', '#btn-rnd-settlement-first-look', '#display-rnd-settlement-first-look');
displayDataFromTableBasedOnDiceRoll(settlement_trouble, 'trouble', '#btn-rnd-settlement-trouble', '#display-rnd-settlement-trouble');


// Get Primary Star

const btnRndStar = document.querySelector('#btn-rnd-star');
const displayRndStar = document.querySelector('#display-rnd-star');
const displayStars = document.querySelector('#display-stars');

function getPrimaryStar() {
    primary_stars.forEach(item => {
        const div = document.createElement('div');

        div.innerHTML = `${item.min} - ${item.max}: ${item.description}`;
        
        displayStars.appendChild(div);
    });
}

btnRndStar.addEventListener('click', () => {
    const roll = roll_1d100();
    const star = primary_stars.find(s => roll >= s.min && roll <= s.max);
    displayRndStar.innerHTML = " " + star.description;
});

getPrimaryStar();

// Get Planet type
const btnRndPlanet = document.querySelector('#btn-rnd-planet');
const displayRndPlanet = document.querySelector('#display-rnd-planet');

btnRndPlanet.addEventListener('click', () => {
    getPlanet();
});

function getPlanetAtmos(planet) {
    const roll = roll_1d100();
    const planet_atmos = planet.pAtmos.find(s => roll >= s.min && roll <= s.max);
    return planet_atmos.aDescription;
}

function getPlanetObservedFromSpace(planet) {
    const roll = roll_1d100();
    const planet_observed = planet.observed_from_space.find(s => roll >= s.min && roll <= s.max);
    return planet_observed.observed;
}

function getPlanetFeature(planet) {
    const roll = roll_1d100();
    const planet_feature = planet.planetside_features.find(s => roll >= s.min && roll <= s.max);
    return planet_feature.feature;
}

function getPlanetLife(planet) {
    const roll = roll_1d100();
    const planet_life = planet.life.find(s => roll >= s.min && roll <= s.max);
    return planet_life.life;
}

function getPlanetDiversity(planet) {
    if (Object.hasOwn(planet, "diversity")) {
        return "I haven't added this yet."; 
    } else {
        return "None";
    }
}

function getPlanet() {
    const roll = roll_1d100();
    const planet = planetary_class.find(s => roll >= s.min && roll <= s.max);

    const planet_atmos = getPlanetAtmos(planet);
    const planet_observed = getPlanetObservedFromSpace(planet);
    const planet_feature = getPlanetFeature(planet);
    const planet_life = getPlanetLife(planet);
    const planet_diversity = getPlanetDiversity(planet);

    displayRndPlanet.innerHTML = `
    TYPE: ${planet.pClass}
    <br><br>DESCRIPTION: ${planet.pDescription}
    <br><br>ATMOSPHERE: ${planet_atmos}
    <br><br>OBSERVED FROM SPACE: ${planet_observed()}
    <br><br>PLANETSIDE FEATURE: ${planet_feature()}
    <br><br>LIFE: ${planet_life}
    <br><br>BIOMES: ${planet_diversity}
    `;
}