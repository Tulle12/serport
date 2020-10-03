function USBAusgabe () {
    lightstr = nlongstr(6, convertToText(input.lightLevel()))
    tempstr = nlongstr(6, convertToText(input.temperature()))
    loadstr = nlongstr(6, convertToText(input.soundLevel()))
    xstr = nlongstr(6, convertToText(input.acceleration(Dimension.X)))
    ystr = nlongstr(6, convertToText(input.acceleration(Dimension.Y)))
    zstr = nlongstr(6, convertToText(input.acceleration(Dimension.Z)))
    str = "" + lightstr + tempstr + loadstr + xstr + ystr + zstr
    serial.writeLine(str)
}
input.onButtonPressed(Button.A, function () {
    serial.writeLine("" + (nlongstr(10, "abc")))
})
input.onButtonPressed(Button.B, function () {
	
})
function nlongstr (num: number, Text: string) {
    n = num - Text.length
    nstr = ""
    for (let index = 0; index < n; index++) {
        nstr = "" + nstr + " "
    }
    return "" + nstr + Text + ";"
}
let nstr = ""
let n = 0
let str = ""
let zstr = ""
let ystr = ""
let xstr = ""
let loadstr = ""
let tempstr = ""
let lightstr = ""
basic.setLedColor(0x999999)
serial.setBaudRate(BaudRate.BaudRate115200)
serial.redirectToUSB()
basic.clearScreen()
basic.forever(function () {
    USBAusgabe()
    basic.pause(100)
})
