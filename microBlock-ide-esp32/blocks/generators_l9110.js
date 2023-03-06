Blockly.Python['motor_left_set'] = function(block) {
  Blockly.Python.definitions_['from motor import L9110S,Car'] = 'from motor import L9110S,Car';

  var number_in1 = block.getFieldValue('l_IN1');
  var number_in2 = block.getFieldValue('l_IN2');
  
  var code = `m1 = L9110S(${number_in1}, ${number_in2})\n`;
  return code;
};

Blockly.Python['motor_right_set'] = function(block) {
  Blockly.Python.definitions_['from motor import L9110S,Car'] = 'from motor import L9110S,Car';

  var number_rin1 = block.getFieldValue('r_IN1');
  var number_rin2 = block.getFieldValue('r_IN2');

  var code = `m2 = L9110S(${number_rin1}, ${number_rin2})\n`;
  return code;
};

Blockly.Python['motor_wheel'] = function(block) {
  Blockly.Python.definitions_['from motor import L9110S,Car'] = 'from motor import L9110S,Car';

  var number_speed1 = Blockly.Python.valueToCode(block, 'speed1', Blockly.Python.ORDER_ATOMIC);
  var number_speed2 = Blockly.Python.valueToCode(block, 'speed2', Blockly.Python.ORDER_ATOMIC);

  var code = `car=Car(m1,m2); car.wheel(${number_speed1}/100, ${number_speed2}/100)\n`;
  return code;
};


Blockly.Python['motor_move'] = function(block) {
  Blockly.Python.definitions_['from motor import L9110S,Car'] = 'from motor import L9110S,Car';

  var dropdown_move = block.getFieldValue('move');

  var code = `car.move(${dropdown_move})\n`;
  return code;
};


Blockly.Python['motor_stop'] = function(block) {
  Blockly.Python.definitions_['from motor import L9110S,Car'] = 'from motor import L9110S,Car';

  var code = `car.stop()\n`;
  return code;
};