// I'll leave where the clock strickes.

function time() {
  var d = new Date();
  var sec = d.getSeconds();
  var min = d.getMinutes();
  var hour = d.getHours();

// There is no strike
  if (sec == 0) {
    sec = 59
  }
  if (min == 0) {
    min = 59
    hour -= 1
  }
  console.log(("0" + hour).substr(-2) + ":" + ("0" + min).substr(-2) + ":" + ("0" + sec).substr(-2));
}

time();
