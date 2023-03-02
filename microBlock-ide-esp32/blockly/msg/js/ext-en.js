// This file created by Mason 

'use strict';

Blockly.Msg["Blocks_Basic"]="Basic";
Blockly.Msg["Blocks_Control"]="Control";
Blockly.Msg["Blocks_Operators"]="Operators";
Blockly.Msg["Blocks_Variables"]="Variables";
Blockly.Msg["Blocks_Function"]="Function";
Blockly.Msg["Blocks_Advanced"]="Advanced";

Blockly.Msg["LABEL_BLINK_CODE"]="Blink Code";
Blockly.Msg["LABEL_MATH"]="Math";
Blockly.Msg["LABEL_LOGIC"]="Logic";
Blockly.Msg["LABEL_TEXT"]="Text";
Blockly.Msg["LABEL_DASHBOARD"]="DashBoard";
Blockly.Msg["LABEL_DEBUG"]="Debug";
Blockly.Msg["LABEL_TIMER"]="Timer";
Blockly.Msg["LABEL_STRING_COMPARE"]="String Compare";
Blockly.Msg["LABEL_SENSOR"]="Sensor";
Blockly.Msg["LABEL_INTERNAL_RTC"]="Internal RTC";
Blockly.Msg["LABEL_TASK"]="Task";
Blockly.Msg["LABEL_LOW_POWER_MODE"]="Low Power Mode";



Blockly.Msg["CONTROLS_FOREVER"] = "Loop %1 %2";
Blockly.Msg["CONTROLS_WAIT_TIME"] = "Wait %1 Seconds";
Blockly.Msg["CONTROLS_WAIT_UNTIL"] = "Wait until %1";
Blockly.Msg["MATH_RANDOM_SEED"] = "Random Seed";

Blockly.Msg["map_func"] = "Map Value %1 from Min %2 from Max %3 to Min %4 to Max %5";
Blockly.Msg["pin_digital_write"]="digital write %1 to pin %2";
Blockly.Msg["pin_digital_read"]="digital read pin %1 pull-up: %2";
Blockly.Msg["pin_touch_read"]="touch read pin %1";
Blockly.Msg["pin_analog_read"]="analog read pin %1";
Blockly.Msg["pin_analog_write"]="PWM write %1 to pin %2";

Blockly.Msg["dht_read"]="%1 pin %2 read %3";
Blockly.Msg["temp"]="Temperature";
Blockly.Msg["humd"]="Humidity";
Blockly.Msg["dht_read_variable"]= "%1 pin %2 read value to temp_var : %3  humi_var: %4";
Blockly.Msg["ds18x20_read"]="DS18x20 pin %1 read temperature";
Blockly.Msg["time_read"]="Get Time(sec)";
Blockly.Msg["time_read_ms"]= "Get Time(ms)";
Blockly.Msg["s_timer"]="Set timer %1 period(ms) %2  %3  %4";
Blockly.Msg["conv_string"]="Bytes %1 decode to UTF-8";
Blockly.Msg["tempsensor_read"]="Internal IC temperature °C read";
Blockly.Msg["hallsensor_read"]="Internal hall seneor read";


Blockly.Msg["send_into_source"]="send %1 to dashboard via %2";
Blockly.Msg["print"]="print %1 to terminal";
Blockly.Msg["rtc_set_time"]="RTC set date and time %1 Hour: %2 Min: %3 Second: %4 Day: %5 Month: %6 Year: %7";
Blockly.Msg["rtc_get_hour"]="RTC get Hour";
Blockly.Msg["rtc_get_min"]="RTC get Min";
Blockly.Msg["rtc_get_sec"]="RTC get Second";
Blockly.Msg["rtc_get_day"]= "RTC get Day";
Blockly.Msg["rtc_get_month"]="RTC get Month";
Blockly.Msg["rtc_get_year"]="RTC get Year";
Blockly.Msg["rtc_get_microsecond"]="RTC get Microsecond";
Blockly.Msg["rtc_sync_ntp"]="RTC sync from NTP";
Blockly.Msg["light_sleep"]="light sleep %1 seconds";
Blockly.Msg["deep_sleep"]="deep sleep %1 seconds";
Blockly.Msg["is_woke_from_deep_sleep"]="is woke from deep sleep ?";
Blockly.Msg["board_reset"]= "hard reset";
Blockly.Msg["run_in_background"]="run in background %1 %2";







