function temperature() {
  const celsius = document.getElementById("celsius").value;
  const fahrenheit = (celsius * 9 / 5) + 32;
  document.getElementById("fahrenheit").value = fahrenheit;
}

function weight() {
  const kilo = document.getElementById("kilo").value;
  const pounds = kilo * 2.2;
  document.getElementById("pounds").innerHTML = pounds;
}

function distance() {
  const km = document.getElementById("km").value;
  const miles = km * 0.62137;
  document.getElementById("miles").innerHTML = miles;
}
