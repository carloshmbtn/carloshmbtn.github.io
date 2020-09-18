
Blockly.Blocks['vnc_config'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("VNC Config");
    this.appendValueInput("VNC_THEME_SETTINGS")
        .setCheck("vnc_theme_settings")
        .appendField("Theme");
    this.appendValueInput("VNC_MEDIA_SETTINGS")
        .setCheck("vnc_media_settings")
        .appendField("Media");
    this.appendValueInput("VNC_BOX_SETTINGS")
        .setCheck("vnc_box_settings")
        .appendField("Box");
    this.appendValueInput("VNC_MENU_SETTINGS")
        .setCheck("vnc_menu_settings")
        .appendField("Menu");
    this.appendValueInput("VNC_ACTOR_SETTINGS")
        .setCheck("vnc_actor_settings")
        .appendField("Actor");
    this.appendValueInput("VNC_GAMEPLAY_SETTINGS")
        .setCheck("vnc_gameplay_settings")
        .appendField("Gameplay");
    this.appendValueInput("VNC_CORDOVA_SETTINGS")
        .setCheck("vnc_cordova_settings")
        .appendField("Cordova");
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_theme'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("VNC Theme")
        .appendField(new Blockly.FieldTextInput("Name"), "THEME_ID");
    this.appendValueInput("VNC_FORM_STYLE")
        .setCheck("vnc_form_style")
        .appendField("Form style");
    this.appendValueInput("VNC_BOX_STYLE")
        .setCheck("vnc_box_style")
        .appendField("Box style");
    this.appendValueInput("VNC_MENU_STYLE")
        .setCheck("vnc_menu_style")
        .appendField("Menu style");
    this.appendValueInput("VNC_AUTOMAP_STYLE")
        .setCheck("vnc_automap_style")
        .appendField("Automap style");
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_theme_form'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Form Style");
    this.appendValueInput("VNC_CONFIG_FONT_STYLE")
        .setCheck("vnc_font_style")
        .appendField("Font style");
    this.appendValueInput("VNC_CONFIG_TIP_STYLE")
        .setCheck("vnc_font_style")
        .appendField("Tooltip style");
    this.appendValueInput("VNC_CONFIG_TIP_COLOR")
        .setCheck("Colour")
        .appendField("Tooltip color");
    this.appendValueInput("VNC_CONFIG_FORM_BACK")
        .setCheck("Colour")
        .appendField("Background color");
    this.setOutput(true, "vnc_form_style");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_theme_box'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Box style");
    this.appendValueInput("VNC_CONFIG_FONT_STYLE")
        .setCheck("vnc_font_style")
        .appendField("Font style");
    this.appendValueInput("VNC_CONFIG_DIM_STYLE")
        .setCheck(["Colour", "vnc_gradient"])
        .appendField("Dim background");
    this.appendValueInput("VNC_CONFIG_IMAGE_STYLE")
        .setCheck("String")
        .appendField("Image background");
    this.appendValueInput("VNC_CONFIG_TAG_STYLE")
        .setCheck("vnc_font_style")
        .appendField("Name tag style");
    this.appendValueInput("VNC_CONFIG_HILITE")
        .setCheck("Colour")
        .appendField("Highlight color");
    this.appendValueInput("VNC_CONFIG_BALLOON")
        .setCheck(["Colour", "vnc_gradient"])
        .appendField("Balloon background");
    this.appendValueInput("VNC_CONFIG_BALLOON_STROKE")
        .setCheck("Colour")
        .appendField("Balloon outline");
    this.setOutput(true, "vnc_box_style");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_theme_menu'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Menu style");
    this.appendValueInput("VNC_CONFIG_MENU_PROMPT")
        .setCheck("Colour")
        .appendField("Prompt color");
    this.appendValueInput("VNC_CONFIG_MENU_BASE")
        .setCheck("Colour")
        .appendField("Base color");
    this.appendValueInput("VNC_CONFIG_MENU_HOVER")
        .setCheck("Colour")
        .appendField("Hover color");
    this.appendValueInput("VNC_CONFIG_MENU_CLICK")
        .setCheck("Colour")
        .appendField("Click color");
    this.setOutput(true, "vnc_menu_style");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_theme_automap'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Automap style");
    this.appendValueInput("VNC_CONFIG_AUTOMAP_MASK")
        .setCheck("Colour")
        .appendField("Mask color");
    this.appendValueInput("VNC_CONFIG_AUTOMAP_POINTER")
        .setCheck("vnc_gradient")
        .appendField("Pointer colors");
    this.setOutput(true, "vnc_automap_style");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_font'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("CSS font")
        .appendField(new Blockly.FieldDropdown([["normal", "NORMAL"], ["bold", "BOLD"], ["italic", "ITALIC"]]), "VNC_FONT_WEIGHT")
        .appendField(new Blockly.FieldNumber(10, 0), "VNC_FONT_SIZE")
        .appendField("px")
        .appendField(new Blockly.FieldTextInput("Font name"), "VNC_FONT_NAME")
        .appendField(new Blockly.FieldColour("#333333"), "VNC_FONT_COLOR");
    this.setOutput(true, "vnc_font_style");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_dual_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Dual color")
        .appendField(new Blockly.FieldColour("#ff0000"), "VNC_COLOR1")
        .appendField(new Blockly.FieldColour("#3333ff"), "VNC_COLOR2");
    this.setOutput(true, "vnc_gradient");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
}



