date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("danasnji_datum").innerHTML = day + "." + month + "." + year + ".";

function myFunction(x) {
        x.classList.toggle("change");
      }