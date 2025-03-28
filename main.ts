input.onButtonPressed(Button.A, function () {
    activate = 1
})
let activate = 0
let moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(2)
moveMotorZIP.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
basic.forever(function () {
    if (activate == 1) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 26)
        if (Kitronik_Move_Motor.readSensor(Kitronik_Move_Motor.LfSensor.Left) > 350) {
            Kitronik_Move_Motor.motorOff(Kitronik_Move_Motor.Motors.MotorRight)
            basic.pause(20)
        } else {
            Kitronik_Move_Motor.motorOff(Kitronik_Move_Motor.Motors.MotorLeft)
            basic.pause(20)
        }
    }
})
