const monthE1 = document.querySelector(".date h1");
const fullDateE1 = document.querySelector(".date p");
const daysE1 = document.querySelector(".days");

const monthInx = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
console.log(lastDay);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

monthE1.innerText = months[monthInx];
fullDateE1.innerText = new Date().toDateString();

let days = "";

for (let i = 1; i <= lastDay; i++) {
  days += `<div>${i}</div>` ;
}

daysE1.innerHTML = days;
