Blockly.defineBlocksWithJsonArray([
{
  "type": "number_cast",
  "message0": Blockly.Msg.number_cast,
  "args0": [
    {
      "type": "input_value",
      "name": "string_text",
      "check": "String"
    },
    {
      "type": "field_number",
      "name": "base",
      "value": 10
    }
    ],
  "inputsInline": true,
  "output": null,
  "colour": "#F1C40F",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "string_cast",
  "message0": Blockly.Msg.string_cast,
  "args0": [
    {
      "type": "input_value",
      "name": "number_value",
      "check": "Number"
    }
],
  "inputsInline": true,
  "output": null,
  "colour": "#F1C40F",
  "tooltip": "",
  "helpUrl": ""
},
{  
  "type": "bytes_cast",
  "message0": "字串: %1 轉換成bytes",
  "args0": [
    {
      "type": "input_value",
      "name": "byte_string",
      "check": "String"
    }
 ],
  "inputsInline": true,
  "output": null,
  "colour": "#F1C40F",
  "tooltip": "",
  "helpUrl": ""
},
{  
  "type": "bytes_cast_with_nr",
  "message0": "字串: %1 轉換成bytes 字尾: %2 \\r  %3 \\n ",
  "args0": [
    {
      "type": "input_value",
      "name": "bytes_string",
      "check": "String"
    },
    {
      "type": "field_checkbox",
      "name": "CR",
      "checked": false
    },
    {
      "type": "field_checkbox",
      "name": "LF",
      "checked": false
    }		
  ],
  "inputsInline": true,
  "output": null,
  "colour": "#F1C40F",
  "tooltip": "",
  "helpUrl": ""
},
{  
  "type": "string_startwith",
  "message0": "檢查字串: %1 是否以特定字串: %2 開頭? ",
  "args0": [
    {
      "type": "input_value",
      "name": "string_1",
      "check": "String"
    },
     {
      "type": "input_value",
      "name": "string_2",
      "check": "String"
    }		
  ],
  "inputsInline": true,
  "output": null,
  "colour": "#F1C40F",
  "tooltip": "",
  "helpUrl": ""
},
{  
  "type": "string_contain",
  "message0": "檢查字串: %1 是否\"包含\"特定字串: %2 ? ",
  "args0": [
    {
      "type": "input_value",
      "name": "string_1",
      "check": "String"
    },
     {
      "type": "input_value",
      "name": "string_2",
      "check": "String"
    }		
  ],
  "inputsInline": true,
  "output": null,
  "colour": "#F1C40F",
  "tooltip": "",
  "helpUrl": ""
}
]);