Blockly.Blocks['vnc_config_theme_list'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Startup")
        .appendField(new Blockly.FieldTextInput("Theme1"), "VNC_CONFIG_ACTIVE_THEME");
    this.setInputsInline(false);
    this.setHelpUrl('http://www.example.com/');
    this.setColour(180);
    this.itemCount_ = 3;
    this.updateShape_();
    this.setOutput(true, 'vnc_theme_settings');
    this.setMutator(new Blockly.Mutator(['vnc_config_theme_list_item']));
    this.setTooltip('');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('vnc_config_theme_list_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('vnc_config_theme_list_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  compose: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    var connections = [];
    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
    // Disconnect any children that don't belong.
    for (var i = 0; i < this.itemCount_; i++) {
      var connection = this.getInput('ADD' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) == -1) {
        connection.disconnect();
      }
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.itemCount_; i++) {
      Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
    }
  },
  saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
  },
  updateShape_: function() {
    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
      this.appendDummyInput('EMPTY')
          .appendField('Add theme');
    }
    // Add new inputs.
    for (var i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        var input = this.appendValueInput('ADD' + i)
                        .setCheck("vnc_theme_definition");
        if (i == 0) {
          input.appendField('Theme list');
        }
      }
    }
    // Remove deleted inputs.
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
  }
};
Blockly.Blocks['vnc_config_theme_list_container'] = {
  init: function() {
    this.setColour(180);
    this.appendDummyInput()
        .appendField('Theme stack');
    this.appendStatementInput('STACK');
    this.setTooltip('');
    this.contextMenu = false;
  }
};
Blockly.Blocks['vnc_config_theme_list_item'] = {
  init: function() {
    this.setColour(180);
    this.appendDummyInput()
        .appendField('Definition');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.contextMenu = false;
  }
};

