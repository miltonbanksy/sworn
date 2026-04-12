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
