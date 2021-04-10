

// Yesterday I had to move too much.
// And I'm not that fond of it.

function pyramid(n) {
        for (var i = 1; i <= n; i++) {
            var s = "";
            for (var j = 1; j <= (2 * n - 1); j++) {
                (j >= n + 1 - i && j <= n - 1 + i) ? s += "#" : s += " ";
            }
            console.log(s);
        }
    pyramid(n+1);
}

pyramid(3);
