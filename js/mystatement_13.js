/**
* Making a spiral of size N x N and output the drawing out to the console.
* For example, when n = 10, this is how the output spiral will look like:
 * * * * * * * * *
 *               *
 *   * * * * *   *
 *   *       *   *
 *   *   *   *   *
 *   *   * * *   *
 *   *           *
 *   * * * * * * *
 *
*
**/

function spiral(n){
    var m = [n*2];          // make a matrix of double the size to have room to draw
    for(var i=0; i<n*2; i++){
        m[i]= [n*2];
        for(var j=0; j<n*2; j++){
            m[i][j] = 0;
        }
    }

    var i = n, j = n;       // start drawing at the center of the spiral, then expand out
    var numStars = 1;
    m[i][j] = 1;

    var d = [ // array storing directions to travel and draw the spiral
        {'i': 1, 'j': 0},   // down
        {'i': 0, 'j': 1 },  // right
        {'i': -1, 'j': 0},  // up
        {'i': 0, 'j': -1}   // left
    ];

    var curDir = 0;
    var doBreak = false;
    while(doBreak == false){
        var nextDir = curDir % 4;

        for(var k = 1; k < numStars + 1; k++){
            i = i + (d[nextDir].i) * 2;
            j = j + (d[nextDir].j) * 2;
            if(i>= 0 && i < n*2 && j >= 0 && j < n*2) {
                m[i][j] = 1;
            } else {
                doBreak = true;
                break;
            }
        }

        curDir += 1;
        numStars += 1;
    }

    for(var i=0; i<n*2; i++){
        var s = "";
        for(var j=0; j<n*2; j++){
            if(m[i][j] == 0){
                s = s + " ";
            } else {
                s = s + "*";
            }
        }
        if(s.trim().length > 0) console.log(s);
    }
}

spiral(40);
