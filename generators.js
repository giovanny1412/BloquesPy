// Generador del bloque principal
Blockly.Python['al_iniciar'] = function(block) {
  var branch = Blockly.Python.statementToCode(block, 'STACK');
  var setup = 'from machine import Pin\nimport time\n' +
              'in1=Pin(12,Pin.OUT); in2=Pin(13,Pin.OUT); in3=Pin(14,Pin.OUT); in4=Pin(27,Pin.OUT)\n' +
              'trig=Pin(5,Pin.OUT); echo=Pin(18,Pin.IN)\n' +
              'def stop(): [p.value(0) for p in (in1,in2,in3,in4)]\n' +
              'def forward(): in1.value(1);in2.value(0);in3.value(1);in4.value(0)\n' +
              'def backward(): in1.value(0);in2.value(1);in3.value(0);in4.value(1)\n' +
              'def right(): in1.value(1);in2.value(0);in3.value(0);in4.value(1)\n' +
              'def left(): in1.value(0);in2.value(1);in3.value(1);in4.value(0)\n' +
              'def medir():\n  trig.value(0);time.sleep_us(2);trig.value(1);time.sleep_us(10);trig.value(0)\n' +
              '  d=(machine.time_pulse_us(echo,1,30000)*0.0343)/2\n  return d\n';
  return setup + '\nwhile True:\n' + (branch || '  pass\n');
};

// Generador de movimiento
Blockly.Python['mover_tiempo'] = function(block) {
  var dir = block.getFieldValue('DIR');
  var sec = block.getFieldValue('SECONDS');
  return dir + '()\ntime.sleep(' + sec + ')\nstop()\n';
};

// Generador de bucle
Blockly.Python['repetir_patrulla'] = function(block) {
  var times = block.getFieldValue('TIMES');
  var branch = Blockly.Python.statementToCode(block, 'DO');
  return 'for i in range(' + times + '):\n' + branch;
};

// Generador de sensor
Blockly.Python['si_obstaculo'] = function(block) {
  var dist = block.getFieldValue('DIST');
  var branch = Blockly.Python.statementToCode(block, 'DO');
  return 'if medir() < ' + dist + ':\n' + branch;
};