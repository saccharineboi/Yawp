import {yawp} from "../yawp.js";

////////////////////////////////////////
try {
    const instance = await yawp("yawp-output");
}
catch (err) {
    const errorOutputDiv = document.getElementById("error-output");
    errorOutputDiv.innerHTML = `Error: ${err.toString()}`;
    errorOutputDiv.style.display = "block";
}
