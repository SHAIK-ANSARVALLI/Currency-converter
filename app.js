const proxyUrl = "http://localhost:3001/api";

let dropDown = document.querySelectorAll(".select-container select");
let btn = document.querySelector(".convert button");
let amount = document.querySelector(".amount input");
let fromCurr = document.querySelector("#from");
let toCurr = document.querySelector("#to");

for(let selectOpt of dropDown) {
    for(let currCode in currencyForms) {
        let newOption = document.createElement("option");
        newOption.innerText = `${currCode} - ${currencyForms[currCode]}`;
        newOption.value = currCode;
        selectOpt.append(newOption); 
    }

    selectOpt.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

let updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", exchangeRate = async (evt) => {
    evt.preventDefault();
    // console.log(fromCurr.value);
    // console.log(toCurr.value);
    // console.log(amount.value);

    let response = await fetch(`${proxyUrl}/latest/${fromCurr.value}`);
    console.log(response);
})