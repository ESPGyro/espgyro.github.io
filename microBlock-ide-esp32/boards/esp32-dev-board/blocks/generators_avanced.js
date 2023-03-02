Blockly.Python['code_input'] = function(block) {
  var text_code= block.getFieldValue('CODENAME');
  var code = `\n${text_code}\n\n`;
  return code;
};

Blockly.Python['map_func'] = function(block) {
  Blockly.Python.definitions_['from_mapxy_import_convert'] = 'from map import convert';
  var value_in_value = Blockly.Python.valueToCode(block, 'in-value', Blockly.Python.ORDER_ATOMIC);
  var value_in_min = Blockly.Python.valueToCode(block, 'in-min', Blockly.Python.ORDER_ATOMIC);
  var value_in_max = Blockly.Python.valueToCode(block, 'in-max', Blockly.Python.ORDER_ATOMIC);
  var value_out_min = Blockly.Python.valueToCode(block, 'out-min', Blockly.Python.ORDER_ATOMIC);
  var value_out_max = Blockly.Python.valueToCode(block, 'out-max', Blockly.Python.ORDER_ATOMIC);
  var code = `convert(${value_in_value},${value_in_min}, ${value_in_max},${value_out_min},${value_out_max}) `; 
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['print'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var code = `print(${value_value})\n`;
    return code;
};

Blockly.Python['time_read'] = function(block) {
    Blockly.Python.definitions_['import_time'] = 'import time';
    var code = 'time.time()';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['time_read_ms'] = function(block) {
    Blockly.Python.definitions_['import_time'] = 'import time';
    var code = 'time.ticks_ms()';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['s_timer'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_timer'] = 'from machine import Timer';

    var dropdown_type = block.getFieldValue('type');
    var value_period = Blockly.Python.valueToCode(block, 'tperiod', Blockly.Python.ORDER_ATOMIC);
    var statements_callback = Blockly.Python.statementToCode(block, 'callback');
   
  var globals = [];
  var varName;
  var workspace = block.workspace;
  var variables = Blockly.Variables.allUsedVarModels(workspace) || [];
  for (var i = 0, variable; variable = variables[i]; i++) {
    varName = variable.name;
    if (block.getVars().indexOf(varName) == -1) {
      globals.push(Blockly.Python.variableDB_.getName(varName,
          Blockly.VARIABLE_CATEGORY_NAME));
    }
  }
  // Add developer variables.
  var devVarList = Blockly.Variables.allDeveloperVariables(workspace);
  for (var i = 0; i < devVarList.length; i++) {
    globals.push(Blockly.Python.variableDB_.getName(devVarList[i],
        Blockly.Names.DEVELOPER_VARIABLE_TYPE));
  }

  globals = globals.length ?
      Blockly.Python.INDENT + 'global ' + globals.join(', ') + '\n' : '';

    var functionName = Blockly.Python.provideFunction_(
    'timer'+dropdown_type+'_func',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
    globals,
    statements_callback || Blockly.Python.PASS]);
     
   var code = `timer${dropdown_type} = Timer(${dropdown_type})\n`+
	    `timer${dropdown_type}.init(period=${value_period}, mode=Timer.PERIODIC, callback=lambda t:${functionName}()) \n`;
    return code;
    
};

Blockly.Python['s_timer_deinit'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_timer'] = 'from machine import Timer';

    var dropdown_type = block.getFieldValue('type');
    var code =  `timer${dropdown_type}.deinit()\n`;
    return code;
    
};
Blockly.Python['conv_string'] = function(block) {
	var text_input_string = Blockly.Python.valueToCode(block, 's_byte', Blockly.Python.ORDER_ATOMIC);
    var code = `${text_input_string}.decode('utf-8')`;
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['tempsensor_read'] = function(block) {
    Blockly.Python.definitions_['import_esp32'] = 'import esp32';
    
    var code = `((esp32.raw_temperature()-32.0)/1.8)`;
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['hallsensor_read'] = function(block) {
    Blockly.Python.definitions_['import_esp32'] = 'import esp32';
    
    var code = `esp32.hall_sensor()`;
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['dht_read'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['import_dht'] = 'import dht';

  var functionName = Blockly.Python.provideFunction_(
    'DHT_Read',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(type, pin):',
    '  try:',
    '    if type == 11:',
    '      d = dht.DHT11(Pin(pin))',
    '    elif type == 22:',
    '      d = dht.DHT22(Pin(pin))',
    '    else:',
    '      return [ -999, -999 ]',
    '    d.measure()',
    '    return [ d.temperature(), d.humidity() ]',
    '  except:',
    '    print("DHT read error")',
//	'    pass']);
    '    return [ 0, 0 ]']);
    
    var dropdown_type = block.getFieldValue('type');
    var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    var dropdown_valueindex = block.getFieldValue('valueIndex');
    var code = `${functionName}(${dropdown_type}, ${value_pin})[${dropdown_valueindex}]`;
    return [code, Blockly.Python.ORDER_NONE];
    
};

Blockly.Python['dht_read_variable'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['import_dht'] = 'import dht';
    var dropdown_type = block.getFieldValue('type');
    var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    var value_d_temp = Blockly.Python.valueToCode(block, 'd_temp', Blockly.Python.ORDER_ATOMIC);
    var value_d_humi = Blockly.Python.valueToCode(block, 'd_humi', Blockly.Python.ORDER_ATOMIC);
    
  var globals = [];
  var varName;
  var workspace = block.workspace;
  var variables = Blockly.Variables.allUsedVarModels(workspace) || [];
  for (var i = 0, variable; variable = variables[i]; i++) {
    varName = variable.name;
    if (block.getVars().indexOf(varName) == -1) {
      globals.push(Blockly.Python.variableDB_.getName(varName,
          Blockly.VARIABLE_CATEGORY_NAME));
    }
  }
  // Add developer variables.
  var devVarList = Blockly.Variables.allDeveloperVariables(workspace);
  for (var i = 0; i < devVarList.length; i++) {
    globals.push(Blockly.Python.variableDB_.getName(devVarList[i],
        Blockly.Names.DEVELOPER_VARIABLE_TYPE));
  }
    
    globals = globals.length ?
      Blockly.Python.INDENT + 'global ' + globals.join(', ') + '\n' : '';
  
  
  var functionName = Blockly.Python.provideFunction_(
    'DHT_Read_TH',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(type,pin,temp_v,humi_v):',
     globals,
					
    '  try:',
    '    if type == 11:',
    '      d = dht.DHT11(Pin(pin))',
    '    elif type == 22:',
    '      d = dht.DHT22(Pin(pin))',
    '    else:',
    '      return [ -999, -999 ]',
    '    d.measure()',
         Blockly.Python.INDENT +Blockly.Python.INDENT +value_d_temp+'= d.temperature()', 
         Blockly.Python.INDENT +Blockly.Python.INDENT +value_d_humi+'= d.humidity()', 
    '  except:',
    '    print("DHT read error")',
    '    return [ 25, 50 ]']);
    

    var code = `${functionName}(${dropdown_type},${value_pin},${value_d_temp},${value_d_humi})\n`;
    return code;    
};


Blockly.Python['ds18x20_read'] = function(block) {
    Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['import_onewire'] = 'import onewire';
    Blockly.Python.definitions_['import_ds18x20'] = 'import ds18x20';
  
    var functionName = Blockly.Python.provideFunction_(
      'DS18x20_Read',
      ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(pin):',
      '  ds = ds18x20.DS18X20(onewire.OneWire(Pin(pin)))',
      '  roms = ds.scan()',
      '  try:',
      '    ds.convert_temp()',
      '  except:',
      '    return 0',
      '  sleep(0.75)',
      '  for rom in roms:',
      '    return ds.read_temp(rom)',
      '  return 0']);
  
    var dropdown_pin = block.getFieldValue('pin');
    var code = `${functionName}(${dropdown_pin})`;
    return [code, Blockly.Python.ORDER_NONE];
};
  
Blockly.Python['rtc_set_time'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_RTC'] = 'from machine import RTC';

    var value_hour = Blockly.Python.valueToCode(block, 'hour', Blockly.Python.ORDER_ATOMIC);
    var value_min = Blockly.Python.valueToCode(block, 'min', Blockly.Python.ORDER_ATOMIC);
    var value_sec = Blockly.Python.valueToCode(block, 'sec', Blockly.Python.ORDER_ATOMIC);
    var value_day = Blockly.Python.valueToCode(block, 'day', Blockly.Python.ORDER_ATOMIC);
    var value_month = Blockly.Python.valueToCode(block, 'month', Blockly.Python.ORDER_ATOMIC);
    var value_year = Blockly.Python.valueToCode(block, 'year', Blockly.Python.ORDER_ATOMIC);

    var code = `RTC().datetime((${value_year}, ${value_month},${value_day}, 0, ${value_hour}, ${value_min}, ${value_sec},  0))\n`;
    return code;
};

Blockly.Python['rtc_get_hour'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_RTC'] = 'from machine import RTC';

  var code = 'RTC().datetime()[4]';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['rtc_get_min'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_RTC'] = 'from machine import RTC';

    var code = 'RTC().datetime()[5]';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['rtc_get_sec'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_RTC'] = 'from machine import RTC';

    var code = 'RTC().datetime()[6]';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['rtc_get_day'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_RTC'] = 'from machine import RTC';

    var code = 'RTC().datetime()[2]';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['rtc_get_month'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_RTC'] = 'from machine import RTC';

    var code = 'RTC().datetime()[1]';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['rtc_get_year'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_RTC'] = 'from machine import RTC';

    var code = 'RTC().datetime()[0]';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['rtc_get_microsecond'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_RTC'] = 'from machine import RTC';

    var code = 'RTC().datetime()[6]';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['rtc_sync_ntp'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_RTC'] = 'from machine import RTC';
    Blockly.Python.definitions_['import_ntptime'] = 'import ntptime';
    //Blockly.Python.definitions_['import_tw_ntp'] = 'import tw_ntp';

    var functionName = Blockly.Python.provideFunction_(
      'tw_ntp',
      ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(must):',
      '  ntptime.NTP_DELTA = 3155644800', 
      '  ntptime.host = "clock.stdtime.gov.tw"',
      '  count = 1',
      '  if must:',
      '    count = 100',
      '  for _ in  range(count):',
      '    try:',
      '      ntptime.settime()',
      '    except:',
      '      time.sleep(1)',
      '      continue',
      '    else:',
      '      return True',
      '  return False']);   

    //var code = `ntptime.NTP_DELTA=3155644800; ntptime.settime()\n`;
    var code=`tw_ntp(True)\n`;
    return code;
  };

Blockly.Python['light_sleep'] = function(block) {
    Blockly.Python.definitions_['import_machine'] = 'import machine';

    var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
    var code = `machine.lightsleep(${value_time} * 1000)\n`;
    return code;
};

Blockly.Python['deep_sleep'] = function(block) {
    Blockly.Python.definitions_['import_machine'] = 'import machine';

    var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
    var code = `machine.deepsleep(${value_time} * 1000)\n`;
    return code;
};

Blockly.Python['is_woke_from_deep_sleep'] = function(block) {
    Blockly.Python.definitions_['import_machine'] = 'import machine';

    var code = '(machine.reset_cause() == machine.DEEPSLEEP_RESET)';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['send_into_source'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var value_source = Blockly.Python.valueToCode(block, 'source', Blockly.Python.ORDER_ATOMIC);

    var code = `print(str(${value_source}) + "=" + str(${value_value}))\n`;
    return code;
};

Blockly.Python['board_reset'] = function(block) {
    Blockly.Python.definitions_['import_machine'] = 'import machine';

    var code = `machine.reset()\n`;
    return code;
};

Blockly.Python['run_in_background'] = function(block) {
    Blockly.Python.definitions_['import__thread'] = 'import _thread';

    var statements_callback = Blockly.Python.statementToCode(block, 'callback');

    // -----------------------------
    var globals = [];
    var varName;
    var workspace = block.workspace;
    var variables = Blockly.Variables.allUsedVarModels(workspace) || [];
    for (var i = 0, variable; variable = variables[i]; i++) {
      varName = variable.name;
      if (block.getVars().indexOf(varName) == -1) {
        globals.push(Blockly.Python.variableDB_.getName(varName,
            Blockly.VARIABLE_CATEGORY_NAME));
      }
    }
    // Add developer variables.
    var devVarList = Blockly.Variables.allDeveloperVariables(workspace);
    for (var i = 0; i < devVarList.length; i++) {
      globals.push(Blockly.Python.variableDB_.getName(devVarList[i],
          Blockly.Names.DEVELOPER_VARIABLE_TYPE));
    }
  
    globals = globals.length ?
        Blockly.Python.INDENT + 'global ' + globals.join(', ') + '\n' : '';
    // -----------------------------

    if (typeof nextRunInBackground !== "number") {
        nextRunInBackground = 1;
    }

    var functionName = Blockly.Python.provideFunction_(
        'runInBackground_' + nextRunInBackground,
        ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
        globals,
        statements_callback]);

    var code = `_thread.start_new_thread(${functionName}, ())\n`;

    nextRunInBackground++;
    return code;
};

