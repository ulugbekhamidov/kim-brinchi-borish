var elForm = document.querySelector("[data-form]");
var elInput =document.querySelector("[data-input]");
var elFoot =document.querySelector("[data-foot");
var elBicycle = document.querySelector("[data-bicycle");
var elCar = document.querySelector("[data-car");
var elAirplane = document.querySelector("[data-airplane");
var road;
var foot = 3.6;
var bicycle = 20.1;
var car = 70;
var airplane = 800;

elForm.addEventListener("submit" , function (evt) {
    evt.preventDefault();
    road =+elInput.value;
    time(elFoot, foot)
    time(elBicycle, bicycle)
    time(elCar, car)
    time(elAirplane, airplane)
})

function time (el, speed) {
    var hour = road / speed;
    var startHour = distanceTraveled(hour);
    var timeGone = hour - startHour;
    var minuteGone = startHour * 60;
    el.textContent = `${timeGone} soat ${minuteGone.toFixed(0)} minut `
}

function distanceTraveled(num) {
    return num - Math.floor(num);
}