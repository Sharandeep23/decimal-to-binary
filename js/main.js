// Selecting ELements
const numEl = document.querySelector("#number");
const resultEl = document.querySelector("#result");

document.querySelector("#submit").addEventListener("click", (e) => {
    // Do nothing if input is empty or less than 0 or has decimals
    if (!numEl.value || numEl.value < 0 || Number(numEl.value) !== parseInt(numEl.value))
        return;

    // Preventing the default behaviour of forms
    e.preventDefault();

    // Getting, Converting, and Writing out the value to resultEl
    const binaryNum = Number(numEl.value).toString(2);
    resultEl.textContent = binaryNum;

    // making resultEL visible
    resultEl.style.visibility = "visible";
});
