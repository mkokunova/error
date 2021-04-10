// Everything is equally important to me.
// We are always learning something new when looking new words up in a dictionary
// besides the ones we need at the moment.

var dictionary = {
    "diegetic":     "happening within or being the created world of a story",
    "holophrase":   "a word functioning as a phrase or sentence, as the imperative Go!",
    "flocculent":   "like a clump or tuft of wool",
    "discombobulate": "to confuse or disconcert; upset; frustrate",
    "aoristic":     "indefinite; indeterminate",
    "prolixity":    "a tendency to speak or write at great or tedious length",
    "paraselene":   "a bright moonlike spot on a lunar halo; a mock moon",
    "infodemic":    "a massive amount of widely and rapidly circulating information about a \
                    particular crisis or controversial issue, consisting of a confusing \
                    combination of fact, falsehood, rumor, and opinion.
                    ",
    "doomscrolling": "the practice of obsessively checking online news for updates, \
                    especially on social media feeds, with the expectation that the news will be bad, \
                    such that the feeling of dread from this negative expectation fuels a compulsion to \
                    continue looking for updates in a self-perpetuating cycle.
                    ",
    "lagom":        "the principle of living a balanced, moderately paced, low-fuss life",
};

for (var key of Object.keys(dictionary)) {
    let k, n = 0;
    JSON.stringify(dictionary, (key, value) => (key && ++n || value));
    n *= Math.random();
    JSON.stringify(dictionary, (key, value) => (key && --n | 0 || (k = key) || value));
    console.log(key + " -> " + dictionary[k])
}
