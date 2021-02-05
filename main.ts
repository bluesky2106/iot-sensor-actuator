radio.onReceivedString(function (receivedString) {
    cmd = receivedString
    if (cmd == "0") {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    if (cmd == "1") {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    if (cmd == "2") {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
    if (cmd == "3") {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
})
let cmd = ""
radio.setGroup(77)
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
let count = 0
basic.forever(function () {
    count += 1
    if (count == 100) {
        radio.sendNumber(input.temperature())
        count = 0
    }
    basic.pause(100)
})
