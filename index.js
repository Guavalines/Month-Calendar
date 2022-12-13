const monthE1 = document.querySelector(".date h1");

const monthInx = new Date().getMonth();

console.log(monthInx);

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
