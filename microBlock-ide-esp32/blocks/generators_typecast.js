Blockly.Python['number_cast'] = function(block) {
  var value_text = Blockly.Python.valueToCode(block, 'string_text', Blockly.Python.ORDER_ATOMIC);
  var number_base = block.getFieldValue('base');
  var code = `int(${value_text},${number_base})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['string_cast'] = function(block) { 
  var value_number = Blockly.Python.valueToCode(block, 'number_value', Blockly.Python.ORDER_ATOMIC); 
  var code = `str(${value_number})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['bytes_cast'] = function(block) {
  var value_bytes = Blockly.Python.valueToCode(block, 'byte_string', Blockly.Python.ORDER_ATOMIC);
  
  var code =`b${value_bytes}`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['bytes_cast_with_nr'] = function(block) {
  var value_bytes = Blockly.Python.valueToCode(block, 'bytes_string', Blockly.Python.ORDER_ATOMIC);
  var L1=(block.getFieldValue('CR')=='TRUE'? '\\r' : '');
  var L2=(block.getFieldValue('LF')=='TRUE'? '\\n' : '');
  var string_code=L1+L2;
  var code = `b${value_bytes}+b'${string_code}'`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['string_startwith'] = function(block) {
  var value_string1 = Blockly.Python.valueToCode(block, 'string_1', Blockly.Python.ORDER_ATOMIC);
  var value_string2 = Blockly.Python.valueToCode(block, 'string_2', Blockly.Python.ORDER_ATOMIC);

  var code = `${value_string1}.startswith(${value_string2})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['string_contain'] = function(block) {
  var value_string1 = Blockly.Python.valueToCode(block, 'string_1', Blockly.Python.ORDER_ATOMIC);
  var value_string2 = Blockly.Python.valueToCode(block, 'string_2', Blockly.Python.ORDER_ATOMIC);

  var code = `${value_string2} in (${value_string1})`;
  return [code, Blockly.Python.ORDER_NONE];
};




