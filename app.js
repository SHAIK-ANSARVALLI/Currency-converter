const baseURL = "https://v6.exchangerate-api.com/v6/fad7770f12da02b1e6899328";

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
    let response = await fetch(`${baseURL}/latest/${fromCurr.value}`);
    console.log(response);
    let data = await response.json();
    console.log(data);
    let rate = data.conversion_rates[toCurr];
    console.log(rate);
})