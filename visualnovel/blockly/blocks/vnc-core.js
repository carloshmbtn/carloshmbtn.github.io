var VNC_FILE_BLANK_MSG = "Add path to file here."
var VNC_TEXT_BLANK_MSG = "Add text here."

Blockly.Blocks['vnc_script'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("VNC Script");
    this.appendDummyInput()
        .appendField("Title")
        .appendField(new Blockly.FieldTextInput("Add script title here"), "SCRIPT_LABEL");
    this.appendStatementInput("SCRIPT_LINES")
        .setCheck("vnc_fields")
        .appendField("Script lines");
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

///////// VN-CANVAS ACTOR //////////
Blockly.Blocks['vnc_actor'] = {
  init: function() {
    this.appendValueInput("ACTOR_SHOW")
        .setCheck("Boolean")
        .appendField("Create/Show Actor");
    this.appendDummyInput()
        .appendField("ActorID")
        .appendField(new Blockly.FieldTextInput("actor name"), "ACTOR_ID")
    this.appendStatementInput("ACTOR_FIELDS")
        .setCheck(["vnc_actor_fields", "vnc_effects"]);
    this.appendDummyInput()
        .appendField("Remove actor? ")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "ACTOR_REMOVE");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "vnc_fields");
    this.setNextStatement(true, "vnc_fields");
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_actor_nick'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Nick")
        .appendField(new Blockly.FieldTextInput("nickname"), "ACTOR_NICK")
        .appendField(new Blockly.FieldColour("#99ffff"), "ACTOR_COLOR");
    this.setPreviousStatement(true, ["vnc_actor_fields", "vnc_effects"]);
    this.setNextStatement(true, ["vnc_actor_fields", "vnc_effects"]);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_actor_pos'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Position")
        .appendField(new Blockly.FieldDropdown([["auto", "AUTO"], ["left", "LEFT"], ["right", "RIGHT"], ["center", "CENTER"]]), "ACTOR_POS")
        .appendField("Z-Order")
        .appendField(new Blockly.FieldNumber(0, -9, 9, 0.1), "ACTOR_Z");
    this.setPreviousStatement(true, ["vnc_actor_fields", "vnc_effects"]);
    this.setNextStatement(true, ["vnc_actor_fields", "vnc_effects"]);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_actor_sprite'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sprite Tag")
        .appendField(new Blockly.FieldTextInput("tag"), "ACTOR_SPRITE_TAG");
    this.appendDummyInput()
        .appendField("Sprite path")
        .appendField(new Blockly.FieldTextInput(VNC_FILE_BLANK_MSG), "ACTOR_SPRITE_PATH");
    this.appendDummyInput()
        .appendField("Alignment")
        .appendField(new Blockly.FieldDropdown([["floor", "FLOOR"], ["bottom", "BOTTOM"], ["center", "CENTER"], ["roof", "ROOF"], ["top", "TOP"]]), "ACTOR_ALIGN");
    this.appendDummyInput()
        .appendField("Frames")
        .appendField(new Blockly.FieldNumber(0, 0), "ACTOR_SPRITE_FRAMES")
        .appendField("FPS")
        .appendField(new Blockly.FieldNumber(0, 0, 100), "ACTOR_SPRITE_FPS")
        .appendField("Repetitions")
        .appendField(new Blockly.FieldNumber(-1, -1), "ACTOR_SPRITE_REPS");
    this.appendDummyInput()
        .appendField("Remove sprite?")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "ACTOR_SPRITE_REMOVE");
    this.setPreviousStatement(true, ["vnc_actor_fields", "vnc_effects"]);
    this.setNextStatement(true, ["vnc_actor_fields", "vnc_effects"]);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_actor_avatar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Avatar Tag")
        .appendField(new Blockly.FieldTextInput("tag"), "ACTOR_AVATAR_TAG");
    this.appendDummyInput()
        .appendField("Avatar path")
        .appendField(new Blockly.FieldTextInput(VNC_FILE_BLANK_MSG), "ACTOR_AVATAR_PATH");
    this.appendDummyInput()
        .appendField("Frames")
        .appendField(new Blockly.FieldNumber(0, 0), "ACTOR_AVATAR_FRAMES")
        .appendField("FPS")
        .appendField(new Blockly.FieldNumber(0, 0, 100), "ACTOR_AVATAR_FPS")
        .appendField("Repetitions")
        .appendField(new Blockly.FieldNumber(-1, -1), "ACTOR_AVATAR_REPS");
    this.setPreviousStatement(true, ["vnc_actor_fields", "vnc_effects"]);
    this.setNextStatement(true, ["vnc_actor_fields", "vnc_effects"]);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_actor_dialog'] = {
  init: function() {
    this.appendValueInput("ACTOR_DIALOG_VALUE")
        .setCheck("String")
        .appendField("Display dialog in")
        .appendField(new Blockly.FieldDropdown([["textbox", "SAY"], ["balloon", "BALLOON"]]), "ACTOR_DIALOG");
    this.appendDummyInput()
        .appendField("Append")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "ACTOR_APPEND")
        .appendField("Add voice dub")
        .appendField(new Blockly.FieldTextInput(VNC_FILE_BLANK_MSG), "ACTOR_VOICE");
    this.setInputsInline(false);
    this.setPreviousStatement(true, ["vnc_actor_fields", "vnc_effects"]);
    this.setNextStatement(true, ["vnc_actor_fields", "vnc_effects"]);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

