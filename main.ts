input.onButtonPressed(Button.A, function () {
    microIoT.microIoT_clear()
    lightintensity = convertToText(pins.analogReadPin(AnalogPin.P0))
    microIoT.microIoT_SendMessage(lightintensity, microIoT.TOPIC.topic_0)
    microIoT.microIoT_showUserText(0, "Light: " + lightintensity)
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
let lightintensity = ""
let wifi_name = "izowifi"
let password = "izo1234@"
let iot_id = "lmZB9bXGR"
let iot_pwd = "liWfrxXMgz"
let topic_0 = "qwPmNL37g"
microIoT.microIoT_initDisplay()
microIoT.microIoT_WIFI(wifi_name, password)
microIoT.microIoT_MQTT(
iot_id,
iot_pwd,
topic_0,
microIoT.SERVERS.English
)
