// Everything is equally important to me.
// We are always learning something new when looking new words up in a dictionary besides the ones we need at the moment.

var dictionary = {
    "p1": "value1",
    "p2": "value2",
    "p3": "value3"
};

for (var key of Object.keys(dictionary)) {

    let k, n = 0;
    JSON.stringify(dictionary, (key, value) => (key && ++n || value));
    n *= Math.random();
    JSON.stringify(dictionary, (key, value) => (key && --n | 0 || (k = key) || value));

    console.log(key + " -> " + dictionary[k])
}