// blocks_ble
Blockly.Msg["blocks_ble"] = "BLE_HID";
Blockly.Msg["ble_device_name"] = "BLE UART Device_Name : %1";
Blockly.Msg["ble_on_receive"] = "BLE_UART on receive %1 %2";
Blockly.Msg["ble_send_text"] = "BLE UART Send Text: %1 With %2 CR %3 LF";
Blockly.Msg["ble_get_data"] = "BLE UART Get Data";
Blockly.Msg["string_decode"] = "Get V7RC_Code: %1 Decode [%2:%3]";
// blocks_ble_kd
Blockly.Msg["blocks_uart"] = "BLE_UART";
Blockly.Msg["ble_hid_keypad_name"] = "BLE HID KeyPad_Name : %1 Led_Pin : %2";
Blockly.Msg["ble_hid_sendcmd"] = "KeyPad Send_Cmd || mod : %1  code : %2";
Blockly.Msg["ble_hid_sendstring"] = "KeyPad Send_string: %1 ";
Blockly.Msg["ble_hid_sendaction"] = "KeyPad Send_Action: %1 ";
Blockly.Msg["button_read"] = "Button read at pin %1";
// blocks_blynk
Blockly.Msg["blynk_iot"] = "Blynk-IoT";
Blockly.Msg["blynk_setup"] = "Blynk setup %1 Auth Token: %2 debug: %3";
Blockly.Msg["blynk_on_vw"] = "Blynk on Virtual pin %1 write %2 %3";
Blockly.Msg["blynk_on_vr"] = "Blynk on Virtual pin %1 read %2 %3";
Blockly.Msg["blynk_write"] = "Blynk write %1 to Virtual pin %2";
Blockly.Msg["blynk_get_value_number"] = "Blynk get value as number";
Blockly.Msg["blynk_get_value_string"] = "Blynk get value as text";
Blockly.Msg["blynk_loop"] = "Blynk run loop";
Blockly.Msg["blynk_run"] = "Blynk run";
// blocks_bmp280
Blockly.Msg["bmp280"] = "BMP280";
Blockly.Msg["bmp280_read_pressure"] = "BMP280 pressure (hPa)";
Blockly.Msg["bmp280_read_temperature"] = "BMP280 temperature (°C)";
Blockly.Msg["bmp280_read_altitude"] = "BMP280 altitude (m) (sea level=  %1 hPa)";
// blocks_buzzer
Blockly.Msg["music"] = "Music";
Blockly.Msg["tone1"] = "Buzzer pin %1 frequency %2 beep %3 seconds";
Blockly.Msg["tone2"] = "Buzzer pin %1 frequency %2 beep";
Blockly.Msg["no_tone"] = "Buzzer pin %1 stop beep";
Blockly.Msg["play_rtttl"] = "Play pin %1 RTTTL %2";
Blockly.Msg["play_song"] = "Play pin %1 SongName: %2";
// blocks_dfplayer
Blockly.Msg["DFPlayer_mini"] = "DFPlayer Mini";
Blockly.Msg["DFPlayer_mini_setup"] = "DFPlayer-mini Module's RX Connect with pin: %1  TX Connect with pin: %2";
Blockly.Msg["DFPlayer_mini_volume_level"] = "DFPlayer-mini Volume_Level(0-30): %1";
Blockly.Msg["DFPlayer_mini_play_id"] = "DFPlayer-mini Play(track_id): %1";
Blockly.Msg["DFPlayer_mini_play_fadeout"] = "DFPlayer-mini Play_fadeout(ms): %1";
Blockly.Msg["DFPlayer_mini_play_mode"] = "DFPlayer-mini Play_mode: %1";
Blockly.Msg["DFPlayer_mini_mod_mode_type"] = "DFPlayer-mini Module_mode: %1";

//blocks_dhtxx
Blockly.Msg["dhtxx"] = "DHT";
Blockly.Msg["dhtxx_read"]= "%1 pin %2 read %3";
Blockly.Msg["ttemp"]="Temperature";
Blockly.Msg["hhumd"]="Humidity";

