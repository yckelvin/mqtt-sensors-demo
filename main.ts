let lightintensity = 0
basic.showNumber(0)
let wifi_name = "izowifi"
let password = "izo1234@"
let iot_id = "lmZB9bXGR"
let iot_pwd = "liWfrxXMgz"
let topic_0 = "qwPmNL37g"
basic.showNumber(1)
microIoT.microIoT_initDisplay()
microIoT.microIoT_WIFI(wifi_name, password)
basic.showNumber(2)
microIoT.microIoT_MQTT(
iot_id,
iot_pwd,
topic_0,
microIoT.SERVERS.English
)
basic.showNumber(3)
basic.forever(function () {
    lightintensity = 1023 - pins.analogReadPin(AnalogPin.P0)
    microIoT.microIoT_showUserText(0, "Light: " + convertToText(lightintensity))
    if (lightintensity < 500) {
        pins.analogWritePin(AnalogPin.P1, 1023)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
    basic.pause(500)
})
