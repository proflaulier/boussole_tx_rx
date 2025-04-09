input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.compassHeading())
})
input.calibrateCompass()
serial.redirectToUSB()
basic.forever(function () {
    serial.writeNumber(Math.round(input.compassHeading()))
    basic.pause(200)
})
