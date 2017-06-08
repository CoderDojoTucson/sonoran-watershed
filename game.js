// The game logic for Sonoran Watershed.

// Global variables for the game.
var water;
var corn;
var beans;
var squash;
var month;
var gameOver;

// Display elements for game.
var waterLevel = document.getElementById('water_level');
var cornTotal = document.getElementById('corn_total');
var beansTotal = document.getElementById('beans_total');
var squashTotal = document.getElementById('squash_total');

var start = document.querySelector('.startButton');

// Initialize the game state.
function startGame() {
    water = 0;
    corn = 2;
    beans = 2;
    squash = 2;
    month = 1;
    gameOver = false;
    
    initGameBoard();
    playGame();
}
start.addEventListener('click', startGame);

// Clear the game board and reset all the status displays.
function initGameBoard() {
    waterLevel = water;
    var
}

// Play the game.
function playGame() {
    while ((month <= 12) && (gameOver === false)) {
        plant();
        rain();
        grow();
        eat();
        month++;
    }
}

// Plant crops. May be either corn, beans, or squash.
function plant() {
    
}

// Determine amount of rainfall. Will be a random number within a range of
// numbers corresponding to tenths of an inch of rain. The size of the range
// is based on the month and historical Tucson rainfall patterns.
function rain() {
    
}

// Grow the crops planted, based on the amount of water available. Corn takes
// one water, beans take two, and squash takes three. Growing will occur in the
// order corn, beans, squash - one plot at a time. In other words, even if there
// are three plots of corn and only one of beans and squash, one harvest of
// corn, beans, and squash will be grown before the second and third corn 
// harvests. This simulates selective use of the water. 
//
// TODO: This is not a very realistic approach. Without any water harvesting,
// the crops should grow based in rainfall, e.g., given a certain threshold of
// rain, all the corn crops should grow, since the rain is falling on all of
// them simultaneously. Same would be true for beans and squash. Stored water
// could be used to grow crops when there isn't enough rain to reach the 
// threshold - and this is the point where the player could make a decision 
// about which crops get more water. It should also be possible to lose seed if
// a crop is planted, but doesn't get enough water to harvest.
function grow() {
    
}

// The player eats the crops that were harvested. The player needs to eat one 
// harvest of corn, beans, and squash each month to get the complete nutrition
// needed to survive.
//
// TODO: There needs to be a "survival option" where other crops can be 
// substituted for the three sisters (corn, beans, and squash) when one of the
// crops is not available, since it doesn't make much sense for the player to
// starve when they have multiple corn harvests, for example. One possible 
// substitution might be two corn for one beans, three corn for one squash,
// two beans for one squash, or one squash for corn or beans. Should there be a
// limit to how many turns substitutions can be made?
function eat() {
    
}