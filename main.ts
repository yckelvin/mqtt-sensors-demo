input.onButtonPressed(Button.A, function () {
    distance = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P14,
    PingUnit.Centimeters
    )
    publish(0, convertToText(distance))
})
function publish (num: number, text: string) {
    microIoT.microIoT_SendMessage(text, microIoT.TOPIC.topic_0)
    microIoT.microIoT_clear()
    microIoT.microIoT_showUserText(num, "Send... " + text)
}
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
let distance = 0
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
