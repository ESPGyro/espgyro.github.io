Blockly.defineBlocksWithJsonArray([
{
  "type": "pin_digital_write",
  "message0":Blockly.Msg.pin_digital_write ,
  "args0": [
    {
      "type": "input_value",
      "name": "value",
      "check": [
        "Boolean",
        "Number"
      ]
    },
    {
      "type": "input_value",
      "name": "pin",
      "check": [
        "Boolean",
        "Number"
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#E67E22",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "pin_digital_read",
  "message0": Blockly.Msg.pin_digital_read,
  "args0": [
    {
      "type": "input_value",
      "name": "pin",
      "check": [
        "Boolean",
        "Number"
      ]
    },
     {
      "type": "field_checkbox",
      "name": "pull_up",
      "checked": true
    }
  ],
  "output": [
    "Number",
    "Boolean"
  ],
  "inputsInline": true,
  "colour": "#E67E22",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "pin_touch_read",
  "message0": Blockly.Msg.pin_touch_read,
  "args0": [
     {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
         [
          "4",
          "4"
        ],
         [
          "13",
          "13"
        ],
        [
          "15",
          "15"
        ],
         [
          "32",
          "32"
        ],
        [
          "33",
          "33"
        ]
      ],
      "check": [
      "Boolean",
      "Number"
      ]
    }
  ],
  "output": "Number",
  "inputsInline": true,
  "colour": "#E67E22",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "pin_analog_read",
  "message0": Blockly.Msg.pin_analog_read,
  "args0": [
    {
      "type": "input_value",
      "name": "pin",
      "check": [
        "Boolean",
        "Number"
      ]
    }
  ],
  "output": "Number",
  "inputsInline": true,
  "colour": "#E67E22",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "pin_analog_write",
  "message0": Blockly.Msg.pin_analog_write,
  "args0": [
    {
      "type": "input_value",
      "name": "value",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "pin",
      "check": [
        "Boolean",
        "Number"
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#E67E22",
  "tooltip": "",
  "helpUrl": ""
}
]);