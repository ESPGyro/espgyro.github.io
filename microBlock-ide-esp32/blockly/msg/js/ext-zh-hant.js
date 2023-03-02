// This file created by Mason 

'use strict';

Blockly.Msg["Blocks_Basic"]="基本";
Blockly.Msg["Blocks_Control"]="控制";
Blockly.Msg["Blocks_Operators"]="操作";
Blockly.Msg["Blocks_Variables"]="變數";
Blockly.Msg["Blocks_Function"]="函式";
Blockly.Msg["Blocks_Advanced"]="進階";

Blockly.Msg["LABEL_BLINK_CODE"]="Gyro 擴充板內建 LED 閃爍範例";
Blockly.Msg["LABEL_MATH"]="數學";
Blockly.Msg["LABEL_LOGIC"]="邏輯";
Blockly.Msg["LABEL_TEXT"]="字串";
Blockly.Msg["LABEL_DASHBOARD"]="儀表板(DashBoard)";
Blockly.Msg["LABEL_DEBUG"]="除錯";
Blockly.Msg["LABEL_TIMER"]="定時器";
Blockly.Msg["LABEL_STRING_COMPARE"]="字串比較";
Blockly.Msg["LABEL_SENSOR"]="感測器";
Blockly.Msg["LABEL_INTERNAL_RTC"]="內置即時時鐘(RTC)";
Blockly.Msg["LABEL_TASK"]="任務";
Blockly.Msg["LABEL_LOW_POWER_MODE"]="低功耗模式";


Blockly.Msg["CONTROLS_FOREVER"] = "迴圈 %1 %2";
Blockly.Msg["CONTROLS_WAIT_TIME"] = "等待 %1 秒";
Blockly.Msg["CONTROLS_WAIT_UNTIL"] = "等待直到 %1";
Blockly.Msg["MATH_RANDOM_SEED"] = "隨機亂數";
Blockly.Msg["CONTROLS_REPEAT_TITLE"] = "重複 %1 次";


Blockly.Msg["map_func"]= "對應 %1 從低 %2 至高 %3 至低 %4 至高 %5";
Blockly.Msg["pin_digital_write"]="數位寫入值 %1 至腳位 %2";
Blockly.Msg["pin_digital_read"]="讀取數位值於腳位 %1 上拉電阻: %2";
Blockly.Msg["pin_touch_read"]="讀取電容觸摸按鍵值於腳位 %1";
Blockly.Msg["pin_analog_read"]="讀取類比值於腳位 %1";
Blockly.Msg["pin_analog_write"]="PWM寫入值 %1 至腳位 %2";

Blockly.Msg["dht_read"]="%1 接於腳位 %2 讀取 %3 的數值";
Blockly.Msg["temp"]="溫度";
Blockly.Msg["humd"]="濕度";
Blockly.Msg["dht_read_variable"]= "%1 接於腳位 %2 讀取的數據值置於 temp_var : %3  humi_var: %4";
Blockly.Msg["ds18x20_read"]="DS18x20 接於腳位 %1 讀取溫度的數值";
Blockly.Msg["time_read"]="Get Time(秒)";
Blockly.Msg["time_read_ms"]= "Get Time(毫秒)";
Blockly.Msg["s_timer"]="設定 定時器編號 %1 時間間隔(毫秒) %2  %3  %4";
Blockly.Msg["conv_string"]="Bytes格式 %1 解碼為 UTF-8格式";
Blockly.Msg["tempsensor_read"]="內置 IC 溫度 °C 的讀取值";
Blockly.Msg["hallsensor_read"]="內置霍爾感測器的讀取值";