////////// VN-CANVAS SCENE, OVERLAY //////////
Blockly.Blocks['vnc_scene'] = {
  init: function() {
    this.appendValueInput("SCENE_SRC")
        .setCheck(["String", "Colour"])
        .appendField("Create background from");
    this.appendStatementInput("SCENE_FIELDS")
        .setCheck(["vnc_scene_fields", "vnc_effects"]);
    this.setInputsInline(false);
    this.setPreviousStatement(true, "vnc_fields");
    this.setNextStatement(true, "vnc_fields");
    this.setColour(120);
    this.setTooltip('Select colour or background image path');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_scene_objects'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Add scene object")
        .appendField(new Blockly.FieldTextInput(VNC_FILE_BLANK_MSG), "SCENE_OBJECT_PATH");
    this.appendDummyInput()
        .appendField("Location: X")
        .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity, 1), "SCENE_OBJECT_X")
        .appendField("Y:")
        .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity, 1), "SCENE_OBJECT_Y");
    this.appendDummyInput()
        .appendField("Animated? Frames:")
        .appendField(new Blockly.FieldNumber(1, 0, 100, 1), "SCENE_OBJECT_FRAMES")
        .appendField("FPS:")
        .appendField(new Blockly.FieldNumber(10, 0.1, 100, 0.1), "SCENE_OBJECT_FPS");
    this.setPreviousStatement(true, ["vnc_scene_fields", "vnc_effects"]);
    this.setNextStatement(true, ["vnc_scene_fields", "vnc_effects"]);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_overlay'] = {
  init: function() {
    this.appendValueInput("OVERLAY_SRC")
        .setCheck(["vnc_overlay_fields", "Colour", "Boolean"])
        .appendField("Create/Show Overlay")
    this.appendStatementInput("OVERLAY_FIELDS")
        .setCheck(["vnc_overlay_fields", "vnc_effects"]);
    //this.setInputsInline(true);        
    this.setPreviousStatement(true, "vnc_fields");
    this.setNextStatement(true, "vnc_fields");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_overlay_image'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Overlay image?")
        .appendField(new Blockly.FieldTextInput(VNC_FILE_BLANK_MSG), "OVERLAY_PATH");
    this.appendDummyInput()
        .appendField("Offset in X,Y")
        .appendField(new Blockly.FieldTextInput("0,0"), "OVERLAY_OFFSET");
    this.appendDummyInput()
        .appendField("Animated: Frames")
        .appendField(new Blockly.FieldNumber(1, 0, 100, 1), "OVERLAY_FRAMES")
        .appendField("FPS")
        .appendField(new Blockly.FieldNumber(10, 0.1, 100, 0.1), "OVERLAY_FPS");
    this.setOutput(true, "vnc_overlay_fields");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

////////// VN-CANVAS EFFECTS //////////
Blockly.Blocks['vnc_effects_show'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Show/Hide Effects")
        .appendField(new Blockly.FieldDropdown([["dissolve", "DISSOLVE"], ["fade", "FADE"], ["ghost", "GHOST"]]), "VNC_EFFECTS_SHOW_HIDE");
    this.appendDummyInput()
        .appendField("Don't wait?")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "VNC_EFFECTS_WAIT")
        .appendField("Duration")
        .appendField(new Blockly.FieldNumber(1, 0.1, 100, 0.1), "VNC_EFFECTS_TIME");
    this.setPreviousStatement(true, ["vnc_actor_fields", "vnc_scene_fields", "vnc_overlay_fields"]);
    this.setNextStatement(true, ["vnc_actor_fields", "vnc_scene_fields", "vnc_overlay_fields"]);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_effects_slide'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Slide Effects")
        .appendField(new Blockly.FieldDropdown([["left", "LEFT"], ["right", "RIGHT"], ["top", "TOP"], ["bottom", "BOTTOM"]]), "VNC_EFFECTS_SLIDE");
    this.appendDummyInput()
        .appendField("Don't wait?")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "VNC_EFFECTS_WAIT")
        .appendField("Duration")
        .appendField(new Blockly.FieldNumber(1, 0.1, 100, 0.1), "VNC_EFFECTS_TIME");
    this.setPreviousStatement(true, ["vnc_actor_fields", "vnc_scene_fields", "vnc_overlay_fields"]);
    this.setNextStatement(true, ["vnc_actor_fields", "vnc_scene_fields", "vnc_overlay_fields"]);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_effects_pan'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pan Effects")
        .appendField(new Blockly.FieldDropdown([["left", "PANLEFT"], ["right", "PANRIGHT"], ["top", "PANTOP"], ["bottom", "PANBOT"]]), "VNC_EFFECTS_PAN");
    this.appendDummyInput()
        .appendField("Don't wait?")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "VNC_EFFECTS_WAIT")
        .appendField("Duration")
        .appendField(new Blockly.FieldNumber(1, 0.1, 100, 0.1), "VNC_EFFECTS_TIME");
    this.setPreviousStatement(true, ["vnc_actor_fields", "vnc_scene_fields", "vnc_overlay_fields"]);
    this.setNextStatement(true, ["vnc_actor_fields", "vnc_scene_fields", "vnc_overlay_fields"]);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_effects_zoom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Zoom Effects")
        .appendField(new Blockly.FieldDropdown([["in", "ZOOMIN"], ["out", "ZOOMOUT"]]), "VNC_EFFECTS_ZOOM");
    this.appendDummyInput()
        .appendField("Don't wait?")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "VNC_EFFECTS_WAIT")
        .appendField("Duration")
        .appendField(new Blockly.FieldNumber(1, 0.1, 100, 0.1), "VNC_EFFECTS_TIME");
    this.setPreviousStatement(true, ["vnc_actor_fields", "vnc_scene_fields", "vnc_overlay_fields"]);
    this.setNextStatement(true, ["vnc_actor_fields", "vnc_scene_fields", "vnc_overlay_fields"]);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_effects_transform'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Transform Effects")
        .appendField(new Blockly.FieldDropdown([["scale", "SCALE"], ["rotate", "ROTATE"], ["translate", "TRANSLATE"]]), 
            /*function(option) {
                var isRotate = (option == "ROTATE");
                var isTranslate = (option == "TRANSLATE");
                this.sourceBlock_.updateRotate(isRotate);
                this.sourceBlock_.updateTranslate(isTranslate);
            }),*/ "VNC_EFFECTS_TRANSFORM") 
        .appendField(new Blockly.FieldTextInput("args"), "VNC_EFFECTS_ARGS");
    this.appendDummyInput()
        .appendField("Don't wait?")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "VNC_EFFECTS_WAIT")
        .appendField("Duration")
        .appendField(new Blockly.FieldNumber(1, 0.1, 100, 0.1), "VNC_EFFECTS_TIME");
    this.setPreviousStatement(true, ["vnc_actor_fields", "vnc_scene_fields", "vnc_overlay_fields"]);
    this.setNextStatement(true, ["vnc_actor_fields", "vnc_scene_fields", "vnc_overlay_fields"]);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  /*updateRotate: function(state) {
    // Add or remove a Rotator Input.
    var inputExists = this.getInput('ROTATOR');
    if (state) {
      if (!inputExists) {
        this.sourceBlock_.appendField(new Blockly.FieldNumber(1, -100, 100, 0.1), "ROTATOR");
      }
    } else if (inputExists) {
      this.removeInput('ROTATOR');
    }
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var rotatorInput = (this.getFieldValue('VNC_EFFECTS_TRANSFORM') == 'ROTATE');
    container.setAttribute('rotator_input', rotatorInput);
    return container;
  },
  domToMutation: function(xmlElement) {
    var rotatorInput = (xmlElement.getAttribute('rotator_input') == 'true');
    this.updateRotate(rotatorInput);
  },
  */
};
Blockly.Blocks['vnc_effects_flip'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Flip Effects")
        .appendField(new Blockly.FieldDropdown([["horizontal", "X"], ["vertical", "Y"], ["horizontal+vertical", "XY"]]), "VNC_EFFECTS_FLIP");
    this.appendDummyInput()
        .appendField("Dont wait?")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "VNC_EFFECTS_WAIT")
        .appendField("Duration")
        .appendField(new Blockly.FieldNumber(1, 0.1, 100, 0.1), "VNC_EFFECTS_TIME");
    this.setPreviousStatement(true, ["vnc_actor_fields", "vnc_scene_fields", "vnc_overlay_fields"]);
    this.setNextStatement(true, ["vnc_actor_fields", "vnc_scene_fields", "vnc_overlay_fields"]);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_effects_filter'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Filter Effects")
        .appendField(new Blockly.FieldDropdown([["luminance", "LUMINANCE"], ["grayscale", "GRAYSCALE"], ["sepia", "SEPIA"], ["brightness", "BRIGHTNESS"], ["threshold", "THRESHOLD"], ["invert", "INVERT"], ["saturate", "SATURATE"], ["sharpen", "SHARPEN"], ["blur", "BLUR"], ["laplace", "LAPLACE"], ["gaussianBlur", "GAUSSIANBLUR"]]), "VNC_EFFECTS_FILTER")
        .appendField(new Blockly.FieldTextInput("args"), "VNC_EFFECTS_ARGS");
    this.appendDummyInput()
        .appendField("Run continuous?")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "VNC_EFFECTS_RUN");
    this.appendDummyInput()
        .appendField("Note: Filters are image manipulation and");
    this.appendDummyInput()
        .appendField("are browser dependent.");
    this.setPreviousStatement(true, ["vnc_actor_fields", "vnc_scene_fields", "vnc_overlay_fields"]);
    this.setNextStatement(true, ["vnc_actor_fields", "vnc_scene_fields", "vnc_overlay_fields"]);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_effects_custom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Custom Effects")
        .appendField(new Blockly.FieldTextInput("Animation name"), "VNC_EFFECTS_CUSTOM");
    this.setPreviousStatement(true, ["vnc_actor_fields", "vnc_scene_fields", "vnc_overlay_fields"]);
    this.setNextStatement(true, ["vnc_actor_fields", "vnc_scene_fields", "vnc_overlay_fields"]);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

