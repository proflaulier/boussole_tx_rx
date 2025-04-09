input.onButtonPressed(Button.A, function () {
    cible = input.compassHeading()
    basic.showNumber(cible)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(cap)
    bluetooth.uartWriteNumber(0)
})
let cap = 0
let cible = 0
bluetooth.startUartService()
input.calibrateCompass()
cible = 0
basic.forever(function () {
    cap = input.compassHeading()
    if (Math.abs(cible - cap) < 5) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else {
        if (cap < cible) {
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        } else {
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
        }
    }
    basic.pause(100)
})