Blockly.Msg["send_into_source"]="傳送 %1 至 儀表板 經由 %2";
Blockly.Msg["print"]="輸出 %1 至終端機(Terminal)";
Blockly.Msg["rtc_set_time"]=" 設定 RTC 日期與時間 %1 時: %2 分: %3 秒: %4 日: %5 月: %6 年: %7";
Blockly.Msg["rtc_get_hour"]="查詢RTC目前的時數";
Blockly.Msg["rtc_get_min"]="查詢RTC目前的分數";
Blockly.Msg["rtc_get_sec"]="查詢RTC目前的秒數";
Blockly.Msg["rtc_get_day"]= "查詢RTC目前的日期";
Blockly.Msg["rtc_get_month"]="查詢RTC目前的月份";
Blockly.Msg["rtc_get_year"]="查詢RTC目前的年份";
Blockly.Msg["rtc_get_microsecond"]="查詢RTC目前的毫秒數";
Blockly.Msg["rtc_sync_ntp"]="RTC經由NTP伺服器同步校正時間";
Blockly.Msg["light_sleep"]="進入輕度睡眠模式 %1 秒";
Blockly.Msg["deep_sleep"]="進入深度睡眠模式 %1 秒";
Blockly.Msg["is_woke_from_deep_sleep"]="是否自深度睡眠中被喚醒?";
Blockly.Msg["board_reset"]= "硬體重置";
Blockly.Msg["run_in_background"]="在背景中執行 %1 %2";


// blocks_ble
Blockly.Msg["blocks_ble"] = "藍牙HID";
Blockly.Msg["ble_device_name"] = "藍牙 UART 裝置名稱 : %1";
Blockly.Msg["ble_on_receive"] = "藍牙_UART 接收端 %1 %2";
Blockly.Msg["ble_send_text"] = "藍牙 UART 發送文字: %1 With %2 CR %3 LF";
Blockly.Msg["ble_get_data"] = "藍牙 UART 取得資料";
Blockly.Msg["string_decode"] = "取得 V7RC_Code: %1 解碼 [%2:%3]";
// blocks_ble_kd
Blockly.Msg["blocks_uart"] = "藍牙UART";
Blockly.Msg["ble_hid_keypad_name"] = "BLE HID KeyPad_Name : %1 Led_Pin : %2";
Blockly.Msg["ble_hid_sendcmd"] = "KeyPad Send_Cmd || mod : %1  code : %2";
Blockly.Msg["ble_hid_sendstring"] = "KeyPad Send_string: %1 ";
Blockly.Msg["ble_hid_sendaction"] = "KeyPad Send_Action: %1 ";
Blockly.Msg["button_read"] = "Button read at pin %1";
// blocks_blynk
Blockly.Msg["blynk_iot"] = "Blynk-物聯網";
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
Blockly.Msg["music"] = "蜂鳴器";
Blockly.Msg["tone1"] = "蜂鳴器 腳位 %1 頻率 %2 嗶嗶聲 持續 %3 秒";
Blockly.Msg["tone2"] = "蜂鳴器 腳位 %1 頻率 %2 持續嗶嗶聲";
Blockly.Msg["no_tone"] = "蜂鳴器 腳位 %1 停止嗶嗶聲";
Blockly.Msg["play_rtttl"] = "播放 腳位 %1 RTTTL格式鈴聲內容: %2";
Blockly.Msg["play_song"] = "播放 腳位 %1 音樂檔名: %2";

// blocks_dfplayer
Blockly.Msg["DFPlayer_mini"] = "MP3 播放";
Blockly.Msg["DFPlayer_mini_setup"] = "DFPlayer-mini的RX 連接至 腳位: %1  TX 連接至 腳位: %2";
Blockly.Msg["DFPlayer_mini_volume_level"] = "DFPlayer-mini 設定音量大小(0-30): %1";
Blockly.Msg["DFPlayer_mini_play_id"] = "DFPlayer-mini 播放(曲目_編號): %1";
Blockly.Msg["DFPlayer_mini_play_fadeout"] = "DFPlayer-mini 播放_淡出設定(ms): %1";
Blockly.Msg["DFPlayer_mini_play_mode"] = "DFPlayer-mini 播放_模式: %1";
Blockly.Msg["DFPlayer_mini_mod_mode_type"] = "DFPlayer-mini 模組_模式: %1";

//blocks_dhtxx
Blockly.Msg["dhtxx"] = "溫濕度計";
Blockly.Msg["dhtxx_read"]= "%1 接於腳位 %2 讀取 %3 的數值";
Blockly.Msg["ttemp"]="溫度";
Blockly.Msg["hhumd"]="濕度";

