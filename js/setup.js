// Initialize the frameTimes (FT) array
var frameTimes = [];

// Get the parameters in the URL
var urlParams = new URLSearchParams(window.location.search);

// Get the value of replay_delay from the parameter and convert it to an integer
var replayDelay = -1;

var uniqueId = urlParams.get('id') || '<null id>';

// Get the id parameter, or use the default value '<null id>' if it is not available

// Get the value of numObjects from the argument and convert it to an integer
var numObjects = parseInt(urlParams.get('numObjects'), 10);

function ahghSeededRandom(seed) {
    const a = 16807; // multiplier
    const m = 2147483647; // 2**31 - 1 (a prime number)

    seed = seed % m;
    if (seed < 0) seed += m;

    return function () {
        seed = (seed * a) % m;
        return seed / m;
    };
}

// Override Math.random
Math.random = ahghSeededRandom(42);
