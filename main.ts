input.onButtonPressed(Button.A, function () {
    speed += -10
    microIoT.microIoT_MotorRun(microIoT.aMotors.M1, microIoT.Dir.CW, speed)
    microIoT.microIoT_clear()
    publish(0, convertToText(speed))
})
function publish (num: number, text: string) {
    microIoT.microIoT_SendMessage(text, microIoT.TOPIC.topic_0)
    microIoT.microIoT_showUserText(num, "Send... " + text)
}
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    speed += 10
    microIoT.microIoT_MotorRun(microIoT.aMotors.M1, microIoT.Dir.CW, speed)
    microIoT.microIoT_clear()
    publish(0, convertToText(speed))
})
let speed = 0
speed = 0
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