// blocks_espnow
Blockly.Msg["esp_now"] = "無線傳輸";
Blockly.Msg["esp_now_send"] = "ESP-NOW 本機傳送數據 %1";
Blockly.Msg["esp_now_send_to"] = "ESP-NOW 本機傳送數據 %1 到另一片(接收端)裝置的 MAC 位址 %2";
Blockly.Msg["esp_now_is_ready_read"] = "ESP-NOW 本機是否準備好接收數據?";
Blockly.Msg["esp_now_read_as_text"] = "ESP-NOW 本機所接收到的數據值轉為字串型別";
Blockly.Msg["esp_now_read_as_number"] = "ESP-NOW 本機所接收到的數據值轉為數字型別";
Blockly.Msg["esp_now_get_my_mac"] = "ESP-NOW 查詢本機裝置的 MAC 位址";
Blockly.Msg["esp_now_get_sender_mac"] = "ESP-NOW 查詢他機(傳送端)裝置的 MAC 位址";

// blocks_firebase
Blockly.Msg["firebase"] = "Firebase Realtime Database";
Blockly.Msg["firebase_config"] = "Firebase config %1 Database URL: %2 API-Key: %3";
Blockly.Msg["firebase_patch"] = "Firebase Patch ID %1 path %2 data %3";
Blockly.Msg["firebase_get"] = "Firebase get from %1";
Blockly.Msg["firebase_set"] = "Firebase  %1 set to %2";
Blockly.Msg["firebase_push"] = "Firebase  %1 push %2";
Blockly.Msg["firebase_delete"] = "Firebase  %1 delete";

// blocks_hcsr04
Blockly.Msg["ultrasonic"] = "超音波模組";
Blockly.Msg["ultrasonic_read"] = "超音波的 Trig 腳位: %1 Echo 腳位: %2  讀取測距(單位:cm)";

// blocks_http
Blockly.Msg["http_name"] = "HTTP_GET";
Blockly.Msg["http_get"] = "執行HTTP GET請求 被訪問網頁的URL: %1 ";
Blockly.Msg["openweather_connect"] = "設定 OpenWeatherMap 網站 %1 URL_網址 %2 城市_名稱 %3 帳號_API_Key %4";
Blockly.Msg["ubidots_post"] = "上傳數據至 Ubidots IoT平台 %1 URL_網址 %2 裝置_標籤 %3 帳號_API_Key %4 變數1_名稱 %5 變數1_資料 %6 變數2_名稱 %7 變數2_資料 %8 變數3_名稱 %9 變數3_資料 %10";
Blockly.Msg["thingspeak_write"] = "上傳數據至 Thingspeak IoT平台 %1 帳號_API_Key %2 欄位1_名稱 %3 欄位2_名稱 %4 欄位3_名稱 %5 欄位4_名稱 %6 欄位5_名稱 %7 欄位6_名稱 %8 欄位7_名稱 %9 欄位8_名稱 %10";
Blockly.Msg["http_get_status_code"] = "執行HTTP GET請求 所回應的狀態碼";
Blockly.Msg["http_get_data_text"] = "執行HTTP GET請求 所讀得字串型別的回應資料值";
Blockly.Msg["http_get_data_number"] = "執行HTTP GET請求 所讀得數字型別的回應資料值";
Blockly.Msg["http_is_ok"] = "執行HTTP GET請求 所回應的狀態說明是OK嗎?";

