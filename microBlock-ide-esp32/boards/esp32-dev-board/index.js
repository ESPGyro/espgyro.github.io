addBoard({
    id: "esp32-dev-board",
    name: "ESP32 Dev Board",
    description: "",
    image: "images/cover.png",
    chip: "ESP32",
    script: [ 
         "js/colorpicker.js",
         "js/field_dotmatrix_rgb.js",
         "js/field_bitmap.js",
         "js/field_matrix.js",
          "js/sound.js",
          "js/field_note.js",
    ],
    css: [
         "css/colorpicker.css",
         "css/field_dotmatrix_rgb.css",
         "css/field_bitmap.css",
          "css/field_matrix.css",
          "css/field_note.css",
    ],
    blocks: [
        "blocks/blocks_pin.js",
        "blocks/blocks_advanced.js",

        "blocks/generators_pin.js",
        "blocks/generators_avanced.js"
    ],
    modules: [ ],
   examples: [
        "基本IO模組",
        {
            name: "ex1_點亮 ESP32 內建的 LED",
            files: "examples/ex1_點亮 ESP32 內建的 LED",
        },
        {
            name: "ex2_使用 PWM 來做呼吸燈",
            files: "examples/ex2_使用 PWM 來做呼吸燈",
        },
        {
            name: "ex3_點亮 WS2812 全彩 LED_RGB 輪流點亮",
            files: "examples/ex3_點亮 WS2812 全彩 LED_RGB 輪流點亮",
        },
  //      {
  //          name: "ex4_YGR 紅綠燈模組_循環閃爍",
  //          files: "examples/ex4_YGR 紅綠燈模組_循環閃爍",
  //      },
        {
            name: "ex4_紅綠燈模組_交通號誌運行模擬",
            files: "examples/ex4_紅綠燈模組_交通號誌運行模擬",
        },
        {
            name: "ex5_超音波模組量距離",
            files: "examples/ex5_超音波模組量距離",
        },
        {
            name: "ex6_SSD1306 顯示 Hello",
            files: "examples/ex6_SSD1306 顯示 Hello",
        },
        {
            name: "ex7_左右按鈕_按了就發光",
            files: "examples/ex7_左右按鈕_按了就發光",
        },
        {
            name: "ex8_顯示內建的溫度及霍爾感測值",
            files: "examples/ex8_顯示內建的溫度及霍爾感測值",
        },
        {
            name: "ex9_顯示內建電容感測器值",
            files: "examples/ex9_顯示內建電容感測器值",
        },
        {
            name: "ex10_L9110S 驅動 DC 馬達",
            files: "examples/ex10_L9110S 驅動 DC 馬達",
        },
        {
            name: "ex11_控制伺服馬達_來回轉動",
            files: "examples/ex11_控制伺服馬達_來回轉動",
        },
        {
            name: "ex12_顯示溫溼度值至OLED",
            files: "examples/ex12_顯示溫溼度值至OLED",
        },
        {
            name: "ex13_蜂鳴器播放全家音樂",
            files: "examples/ex13_蜂鳴器播放全家音樂",
        },
        {
            name: "ex14_LCD1602顯示_Hello",
            files: "examples/ex14_LCD1602顯示_Hello",
        },
        {
            name: "ex15_用timer讓 led 閃爍",
            files: "examples/ex15_用timer讓 led 閃爍",
        },
        {
            name: "ex16_用ticks_ms讓 led 閃爍",
            files: "examples/ex16_用ticks_ms讓 led 閃爍",
        },
        {
            name: "ex17_手機 BLE Scanner app 控制 led 燈",
            files: "examples/ex17_手機 BLE Scanner app 控制 led 燈",
        },
        {
            name: "ex18_手機 BLE Scanner app 觀看霍爾感測值",
            files: "examples/ex18_手機 BLE Scanner app 觀看霍爾感測值",
        },
        {
            name: "ex19_V7RC_BLE_控制LED燈",
            files: "examples/ex19_V7RC_BLE_控制LED燈",
        },
   //     {
   //         name: "ex20_V7RC_L9110_WIFI_控制自走車",
   //         files: "examples/ex20_V7RC_L9110_WIFI_控制自走車",
   //     },
        {
            name: "ex21_max7219顯示_0到9",
            files: "examples/ex21_max7219顯示_0到9",
        },
        {
            name: "ex22_UART_接收測試",
            files: "examples/ex22_UART_接收測試",
        },
        {
            name: "ex23_IR紅外線模組測試",
            files: "examples/ex23_IR紅外線模組測試",
        },
        {
            name: "ex24_TM1637_顯示NTP時間",
            files: "examples/ex24_TM1637_顯示NTP時間",
        },
        {
            name: "ex26_語音模組辨識範例",
            files: "examples/ex26_語音辨識模組範例",
        },
        "物聯網範例",
        {
            name: "ex31_抓取網路_NTP時間並顯示在OLED",
            files: "examples/ex31_抓取網路_NTP時間並顯示在OLED",
        },
        {
            name: "ex32_MQTT發佈溫度值",
            files: "examples/ex32_MQTT發佈溫度值",
        },
        {
            name: "ex33_MQTT訂閱後顯示數值",
            files: "examples/ex33_MQTT訂閱後顯示數值",
        },
        {
            name: "ex34_IFTTT_按下按鈕後_通知",
            files: "examples/ex34_IFTTT_按鈕_通知_test",
        },
    ],
   firmware: [
        {
            name: "MicroPython for ESP32 Dev Board V1.6.0",
            path: "firmware/MicroPython.for.ESP32.Dev.Board.V1.6.0.bin",
            version: "V1.6.0",
            date: "2021-1-30",
            board: "ESP32 Dev Board",
            cpu: "ESP32"
        }
    ],
    usb: [
        { // CP2104
            vendorId: "10C4",
            productId: "EA60"
        }
    ],
    autoCompletion: { },
    level: [
        {
            name: "Beginner",
            description: "",
            icon: "/images/puzzle.png",
            blocks: [
                {
                    name: Blockly.Msg.Blocks_Basic,
                    icon: "/images/icon/led.png",
                    color: "#e64c3c",
                    blocks: [
					    "comment_input",
                        "controls_forever",
                        {
                            xml: `
                                <block type="controls_wait">
                                    <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="pin_digital_write">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">12</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="pin_analog_write">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">1023</field>
                                        </shadow>
                                    </value>
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">12</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="pin_digital_read">
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">12</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        "pin_analog_read",	
                        "pin_touch_read",										 
                        {
                            xml: '<label text="%{BKY_LABEL_BLINK_CODE}"></label>',
                        },
                        {
                            xml: `
                                <block type="controls_forever">
                                    <statement name="block">
                                        <block type="pin_digital_write">
                                            <value name="value">
                                                <shadow type="math_number">
                                                    <field name="NUM">1</field>
                                                </shadow>
                                            </value>
                                            <value name="pin">
                                                <shadow type="math_number">
                                                    <field name="NUM">12</field>
                                                </shadow>
                                            </value>
                                            <next>
                                                <block type="controls_wait">
                                                    <value name="time">
                                                        <shadow type="math_number">
                                                            <field name="NUM">1</field>
                                                        </shadow>
                                                    </value>
                                                    <next>
                                                        <block type="pin_digital_write">
                                                            <value name="value">
                                                                <shadow type="math_number">
                                                                    <field name="NUM">0</field>
                                                                </shadow>
                                                            </value>
                                                            <value name="pin">
                                                                <shadow type="math_number">
                                                                    <field name="NUM">12</field>
                                                                </shadow>
                                                            </value>
                                                            <next>
                                                                <block type="controls_wait">
                                                                    <value name="time">
                                                                        <shadow type="math_number">
                                                                            <field name="NUM">1</field>
                                                                        </shadow>
                                                                    </value>
                                                                </block>
                                                            </next>
                                                        </block>
                                                    </next>
                                                </block>
                                            </next>
                                        </block>
                                    </statement>
                                </block>
                            `
                        },
                    ]
                },

                {
                    name: Blockly.Msg.Blocks_Control,
                    icon: `/images/icon/process.png`,
                    color: "#fbbd5e",
                    blocks: [
                        {
                            xml: `
                                <block type="controls_wait">
                                    <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        "controls_forever",
                        {
                            xml: `
                                <block type="controls_repeat_ext">
                                    <value name="TIMES">
                                        <shadow type="math_number">
                                            <field name="NUM">10</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                       {
                            xml: `
                                <block type="controls_for">
                                    <field name="VAR">i</field>
                                    <value name="FROM">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <value name="TO">
                                        <shadow type="math_number">
                                            <field name="NUM">10</field>
                                        </shadow>
                                    </value>
                                    <value name="BY">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                          `
                        },
                        "controls_if",
                        {
                            xml: `
                                <block type="controls_if">
                                    <mutation else="1"></mutation>
                                </block>
                            `
                        },
                        "controls_wait_until",
                        "controls_whileUntil",
                    ]
                },
                {
                    name: Blockly.Msg.Blocks_Operators,
                    icon: `/images/icon/maths.png`,
                    color: "#293939",
                    blocks: [
                        {
                            xml: '<label text="%{BKY_LABEL_MATH}"></label>',
                        },
						"math_number",
                        {
                            xml: `
                                <block type="math_arithmetic">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">ADD</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="math_arithmetic">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">MINUS</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="math_arithmetic">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">MULTIPLY</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="math_arithmetic">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">DIVIDE</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="math_modulo">
                                    <value name="DIVIDEND">
                                        <shadow type="math_number">
                                            <field name="NUM">10</field>
                                        </shadow>
                                    </value>
                                    <value name="DIVISOR">
                                        <shadow type="math_number">
                                            <field name="NUM">2</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        "random_seed",
                      
                        {
                  xml: `
                <block type="map_func">
                    <value name="in-value">
                        <shadow type="math_number">
                            <field name="NUM">128</field>
                        </shadow>
                    </value>
                    <value name="in-min">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="in-max">
                        <shadow type="math_number">
                            <field name="NUM">255</field>
                        </shadow>
                    </value>
                    <value name="out-min">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="out-max">
                        <shadow type="math_number">
                            <field name="NUM">1023</field>
                        </shadow>
                    </value>
                </block>
            `
        },
       
                        {
                            xml: `
                                <block type="math_random_int">
                                    <value name="FROM">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <value name="TO">
                                        <shadow type="math_number">
                                            <field name="NUM">100</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="math_trig">
                                    <value name="NUM">
                                        <shadow type="math_number">
                                            <field name="NUM">45</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="math_round">
                                    <field name="OP">ROUND</field>
                                    <value name="NUM">
                                    <shadow type="math_number">
                                        <field name="NUM">3.1</field>
                                    </shadow>
                                    </value>
                                </block>
                            `
                        },
						{
                            xml: `
                                <block type="math_single">
                                    <field name="OP">ABS</field>
                                    <value name="NUM">
                                    <shadow type="math_number">
                                        <field name="NUM">3.1</field>
                                    </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: '<label text="%{BKY_LABEL_LOGIC}"></label>',
                        },
                        {
                            xml: `
                                <block type="logic_compare">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">5</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">GT</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">5</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="logic_compare">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">5</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">LT</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">5</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="logic_compare">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">5</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">EQ</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">5</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        "logic_operation",
                        "logic_boolean",
                        "logic_negate",
                        {
                            xml: '<label text="%{BKY_LABEL_TEXT}"></label>',
                        },
                        "text",
                        "text_join"
                    ]
                },

                {
                    name:Blockly.Msg.Blocks_Variables,
                    icon: `/images/icon/relativity.png`,
                    color: "#ac5e2e",
                    blocks: "VARIABLE"
                },
                {
                    name:Blockly.Msg.Blocks_Function,
                    icon: `/images/icon/jigsaw.png`,
                    color: "#17A589",
                    blocks: "PROCEDURE"
                },
                {
                    name: Blockly.Msg.Blocks_Advanced,
                    icon: `/images/icon/expert.png`,
                    color: "#8E44AD",
                    blocks: [
                        {
                            xml: '<label text="自訂程式碼區"></label>',
                        },
                        "code_input",
                        {
                            xml: '<label text="%{BKY_LABEL_DASHBOARD}"></label>',
                        },
                        {
                            xml: `
                                <block type="send_into_source">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">33</field>
                                        </shadow>
                                    </value>
                                    <value name="source">
                                        <shadow type="text">
                                            <field name="TEXT">source1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: '<label text="%{BKY_LABEL_DEBUG}"></label>',
                        },
                        {
                            xml: `
                                <block type="print">
                                    <value name="value">
                                        <shadow type="text">
                                            <field name="TEXT">Hello, world!</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        "time_read",
                        "time_read_ms",
                        {
                            xml: '<label text="%{BKY_LABEL_TIMER}"></label>',
                        },
                        {
                            xml: `
                                <block type="s_timer">
                                    <value name="tperiod">
                                        <shadow type="math_number">
                                            <field name="NUM">1000</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: '<label text="%{BKY_LABEL_STRING_COMPARE}"></label>',
                        },
						{
                            xml: `
                                <block type="logic_compare">
                                    <value name="A">
                                        <shadow type="text">
                                            <field name="TEXT">a</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">EQ</field>
                                    <value name="B">
                                        <shadow type="text">
                                            <field name="TEXT">b</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
						{
                            xml: `
                                <block type="conv_string">
                                    <value name="s_byte">
                                        <shadow type="text">
                                            <field name="TEXT">input</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },

                        {
                            xml: '<label text="%{BKY_LABEL_SENSOR}"></label>',
                        },
                        {
                            xml: `
                                <block type="dht_read">
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">4</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="dht_read_variable">
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">4</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="ds18x20_read">
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">4</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        "tempsensor_read",										  
                        "hallsensor_read",										  
                        {
                            xml: '<label text="%{BKY_LABEL_INTERNAL_RTC}"></label>',
                        },
                        {
                            xml: `
                                <block type="rtc_set_time">
                                    <value name="hour">
                                        <shadow type="math_number">
                                            <field name="NUM">16</field>
                                        </shadow>
                                    </value>
                                    <value name="min">
                                        <shadow type="math_number">
                                            <field name="NUM">50</field>
                                        </shadow>
                                    </value>
                                    <value name="sec">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="day">
                                        <shadow type="math_number">
                                            <field name="NUM">22</field>
                                        </shadow>
                                    </value>
                                    <value name="month">
                                        <shadow type="math_number">
                                            <field name="NUM">8</field>
                                        </shadow>
                                    </value>
                                    <value name="year">
                                        <shadow type="math_number">
                                            <field name="NUM">2020</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        "rtc_get_hour",
                        "rtc_get_min",
                        "rtc_get_sec",
                        "rtc_get_microsecond",
                        "rtc_get_day",
                        "rtc_get_month",
                        "rtc_get_year",
                        "rtc_sync_ntp",
                        {
                            xml: '<label text="%{BKY_LABEL_TASK}"></label>',
                        },
                        "run_in_background",
                        {
                            xml: '<label text="%{BKY_LABEL_LOW_POWER_MODE}"></label>',
                        },
                        {
                            xml: `
                                <block type="light_sleep">
                                    <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">10</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="deep_sleep">
                                    <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">10</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        "is_woke_from_deep_sleep",
                        "board_reset"
                    ]
                },
////////////////////////////////////////////////////////////////
                {
                    name: Blockly.Msg.typecast, // Category Name
                    description: "TypeCast Tool",
                    author: "microBlock",
                    category: "Communication",
                    version: "1.0.0",
                    icon: "/images/icon/type_icon.png", // Category icon
                    color: "#F1C40F", // Category color (recommend some blocks color)
                    blocks: [ // Blocks in Category
                        {
                            xml: `
                                <block type="number_cast">
                                    <value name="string_text">
                                        <shadow type="text">
                                            <field name="TEXT">text</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="string_cast">
                                   <value name="number_value">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                 </block>
                            `
                        },
                        {
                            xml: `
                                <block type="bytes_cast">
                                    <value name="byte_string">
                                        <shadow type="text">
                                            <field name="TEXT">text</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="bytes_cast_with_nr">
                                    <value name="bytes_string">
                                        <shadow type="text">
                                            <field name="TEXT">text</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="string_startwith">
                                    <value name="string_1">
                                        <shadow type="text">
                                            <field name="TEXT">text</field>
                                        </shadow>
                                    </value>
                                     <value name="string_2">
                                        <shadow type="text">
                                            <field name="TEXT">text</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="string_contain">
                                    <value name="string_1">
                                        <shadow type="text">
                                            <field name="TEXT">text</field>
                                        </shadow>
                                    </value>
                                     <value name="string_2">
                                        <shadow type="text">
                                            <field name="TEXT">text</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        }
                      ]
                },
////////////////////////////////////////////////////////////////
{
    name: Blockly.Msg.neopixel, // Category Name
    description: "Write light to NeoPixel",
    author: "microBlock",
    category: "Device Control",
    version: "1.0.0",
    icon: "/images/icon/neopixel_icon.png", // Category icon
    color: "#27AE60", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="neopixel_setup">
                    <value name="pin">
                        <shadow type="math_number">
                            <field name="NUM">17</field>
                        </shadow>
                    </value>
                    <value name="length">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                    </value>
                </block>
            `
        },
         {
            xml: `
                <block type="neopixel_set_brightness">
                    <value name="brightness">
                        <shadow type="math_number">
                            <field name="NUM">50</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="neopixel_set_color1">
                    <value name="n">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="neopixel_set_color2">
                    <value name="n">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="red">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="green">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="blue">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "neopixel_fill_color1",
        {
            xml: `
                <block type="neopixel_fill_color2">
                    <value name="red">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="green">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="blue">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "neopixel_show",
        "neopixel_clear",
        {
            xml: `
                <block type="neopixel_action">
                    <value name="wait">
                        <shadow type="math_number">
                            <field name="NUM">30</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="neopixel_rainbow">
                    <value name="wait">
                        <shadow type="math_number">
                            <field name="NUM">30</field>
                        </shadow>
                    </value>
                </block>
            `
        },

       
    ],
 },
 ////////////////////////////////////////////////////////////
{
    name: Blockly.Msg.motor, // Category Name
    description: "Motor for L9110S",
    author: "microBlock",
    category: "Sensors",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#004098", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        
                "motor_left_set",
   	"motor_right_set",
                {
                            xml: `
                                <block type="motor_wheel">
                                    <value name="speed1">
                                        <shadow type="math_number">
                                            <field name="NUM">100</field>
                                        </shadow>
                                    </value>
		    <value name="speed2">
                                        <shadow type="math_number">
                                            <field name="NUM">100</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                },
    	
    "motor_move",	
	"motor_stop",
    "math_number",
	{
                            xml: `
                                <block type="controls_wait">
                                    <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
        }
    ]
},
/////////////////////////////////////////////////////////////





            ]
        }
    ]
});
