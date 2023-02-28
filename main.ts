let tijd6 = 0
let tijd5 = 0
let tijd4 = 0
let tijd3 = 0
let tijd2 = 0
let tijd1 = 0
serial.writeNumber(tijd1)
serial.writeLine("")
serial.writeNumber(tijd2)
serial.writeLine("")
serial.writeNumber(tijd3)
serial.writeLine("")
serial.writeNumber(tijd4)
serial.writeLine("")
serial.writeNumber(tijd5)
serial.writeLine("")
serial.writeNumber(tijd6)
serial.writeLine("")
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
let _0 = 1
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 256) {
        tijd1 = input.runningTime()
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    }
    if (pins.analogReadPin(AnalogPin.P0) <= 256) {
        tijd2 = input.runningTime()
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
    }
    if (pins.analogReadPin(AnalogPin.P1) > 256) {
        tijd3 = input.runningTime()
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (pins.analogReadPin(AnalogPin.P1) <= 256) {
        tijd4 = input.runningTime()
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    }
    if (pins.analogReadPin(AnalogPin.P2) > 256) {
        tijd5 = input.runningTime()
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (pins.analogReadPin(AnalogPin.P2) <= 256) {
        tijd6 = input.runningTime()
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
})