// blocks_json
Blockly.Msg["ujson"] = "JSON 格式";
Blockly.Msg["ujson_get"] = "查詢 JSON Text(資料來源): %1中JSON Type(欄位): %2 ";
Blockly.Msg["ujson_get_newsapi"] = "查詢 NewsApi Title data(資料): %1 Title index(索引): %2 ";
// blocks_l9110
Blockly.Msg["motor"] = "馬達驅動";
Blockly.Msg["motor_left_set"]   = "設定左輪馬達驅動腳位 : IN1 接於:%1 || IN2 接於:%2";
Blockly.Msg["motor_right_set"] = "設定右輪馬達驅動腳位 : IN1 接於:%1 || IN2 接於:%2";
Blockly.Msg["motor_wheel"] = "設定左輪馬達輸出功率 %1 %% || 右輪馬達輸出功率 %2 %%";
Blockly.Msg["motor_move"] = "%1";
Blockly.Msg["motor_stop"] = "停止移動";
Blockly.Msg["move_forward"]="向前移動";
Blockly.Msg["move_backward"]="向後移動";
Blockly.Msg["turn_left"]="向左移動";
Blockly.Msg["turn_right"]="向右移動";
// blocks_line
Blockly.Msg["line"] = "LINE 通知";
Blockly.Msg["linenotify"] = "LINE Notify 傳送 %1 Token(權杖密碼): %2 訊息1: %3 訊息2: %4 訊息3: %5 訊息4: %6 訊息5: %7 訊息6: %8 ";
Blockly.Msg["iftttlinenotify"] = "IFTTT Notify 傳送 %1 Event(事件名稱): %2 Webhook Key(授權碼): %3 Line-1: %4 Line-2: %5 Line-3: %6";
// blocks_mlx90614
Blockly.Msg["max90614"] = "溫度感測器";
Blockly.Msg["max90614_addr"] = "設定 MAX90614 裝置位址 %1";
Blockly.Msg["max90614_object_temp"] = "讀取偵測物體的溫度(°C)";
Blockly.Msg["max90614_ambient_temp"] = "讀取環境的溫度(°C)";
// blocks_mpu6050
Blockly.Msg["mpu6050"] = "MPU6050 陀螺儀";
Blockly.Msg["mpu6050_init"] = "MPU6050 setup with address %1";
Blockly.Msg["mpu6050_update"] = "MPU6050 update data";
Blockly.Msg["mpu6050_get_acc"] = "MPU6050 get acceleration %1";
Blockly.Msg["mpu6050_get_gyro"] = "MPU6050 get gyro %1";
Blockly.Msg["mpu6050_get_temp"] = "MPU6050 get temperature";
// blocks_mqtt
Blockly.Msg["mqtt"] = "MQTT";
Blockly.Msg["mqtt_connect"] = "MQTT連線至 %1 代理伺服器網址 %2 通訊埠 %3 用戶識別的 Id %4 使用者名稱 %5 密碼 %6";
Blockly.Msg["mqtt_publish"] = "MQTT 發布主題名稱: %1  訊息: %2";
Blockly.Msg["mqtt_on_receive"] = "當MQTT 接收到訊息時 %1 %2";
Blockly.Msg["mqtt_subscribe"] = "MQTT 訂閱主題名稱 : %1";
Blockly.Msg["mqtt_get_topic"] = "MQTT 接收到主題名稱";
Blockly.Msg["mqtt_get_number"] = "MQTT 接收到數字型訊息";
Blockly.Msg["mqtt_get_text"] = "MQTT 接收到字串型訊息";
Blockly.Msg["mqtt_check_msg"] = "MQTT 持續檢查是否有新的訊息";
// blocks_neopixel
Blockly.Msg["neopixel"] = "燈條模組";
Blockly.Msg["neopixel_setup"] = "NeoPixel燈條設置 腳位: %1 長度(燈數): %2";
Blockly.Msg["neopixel_set_color1"] = "NeoPixel燈條 燈號 %1 設置顏色 %2";
Blockly.Msg["neopixel_set_color2"] = "NeoPixel燈條 燈號 %1 設置顏色 Red: %2 Green: %3 Blue: %4";
Blockly.Msg["neopixel_fill_color1"] = "NeoPixel燈條 全數設置填滿顏色 %1";
Blockly.Msg["neopixel_fill_color2"] = "NeoPixel燈條 全數設置填滿顏色 Red: %1 Green: %2 Blue: %3";
Blockly.Msg["neopixel_show"] = "顯示NeoPixel燈條設置";
Blockly.Msg["neopixel_clear"] = "清除NeoPixel燈條設置";
Blockly.Msg["neopixel_rainbow"] = "NeoPixel燈條 顯示Rainbow圖案 持續 %1 ms";
Blockly.Msg["neopixel_set_brightness"] = "NeoPixel燈條 設置亮度 %1 %%";
// blocks_oled
Blockly.Msg["oled"] = "OLED 模組";
Blockly.Msg["oled_init"] = "OLED面板設置解析度(寬X高) %1";
Blockly.Msg["oled_soft_init"] = "OLED 面板設置解析度(寬X高) %1 %2 Soft_SCL 腳位 %3 Soft_SDA 腳位 %4";
Blockly.Msg["oled_rotate"] = "OLED 螢幕顯示旋轉設定 %1 ";
Blockly.Msg["oled_draw_text"] = "OLED 顯示英文及數字 %1 在 (x: %2 , y: %3 )處";
Blockly.Msg["oled_draw_big5_text"] = "OLED 顯示中文文字 %1 在 (x: %2 , y: %3 )處";
Blockly.Msg["oled_draw_big_num"] = "OLED 顯示大型數字 %1 在 (x: %2 , y: %3 )處";
Blockly.Msg["oled_draw_png"] = "OLED 顯示圖像 %1 %2 在 (x: %3 , y: %4)處";
Blockly.Msg["oled_draw_line"] = "OLED 顯示直線線段 從 (x: %1 , y: %2 ) 到 (x: %3 , y: %4 )";
Blockly.Msg["oled_draw_rect"] = "OLED 顯示矩線框線 從 (x: %1 , y: %2 ) 寬度: %3 高度: %4 填滿: %5";
Blockly.Msg["oled_fill"] = "填滿OLED螢幕像素";
Blockly.Msg["oled_clear"] = "清除OLED螢幕像素";
Blockly.Msg["oled_show"] = "顯示OLED螢幕設置";
// blocks_servo
Blockly.Msg["servo_name"] = "伺服馬達";
Blockly.Msg["servo"] = "Servo 腳位 %1 設定角度 %2 °";
// blocks_switch
Blockly.Msg["switch1"] = "按鈕";
Blockly.Msg["S1_pin"] = "S1 腳位 %1";
Blockly.Msg["S2_pin"] = "S2 腳位 %1";
Blockly.Msg["switch_is_press"] = "檢查 switch %1 按鈕是否按下?";
Blockly.Msg["switch_is_release"] = "檢查 switch %1 按鈕是否彈起?";
Blockly.Msg["switch_get_value"] = "讀取 switch %1 按鈕值";
Blockly.Msg["switch_on_press"] = "當 switch %1 按鈕按下時 %2 %3";
Blockly.Msg["switch_on_release"] = "當 switch %1 按鈕彈起時 %2 %3";
//Blockly.Msg["switch_on_pressed"] = "switch %1 on pressed %2 %3";