///////// VN-CANVAS //////////
Blockly.Blocks['vnc_atmo_rain'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Rain")
        .appendField(new Blockly.FieldNumber(100, 0, 1000, 1), "VNC_ATMO_RAIN")
        .appendField("Stop?")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "VNC_ATMO_STOP");
    this.appendDummyInput()
        .appendField("Direction")
        .appendField(new Blockly.FieldNumber(90, 0, 360, 1), "VNC_ATMO_DIR");
    this.setPreviousStatement(true, "vnc_fields");
    this.setNextStatement(true, "vnc_fields");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_atmo_snow'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Snow")
        .appendField(new Blockly.FieldNumber(100, 0, 1000, 1), "VNC_ATMO_SNOW")
        .appendField("Stop?")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "VNC_ATMO_STOP");
    this.appendDummyInput()
        .appendField("Direction")
        .appendField(new Blockly.FieldNumber(90, 0, 360, 1), "VNC_ATMO_DIR");
    this.setPreviousStatement(true, "vnc_fields");
    this.setNextStatement(true, "vnc_fields");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_atmo_cloud'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Cloud")
        .appendField(new Blockly.FieldTextInput(VNC_FILE_BLANK_MSG), "VNC_CLOUD_PATH");
    this.appendDummyInput()
        .appendField("Direction")
        .appendField(new Blockly.FieldNumber(90, 0, 360, 1), "VNC_ATMO_DIR")
        .appendField("Stop?")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "VNC_ATMO_STOP");
    this.setPreviousStatement(true, "vnc_fields");
    this.setNextStatement(true, "vnc_fields");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_atmo_beam'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Beam of light with radius")
        .appendField(new Blockly.FieldNumber(100, 0, 1000, 1), "VNC_ATMO_RADIUS");
    this.appendDummyInput()
        .appendField("Color")
        .appendField(new Blockly.FieldColour("#000000"), "VNC_ATMO_COLOR")
        .appendField("Stop?")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "VNC_ATMO_STOP");
    this.setPreviousStatement(true, "vnc_fields");
    this.setNextStatement(true, "vnc_fields");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

