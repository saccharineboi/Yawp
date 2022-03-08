import {GronckleJS} from "../gronckle.js";

////////////////////////////////////////
try {
    const gronckle = await GronckleJS("gronckle-output");
}
catch (err) {
    const errorOutputDiv = document.getElementById("error-output");
    errorOutputDiv.innerHTML = err.toString();
    errorOutputDiv.style.display = "block";
}