//
Blockly.Msg["s_cmd_from_tm"]="讀取來自 tm2usb 工具的回傳值(串列通訊指令) ";
Blockly.Msg["clear_buffer"]="清除serial(串列通訊)緩衝區資料";


// blocks_typecast
Blockly.Msg["typecast"] = "字串轉換";
Blockly.Msg["number_cast"] = "字串: %1 轉換成數字以: %2 進位格式輸出";
Blockly.Msg["string_cast"] = "數字: %1 轉換成字串";
Blockly.Msg["bytes_cast"] = "字串: %1 轉換成bytes";
// blocks_udp
Blockly.Msg["udp_server"] = "UDP_Server";
Blockly.Msg["udp_server_device"] = "UDP Server Device_IP : %1 Port : %2";
Blockly.Msg["udp_on_receive"] = "UDP Server on receive %1 %2";
Blockly.Msg["udp_rec_msg"] = "UDP Server Receive Msg";
// Blockly.Msg["string_decode"] = "Get V7RC_Code: %1 Decode [%2:%3]";
// blocks_wifi
Blockly.Msg["wifi_name"] = "WiFi 設定";
Blockly.Msg["wifi_connect"] = "啟動WiFi 連到本地無線路由器的SSID(名稱): %1 Password(密碼): %2";
Blockly.Msg["wifi_ap_connect"] = "啟動WiFi AP(熱點模式) 設定其SSID(名稱): %1 Password(密碼): %2";
Blockly.Msg["wifi_is_connected"] = "確認WiFi是否已連上?";
Blockly.Msg["networkconfig_start"] = "啟動NetWorkConfig模式";
Blockly.Msg["ap_inactive"] = "關閉AP(熱點模式)";
Blockly.Msg["wifi_ifconfig"] = "查詢目前WiFi連線相關訊息";
Blockly.Msg["wifi_wait_connected"] = "等待WiFi連線上";
