Blockly.defineBlocksWithJsonArray([
{
  "type": "print",
  "message0": Blockly.Msg.print,
  "args0": [
    {
      "type": "input_value",
      "name": "value"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#8E44AD",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "dht_read",
  "message0": "%1 pin %2 read %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "DHT11",
          "11"
        ],
        [
          "DHT22",
          "22"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "pin",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "valueIndex",
      "options": [
        [
          "temperature",
          "0"
        ],
        [
          "humidity",
          "1"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": "#8E44AD",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "ds18x20_read",
  "message0": "DS18x20 pin %1 read temperature",
  "args0": [
    {
      "type": "input_value",
      "name": "pin",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": "#8E44AD",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rtc_set_time",
  "message0": Blockly.Msg.rtc_set_time,
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "hour",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "min",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "sec",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "day",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "month",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "year",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#8E44AD",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rtc_get_hour",
  "message0": Blockly.Msg.rtc_get_hour,
  "inputsInline": false,
  "output": "Number",
  "colour": "#8E44AD",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rtc_get_min",
  "message0": Blockly.Msg.rtc_get_min,
  "inputsInline": false,
  "output": "Number",
  "colour": "#8E44AD",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rtc_get_sec",
  "message0": Blockly.Msg.rtc_get_sec,
  "inputsInline": false,
  "output": "Number",
  "colour": "#8E44AD",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rtc_get_day",
  "message0": Blockly.Msg.rtc_get_day,
  "inputsInline": false,
  "output": "Number",
  "colour": "#8E44AD",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rtc_get_month",
  "message0": Blockly.Msg.rtc_get_month,
  "inputsInline": false,
  "output": "Number",
  "colour": "#8E44AD",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rtc_get_year",
  "message0": Blockly.Msg.rtc_get_year,
  "inputsInline": false,
  "output": "Number",
  "colour": "#8E44AD",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rtc_get_microsecond",
  "message0": Blockly.Msg.rtc_get_microsecond,
  "inputsInline": false,
  "output": "Number",
  "colour": "#8E44AD",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "rtc_sync_ntp",
  "message0": Blockly.Msg.rtc_sync_ntp,
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#8E44AD",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "light_sleep",
  "message0": Blockly.Msg.light_sleep,
  "args0": [
    {
      "type": "input_value",
      "name": "time",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#8E44AD",
  "tooltip": "A lightsleep has full RAM and state retention. Upon wake execution is resumed from the point where the sleep was requested, with all subsystems operational.",
  "helpUrl": ""
},
{
  "type": "deep_sleep",
  "message0": Blockly.Msg.deep_sleep,
  "args0": [
    {
      "type": "input_value",
      "name": "time",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#8E44AD",
  "tooltip": "A deepsleep may not retain RAM or any other state of the system (for example peripherals or network interfaces). Upon wake execution is resumed from the main script, similar to a hard or power-on reset.",
  "helpUrl": ""
},
{
  "type": "is_woke_from_deep_sleep",
  "message0": Blockly.Msg.is_woke_from_deep_sleep,
  "inputsInline": true,
  "output": [
    "Number",
    "Boolean"
  ],
  "colour": "#8E44AD",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "send_into_source",
  "message0": Blockly.Msg.send_into_source,
  "args0": [
    {
      "type": "input_value",
      "name": "value"
    },
    {
      "type": "input_value",
      "name": "source"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#8E44AD",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "board_reset",
  "message0":Blockly.Msg.board_reset,
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#8E44AD",
  "tooltip": "Reset board and start program again (NOT recommend)",
  "helpUrl": ""
},
{
  "type": "run_in_background",
  "message0": Blockly.Msg.run_in_background,
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "callback"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#8E44AD",
  "tooltip": "",
  "helpUrl": ""
}
]);