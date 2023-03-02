Blockly.defineBlocksWithJsonArray([
 {
  "type": "code_input",
  "message0": "執行碼: %1",
  "args0": [
    {
      "type": "field_multilinetext",
      "name": "CODENAME",
      "text": "輸入自訂碼",
      "spellcheck": false
    }
  ],
 "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
 "colour": "#1ABC9C"
},
{
  "type": "map_func",
  "message0": Blockly.Msg.map_func,
  "args0": [
     {
      "type": "input_value",
      "name": "in-value",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "in-min",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "in-max",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "out-min",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "out-max",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": "#34495E",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "dht_read",
  "message0": Blockly.Msg.dht_read,
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
          Blockly.Msg.temp,
          "0"
        ],
        [
          Blockly.Msg.humd,
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
  "type": "dht_read_variable",
  "message0": Blockly.Msg.dht_read_variable,
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
      "type": "input_value",
      "name": "d_temp"
    },
    {
      "type": "input_value",
      "name": "d_humi"
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
  "type": "ds18x20_read",
  "message0": Blockly.Msg.ds18x20_read,
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
  "type": "time_read",
  "message0": Blockly.Msg.time_read,
  "inputsInline": true,
  "output": null,
  "colour": "#1ABC9C",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "time_read_ms",
  "message0": Blockly.Msg.time_read_ms,
  "inputsInline": true,
  "output": null,
  "colour": "#1ABC9C",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "s_timer",
  "message0": Blockly.Msg.s_timer,
  "args0": [
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "0",
          "0"
        ],
        [
          "1",
          "1"
        ],
        [
          "2",
          "2"
        ],
        [
          "3",
          "3"
        ]    
      ]
    },
    {
      "type": "input_value",
      "name": "tperiod",
      "check": "Number"
    },
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
},
{
  "type": "conv_string",
  "message0": Blockly.Msg.conv_string,
  "args0": [
    {
      "type": "input_value",
      "name": "s_byte",
      "text": ""
    }
  ],
  "inputsInline": true,
  "output": "TEXT",
  "colour": "#1ABC9C",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "tempsensor_read",
  "message0": Blockly.Msg.tempsensor_read,
  "inputsInline": true,
  "output": "Number",
  "colour": "#E67E22",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "hallsensor_read",
  "message0": Blockly.Msg.hallsensor_read,
  "inputsInline": true,
  "output": "Number",
  "colour": "#E67E22",
  "tooltip": "",
  "helpUrl": ""
}
]);