// blocks_espnow
Blockly.Msg["esp_now"] = "ESP-NOW";
Blockly.Msg["esp_now_send"] = "ESP-NOW send  %1";
Blockly.Msg["esp_now_send_to"] = "ESP-NOW send  %1 to %2";
Blockly.Msg["esp_now_is_ready_read"] = "ESP-NOW is ready to read ?";
Blockly.Msg["esp_now_read_as_text"] = "ESP-NOW read as text";
Blockly.Msg["esp_now_read_as_number"] = "ESP-NOW read as number";
Blockly.Msg["esp_now_get_my_mac"] = "ESP-NOW get my MAC address";
Blockly.Msg["esp_now_get_sender_mac"] = "ESP-NOW get sender MAC address";
// blocks_firebase
Blockly.Msg["firebase"] = "Firebase Realtime Database";
Blockly.Msg["firebase_config"] = "Firebase config %1 Database URL: %2 API-Key: %3";
Blockly.Msg["firebase_patch"] = "Firebase Patch ID %1 path %2 data %3";
Blockly.Msg["firebase_get"] = "Firebase get from %1";
Blockly.Msg["firebase_set"] = "Firebase  %1 set to %2";
Blockly.Msg["firebase_push"] = "Firebase  %1 push %2";
Blockly.Msg["firebase_delete"] = "Firebase  %1 delete";
// blocks_hcsr04
Blockly.Msg["ultrasonic"] = "Ultrasonic";
Blockly.Msg["ultrasonic_read"] = "Ultrasonic trig pin: %1 echo pin: %2 read distance (cm)";
// blocks_http
Blockly.Msg["http_name"] = "HTTP_GET";
Blockly.Msg["http_get"] = "HTTP Get Full URL: %1 ";
Blockly.Msg["openweather_connect"] = "OpenWeather Connect %1 Url %2 City %3 API Key %4";
Blockly.Msg["ubidots_post"] = "Send data to ubidots %1 Url %2 Device_lable %3 Token %4 Variable1 %5 value1 %6 Variable2 %7 value2 %8 Variable3 %9 value3 %10";
Blockly.Msg["thingspeak_write"] = "Send data to Thingspeak %1 API_Key %2 field1 %3 field2 %4 field3 %5 field4 %6 field5 %7 field6 %8 field7 %9 field8 %10";
Blockly.Msg["http_get_status_code"] = "HTTP get response status code";
Blockly.Msg["http_get_data_text"] = "HTTP get response data as text";
Blockly.Msg["http_get_data_number"] = "HTTP get response data as number";
Blockly.Msg["http_is_ok"] = "HTTP response is OK ?";
// blocks_json
Blockly.Msg["ujson"] = "JSON_Tool";
Blockly.Msg["ujson_get"] = "Get JSON Text: %1 JSON Type: %2 ";
Blockly.Msg["ujson_get_newsapi"] = "Get NewsApi Title data : %1 Title index %2 ";
// blocks_l9110
Blockly.Msg["motor"] = "L9110";
Blockly.Msg["motor_left_set"] = "left wheel motor pin : IN1 at:%1 || IN2 at:%2";
Blockly.Msg["motor_right_set"] = "right wheel motor pin : IN1 at:%1 || IN2 at:%2";
Blockly.Msg["motor_wheel"] = "left wheel turns at power %1 %% || right wheel turns at power %2 %%";
Blockly.Msg["motor_move"] = "%1";
Blockly.Msg["motor_stop"] = "stop moving";
Blockly.Msg["move_forward"]="move forward";
Blockly.Msg["move_backward"]="move backward";
Blockly.Msg["turn_left"]="turn left";
Blockly.Msg["turn_right"]="turn right";


