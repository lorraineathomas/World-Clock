function updateTime() {
  // List locations
  // Stockholm
  let stockholm = document.querySelector("#stockholm");
  if (stockholm) {
    let stockholmDate = stockholm.querySelector(".date");
    let stockholmTime = stockholm.querySelector(".time");
    stockholmCurrentTime = moment().tz("Europe/Stockholm");

    stockholmDate.innerHTML = stockholmCurrentTime.format("ddd, MMMM Do, YYYY");
    stockholmTime.innerHTML = stockholmCurrentTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  // Toronto
  if (toronto) {
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
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let timezone = event.target.value;
  let name = timezone.replaceAll("_", " ").split("/")[1];
  let currentCityTime = moment().tz(timezone);
  let cityChanged = document.querySelector(".locations");
  cityChanged.innerHTML = `
    <div class="city" id="stockholm">
          <div id="city-time">
            <h2>${name}</h2>
            <div class="date">${currentCityTime.format(
              "dddd, MMMM Do, YYYY"
            )}</div>
          </div>
          <div>
            <div class="time">${currentCityTime.format(
              "h:mm:ss"
            )}<small>${currentCityTime.format("A")}</small></div>
          </div>
        </div>`;
}

let citiesSelect = document.querySelector("#city-select");
citiesSelect.addEventListener("change", updateCity);
