Blockly.defineBlocksWithJsonArray([
{
  "type": "ultrasonic_read",
  "message0": Blockly.Msg.ultrasonic_read,
  "args0": [
    {
      "type": "field_dropdown",
      "name": "trig",
      "options": [
        [
          "23",
          "23"
        ],
        [
          "27",
          "27"
        ],
        [
          "19",
          "19"
        ],
        [
          "5",
          "5"
        ],
        [
          "18",
          "18"
        ],
        [
          "4",
          "4"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "echo",
      "options": [
        [
          "13",
          "13"
        ],
        [
          "16",
          "16"
        ],
        [
          "27",
          "27"
        ],
        [
          "19",
          "19"
        ],
        [
          "5",
          "5"
        ],
        [
          "32",
          "32"
        ],
        [
          "33",
          "33"
        ],
        [
          "25",
          "25"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": "#004098",
  "tooltip": "Get data from Sony Remote",
  "helpUrl": ""
}
]);
