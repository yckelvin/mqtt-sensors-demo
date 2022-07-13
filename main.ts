input.onButtonPressed(Button.A, function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P1,
    true,
    false,
    true
    )
    dht11_dht22.selectTempType(tempType.celsius)
    microIoT.microIoT_SendMessage(convertToText(dht11_dht22.readData(dataType.humidity)), microIoT.TOPIC.topic_0)
    microIoT.microIoT_SendMessage(convertToText(dht11_dht22.readData(dataType.temperature)), microIoT.TOPIC.topic_0)
    microIoT.microIoT_clear()
    microIoT.microIoT_showUserText(1, "temp: " + dht11_dht22.readData(dataType.temperature) + " oC")
    microIoT.microIoT_showUserText(2, "humd: " + dht11_dht22.readData(dataType.humidity))
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
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
