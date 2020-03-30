//Code for st nd rd th
const nth = function(d) {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};
function showtime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let day = date.getDay();
  //let month = date.getMonth();
  let blink = `<span>:</span>`;
  //console.log(month);
  let year = date.getFullYear();
  let currentdate = date.getDate();
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  let monthnew = month[date.getMonth()];
  let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  let nday = weekday[day];
  let session = "AM";
  let ordinal = nth(currentdate);

  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h -= 12;
    session = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  let time = h;
  time += blink;
  time += m;
  time += blink;
  time += s;
  time += " " + session;
  let datef =
    currentdate + ordinal + "\t  " + monthnew + "  " + year + "    " + nday;
  //console.log(datef);
  document.getElementById("myclockdisplay").innerHTML = time;
  //document.getElementById("myclockdisplay").textContent = time;
  document.getElementById("mydatedisplay").innerHTML = datef;

  setTimeout(showtime, 1000);
}
//For Running clock use setInterval method it call methid in a specified time
//Set timeout method calls again the method when times out
showtime();
