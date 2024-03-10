import "./index.css";

// opdracht 1 (be)
const paragraph = document.querySelector("#fizzBuzz");

for (let i = 0; i < 91; i++) {
  if (i !== 0 && !(i % 3) && i % 5) {
    console.log("Fizz");
    paragraph.textContent += "Fizz";
    continue;
  } else if (i !== 0 && !(i % 5) && i % 3) {
    console.log("Buzz");
    paragraph.textContent += "Buzz";
    continue;
  } else if (i !== 0 && !(i % 3) && !(i % 5)) {
    console.log("FizzBuzz");
    paragraph.textContent += "FizzBuzz";
    continue;
  }
  console.log(i);
}

// opdracht 2 (be)
function splitArray(arr, size) {
  let fragments = [];

  for (let i = 0; i < arr.length; i += size) {
    fragments.push(arr.slice(i, i + size));
  }

  console.log(fragments);
}

splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);

// opdracht 3 (be)
let startDate = new Date(2024, 6, 12); // 12 Juli 2024
let endDate = new Date(2024, 8, 22); // 22 September 2024

function getWeekNumber(date) {
  let firstDateOfTheYear = new Date(date.getFullYear(), 0, 1);
  let days = Math.floor((date - firstDateOfTheYear) / (24 * 60 * 60 * 1000));
  let weekNumber = Math.ceil(days / 7);
  return weekNumber;
}

function getWholeWeekNumbers(date1, date2) {
  let firstWeekNumber = getWeekNumber(date1);
  let lastWeekNumber = getWeekNumber(date2);
  let weekNumbers = [];

  if (startDate.getDay() > 1) {
    firstWeekNumber += 1;
  }

  if (endDate.getDay() > 0) {
    lastWeekNumber -= 1;
  }

  for (let i = firstWeekNumber; i <= lastWeekNumber; i++) {
    weekNumbers.push(i);
  }
  console.log(weekNumbers);
  return weekNumbers;
}

getWholeWeekNumbers(startDate, endDate);

function getDaysBetweenDates(start, end, dayIndex) {
  var result = [];
  var current = start;

  current.setDate(current.getDate() + ((dayIndex - current.getDay() + 7) % 7));

  while (current < end) {
    result.push(new Date(current));
    current.setDate(current.getDate() + 7);
  }
  console.log(result);
  return result;
}

getDaysBetweenDates(startDate, endDate, 1);

// opdracht 1 (fe)
let response = { dateRentedOut: "28-03-2024" };

const form = document.getElementById("formDatePicker");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (response.dateRentedOut) {
    document.getElementById("notAvailable").textContent +=
      "Het object is niet beschikbaar in de gekozen periode";
  }
});
