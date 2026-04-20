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

// Working on a new re-factored function
// to display all Settlement details with one button click.
const btnRndSettlement = document.querySelector('#btn-rnd-settlement');
const displayRndSettlement = document.querySelector('#display-rnd-settlement');

function generateSettlement(data) {
    const roll = roll_1d100();
    return data.find(s => roll >= s.min && roll <= s.max);
}

btnRndSettlement.addEventListener('click', () => {
    const settlement_location = generateSettlement(settlement.location);
    const settlement_authority = generateSettlement(settlement.authority);
    // const settlement_projects = ...

    displayRndSettlement.innerHTML = `
    SETTLEMENT NAME: 
    <br><br>LOCATION: ${settlement_location.location()}
    <br><br>POPULATION: 
    <br><br>AUTHORITY: ${settlement_authority.authority()}
    <br><br>PROJECTS: 
    `;
});

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

// helper function to generate world elements
function getWorldElement(planet, planetKeys) {
    const roll = roll_1d100();
    return planetKey = planet[planetKeys].find(s => roll >= s.min && roll <= s.max);
}

function getPlanetDiversity(planet) {
    if (Object.hasOwn(planet, "diversity")) {
        const roll = roll_1d100();
        const planet_diversity = planet.diversity.find(s => roll >= s.min && roll <= s.max);
        return planet_diversity;
    } else {
        return "None";
    }
}

function getPlanetBiomes(planet, planet_biomes_amount) {
    const array_biomes = [];
    for (let x = 1; x <= planet_biomes_amount; x++) {
        const roll = roll_1d100();
        const biome = planet.biomes.find(s => roll >= s.min && roll <= s.max);
        array_biomes.push(biome.biome);
    }
    return array_biomes;
}

btnRndPlanet.addEventListener('click', () => {
    const roll = roll_1d100();
    const planet = planetary_class.find(s => roll >= s.min && roll <= s.max);
    const planet_atmos = getWorldElement(planet, "pAtmos");
    const planet_observed = getWorldElement(planet, "observed_from_space");
    const planet_feature = getWorldElement(planet, "planetside_features");
    const planet_life = getWorldElement(planet, "life");
    const planet_diversity = getPlanetDiversity(planet);
    const planet_biomes_amount = planet_diversity.biomes;
    const planet_biomes = getPlanetBiomes(planet, planet_biomes_amount);
    
    displayRndPlanet.innerHTML = `
    TYPE: ${planet.pClass}
    <br><br>ATMOSPHERE: ${planet_atmos.aDescription}
    <br><br>OBSERVED FROM SPACE: ${planet_observed.observed()}
    <br><br>PLANETSIDE FEATURE: ${planet_feature.feature()}
    <br><br>LIFE: ${planet_life.life}
    <br><br>DIVERSITY: ${planet_diversity.diversity || "None"}
    <br><br>BIOMES: ${planet_biomes.join(", ") || "None"}
   `;
});