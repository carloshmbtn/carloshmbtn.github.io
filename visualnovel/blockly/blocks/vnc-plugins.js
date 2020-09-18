
Blockly.Blocks['vnc_plugins_transition'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Transition Effects")
        .appendField(new Blockly.FieldTextInput("Name"), "VNC_PLUGINS_TRANS_ID");
    this.appendStatementInput("VNC_PLUGINS_TRANS_INIT")
        .appendField("Initialization")
        .setCheck(null);
    this.appendStatementInput("VNC_PLUGINS_TRANS_IN")
        .appendField("Trans In")
        .setCheck(null);
    this.appendStatementInput("VNC_PLUGINS_TRANS_OUT")
        .appendField("Trans Out")
        .setCheck(null);
    this.setInputsInline(false);
    this.setColour(350);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_plugins_atmosphere'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Atmosphere Effects")
        .appendField(new Blockly.FieldTextInput("Name"), "VNC_PLUGINS_ATMO_ID");
    this.appendStatementInput("VNC_PLUGINS_ATMO_INIT")
        .appendField("Initialization")
        .setCheck(null);
    this.appendStatementInput("VNC_PLUGINS_ATMO_UPDATE")
        .appendField("Update")
        .setCheck(null);
    this.appendStatementInput("VNC_PLUGINS_ATMO_DRAW")
        .appendField("Draw")
        .setCheck(null);
    this.setInputsInline(false);
    this.setColour(350);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_plugins_cform'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("CForm Elements")
        .appendField(new Blockly.FieldTextInput("Name"), "VNC_PLUGINS_CFORM_ID");
    this.appendStatementInput("VNC_PLUGINS_CFORM_INIT")
        .appendField("Initialization")
        .setCheck(null);
    this.appendStatementInput("VNC_PLUGINS_CFORM_UPDATE")
        .appendField("Update")
        .setCheck(null);
    this.appendStatementInput("VNC_PLUGINS_CFORM_DRAW")
        .appendField("Draw")
        .setCheck(null);
    this.setInputsInline(false);
    this.setColour(350);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_plugins_stats'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Actor Stats")
        .appendField(new Blockly.FieldTextInput("Name"), "VNC_PLUGINS_STATS_ID");
    this.appendValueInput("VNC_PLUGINS_STATS_VALUE")
        .appendField("Values")
        .setCheck("Array");
    this.appendStatementInput("VNC_PLUGINS_STATS_UPDATE")
        .appendField("Update")
        .setCheck(null);
    this.setInputsInline(false);
    this.setColour(350);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};