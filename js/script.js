'use strict';

// first-button
var output = document.getElementById('greeter-output');

output.innerHTML = 'Click the button and to convert value';

var button = document.getElementById('greeter-button');

var celsius;

button.addEventListener('click', function () {

    celsius = window.prompt('What is the temperature in Celsius value?');

    var fahrenheit = (celsius * 1.8) + 32;

    if (celsius <= 0) {
        output.innerHTML = ' At this temperature the water freezes.' + '<br><br>' + output.innerHTML;
    } else if (celsius > 0 && celsius < 90) {
        output.innerHTML = ' At this temperature the water is liquid phase.' + '<br><br>' + output.innerHTML;
    } else if (celsius > 90) {
        output.innerHTML = ' The water is to remoulding to steam.' + '<br><br>' + output.innerHTML;
    }

    if (celsius) {
        output.innerHTML = 'You get ' + celsius + ' Celsius. It is ' + fahrenheit.toFixed(1) + ' Fahrenheits.' + output.innerHTML;
    } else {
        output.innerHTML = 'Try again!';
    }

    if (isNaN(celsius)) {
        output.innerHTML = 'You have to get number value!';
    }
});

// second-button
var secondOutput = document.getElementById('second-greeter-output');
secondOutput.innerHTML = 'Click the button and to convert value';

var secondButton = document.getElementById('second-greeter-button');

var secondFharenheit;

secondButton.addEventListener('click', function () {

    secondFharenheit = window.prompt('What is the temperature in Fharenheit value?');

    var secondCelsius = (secondFharenheit - 32) / 1.8;

    if (secondFharenheit <= 32) {
        secondOutput.innerHTML = ' At this temperature the water freezes.' + '<br><br>' + secondOutput.innerHTML;
    } else if (secondFharenheit > 32 && secondFharenheit < 194) {
        secondOutput.innerHTML = ' At this temperature the water is liquid phase.' + '<br><br>' + secondOutput.innerHTML;
    } else if (secondFharenheit >= 194) {
        secondOutput.innerHTML = ' The water is to remoulding to steam.' + '<br><br>' + secondOutput.innerHTML;
    }

    if (secondFharenheit) {
        secondOutput.innerHTML = 'You get ' + secondFharenheit + ' Fharenheit. It is ' + secondCelsius.toFixed(1) + ' Celsius.' + secondOutput.innerHTML;
    } else {
        secondOutput.innerHTML = 'Try again!';
    }

    if (isNaN(secondFharenheit)) {
        secondOutput.innerHTML = 'You have to get a number value!';
    }
});
