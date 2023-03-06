Blockly.defineBlocksWithJsonArray([
    {
        "type": "motor_left_set",
  "message0": Blockly.Msg.motor_left_set,
        "args0": [{
            "type": "field_number",
            "name": "l_IN1",
            "value": 25,
        }, {
            "type": "field_number",
            "name": "l_IN2",
            "value": 26,
        }],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#28B463",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "motor_right_set",
  "message0": Blockly.Msg.motor_right_set,
        "args0": [{
            "type": "field_number",
            "name": "r_IN1",
            "value": 32,
        }, {
            "type": "field_number",
            "name": "r_IN2",
            "value": 33,
        }],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#28B463",
        "tooltip": "",
        "helpUrl": ""
    },  
    {
        "type": "motor_wheel",
  "message0": Blockly.Msg.motor_wheel,
        "args0": [
           {
            "type": "input_value",
            "name": "speed1",
            "check": "Number"
            }, 
           {
            "type": "input_value",
            "name": "speed2",
            "check": "Number"          
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#28B463",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "motor_move",
  "message0": Blockly.Msg.motor_move,
        "args0": [{
            "type": "field_dropdown",
            "name": "move",
            "options": [
                [Blockly.Msg.move_forward, "1"],
                [Blockly.Msg.move_backward, "2"],
                [Blockly.Msg.turn_left, "3"],
                [Blockly.Msg.turn_right, "4"]
            ]
        }],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#28B463",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "motor_stop",
  "message0": Blockly.Msg.motor_stop,
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#28B463",
        "tooltip": "",
        "helpUrl": ""
    }
]);