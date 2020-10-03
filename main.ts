function USBAusgabe () {
    let magnstr = 0
    lightstr = convertToText(input.lightLevel())
    tempstr = convertToText(input.temperature())
    loadstr = convertToText(input.soundLevel())
    str = "" + lightstr + tempstr + magnstr
    serial.writeLine(str)
}
input.onButtonPressed(Button.A, function () {
    serial.writeLine("Thilo")
    serial.writeLine("Thilo")
})
input.onButtonPressed(Button.B, function () {
    USBAusgabe()
    basic.showNumber(input.temperature())
})
function nlongstr (num: number, Text: string) {
    return "" + Text + ";"
}
let str = ""
let loadstr = ""
let tempstr = ""
let lightstr = ""
basic.setLedColor(0xff0000)
serial.setBaudRate(BaudRate.BaudRate115200)
serial.redirectToUSB()
basic.clearScreen()
basic.forever(function () {
	
})
