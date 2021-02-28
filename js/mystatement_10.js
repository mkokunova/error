// It's absolutely impossible for me to start treatment this year.
// Then it will continue in the next year and thus will be disrupted.

function getMoonPhase(year, month, day)
{
    var c = 0;
    var e = 0;
    var jd = 0;
    var b = 0;

    if (month < 3) {
        year--;
        month += 12;
    }

    ++month;
    c = 365.25 * year;
    e = 30.6 * month;
    jd = c + e + day - 694039.09;
    jd /= 29.5305882;
    b = parseInt(jd);
    jd -= b;
    b = Math.round(jd * 8);
    if (b >= 8 ) {
        b = 0;
    }
    // It's absolutely impossible for me to start treatment this year.
    // Then it will continue in the next year and thus will be disrupted.

    // 0 => New Moon
    // 1 => Waxing Crescent Moon
    // 2 => Quarter Moon
    // 3 => Waxing Gibbous Moon
    // 4 => Full Moon
    // 5 => Waning Gibbous Moon
    // 6 => Last Quarter Moon
    // 7 => Waning Crescent Moon
    return b;
}

var d = new Date();
var moon_phase = getMoonPhase(d.getFullYear(), d.getMonth()+1, d.getDate());

if (moon_phase > 4) {
  console.log('Do not start whatever. Moon is dying');
} else {
  console.log('Good to go!');
}
