bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    serial_line = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    if (serial_line == "1") {
        keyboard.sendString(keyboard.keys(keyboard._Key.up))
    } else if (serial_line == "2") {
        keyboard.sendString(keyboard.keys(keyboard._Key.down))
    } else if (serial_line == "3") {
        keyboard.sendString(keyboard.keys(keyboard._Key.left))
    } else if (serial_line == "4") {
        keyboard.sendString(keyboard.keys(keyboard._Key.right))
    } else if (serial_line == "5") {
        keyboard.sendString(keyboard.keys(keyboard._Key.vol_up))
    } else if (serial_line == "6") {
        keyboard.sendString(keyboard.keys(keyboard._Key.vol_down))
    } else if (serial_line == "7") {
        keyboard.sendString(keyboard.keys(keyboard._Key.enter))
    } else if (serial_line == "8") {
        //Home button
        keyboard.sendString(keyboard.modifiers(keyboard._Modifier.windows))
    } else if (serial_line == "9") {
        //back button
        keyboard.sendString(keyboard.keys(keyboard._Key.escape))
    }
})
let serial_line = ""
keyboard.startKeyboardService()
