const baseURL = "https://v6.exchangerate-api.com/v6/fad7770f12da02b1e6899328";

const dropDown = document.querySelectorAll(".select-container select");
const btn = document.querySelector(".convert button");
const fromCurr = document.querySelector("#from");
const toCurr = document.querySelector("#to");
const msg = document.createElement("div");
const convert = document.querySelector(".convert");
const container = document.querySelector(".container");

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
    
    let amount = document.querySelector(".amount input");
    let amtValue = amount.value;

    let response = await fetch(`${baseURL}/latest/${fromCurr.value}`);
    let data = await response.json();
    let conversion_rates = await data["conversion_rates"];
    let rate = await conversion_rates[toCurr.value];

    printCurr(amtValue,rate);
});

let printCurr = (amtValue,rate) => {
    let finalRate = amtValue * rate;
    msg.innerHTML = `<strong style = "font-size: 2rem">${amtValue}</strong> ${currencyForms[fromCurr.value]} = <strong style = "font-size: 2rem">${finalRate}</strong> ${currencyForms[toCurr.value]}`;
    container.insertBefore(msg, convert);
    msg.setAttribute("style", "padding-bottom: 15px");
}