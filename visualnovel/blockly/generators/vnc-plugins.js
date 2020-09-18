
Blockly.JavaScript['vnc_plugins_transition'] = function(block) {
  var text_vnc_plugins_trans_id = block.getFieldValue('VNC_PLUGINS_TRANS_ID');
  var statements_vnc_plugins_trans_init = Blockly.JavaScript.statementToCode(block, 'VNC_PLUGINS_TRANS_INIT');
  var statements_vnc_plugins_trans_in = Blockly.JavaScript.statementToCode(block, 'VNC_PLUGINS_TRANS_IN');
  var statements_vnc_plugins_trans_out = Blockly.JavaScript.statementToCode(block, 'VNC_PLUGINS_TRANS_OUT');
  // TODO: Assemble JavaScript into code variable.
  var code = "require(['app/vncanvas-fx'], function() {\n\n";
  code += "TransEffects."+text_vnc_plugins_trans_id+" = {\n\n";

  code += "_init: function(obj, param) {\n  // Place initialization here\n";
  code += statements_vnc_plugins_trans_init;
  code += "},\n";

  code += "_in: function(obj, elapsed) {\n  // Place show transition code here\n";
  code += statements_vnc_plugins_trans_in;
  code += "},\n";

  code += "_out: function(obj, elapsed) {\n  // Place hide transition code here\n";
  code += statements_vnc_plugins_trans_out;
  code += "},\n";

  code += "\n};\n});\n";
  return code;
};

Blockly.JavaScript['vnc_plugins_atmosphere'] = function(block) {
  var text_vnc_plugins_atmo_id = block.getFieldValue('VNC_PLUGINS_ATMO_ID');
  var statements_vnc_plugins_atmo_init = Blockly.JavaScript.statementToCode(block, 'VNC_PLUGINS_ATMO_INIT');
  var statements_vnc_plugins_atmo_update = Blockly.JavaScript.statementToCode(block, 'VNC_PLUGINS_ATMO_UPDATE');
  var statements_vnc_plugins_atmo_draw = Blockly.JavaScript.statementToCode(block, 'VNC_PLUGINS_ATMO_DRAW');
  // TODO: Assemble JavaScript into code variable.
  var code = "require(['app/vncanvas-atmo'], function() {\n\n";
  code += "AtmoEffects."+text_vnc_plugins_atmo_id+" = {\n\n";

  code += "_init: function(obj, param) {\n  // Place initialization here\n";
  code += statements_vnc_plugins_atmo_init;
  code += "},\n";

  code += "_update: function(obj, elapsed) {\n  // Place update code here\n";
  code += statements_vnc_plugins_atmo_update;
  code += "},\n";

  code += "_draw: function(obj) {\n  // Place draw code here\n";
  code += statements_vnc_plugins_atmo_draw;
  code += "},\n";

  code += "\n};\n});\n";
  return code;
};

Blockly.JavaScript['vnc_plugins_cform'] = function(block) {
  var text_vnc_plugins_cform_id = block.getFieldValue('VNC_PLUGINS_CFORM_ID');
  var statements_vnc_plugins_cform_init = Blockly.JavaScript.statementToCode(block, 'VNC_PLUGINS_CFORM_INIT');
  var statements_vnc_plugins_cform_update = Blockly.JavaScript.statementToCode(block, 'VNC_PLUGINS_CFORM_UPDATE');
  var statements_vnc_plugins_cform_draw = Blockly.JavaScript.statementToCode(block, 'VNC_PLUGINS_CFORM_DRAW');
  // TODO: Assemble JavaScript into code variable.
  var code = "require(['app/vncanvas-cform'], function() {\n\n";
  code += "CformElements."+text_vnc_plugins_cform_id+" = {\n\n";

  code += "_init: function(obj, param) {\n  // Place initialization here\n";
  code += statements_vnc_plugins_cform_init;
  code += "},\n";

  code += "_update: function(obj, elapsed) {\n  // Place update code here\n";
  code += statements_vnc_plugins_cform_update;
  code += "},\n";

  code += "_draw: function(obj) {\n  // Place draw code here\n";
  code += statements_vnc_plugins_cform_draw;
  code += "},\n";

  code += "\n};\n});\n";
  return code;
};

Blockly.JavaScript['vnc_plugins_stats'] = function(block) {
  var text_vnc_plugins_stats_id = block.getFieldValue('VNC_PLUGINS_STATS_ID');
  var statements_vnc_plugins_stats_update = Blockly.JavaScript.statementToCode(block, 'VNC_PLUGINS_STATS_UPDATE');
  var value_vnc_plugins_stats_value = Blockly.JavaScript.valueToCode(block, 'VNC_PLUGINS_STATS_VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "require(['app/vncanvas-base'], function() {\n\n";
  code += "Stats."+text_vnc_plugins_stats_id+" = {\n";

  code += "_value: "+value_vnc_plugins_stats_value+",\n";

  code += "_update: function(obj, stat) {\n  // Place update code here\n";
  code += statements_vnc_plugins_stats_update;
  code += "},\n";

  code += "\n};\n});\n";
  return code;
};