////////// VN-CANVAS AUDIO/VIDEO //////////
Blockly.Blocks['vnc_audio'] = {
  init: function() {
    this.appendValueInput("AUDIO_SRC")
        .setCheck("String")
        .appendField("Play")
        .appendField(new Blockly.FieldDropdown([["background music", "BGM"], ["background sound", "BGS"], ["sound effect", "SE"]]), "AUDIO_TYPE");
    this.appendDummyInput()
        .appendField("Action")
        .appendField(new Blockly.FieldDropdown([["play", "PLAY"], ["stop", "STOP"], ["rewind", "REWIND"], ["pause", "PAUSE"], ["remove", "REMOVE"]]), "AUDIO ACTION");
    this.appendStatementInput("AUDIO_FIELDS")
        .setCheck("vnc_audio_fields");
    this.setInputsInline(false);        
    this.setPreviousStatement(true, "vnc_fields");
    this.setNextStatement(true, "vnc_fields");
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_audio_repeat'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SE Repeat")
        .appendField(new Blockly.FieldNumber(0, 0, 100, 0.1), "AUDIO_REPEAT")
        .appendField("times");
    this.setPreviousStatement(true, "vnc_audio_fields");
    this.setNextStatement(true, "vnc_audio_fields");
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_audio_delay'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Delay")
        .appendField(new Blockly.FieldNumber(0, 0, Infinity, 0.1), "AUDIO_DELAY")
        .appendField("seconds");
    this.setPreviousStatement(true, "vnc_audio_fields");
    this.setNextStatement(true, "vnc_audio_fields");
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_audio_volume'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Adjust volume")
        .appendField(new Blockly.FieldNumber(0, -1, 1, 0.1), "AUDIO_ADJUST");
    this.setPreviousStatement(true, "vnc_audio_fields");
    this.setNextStatement(true, "vnc_audio_fields");
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_video'] = {
  init: function() {
    this.appendValueInput("VIDEO_SRC")
        .setCheck("String")
        .appendField("Play video");
    this.setPreviousStatement(true, "vnc_fields");
    this.setNextStatement(true, "vnc_fields");
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

////////// VN-CANVAS MENU //////////
Blockly.Blocks['vnc_menu'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Add menu")
        .appendField(new Blockly.FieldTextInput("Prompt"), "MENU PROMPT");
    this.appendStatementInput("MENU_FIELDS")
        .setCheck("vnc_menu_fields");
    this.setPreviousStatement(true, "vnc_fields");
    this.setNextStatement(true, "vnc_fields");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_menu_item'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Select")
        .appendField(new Blockly.FieldTextInput("Item"), "MENU_ITEM")
        .appendField("to jump to")
        .appendField(new Blockly.FieldTextInput("Add label here"), "MENU_ACTION");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "vnc_menu_fields");
    this.setNextStatement(true, "vnc_menu_fields");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_box'] = {
  init: function() {
    this.appendValueInput("BOX_SHOW")
        .setCheck("Boolean")
        .appendField("Text box")
    this.appendStatementInput("BOX_FIELDS")
        .setCheck("vnc_box_fields");
    this.setPreviousStatement(true, "vnc_fields");
    this.setNextStatement(true, "vnc_fields");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_box_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Box position")
        .appendField(new Blockly.FieldDropdown([["bottom", "BOTTOM"], ["center", "CENTER"], ["top", "TOP"], ["full", "FULL"]]), "BOX_POSITION");
    this.setPreviousStatement(true, "vnc_box_fields");
    this.setNextStatement(true, "vnc_box_fields");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_box_align'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Box alignment")
        .appendField(new Blockly.FieldDropdown([["left", "LEFT"], ["center", "CENTER"], ["right", "RIGHT"]]), "BOX_ALIGN");
    this.setPreviousStatement(true, "vnc_box_fields");
    this.setNextStatement(true, "vnc_box_fields");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_box_background'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Box background")
        .appendField(new Blockly.FieldDropdown([["dim", "DIM"], ["none", "NONE"], ["image", "IMAGE"]]), "BOX_BACKGROUND");
    this.setPreviousStatement(true, "vnc_box_fields");
    this.setNextStatement(true, "vnc_box_fields");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_text'] = {
  init: function() {
    this.appendValueInput("TEXT_DIALOG")
        .setCheck("String")
        .appendField("Dialog text");
    this.appendDummyInput()
        .appendField("Append")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "TEXT_APPEND")
        .appendField("Align")
        .appendField(new Blockly.FieldDropdown([["left", "LEFT"], ["center", "CENTER"], ["right", "RIGHT"]]), "TEXT_ALIGN");
    this.appendStatementInput("TEXT_FIELDS")
        .setCheck("vnc_text_fields");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "vnc_fields");
    this.setNextStatement(true, "vnc_fields");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_text_speaker'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Speaker")
        .appendField(new Blockly.FieldTextInput("Name"), "TEXT_SPEAKER");
    this.setPreviousStatement(true, "vnc_text_fields");
    this.setNextStatement(true, "vnc_text_fields");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_text_font'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Font")
        .appendField(new Blockly.FieldTextInput("CSS definition"), "TEXT_FONT");
    this.setPreviousStatement(true, "vnc_text_fields");
    this.setNextStatement(true, "vnc_text_fields");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_text_offset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Offset in X,Y")
        .appendField(new Blockly.FieldTextInput("10,20"), "TEXT_OFFSET");
    this.setPreviousStatement(true, "vnc_text_fields");
    this.setNextStatement(true, "vnc_text_fields");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_text_pause'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pause for")
        .appendField(new Blockly.FieldNumber(0, 0, Infinity, 0.1), "TEXT_PAUSE")
        .appendField("seconds");
    this.setPreviousStatement(true, "vnc_text_fields");
    this.setNextStatement(true, "vnc_text_fields");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_text_effects'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Text effects")
        .appendField(new Blockly.FieldDropdown([["none", "NONE"], ["fade", "FADE"], ["scroll", "SCROLL"], ["autotype", "AUTOTYPE"], ["no autotype", "NOAUTOTYPE"]]), "TEXT_EFFECTS");
    this.setPreviousStatement(true, "vnc_text_fields");
    this.setNextStatement(true, "vnc_text_fields");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_text_voice'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Voice dub")
        .appendField(new Blockly.FieldTextInput(VNC_FILE_BLANK_MSG), "TEXT_VOICE");
    this.setPreviousStatement(true, "vnc_text_fields");
    this.setNextStatement(true, "vnc_text_fields");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

////////// VN-CANVAS FLOW //////////
Blockly.Blocks['vnc_jump'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Jump to")
        .appendField(new Blockly.FieldTextInput("label"), "VNC_JUMP_LABEL");
    this.appendStatementInput("VNC_JUMP_COND")
        .setCheck("vnc_jump_fields")
        .appendField("if:");
    this.setPreviousStatement(true, "vnc_fields");
    this.setNextStatement(true, "vnc_fields");
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_jump_cond_str'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("StringVariable"), "JUMP_VAR")
        .appendField("is")
        .appendField(new Blockly.FieldTextInput("String"), "JUMP_VAL");
    this.setPreviousStatement(true, "vnc_jump_fields");
    this.setNextStatement(true, "vnc_jump_fields");
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_jump_cond_num'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("NumericVariable"), "JUMP_VAR")
        .appendField(">=")
        .appendField(new Blockly.FieldNumber(0), "JUMP_VAL");
    this.setPreviousStatement(true, "vnc_jump_fields");
    this.setNextStatement(true, "vnc_jump_fields");
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_jump_cond_bool'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("BooleanVariable"), "JUMP_VAR")
        .appendField("is")
        .appendField(new Blockly.FieldDropdown([["true", "TRUE"], ["false", "FALSE"]]), "JUMP_VAL");
    this.setPreviousStatement(true, "vnc_jump_fields");
    this.setNextStatement(true, "vnc_jump_fields");
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_label'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Label:")
        .appendField(new Blockly.FieldTextInput("Add new label here"), "VNC_LABEL");
    this.setPreviousStatement(true, "vnc_fields");
    this.setNextStatement(true, "vnc_fields");
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_wait'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Wait for")
        .appendField(new Blockly.FieldNumber(0, 0, Infinity, 0.1), "WAIT_SECONDS")
        .appendField("seconds");
    this.setPreviousStatement(true, "vnc_fields");
    this.setNextStatement(true, "vnc_fields");
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

////////// VN-CANVAS CFORM/FORM //////////
Blockly.Blocks['vnc_cform'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Define a Canvas form");
    this.appendDummyInput()
        .appendField("with ID")
        .appendField(new Blockly.FieldTextInput("Add cform ID here"), "CFORM_ID")
        .appendField("and modal")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "CFORM_MODAL");
    this.appendDummyInput()
        .appendField("Action: ")
        .appendField(new Blockly.FieldDropdown([["show form", "SHOW"], ["hide form", "HIDE"], ["close form", "CLOSE"]]), "CFORM_ACTION");
    this.appendStatementInput("CFORM_FIELDS")
        .setCheck("vnc_cform_fields");
    this.setPreviousStatement(true, "vnc_fields");
    this.setNextStatement(true, "vnc_fields");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_cform_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Button ")
        .appendField(new Blockly.FieldTextInput("Add button name here"), "CFORM_BUTTON_ID");
    this.appendDummyInput()
        .appendField("Position from top-left: X")
        .appendField(new Blockly.FieldNumber(0, 0), "CFORM_BUTTON_X")
        .appendField("Y")
        .appendField(new Blockly.FieldNumber(0, 0), "CFORM_BUTTON_Y");
    this.appendStatementInput("CFORM_BUTTON_FIELDS")
        .setCheck("vnc_cform_button_fields");
    this.setPreviousStatement(true, "vnc_cform_fields");
    this.setNextStatement(true, "vnc_cform_fields");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_cform_button_wh'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Dimensions: width")
        .appendField(new Blockly.FieldNumber(0, 0), "CFORM_BUTTON_W")
        .appendField("height")
        .appendField(new Blockly.FieldNumber(0, 0), "CFORM_BUTTON_H");
    this.setPreviousStatement(true, "vnc_cform_button_fields");
    this.setNextStatement(true, "vnc_cform_button_fields");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_cform_button_back'] = {
  init: function() {
    this.appendValueInput("CFORM_BUTTON_SRC")
        .setCheck(["String", "Colour"])
        .appendField("Button back")
        .appendField(new Blockly.FieldDropdown([["base", "BASE"], ["hover", "HOVER"], ["click", "CLICK"]]), "CFORM_BUTTON_IMG")
    this.setPreviousStatement(true, "vnc_cform_button_fields");
    this.setNextStatement(true, "vnc_cform_button_fields");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_cform_button_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Show text")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "CFORM_BUTTON_TEXT");
    this.setPreviousStatement(true, "vnc_cform_button_fields");
    this.setNextStatement(true, "vnc_cform_button_fields");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_cform_button_tip'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tool tip")
        .appendField(new Blockly.FieldTextInput(VNC_TEXT_BLANK_MSG), "CFORM_BUTTON_TIP");
    this.setPreviousStatement(true, "vnc_cform_button_fields");
    this.setNextStatement(true, "vnc_cform_button_fields");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_cform_button_link'] = {
  init: function() {
    this.appendStatementInput("CFORM_BUTTON_LINK")
        .setCheck("vnc_fields")
        .appendField("Button action");
    this.setPreviousStatement(true, "vnc_cform_button_fields");
    this.setNextStatement(true, "vnc_cform_button_fields");
    this.setColour(210);
    this.setTooltip('Use a VNC jump, set or macro');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_cform_picture'] = {
  init: function() {
    this.appendValueInput("CFORM_PICTURE_FRAMES")
        .setCheck("Array")
        .appendField("Picture")
        .appendField(new Blockly.FieldTextInput("Add picture name"), "CFORM_PICTURE_ID");
    this.appendDummyInput()
        .appendField("Position from top-left: X")
        .appendField(new Blockly.FieldNumber(0, 0), "CFORM_PICTURE_X")
        .appendField("Y")
        .appendField(new Blockly.FieldNumber(0, 0), "CFORM_PICTURE_Y");
    this.appendDummyInput()
        .appendField("Frames per sec")
        .appendField(new Blockly.FieldNumber(0, 0), "CFORM_PICTURE_FPS");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "vnc_cform_fields");
    this.setNextStatement(true, "vnc_cform_fields");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_cform_marquee'] = {
  init: function() {
    this.appendValueInput("CFORM_MARQUEE_FRAMES")
        .setCheck("Array")
        .appendField("Marquee")
        .appendField(new Blockly.FieldTextInput("Add marquee name"), "CFORM_MARQUEE_ID");
    this.appendDummyInput()
        .appendField("Position from top-left: X")
        .appendField(new Blockly.FieldNumber(0, 0), "CFORM_MARQUEE_X")
        .appendField("Y")
        .appendField(new Blockly.FieldNumber(0, 0), "CFORM_MARQUEE_Y");
    this.appendDummyInput()
        .appendField("Dimensions: Width")
        .appendField(new Blockly.FieldNumber(0, 0), "CFORM_MARQUEE_W")
        .appendField("Height")
        .appendField(new Blockly.FieldNumber(0, 0), "CFORM_MARQUEE_H");
    this.appendDummyInput()
        .appendField("Frames per sec")
        .appendField(new Blockly.FieldNumber(0, 0), "CFORM_MARQUEE_FPS");
    this.appendStatementInput("CFORM_MARQUEE_FIELDS")
        .setCheck("vnc_fields")
        .appendField("Timeout?")
        .appendField(new Blockly.FieldNumber(0, 0), "CFORM_MARQUEE_TIMEOUT");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "vnc_cform_fields");
    this.setNextStatement(true, "vnc_cform_fields");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_form'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Define an HTML form");
    this.appendDummyInput()
        .appendField("with ID")
        .appendField(new Blockly.FieldTextInput("Add form ID here"), "FORM_ID")
    this.appendStatementInput("FORM_FIELDS")
        .setCheck("vnc_form_fields");
    this.setPreviousStatement(true, "vnc_fields");
    this.setNextStatement(true, "vnc_fields");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_form_element'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Add")
        .appendField(new Blockly.FieldDropdown([["checkbox", "CHECKBOX"], ["fieldset", "FIELDSET"], ["input", "INPUT"], ["radio", "RADIO"], ["select", "SELECT"], ["slider", "SLIDER"], ["spinbox", "SPINBOX"], ["submit", "SUBMIT"], ["textarea", "TEXTAREA"]]), "FORM_ELEMENT")
        .appendField("with name")
        .appendField(new Blockly.FieldTextInput("Add name"), "FORM_ELEMENT_ID");
    this.appendDummyInput()
        .appendField("Bind to variable")
        .appendField(new Blockly.FieldTextInput("Add variable name"), "FORM_BIND");
    this.appendStatementInput("FORM_ELEMENT_FIELDS")
        .setCheck("vnc_form_element_fields");
    this.setPreviousStatement(true, "vnc_form_fields");
    this.setNextStatement(true, "vnc_form_fields");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_form_tip'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tooltip:")
        .appendField(new Blockly.FieldTextInput(VNC_TEXT_BLANK_MSG), "FORM_TIP");
    this.setPreviousStatement(true, "vnc_form_element_fields");
    this.setNextStatement(true, "vnc_form_element_fields");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_form_placeholder'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Placeholder text")
        .appendField(new Blockly.FieldTextInput(VNC_TEXT_BLANK_MSG), "FORM_PLACEHOLDER");
    this.setPreviousStatement(true, "vnc_form_element_fields");
    this.setNextStatement(true, "vnc_form_element_fields");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_form_radio'] = {
  init: function() {
    this.appendValueInput("FORM_RADIO")
        .setCheck(null)
        .appendField("Radio value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "vnc_form_element_fields");
    this.setNextStatement(true, "vnc_form_element_fields");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_form_select'] = {
  init: function() {
    this.appendValueInput("FORM_SELECT_VALUE")
        .setCheck(null)
        .appendField("Select")
        .appendField(new Blockly.FieldTextInput("Option"), "FORM_SELECT_OPTION")
        .appendField("with value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "vnc_form_element_fields");
    this.setNextStatement(true, "vnc_form_element_fields");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_form_slider'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Slider/Spinbox Min")
        .appendField(new Blockly.FieldNumber(0), "FORM_SLIDER_MIN")
        .appendField("Max")
        .appendField(new Blockly.FieldNumber(0), "FORM_SLIDER_MAX")
        .appendField("Step")
        .appendField(new Blockly.FieldNumber(0), "FORM_SLIDER_STEP");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "vnc_form_element_fields");
    this.setNextStatement(true, "vnc_form_element_fields");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_automap'] = {
  init: function() {
    this.appendValueInput("AUTOMAP_SRC")
        .setCheck(["String", "Boolean"])
        .appendField("Create/Show Automap");
    this.appendDummyInput()
        .appendField("of size")
        .appendField(new Blockly.FieldNumber(1, 1), "AUTOMAP_W")
        .appendField("by")
        .appendField(new Blockly.FieldNumber(1, 1), "AUTOMAP_H");
    this.appendDummyInput()
        .appendField("at position X")
        .appendField(new Blockly.FieldNumber(0, 0), "AUTOMAP_X")
        .appendField("Y")
        .appendField(new Blockly.FieldNumber(0, 0), "AUTOMAP_Y");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "vnc_fields");
    this.setNextStatement(true, "vnc_fields");
    this.setColour(35);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_map'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Map name")
        .appendField(new Blockly.FieldTextInput("Add map name"), "MAP_NAME");
    this.appendStatementInput("MAP_ACCESS")
        .setCheck("vnc_map_fields");
    this.setPreviousStatement(true, "vnc_fields");
    this.setNextStatement(true, "vnc_fields");
    this.setColour(35);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_map_access'] = {
  init: function() {
    this.appendValueInput("MAP_LOCATION_CHOICES")
        .setCheck("Array")
        .appendField("When at")
        .appendField(new Blockly.FieldTextInput("location name"), "MAP_LOCATION")
        .appendField("can go to");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "vnc_map_fields");
    this.setNextStatement(true, "vnc_map_fields");
    this.setColour(35);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_tile'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create tile")
        .appendField(new Blockly.FieldTextInput("Tile name"), "TILE_ID")
        .appendField("at X")
        .appendField(new Blockly.FieldNumber(0, 0, Infinity, 1), "TILE_X")
        .appendField("Y")
        .appendField(new Blockly.FieldNumber(0, 0, Infinity, 1), "TILE_Y");
    this.appendValueInput("TILE_WALL")
        .setCheck("Array")
        .appendField("Walls at [N, E, S, W]");
    this.appendValueInput("TILE_LINK")
        .setCheck("Array")
        .appendField("Go to labels");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "vnc_fields");
    this.setNextStatement(true, "vnc_fields");
    this.setColour(35);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['vnc_animation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create animation")
        .appendField(new Blockly.FieldTextInput("Name"), "ANIMATION_ID");
    this.appendStatementInput("ANIMATION_LIST")
        .setCheck("vnc_overlay_fields");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "vnc_fields");
    this.setNextStatement(true, "vnc_fields");
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_checkpoint'] = {
  init: function() {
    this.appendValueInput("CHECKPOINT_ID")
        .setCheck("String")
        .appendField("Do checkpoint")
        .appendField(new Blockly.FieldDropdown([["load", "LOAD"], ["save", "SAVE"], ["clear", "CLEAR"]]), "CHECKPOINT_ACTION");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "vnc_fields");
    this.setNextStatement(true, "vnc_fields");
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_set_single'] = {
  init: function() {
    this.appendValueInput("SET_SINGLE")
        .setCheck(null)
        .appendField("Variable")
        .appendField(new Blockly.FieldTextInput("Name"), "SET_VARIABLE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, ["vnc_fields", "vnc_set_fields"]);
    this.setNextStatement(true, ["vnc_fields", "vnc_set_fields"]);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_set_multiple'] = {
  init: function() {
    this.appendStatementInput("SET_MULTIPLE")
        .setCheck("vnc_set_fields")
        .appendField("Set variables");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "vnc_fields");
    this.setNextStatement(true, "vnc_fields");
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_macro'] = {
  init: function() {
    this.appendValueInput("MACRO_CALL")
        .setCheck(null)
        .appendField("Call macro")
        .appendField(new Blockly.FieldTextInput("Function Name"), "MACRO_ID");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "vnc_fields");
    this.setNextStatement(true, "vnc_fields");
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_preload'] = {
  init: function() {
    this.appendValueInput("PRELOAD_CALL")
        .setCheck("Array")
        .appendField("Preload resources");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "vnc_fields");
    this.setNextStatement(true, "vnc_fields");
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_screen'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Shake screen")
        .appendField(new Blockly.FieldDropdown([["horizontally", "SHAKE"], ["vertically", "FALL"]]), "SCREEN_EFFECTS")
        .appendField("at magnitide")
        .appendField(new Blockly.FieldNumber(0, 0, Infinity, 0.1), "SCREEN_MAGNITUDE")
        .appendField("for")
        .appendField(new Blockly.FieldNumber(0, 0, Infinity, 0.1), "SCREEN_DURATION")
        .appendField("sec");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "vnc_fields");
    this.setNextStatement(true, "vnc_fields");
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_snapshot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Take screenshot in")
        .appendField(new Blockly.FieldDropdown([["JPEG", "JPEG"], ["PNG", "PNG"]]), "SCREEN_FORMAT")
        .appendField("format");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "vnc_fields");
    this.setNextStatement(true, "vnc_fields");
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['vnc_message'] = {
  init: function() {
    this.appendValueInput("VNC_MESSAGE")
        .setCheck("String")
        .appendField("Display message");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "vnc_fields");
    this.setNextStatement(true, "vnc_fields");
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};