// blocks_line
Blockly.Msg["line"] = "LINE Notify";
Blockly.Msg["linenotify"] = "LINE Notify send %1 Token: %2 Message1: %3 Message2: %4 Message3: %5 Message4: %6 Message5: %7 Message6: %8 ";
Blockly.Msg["iftttlinenotify"] = "IFTTT Notify send %1 Event: %2 Webhook Key: %3 Line-1: %4 Line-2: %5 Line-3: %6";
// blocks_mlx90614
Blockly.Msg["max90614"] = "MLX90614";
Blockly.Msg["max90614_addr"] = "max90614 device address %1";
Blockly.Msg["max90614_object_temp"] = "object temperature (°C)";
Blockly.Msg["max90614_ambient_temp"] = "ambient temperature (°C)";
// blocks_mpu6050
Blockly.Msg["mpu6050"] = "MPU6050";
Blockly.Msg["mpu6050_init"] = "MPU6050 setup with address %1";
Blockly.Msg["mpu6050_update"] = "MPU6050 update data";
Blockly.Msg["mpu6050_get_acc"] = "MPU6050 get acceleration %1";
Blockly.Msg["mpu6050_get_gyro"] = "MPU6050 get gyro %1";
Blockly.Msg["mpu6050_get_temp"] = "MPU6050 get temperature";
// blocks_mqtt
Blockly.Msg["mqtt"] = "MQTT";
Blockly.Msg["mqtt_connect"] = "MQTT Connect %1 Host %2 Port %3 Client Id %4 Username %5 Password %6";
Blockly.Msg["mqtt_publish"] = "MQTT Publish  topic : %1   data: %2";
Blockly.Msg["mqtt_on_receive"] = "MQTT on receive %1 %2";
Blockly.Msg["mqtt_subscribe"] = "MQTT Subscribe topic : %1";
Blockly.Msg["mqtt_get_topic"] = "MQTT get receive topic";
Blockly.Msg["mqtt_get_number"] = "MQTT get receive number";
Blockly.Msg["mqtt_get_text"] = "MQTT get receive text";
Blockly.Msg["mqtt_check_msg"] = "MQTT check message";
// blocks_neopixel
Blockly.Msg["neopixel"] = "NeoPixel";
Blockly.Msg["neopixel_setup"] = "NeoPixel setup pin: %1 lenght: %2";
Blockly.Msg["neopixel_set_color1"] = "NeoPixel number %1 set color %2";
Blockly.Msg["neopixel_set_color2"] = "NeoPixel number %1 set color Red: %2 Green: %3 Blue: %4";
Blockly.Msg["neopixel_fill_color1"] = "NeoPixel fill color %1";
Blockly.Msg["neopixel_fill_color2"] = "NeoPixel fill color Red: %1 Green: %2 Blue: %3";
Blockly.Msg["neopixel_show"] = "NeoPixel show";
Blockly.Msg["neopixel_clear"] = "NeoPixel clear";
Blockly.Msg["neopixel_rainbow"] = "NeoPixel rainbow with wait %1 ms";
Blockly.Msg["neopixel_set_brightness"] = "NeoPixel set brightness %1 %%";
// blocks_oled
Blockly.Msg["oled"] = "OLED";
Blockly.Msg["oled_init"] = "OLED initial with size %1";
Blockly.Msg["oled_soft_init"] = "OLED size %1 %2 Soft_SCL_pin at %3 Soft_SDA_pin at %4";
Blockly.Msg["oled_rotate"] = "OLED Screen set rotate at %1 ";
Blockly.Msg["oled_draw_text"] = "OLED draw text %1 at (x: %2 , y: %3 )";
Blockly.Msg["oled_draw_big5_text"] = "OLED draw 中文 text %1 at (x: %2 , y: %3 )";
Blockly.Msg["oled_draw_big_num"] = "OLED draw Big_Number %1 at (x: %2 , y: %3 )";
Blockly.Msg["oled_draw_png"] = "OLED show image %1 %2 at (x: %3 , y: %4)";
Blockly.Msg["oled_draw_line"] = "OLED draw line start at (x: %1 , y: %2 ) end at (x: %3 , y: %4 )";
Blockly.Msg["oled_draw_rect"] = "OLED draw rectangle start at (x: %1 , y: %2 ) width: %3 height: %4 fill: %5";
Blockly.Msg["oled_fill"] = "OLED fill";
Blockly.Msg["oled_clear"] = "OLED clear";
Blockly.Msg["oled_show"] = "OLED show";
// blocks_servo
Blockly.Msg["servo_name"] = "Servo";
Blockly.Msg["servo"] = "Servo pin %1 set angle %2 °";
// blocks_switch
Blockly.Msg["switch1"] = "Switch";
Blockly.Msg["S1_pin"] = "S1 pin at %1";
Blockly.Msg["S2_pin"] = "S2 pin at %1";
Blockly.Msg["switch_is_press"] = "switch %1 is press ?";
Blockly.Msg["switch_is_release"] = "switch %1 is release ?";
Blockly.Msg["switch_get_value"] = "switch %1 get value";
Blockly.Msg["switch_on_press"] = "switch %1 on press %2 %3";
Blockly.Msg["switch_on_release"] = "switch %1 on release %2 %3";
Blockly.Msg["switch_on_pressed"] = "switch %1 on pressed %2 %3";
//
Blockly.Msg["s_cmd_from_tm"]="Get serial cmd from TM Model";
Blockly.Msg["clear_buffer"]="Clear serial buffer";


// blocks_typecast
Blockly.Msg["typecast"] = "TypeCast_Tool";
Blockly.Msg["number_cast"] = "String: %1 convert to Number under Base: %2";
Blockly.Msg["string_cast"] = "Number: %1 convert to String";
Blockly.Msg["bytes_cast"] = "String: %1 convert to bytes";
// blocks_udp
Blockly.Msg["udp_server"] = "UDP_Server";
Blockly.Msg["udp_server_device"] = "UDP Server Device_IP : %1 Port : %2";
Blockly.Msg["udp_on_receive"] = "UDP Server on receive %1 %2";
Blockly.Msg["udp_rec_msg"] = "UDP Server Receive Msg";
// Blockly.Msg["string_decode"] = "Get V7RC_Code: %1 Decode [%2:%3]";
// blocks_wifi
Blockly.Msg["wifi_name"] = "WiFi";
Blockly.Msg["wifi_connect"] = "WiFi Connect  SSID: %1 Password: %2";
Blockly.Msg["wifi_ap_connect"] = "WiFi AP Setup SSID: %1 Password: %2";
Blockly.Msg["wifi_is_connected"] = "WiFi is connected";
Blockly.Msg["networkconfig_start"] = "NetWorkConfig Start";
Blockly.Msg["ap_inactive"] = "AP_InActive";
Blockly.Msg["wifi_ifconfig"] = "Get wifi_ifconfig";
Blockly.Msg["wifi_wait_connected"] = "WiFi wait connected";
