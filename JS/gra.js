let number = Math.floor(Math.random() * 11);

function play() {
    let userNumber = document.getElementById("userNumber").value;
    let message;

    if (userNumber > number) {
        message = "Twój numer jest za duży, spróbuj ponownie"
    } else if (userNumber < number) {
        message = "Twój numer jest za mały, spróbuj ponownie"
    } else {
        message = "Trafiłeś!! Strzał w dziesiątkę"
    }
    document.getElementById("message").innerHTML = message;
}