
Blockly.JavaScript['vnc_config'] = function(block) {
  var value_vnc_theme_settings = Blockly.JavaScript.valueToCode(block, 'VNC_THEME_SETTINGS', Blockly.JavaScript.ORDER_ATOMIC);
  var value_vnc_media_settings = Blockly.JavaScript.valueToCode(block, 'VNC_MEDIA_SETTINGS', Blockly.JavaScript.ORDER_ATOMIC);
  var value_vnc_box_settings = Blockly.JavaScript.valueToCode(block, 'VNC_BOX_SETTINGS', Blockly.JavaScript.ORDER_ATOMIC);
  var value_vnc_menu_settings = Blockly.JavaScript.valueToCode(block, 'VNC_MENU_SETTINGS', Blockly.JavaScript.ORDER_ATOMIC);
  var value_vnc_actor_settings = Blockly.JavaScript.valueToCode(block, 'VNC_ACTOR_SETTINGS', Blockly.JavaScript.ORDER_ATOMIC);
  var value_vnc_gameplay_settings = Blockly.JavaScript.valueToCode(block, 'VNC_GAMEPLAY_SETTINGS', Blockly.JavaScript.ORDER_ATOMIC);
  var value_vnc_cordova_settings = Blockly.JavaScript.valueToCode(block, 'VNC_CORDOVA_SETTINGS', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "Config = {\n";
  if (value_vnc_theme_settings != "")
    code += value_vnc_theme_settings + "\n";
  if (value_vnc_media_settings != "")
    code += value_vnc_media_settings + "\n";
  if (value_vnc_box_settings != "")
    code += value_vnc_box_settings + "\n";
  if (value_vnc_menu_settings != "")
    code += value_vnc_menu_settings + "\n";
  if (value_vnc_actor_settings != "")
    code += value_vnc_actor_settings + "\n";
  if (value_vnc_gameplay_settings != "")
    code += value_vnc_gameplay_settings + "\n";
  if (value_vnc_cordova_settings != "")
    code += value_vnc_cordova_settings + "\n";
  code += "};\n";
  return code;
};
Blockly.JavaScript['vnc_theme'] = function(block) {
  var text_theme_id = block.getFieldValue('THEME_ID');
  var value_vnc_form_style = Blockly.JavaScript.valueToCode(block, 'VNC_FORM_STYLE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_vnc_box_style = Blockly.JavaScript.valueToCode(block, 'VNC_BOX_STYLE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_vnc_menu_style = Blockly.JavaScript.valueToCode(block, 'VNC_MENU_STYLE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_vnc_automap_style = Blockly.JavaScript.valueToCode(block, 'VNC_AUTOMAP_STYLE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = text_theme_id + " = {\n";
  if (value_vnc_form_style != "")
    code += value_vnc_form_style + "\n";
  if (value_vnc_box_style != "")
    code += value_vnc_box_style + "\n";
  if (value_vnc_menu_style != "")
    code += value_vnc_menu_style + "\n";
  if (value_vnc_automap_style != "")
    code += value_vnc_automap_style + "\n";
  code += "};\n";
  return code;
};
Blockly.JavaScript['vnc_theme_form'] = function(block) {
  var value_vnc_config_font_style = Blockly.JavaScript.valueToCode(block, 'VNC_CONFIG_FONT_STYLE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_vnc_config_tip_style = Blockly.JavaScript.valueToCode(block, 'VNC_CONFIG_TIP_STYLE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_vnc_config_tip_color = Blockly.JavaScript.valueToCode(block, 'VNC_CONFIG_TIP_COLOR', Blockly.JavaScript.ORDER_ATOMIC);
  var value_vnc_config_form_back = Blockly.JavaScript.valueToCode(block, 'VNC_CONFIG_FORM_BACK', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "\tformFontStyle:\t\""+value_vnc_config_font_style+"\",\n";
  code += "\tformTipStyle:\t\""+value_vnc_config_tip_style+"\",\n";
  if (value_vnc_config_tip_color != '')
    code += "\tformTipColor:\t"+value_vnc_config_tip_color+",\n";
  if (value_vnc_config_form_back != '')
    code += "\tformElementBack:\t"+value_vnc_config_form_back+",\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['vnc_theme_box'] = function(block) {
  var value_vnc_config_font_style = Blockly.JavaScript.valueToCode(block, 'VNC_CONFIG_FONT_STYLE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_vnc_config_dim_style = Blockly.JavaScript.valueToCode(block, 'VNC_CONFIG_DIM_STYLE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_vnc_config_image_style = Blockly.JavaScript.valueToCode(block, 'VNC_CONFIG_IMAGE_STYLE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_vnc_config_tag_style = Blockly.JavaScript.valueToCode(block, 'VNC_CONFIG_TAG_STYLE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_vnc_config_hilite = Blockly.JavaScript.valueToCode(block, 'VNC_CONFIG_HILITE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_vnc_config_balloon = Blockly.JavaScript.valueToCode(block, 'VNC_CONFIG_BALLOON', Blockly.JavaScript.ORDER_ATOMIC);
  var value_vnc_config_balloon_stroke = Blockly.JavaScript.valueToCode(block, 'VNC_CONFIG_BALLOON_STROKE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "\tboxFontStyle:\t\""+value_vnc_config_font_style+"\",\n";
  if (value_vnc_config_dim_style != '')
    code += "\tboxDimStyle:\t"+value_vnc_config_dim_style+",\n";
  if (value_vnc_config_image_style != '')
    code += "\tboxImageStyle:\t"+value_vnc_config_image_style+",\n";
  code += "\tboxTagStyle:\t\""+value_vnc_config_tag_style+"\",\n";
  if (value_vnc_config_hilite != '')
    code += "\tboxMenuHilite:\t"+value_vnc_config_hilite+",\n";
  if (value_vnc_config_balloon != '')
    code += "\tballoonFillStyle:\t"+value_vnc_config_balloon+",\n";
  if (value_vnc_config_balloon_stroke != '')
    code += "\tballoonStrokeStyle:\t"+value_vnc_config_balloon_stroke+",\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['vnc_theme_menu'] = function(block) {
  var value_vnc_config_menu_prompt = Blockly.JavaScript.valueToCode(block, 'VNC_CONFIG_MENU_PROMPT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_vnc_config_menu_base = Blockly.JavaScript.valueToCode(block, 'VNC_CONFIG_MENU_BASE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_vnc_config_menu_hover = Blockly.JavaScript.valueToCode(block, 'VNC_CONFIG_MENU_HOVER', Blockly.JavaScript.ORDER_ATOMIC);
  var value_vnc_config_menu_click = Blockly.JavaScript.valueToCode(block, 'VNC_CONFIG_MENU_CLICK', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  if (value_vnc_config_menu_prompt != '')
    code += "\tmenuPrompt:\t"+value_vnc_config_menu_prompt+",\n";
  if (value_vnc_config_menu_base != '')
    code += "\tmenuBase:\t"+value_vnc_config_menu_base+",\n";
  if (value_vnc_config_menu_hover != '')
    code += "\tmenuHover:\t"+value_vnc_config_menu_hover+",\n";
  if (value_vnc_config_menu_click != '')
    code += "\tmenuClick:\t"+value_vnc_config_menu_click+",\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['vnc_theme_automap'] = function(block) {
  var value_vnc_config_automap_mask = Blockly.JavaScript.valueToCode(block, 'VNC_CONFIG_AUTOMAP_MASK', Blockly.JavaScript.ORDER_ATOMIC);
  var value_vnc_config_automap_pointer = Blockly.JavaScript.valueToCode(block, 'VNC_CONFIG_AUTOMAP_POINTER', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  if (value_vnc_config_automap_mask != '')
    code += "\tautomapMask:\t"+value_vnc_config_automap_mask+",\n";
  if (value_vnc_config_automap_pointer != '')
    code += "\tautomapPointer:\t"+value_vnc_config_automap_pointer+",\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['vnc_font'] = function(block) {
  var dropdown_vnc_font_weight = block.getFieldValue('VNC_FONT_WEIGHT');
  var number_vnc_font_size = block.getFieldValue('VNC_FONT_SIZE');
  var text_vnc_font_name = block.getFieldValue('VNC_FONT_NAME');
  var colour_vnc_font_color = block.getFieldValue('VNC_FONT_COLOR');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_vnc_font_weight.toLowerCase()+" "+number_vnc_font_size+" '"+text_vnc_font_name+"' "+colour_vnc_font_color;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['vnc_dual_color'] = function(block) {
  var colour_vnc_color1 = block.getFieldValue('VNC_COLOR1');
  var colour_vnc_color2 = block.getFieldValue('VNC_COLOR2');
  // TODO: Assemble JavaScript into code variable.
  var code = "'"+colour_vnc_color1+" "+colour_vnc_color2+"'";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['vnc_config_theme_list'] = function(block) {
  // Create a list with any number of elements of any type.
  var elements = new Array(block.itemCount_);
  var text_vnc_config_active_theme = block.getFieldValue('VNC_CONFIG_ACTIVE_THEME');
  for (var i = 0; i < block.itemCount_; i++) {
    elements[i] = Blockly.JavaScript.valueToCode(block, 'ADD' + i,
        Blockly.JavaScript.ORDER_COMMA) || 'null';
  }
  var code = "\tthemeList:\t";
  code += '[' + elements.join(',') + '],\n';
  code += "\tactiveTheme:\t'"+text_vnc_config_active_theme+"',\n";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['vnc_config_theme_def'] = function(block) {
  var text_vnc_config_theme_id = block.getFieldValue('VNC_CONFIG_THEME_ID');
  var text_vnc_config_theme_def = block.getFieldValue('VNC_CONFIG_THEME_DEF');
  // TODO: Assemble JavaScript into code variable.
  var code = "'"+text_vnc_config_theme_id+"', "+text_vnc_config_theme_def;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['vnc_config_media'] = function(block) {
  var number_vnc_config_volume_audio = block.getFieldValue('VNC_CONFIG_VOLUME_AUDIO');
  var number_vnc_config_volume_video = block.getFieldValue('VNC_CONFIG_VOLUME_VIDEO');
  var text_vnc_config_format_audio = block.getFieldValue('VNC_CONFIG_FORMAT_AUDIO');
  var text_vnc_config_format_video = block.getFieldValue('VNC_CONFIG_FORMAT_VIDEO');
  var number_vnc_config_video_size = block.getFieldValue('VNC_CONFIG_VIDEO_SIZE');
  var checkbox_vnc_config_video_canvas = block.getFieldValue('VNC_CONFIG_VIDEO_CANVAS') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = "\tvolumeAudio:\t"+number_vnc_config_volume_audio+",\n";
  code += "\tvolumeVideo:\t"+number_vnc_config_volume_video+",\n";
  code += "\taudioFormat:\t["+text_vnc_config_format_audio+"],\n";
  code += "\tmovieFormat:\t["+text_vnc_config_format_video+"],\n";
  code += "\tmovieSize:\t"+number_vnc_config_video_size+",\n";
  code += "\tmovieOnCanvas:\t"+checkbox_vnc_config_video_canvas+",\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['vnc_config_box'] = function(block) {
  var number_vnc_config_box_width = block.getFieldValue('VNC_CONFIG_BOX_WIDTH');
  var number_vnc_config_box_height = block.getFieldValue('VNC_CONFIG_BOX_HEIGHT');
  var number_vnc_config_box_full = block.getFieldValue('VNC_CONFIG_BOX_FULL');
  var number_vnc_config_box_scroll = block.getFieldValue('VNC_CONFIG_BOX_SCROLL');
  var number_vnc_config_balloon_width = block.getFieldValue('VNC_CONFIG_BALLOON_WIDTH');
  var number_vnc_config_balloon_height = block.getFieldValue('VNC_CONFIG_BALLOON_HEIGHT');
  var checkbox_vnc_config_autotype_box = block.getFieldValue('VNC_CONFIG_AUTOTYPE_BOX') == 'TRUE';
  var number_vnc_config_autotype_speed = block.getFieldValue('VNC_CONFIG_AUTOTYPE_SPEED');
  var checkbox_vnc_config_append_override = block.getFieldValue('VNC_CONFIG_APPEND_OVERRIDE') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = "\tboxWidth:\t"+number_vnc_config_box_width+",\n";
  code += "\tboxHeight:\t"+number_vnc_config_box_height+",\n";
  code += "\tboxFullHeight:\t"+number_vnc_config_box_full+",\n";
  code += "\tboxScrollSpeed:\t"+number_vnc_config_box_scroll+",\n";
  code += "\tballoonWidth:\t"+number_vnc_config_balloon_width+",\n";
  code += "\tballoonHeight:\t"+number_vnc_config_balloon_height+",\n";
  code += "\tboxAutotype:\t"+checkbox_vnc_config_autotype_box+",\n";
  code += "\tboxAutotypeSpeed:\t"+number_vnc_config_autotype_speed+",\n";
  code += "\tboxAppendOverride:\t"+checkbox_vnc_config_append_override+",\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['vnc_config_menu'] = function(block) {
  var checkbox_vnc_config_menu_buttons = block.getFieldValue('VNC_CONFIG_MENU_BUTTONS') == 'TRUE';
  var number_vnc_config_menu_height = block.getFieldValue('VNC_CONFIG_MENU_HEIGHT');
  var checkbox_vnc_config_autotype_menu = block.getFieldValue('VNC_CONFIG_AUTOTYPE_MENU') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = "\tmenuUseButtons:\t"+checkbox_vnc_config_menu_buttons+",\n";
  code += "\tmenuHeight:\t"+number_vnc_config_menu_height+",\n";
  code += "\tmenuAutotype:\t"+checkbox_vnc_config_autotype_menu+",\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['vnc_config_actor'] = function(block) {
  var checkbox_vnc_config_actor_show_avatar = block.getFieldValue('VNC_CONFIG_ACTOR_SHOW_AVATAR') == 'TRUE';
  var checkbox_vnc_config_actor_perspective = block.getFieldValue('VNC_CONFIG_ACTOR_PERSPECTIVE') == 'TRUE';
  var number_vnc_config_actor_ypos = block.getFieldValue('VNC_CONFIG_ACTOR_YPOS');
  var checkbox_vnc_config_actor_full = block.getFieldValue('VNC_CONFIG_ACTOR_FULL') == 'TRUE';
  var number_vnc_config_actor_zrange = block.getFieldValue('VNC_CONFIG_ACTOR_ZRANGE');
  var number_vnc_config_actor_yoffset = block.getFieldValue('VNC_CONFIG_ACTOR_YOFFSET');
  // TODO: Assemble JavaScript into code variable.
  var code = "\tactorShowAvatar:\t"+checkbox_vnc_config_actor_show_avatar+",\n";
  code += "\tactorPerspective:\t"+checkbox_vnc_config_actor_perspective+",\n";
  code += "\tactorYPosition:\t"+number_vnc_config_actor_ypos+",\n";
  code += "\tactorFullBody:\t"+checkbox_vnc_config_actor_full+",\n";
  code += "\tactorRange:\t"+number_vnc_config_actor_zrange+",\n";
  code += "\tactorPersOffset:\t"+number_vnc_config_actor_yoffset+",\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['vnc_config_gameplay'] = function(block) {
  var checkbox_vnc_config_gameplay_macro = block.getFieldValue('VNC_CONFIG_GAMEPLAY_MACRO') == 'TRUE';
  var checkbox_vnc_config_gameplay_preload = block.getFieldValue('VNC_CONFIG_GAMEPLAY_PRELOAD') == 'TRUE';
  var checkbox_vnc_config_gameplay_lookahead = block.getFieldValue('VNC_CONFIG_GAMEPLAY_LOOKAHEAD') == 'TRUE';
  var checkbox_vnc_config_gameplay_checkpoint = block.getFieldValue('VNC_CONFIG_GAMEPLAY_CHECKPOINT') == 'TRUE';
  var checkbox_vnc_config_gameplay_filter = block.getFieldValue('VNC_CONFIG_GAMEPLAY_FILTER') == 'TRUE';
  var text_vnc_config_gameplay_mask = block.getFieldValue('VNC_CONFIG_GAMEPLAY_MASK');
  var text_vnc_config_gameplay_bad = block.getFieldValue('VNC_CONFIG_GAMEPLAY_BAD');
  var number_vnc_config_gameplay_transition = block.getFieldValue('VNC_CONFIG_GAMEPLAY_TRANSITION');
  // TODO: Assemble JavaScript into code variable.
  var code = "\tgameAllowMacro:\t"+checkbox_vnc_config_gameplay_macro+",\n";
  code += "\tgameAllowPreload:\t"+checkbox_vnc_config_gameplay_preload+",\n";
  code += "\tgameAllowLookAhead:\t"+checkbox_vnc_config_gameplay_lookahead+",\n";
  code += "\tgameNamedCheckpoints:\t"+checkbox_vnc_config_gameplay_checkpoint+",\n";
  code += "\tgameMatureFilter:\t"+checkbox_vnc_config_gameplay_filter+",\n";
  code += "\tgameAltWord:\t'"+text_vnc_config_gameplay_mask+"',\n";
  code += "\tgameBadWords:\t["+text_vnc_config_gameplay_bad+"],\n";
  code += "\ttransTime:\t"+number_vnc_config_gameplay_transition+",\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['vnc_config_cordova'] = function(block) {
  var text_vnc_config_cordova_device = block.getFieldValue('VNC_CONFIG_CORDOVA_DEVICE');
  var text_vnc_config_cordova_model = block.getFieldValue('VNC_CONFIG_CORDOVA_MODEL');
  var text_vnc_config_cordova_platform = block.getFieldValue('VNC_CONFIG_CORDOVA_PLATFORM');
  var text_vnc_config_cordova_uuid = block.getFieldValue('VNC_CONFIG_CORDOVA_UUID');
  var text_vnc_config_cordova_osver = block.getFieldValue('VNC_CONFIG_CORDOVA_OSVER');
  // TODO: Assemble JavaScript into code variable.
  var code = "\tdevCordova:\t'"+text_vnc_config_cordova_device+"',\n";
  code += "\tdevModel:\t'"+text_vnc_config_cordova_model+"',\n";
  code += "\tdevPlatform:\t'"+text_vnc_config_cordova_platform+"',\n";
  code += "\tdevUUID:\t'"+text_vnc_config_cordova_uuid+"',\n";
  code += "\tdevOSVer:\t'"+text_vnc_config_cordova_osver+"',\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
