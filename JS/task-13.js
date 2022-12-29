const converter = document.querySelector('#converter');
const text = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
let fahrenheit;
let celsius;


const swap = () => {
    if (one.textContent === "°C") {
        one.textContent = "°F"
        two.textContent = "°C";
        text.textContent = "";
    } else {
        one.textContent = "°C"
        two.textContent = "°F";
        text.textContent = "";
    }
}

const fahrenheitF = () => {
    fahrenheit = converter.value * 1.8 + 32;
    text.textContent = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`;
    converter.value = "";
}

const celsiusF = () => {
    celsius = (converter.value - 32)/1.8;
    text.textContent = `${converter.value}°F to ${celsius.toFixed(1)}°C`;
    converter.value = "";

}

const conversion = () => {
    if (converter.value !== "") {
        if (one.textContent === "°C") {
            fahrenheitF();
        } else {
            celsiusF();
        }
    } else {
        text.textContent = "Musisz podać jakąś wartość"
        text.style.color = "red";
    }
}

const reset = () => {
    converter.value = "";
    text.textContent = "";
}

changeBtn.addEventListener("click", swap);
convBtn.addEventListener('click', conversion);

resetBtn.addEventListener('click', reset);
