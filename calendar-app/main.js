const currDate = new Date();

function daysInMonth() {
  return new Date(
    currDate.getFullYear(),
    currDate.getMonth() + 1,
    0
  ).getDate();
}

function dayClick(e) {
  const $day = e.target;

  const old = document.querySelector(".selected");

  if (old) old.classList.remove("selected");

  $day.classList.add("selected");

  selectedDay = $day.innerText;

  document.querySelector(
    "#selection"
  ).innerText = selectedDay;
}

function addMeeting() {
  // Check if values are available
  if (
    !$time.value ||
    !$title.value ||
    !selectedDay
  )
    return;

  // Create new list element
  const $li = document.createElement("li");
  $li.innerText = `${currentMonth} ${selectedDay} • ${$time.value} • ${$title.value}`;

  // Push meeting to list parent
  $ul.appendChild($li);

  //   Clear inputs
  $time.value = "";
  $title.value = "";
}

const $time = document.querySelector("#time");

const $title = document.querySelector("#title");

const $heading = document.querySelector("h1");

const $btn = document.querySelector("#add");

const $ul = document.querySelector("#meetings");

const $calendar = document.querySelector(
  "#calendar"
);

const currentMonth = currDate.toLocaleString(
  "default",
  { month: "long" }
);

$heading.innerText = currentMonth;

let selectedDay = null;

const numOfDays = daysInMonth();

for (let i = 0; i < numOfDays; i++) {
  const $day = document.createElement("div");
  $day.classList.add("day");
  $day.innerText = i + 1;
  $day.addEventListener("click", dayClick);
  $calendar.appendChild($day);
}

$btn.addEventListener("click", addMeeting);