Blockly.Blocks['vnc_config_theme_def'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Theme")
        .appendField(new Blockly.FieldTextInput("Name"), "VNC_CONFIG_THEME_ID")
        .appendField("Definition")
        .appendField(new Blockly.FieldTextInput("Theme1"), "VNC_CONFIG_THEME_DEF");
    this.setInputsInline(false);
    this.setOutput(true, "vnc_theme_definition");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_config_media'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Media settings")
    this.appendDummyInput()
        .appendField("Volume: Audio")
        .appendField(new Blockly.FieldNumber(0.9, 0, 1), "VNC_CONFIG_VOLUME_AUDIO")
        .appendField("Video")
        .appendField(new Blockly.FieldNumber(0.9, 0, 1), "VNC_CONFIG_VOLUME_VIDEO");
    this.appendDummyInput()
        .appendField("Format: Audio")
        .appendField(new Blockly.FieldTextInput("\"mp3\", \"ogg\""), "VNC_CONFIG_FORMAT_AUDIO");
    this.appendDummyInput()
        .appendField("             Video")
        .appendField(new Blockly.FieldTextInput("\"mp4\", \"ogv\""), "VNC_CONFIG_FORMAT_VIDEO");
    this.appendDummyInput()
        .appendField("Video Size:")
        .appendField(new Blockly.FieldNumber(0.75, 0, 1), "VNC_CONFIG_VIDEO_SIZE");
    this.appendDummyInput()
        .appendField("Video on Canvas:")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "VNC_CONFIG_VIDEO_CANVAS");
    this.setInputsInline(false);
    this.setOutput(true, "vnc_media_settings");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_config_box'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Dialog Box settings")
    this.appendDummyInput()
        .appendField("Box: Width")
        .appendField(new Blockly.FieldNumber(0.75, 0, 1), "VNC_CONFIG_BOX_WIDTH")
        .appendField("Height")
        .appendField(new Blockly.FieldNumber(0.25, 0, 1), "VNC_CONFIG_BOX_HEIGHT");
    this.appendDummyInput()
        .appendField("         Full Height")
        .appendField(new Blockly.FieldNumber(0.875, 0, 1), "VNC_CONFIG_BOX_FULL");
    this.appendDummyInput()
        .appendField("         Scroll speed")
        .appendField(new Blockly.FieldNumber(1, 0, 1), "VNC_CONFIG_BOX_SCROLL");
    this.appendDummyInput()
        .appendField("Balloon: Width")
        .appendField(new Blockly.FieldNumber(0.5, 0, 1), "VNC_CONFIG_BALLOON_WIDTH")
        .appendField("Height")
        .appendField(new Blockly.FieldNumber(0.2, 0, 1), "VNC_CONFIG_BALLOON_HEIGHT");
    this.appendDummyInput()
        .appendField("Autotype")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "VNC_CONFIG_AUTOTYPE_BOX")
        .appendField("Speed")
        .appendField(new Blockly.FieldNumber(1, 0, 1), "VNC_CONFIG_AUTOTYPE_SPEED");
    this.appendDummyInput()
        .appendField("Override \"append\"")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "VNC_CONFIG_APPEND_OVERRIDE");
    this.setInputsInline(false);
    this.setOutput(true, "vnc_box_settings");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_config_menu'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Menu settings")
    this.appendDummyInput()
        .appendField("Use buttons for Menu")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "VNC_CONFIG_MENU_BUTTONS");
    this.appendDummyInput()
        .appendField("Height")
        .appendField(new Blockly.FieldNumber(0.1, 0, 1), "VNC_CONFIG_MENU_HEIGHT")
        .appendField("Autotype")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "VNC_CONFIG_AUTOTYPE_MENU");
    this.setInputsInline(false);
    this.setOutput(true, "vnc_menu_settings");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_config_actor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Actor settings")
    this.appendDummyInput()
        .appendField("Show Avatar")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "VNC_CONFIG_ACTOR_SHOW_AVATAR");
    this.appendDummyInput()
        .appendField("Sprite: Perspective On")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "VNC_CONFIG_ACTOR_PERSPECTIVE");
    this.appendDummyInput()
        .appendField("           Vertical position")
        .appendField(new Blockly.FieldNumber(1, -100, 100), "VNC_CONFIG_ACTOR_YPOS");
    this.appendDummyInput()
        .appendField("           Full body")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "VNC_CONFIG_ACTOR_FULL")
        .appendField("Z-range")
        .appendField(new Blockly.FieldNumber(8, 0, 100), "VNC_CONFIG_ACTOR_ZRANGE")
        .appendField("Y-Offset")
        .appendField(new Blockly.FieldNumber(-8, -100, 100), "VNC_CONFIG_ACTOR_YOFFSET");
    this.setInputsInline(false);
    this.setOutput(true, "vnc_actor_settings");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_config_gameplay'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Gameplay defaults");
    this.appendDummyInput()
        .appendField("Allow macro?")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "VNC_CONFIG_GAMEPLAY_MACRO");
    this.appendDummyInput()
        .appendField("Allow preload resources?")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "VNC_CONFIG_GAMEPLAY_PRELOAD");
    this.appendDummyInput()
        .appendField("Allow resources look ahead?")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "VNC_CONFIG_GAMEPLAY_LOOKAHEAD");
    this.appendDummyInput()
        .appendField("Allow named checkpoints?")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "VNC_CONFIG_GAMEPLAY_CHECKPOINT");
    this.appendDummyInput()
        .appendField("Mature filter on?")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "VNC_CONFIG_GAMEPLAY_FILTER");
    this.appendDummyInput()
        .appendField("        Mask word")
        .appendField(new Blockly.FieldTextInput(" ****"), "VNC_CONFIG_GAMEPLAY_MASK");
    this.appendDummyInput()
        .appendField("        Bad words")
        .appendField(new Blockly.FieldTextInput("\"add\",\"comma\",\" separated\",\" bad\",\" words\",\" here\""), "VNC_CONFIG_GAMEPLAY_BAD");
    this.appendDummyInput()
        .appendField("Effects transition time")
        .appendField(new Blockly.FieldNumber(1, 0, Infinity, 0.1), "VNC_CONFIG_GAMEPLAY_TRANSITION");
    this.setInputsInline(false);
    this.setOutput(true, "vnc_gameplay_settings");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_config_cordova'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Cordova settings (leave blank)");
    this.appendDummyInput()
        .appendField("Device")
        .appendField(new Blockly.FieldTextInput(""), "VNC_CONFIG_CORDOVA_DEVICE")
        .appendField("Device")
        .appendField(new Blockly.FieldTextInput(""), "VNC_CONFIG_CORDOVA_MODEL");
    this.appendDummyInput()
        .appendField("Platform")
        .appendField(new Blockly.FieldTextInput(""), "VNC_CONFIG_CORDOVA_PLATFORM")
        .appendField("UUID")
        .appendField(new Blockly.FieldTextInput(""), "VNC_CONFIG_CORDOVA_UUID")
        .appendField("OS Version")
        .appendField(new Blockly.FieldTextInput(""), "VNC_CONFIG_CORDOVA_OSVER");
    this.setInputsInline(false);
    this.setOutput(true, "vnc_cordova_settings");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
