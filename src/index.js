function updateDenverTime() {
  //Denver
  let denver = document.querySelector("#denver");
  let denverDate = denver.querySelector(".date");
  let denverTime = denver.querySelector(".time");
  denverCurrentTime = moment().tz("America/Denver");

  denverDate.innerHTML = denverCurrentTime.format("ddd, MMMM Do, YYYY");
  denverTime.innerHTML = denverCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
setInterval(updateDenverTime, 1000);

function updateTorontoTime() {
  //Toronto
  let toronto = document.querySelector("#toronto");
  let torontoDate = toronto.querySelector(".date");
  let torontoTime = toronto.querySelector(".time");
  torontoCurrentTime = moment().tz("America/Toronto");

  torontoDate.innerHTML = torontoCurrentTime
    .tz("America/Toronto")
    .format("ddd, MMMM Do, YYYY");
  torontoTime.innerHTML = torontoCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
setInterval(updateTorontoTime, 1000);
