input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.compassHeading())
})
input.calibrateCompass()
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200
)
basic.forever(function () {
    serial.writeNumber(Math.round(input.compassHeading()))
    basic.pause(200)
})
