input.onButtonPressed(Button.A, function () {
    microIoT.microIoT_clear()
    light_level += -50
    pins.analogWritePin(AnalogPin.P0, light_level)
    publish(0, convertToText(light_level))
})
function publish (num: number, text: string) {
    microIoT.microIoT_SendMessage(text, microIoT.TOPIC.topic_0)
    microIoT.microIoT_showUserText(num, "Send... " + text)
}
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    microIoT.microIoT_clear()
    light_level += 50
    pins.analogWritePin(AnalogPin.P0, light_level)
    publish(0, convertToText(light_level))
})
let light_level = 0
light_level = 0
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
