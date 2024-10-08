Blockly.Python['comment_input'] = function(block) {
  var text_code= block.getFieldValue('FIELDNAME');
  var code = `"""\n${text_code}\n"""\n`;
  return code;
  
};

Blockly.Python['pin_digital_write'] = function (block) {
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';

    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var dropdown_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);

    var code = `Pin(${dropdown_pin}, Pin.OUT).value(${value_value})\n`;
    return code;
};

//modified for enable internal pull-up resistor
Blockly.Python['pin_digital_read'] = function (block) {
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';

    var dropdown_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    var value_pull_up=(block.getFieldValue('pull_up')=='TRUE'? 1 :0);
    
    if (value_pull_up){
    var code = `Pin(${dropdown_pin}, Pin.IN,Pin.PULL_UP).value()`;
    } else {
    var code = `Pin(${dropdown_pin}, Pin.IN).value()`;  
    }
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['pin_touch_read'] = function (block) {
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['from_machine_import_touchpad'] = 'from machine import TouchPad';

    var dropdown_pin = block.getFieldValue( 'pin');

    var code = `TouchPad(Pin(${dropdown_pin}, Pin.IN)).read()`;
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['pin_analog_read'] = function (block) {
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['from_machine_import_adc'] = 'from machine import ADC';

    var dropdown_pin = block.getFieldValue( 'pin');
    var functionName = Blockly.Python.provideFunction_(
        'adcRead',
        ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(analog_pin):',
        '  adc = ADC(Pin(analog_pin))',
        '  adc.atten(ADC.ATTN_11DB)',
        '  adc.width(ADC.WIDTH_12BIT)',
        '  return adc.read()']);

    var code = `${functionName}(${dropdown_pin})`;
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['pin_analog_write'] = function (block) {
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';

    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var dropdown_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    var code = `PWM(Pin(${dropdown_pin}), freq=1000, duty=int(${value_value}))\n`;
    return code;
};