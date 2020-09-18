

function groupByType(text, keyword) {
  var statements = "";
  var tmp_statements = [];
  var p_start = -1;
  var p_end = -1;
  p_start = text.indexOf(", "+keyword+":[",0);
  while (p_start != -1) {
    statements += text.slice(p_end+1, p_start);
    p_end = text.indexOf("]",p_start);
    tmp_statements.push(text.slice(p_start, p_end+1));
    p_start = text.indexOf(", "+keyword+":[",p_end+1);
  }
  statements += text.slice(p_end+1);
  var concat_statements = "";
  for (var i=0; i<tmp_statements.length; i++) {
    var tmp = tmp_statements[i].replace(", "+keyword+":[",'');
    tmp = tmp.replace("]",'');
    concat_statements += (i>0) ? ", "+tmp : tmp;
  }
  var code = "";
  code += statements;
  code += (tmp_statements.length>0) ? ", "+keyword+":["+concat_statements+"]" : "";
  return code;
}

Blockly.JavaScript['vnc_script'] = function(block) {
  var text_script_label = block.getFieldValue('SCRIPT_LABEL');
  var statements_script_lines = Blockly.JavaScript.statementToCode(block, 'SCRIPT_LINES');
  // TODO: Assemble JavaScript into code variable.
  var code = text_script_label+" = [\n";
  code += "  label, '"+ text_script_label + "',\n";
  if (statements_script_lines != "")
    code += statements_script_lines + "\n";
  code += "];\n";
  return code;
};

////////// VN-CANVAS ACTOR //////////
Blockly.JavaScript['vnc_actor'] = function(block) {
  var value_actor_show = Blockly.JavaScript.valueToCode(block, 'ACTOR_SHOW', Blockly.JavaScript.ORDER_ATOMIC);
  //var checkbox_actor_show = block.getFieldValue('ACTOR_SHOW') == 'TRUE';
  var value_actor_id = block.getFieldValue('ACTOR_ID');
  var statements_actor_fields = Blockly.JavaScript.statementToCode(block, 'ACTOR_FIELDS');
  var checkbox_actor_remove = block.getFieldValue('ACTOR_REMOVE') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = "actor, {id:'" + value_actor_id +"'";
  if (checkbox_actor_remove) 
    code += ", remove:'actor'";
  else {
    //if (!checkbox_actor_show) code += ", show:false";
    if (eval(value_actor_show) == false)
      code += ", show:false";
    else
      code += statements_actor_fields;
  }
  code += "},\n" ;
  return code;
};
Blockly.JavaScript['vnc_actor_nick'] = function(block) {
  var text_actor_nick = block.getFieldValue('ACTOR_NICK');
  var colour_actor_color = block.getFieldValue('ACTOR_COLOR');
  // TODO: Assemble JavaScript into code variable.
  var code = ", nick:'" + text_actor_nick + "', color:'" + colour_actor_color +"'";
  return code;
};
Blockly.JavaScript['vnc_actor_pos'] = function(block) {
  var dropdown_actor_pos = block.getFieldValue('ACTOR_POS');
  var number_actor_z = block.getFieldValue('ACTOR_Z');
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  if (dropdown_actor_pos != 'AUTO')
    code += ", position:'" + dropdown_actor_pos.toLowerCase() + "'";
  if (number_actor_z != 0)
    code += ", z_order:" + number_actor_z;
  return code;
};
Blockly.JavaScript['vnc_actor_sprite'] = function(block) {
  var text_actor_sprite_tag = block.getFieldValue('ACTOR_SPRITE_TAG');
  var text_actor_sprite_path = block.getFieldValue('ACTOR_SPRITE_PATH');
  var dropdown_actor_align = block.getFieldValue('ACTOR_ALIGN');
  var number_actor_sprite_frames = block.getFieldValue('ACTOR_SPRITE_FRAMES');
  var number_actor_sprite_fps = block.getFieldValue('ACTOR_SPRITE_FPS');
  var number_actor_sprite_reps = block.getFieldValue('ACTOR_SPRITE_REPS');
  var checkbox_actor_sprite_remove = block.getFieldValue('ACTOR_SPRITE_REMOVE') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  if (text_actor_sprite_tag != "") {
    if (checkbox_actor_sprite_remove)
      code += ", remove:'" + text_actor_sprite_tag + "'";
    else {
        code += ", sprite:";
      if (text_actor_sprite_path != VNC_FILE_BLANK_MSG) {
        code += "['" + text_actor_sprite_tag + "', '" + text_actor_sprite_path + "', '" + dropdown_actor_align.toLowerCase() + "'";
        if (number_actor_sprite_frames > 1)
          code += ", " + number_actor_sprite_frames + ", " + number_actor_sprite_fps + ", " + number_actor_sprite_reps;
        code += "]";
      }
      else
        code += "'" + text_actor_sprite_tag + "'";
    }
  }
  return code;
};
Blockly.JavaScript['vnc_actor_avatar'] = function(block) {
  var text_actor_avatar_tag = block.getFieldValue('ACTOR_AVATAR_TAG');
  var text_actor_avatar_path = block.getFieldValue('ACTOR_AVATAR_PATH');
  var number_actor_avatar_frames = block.getFieldValue('ACTOR_AVATAR_FRAMES');
  var number_actor_avatar_fps = block.getFieldValue('ACTOR_AVATAR_FPS');
  var number_actor_avatar_reps = block.getFieldValue('ACTOR_AVATAR_REPS');
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  if (text_actor_avatar_tag != "") {
    code += ", avatar:";
    if (text_actor_avatar_path != VNC_FILE_BLANK_MSG) {
      code += "['" + text_actor_avatar_tag + "', '" + text_actor_avatar_path + "'";
      if (number_actor_avatar_frames > 1)
        code += ", " + number_actor_avatar_frames + ", " + number_actor_avatar_fps + ", " + number_actor_avatar_reps;
      code += "]";
    }
    else
      code += "'" + text_actor_avatar_tag + "'";
  }
  return code;
};

Blockly.JavaScript['vnc_actor_dialog'] = function(block) {
  var dropdown_actor_dialog = block.getFieldValue('ACTOR_DIALOG');
  var value_actor_dialog_value = Blockly.JavaScript.valueToCode(block, 'ACTOR_DIALOG_VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var checkbox_actor_append = block.getFieldValue('ACTOR_APPEND') == 'TRUE';
  var text_actor_voice = block.getFieldValue('ACTOR_VOICE');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  if (value_actor_dialog_value != "") {
    if (dropdown_actor_dialog == "BALLOON")
      code += ", balloon:" + value_actor_dialog_value;
    else {
      code += ", say:" + value_actor_dialog_value;
      code += ", append:" + checkbox_actor_append;
    }
    if (text_actor_voice != VNC_FILE_BLANK_MSG)
      code += ", voice:'" + text_actor_voice + "'";
  }
  return code;
};
////////// VN-CANVAS SCENE, OVERLAY //////////
Blockly.JavaScript['vnc_scene'] = function(block) {
  var value_scene_src = Blockly.JavaScript.valueToCode(block, 'SCENE_SRC', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_scene_fields = Blockly.JavaScript.statementToCode(block, 'SCENE_FIELDS');
  // TODO: Assemble JavaScript into code variable.
  var code = "scene, {src:"+value_scene_src;
  // TODO parse objects here, concat all objects into one array
  code += groupByType(statements_scene_fields, "objects");
  code += "},\n" ;
  return code;
};
Blockly.JavaScript['vnc_scene_objects'] = function(block) {
  var text_scene_object_path = block.getFieldValue('SCENE_OBJECT_PATH');
  var number_scene_object_x = block.getFieldValue('SCENE_OBJECT_X');
  var number_scene_object_y = block.getFieldValue('SCENE_OBJECT_Y');
  var number_scene_object_frames = block.getFieldValue('SCENE_OBJECT_FRAMES');
  var number_scene_object_fps = block.getFieldValue('SCENE_OBJECT_FPS');
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  if (text_scene_object_path != VNC_FILE_BLANK_MSG) {
    code = ", objects:[";
    code += "'"+text_scene_object_path+"', "+number_scene_object_x+", "+number_scene_object_y;
    if (number_scene_object_frames > 1)
      code += ", "+number_scene_object_frames+", "+number_scene_object_fps;
    code += "]";
  }
  return code;
};
Blockly.JavaScript['vnc_overlay'] = function(block) {
  var value_overlay_src = Blockly.JavaScript.valueToCode(block, 'OVERLAY_SRC', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_overlay_fields = Blockly.JavaScript.statementToCode(block, 'OVERLAY_FIELDS');
  // TODO: Assemble JavaScript into code variable.
  var code = "overlay, {";
  if (typeof eval(value_overlay_src) == 'boolean') {
    code += "show:"+(eval(value_overlay_src));
    code += statements_overlay_fields;
  }
  else {
    if (value_overlay_src != "")
        code += "src:"+value_overlay_src;
    code += statements_overlay_fields;
  }
  code += "},\n" ;
  return code;
};
Blockly.JavaScript['vnc_overlay_image'] = function(block) {
  var text_overlay_path = block.getFieldValue('OVERLAY_PATH');
  var text_overlay_offset = block.getFieldValue('OVERLAY_OFFSET');
  var number_overlay_frames = block.getFieldValue('OVERLAY_FRAMES');
  var number_overlay_fps = block.getFieldValue('OVERLAY_FPS');
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  if (text_overlay_path != VNC_FILE_BLANK_MSG) {
    if (number_overlay_frames > 1) {
        code = "['" + text_overlay_path + "', ";
        code += number_overlay_frames + ", " + number_overlay_fps + "]";
    }
    else {
        code = "'" + text_overlay_path + "'";
    }
    if (text_overlay_offset == 'scroll') 
        code += ", offset:'scroll'";
    else if (text_overlay_offset != '0,0')
        code += ", offset:["+text_overlay_offset+"]";
  }
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['vnc_effects_show'] = function(block) {
  var dropdown_vnc_effects_show = block.getFieldValue('VNC_EFFECTS_SHOW_HIDE');
  var checkbox_vnc_effects_wait = block.getFieldValue('VNC_EFFECTS_WAIT') == 'TRUE';
  var number_vnc_effects_time = block.getFieldValue('VNC_EFFECTS_TIME');
  // TODO: Assemble JavaScript into code variable.
  var code = ", effect:'"+dropdown_vnc_effects_show.toLowerCase();
  code += (checkbox_vnc_effects_wait) ? " nowait'" : "'";
  if (number_vnc_effects_time != 1)
    code += ", time:"+number_vnc_effects_time;
  return code;
};
Blockly.JavaScript['vnc_effects_slide'] = function(block) {
  var dropdown_vnc_effects_slide = block.getFieldValue('VNC_EFFECTS_SLIDE');
  var checkbox_vnc_effects_wait = block.getFieldValue('VNC_EFFECTS_WAIT') == 'TRUE';
  var number_vnc_effects_time = block.getFieldValue('VNC_EFFECTS_TIME');
  // TODO: Assemble JavaScript into code variable.
  var code = ", effect:'"+dropdown_vnc_effects_slide.toLowerCase();
  code += (checkbox_vnc_effects_wait) ? " nowait'" : "'";
  if (number_vnc_effects_time != 1)
    code += ", time:"+number_vnc_effects_time;
  return code;
};
Blockly.JavaScript['vnc_effects_pan'] = function(block) {
  var dropdown_vnc_effects_pan = block.getFieldValue('VNC_EFFECTS_PAN');
  var checkbox_vnc_effects_wait = block.getFieldValue('VNC_EFFECTS_WAIT') == 'TRUE';
  var number_vnc_effects_time = block.getFieldValue('VNC_EFFECTS_TIME');
  // TODO: Assemble JavaScript into code variable.
  var code = ", effect:'"+dropdown_vnc_effects_pan.toLowerCase();
  code += (checkbox_vnc_effects_wait) ? " nowait'" : "'";
  if (number_vnc_effects_time != 1)
    code += ", time:"+number_vnc_effects_time;
  return code;
};
Blockly.JavaScript['vnc_effects_zoom'] = function(block) {
  var dropdown_vnc_effects_zoom = block.getFieldValue('VNC_EFFECTS_ZOOM');
  var checkbox_vnc_effects_wait = block.getFieldValue('VNC_EFFECTS_WAIT') == 'TRUE';
  var number_vnc_effects_time = block.getFieldValue('VNC_EFFECTS_TIME');
  // TODO: Assemble JavaScript into code variable.
  var code = ", effect:'"+dropdown_vnc_effects_zoom.toLowerCase();
  code += (checkbox_vnc_effects_wait) ? " nowait'" : "'";
  if (number_vnc_effects_time != 1)
    code += ", time:"+number_vnc_effects_time;
  return code;
};
Blockly.JavaScript['vnc_effects_transform'] = function(block) {
  var dropdown_vnc_effects_transform = block.getFieldValue('VNC_EFFECTS_TRANSFORM');
  var text_vnc_effects_args = block.getFieldValue('VNC_EFFECTS_ARGS');
  var checkbox_vnc_effects_wait = block.getFieldValue('VNC_EFFECTS_WAIT') == 'TRUE';
  var number_vnc_effects_time = block.getFieldValue('VNC_EFFECTS_TIME');
  // TODO: Assemble JavaScript into code variable.
  var code = ", effect:'"+dropdown_vnc_effects_transform.toLowerCase();
  code += " " + text_vnc_effects_args;
  code += (checkbox_vnc_effects_wait) ? " nowait'" : "'";
  if (number_vnc_effects_time != 1)
    code += ", time:"+number_vnc_effects_time;
  return code;
};
Blockly.JavaScript['vnc_effects_flip'] = function(block) {
  var dropdown_vnc_effects_flip = block.getFieldValue('VNC_EFFECTS_FLIP');
  var checkbox_vnc_effects_wait = block.getFieldValue('VNC_EFFECTS_WAIT') == 'TRUE';
  var number_vnc_effects_time = block.getFieldValue('VNC_EFFECTS_TIME');
  // TODO: Assemble JavaScript into code variable.
  var code = ", flip:'"+dropdown_vnc_effects_flip.toLowerCase();
  code += (checkbox_vnc_effects_wait) ? " nowait'" : "'";
  if (number_vnc_effects_time != 1)
    code += ", time:"+number_vnc_effects_time;
  return code;
};
Blockly.JavaScript['vnc_effects_filter'] = function(block) {
  var dropdown_vnc_effects_filter = block.getFieldValue('VNC_EFFECTS_FILTER');
  var text_vnc_effects_args = block.getFieldValue('VNC_EFFECTS_ARGS');
  var checkbox_vnc_effects_run = block.getFieldValue('VNC_EFFECTS_RUN') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = ", effect:'";
  code += (dropdown_vnc_effects_filter == 'GAUSSIANBLUR') ? 'gaussianBlur' : dropdown_vnc_effects_filter.toLowerCase();
  if (text_vnc_effects_args != '') code += " " + text_vnc_effects_args;
  code += (checkbox_vnc_effects_run) ? " run'" : "'";
  return code;
};
Blockly.JavaScript['vnc_effects_custom'] = function(block) {
  var text_vnc_effects_custom = block.getFieldValue('VNC_EFFECTS_CUSTOM');
  // TODO: Assemble JavaScript into code variable.
  var code = ", effect:'"+text_vnc_effects_custom+"'";
  return code;
};



Blockly.JavaScript['vnc_atmo_rain'] = function(block) {
  var number_vnc_atmo_rain = block.getFieldValue('VNC_ATMO_RAIN');
  var checkbox_vnc_atmo_stop = block.getFieldValue('VNC_ATMO_STOP') == 'TRUE';
  var number_vnc_atmo_dir = block.getFieldValue('VNC_ATMO_DIR');  
  // TODO: Assemble JavaScript into code variable.
  var code = "atmosphere, {rain:";
  if (checkbox_vnc_atmo_stop)
    code += "'stop'"; 
  else {
    code += number_vnc_atmo_rain;
    code += ", direction:" + number_vnc_atmo_dir;
  }
  code += "},\n" ;
  return code;
};
Blockly.JavaScript['vnc_atmo_snow'] = function(block) {
  var number_vnc_atmo_snow = block.getFieldValue('VNC_ATMO_SNOW');
  var checkbox_vnc_atmo_stop = block.getFieldValue('VNC_ATMO_STOP') == 'TRUE';
  var number_vnc_atmo_dir = block.getFieldValue('VNC_ATMO_DIR');
  // TODO: Assemble JavaScript into code variable.
  var code = "atmosphere, {snow:";
  if (checkbox_vnc_atmo_stop)
    code += "'stop'"; 
  else {
    code += number_vnc_atmo_snow;
    code += ", direction:" + number_vnc_atmo_dir;
  }
  code += "},\n" ;
  return code;
};
Blockly.JavaScript['vnc_atmo_cloud'] = function(block) {
  var text_vnc_cloud_path = block.getFieldValue('VNC_CLOUD_PATH');
  var number_vnc_atmo_dir = block.getFieldValue('VNC_ATMO_DIR');
  var checkbox_vnc_atmo_stop = block.getFieldValue('VNC_ATMO_STOP') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = "atmosphere, {cloud:";
  if (checkbox_vnc_atmo_stop)
    code += "'stop'"; 
  else {
    if (text_vnc_cloud_path != VNC_FILE_BLANK_MSG) {
      code += "'" + text_vnc_cloud_path+ "'";
      code += ", direction:" + number_vnc_atmo_dir;
    }
    else
      code += "'start'"; 
  }
  code += "},\n" ;
  return code;
};
Blockly.JavaScript['vnc_atmo_beam'] = function(block) {
  var number_vnc_atmo_radius = block.getFieldValue('VNC_ATMO_RADIUS');
  var colour_vnc_atmo_color = block.getFieldValue('VNC_ATMO_COLOR');
  var checkbox_vnc_atmo_stop = block.getFieldValue('VNC_ATMO_STOP') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = "atmosphere, {beam:";
  if (checkbox_vnc_atmo_stop)
    code += "'stop'"; 
  else {
    code += number_vnc_atmo_radius;
    code += ", mask:'" + colour_vnc_atmo_color + "'";
  }
  code += "},\n" ;
  return code;
};

////////// VN-CANVAS AUDIO/VIDEO //////////
Blockly.JavaScript['vnc_audio'] = function(block) {
  var dropdown_audio_type = block.getFieldValue('AUDIO_TYPE');
  var value_audio_src = Blockly.JavaScript.valueToCode(block, 'AUDIO_SRC', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_audio_action = block.getFieldValue('AUDIO ACTION');
  var statements_audio_fields = Blockly.JavaScript.statementToCode(block, 'AUDIO_FIELDS');
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  if (value_audio_src != "") {
    code = "audio, {"+dropdown_audio_type.toLowerCase()+":";
    code += value_audio_src;
    if (dropdown_audio_action != "PLAY")
        code += ", action:'"+dropdown_audio_action.toLowerCase()+"'";
    else
        code += statements_audio_fields;
    code += "},\n" ;
  }
  return code;
};
Blockly.JavaScript['vnc_audio_repeat'] = function(block) {
  var number_audio_repeat = block.getFieldValue('AUDIO_REPEAT');
  // TODO: Assemble JavaScript into code variable.
  var code =  "";
  if (number_audio_repeat > 0)
    code += ", repeat:" + number_audio_repeat;
  return code;
};
Blockly.JavaScript['vnc_audio_delay'] = function(block) {
  var number_audio_delay = block.getFieldValue('AUDIO_DELAY');
  // TODO: Assemble JavaScript into code variable.
  var code =  "";
  if (number_audio_delay > 0)
    code += ", delay:" + number_audio_delay;
  return code;
};
Blockly.JavaScript['vnc_audio_volume'] = function(block) {
  var number_audio_adjust = block.getFieldValue('AUDIO_ADJUST');
  // TODO: Assemble JavaScript into code variable.
  var code =  "";
  if (number_audio_adjust != 0)
    code += ", adjust:" + number_audio_adjust;
  return code;
};
Blockly.JavaScript['vnc_video'] = function(block) {
  var value_video_src = Blockly.JavaScript.valueToCode(block, 'VIDEO_SRC', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  if (value_video_src != "") {
    code = "video, {src:"+value_video_src;
    code += "},\n" ;
  }
  return code;
};

////////// VN-CANVAS MENU //////////
Blockly.JavaScript['vnc_menu'] = function(block) {
  var text_menu_prompt = block.getFieldValue('MENU PROMPT');
  var statements_menu_fields = Blockly.JavaScript.statementToCode(block, 'MENU_FIELDS');
  // TODO: Assemble JavaScript into code variable.
  var code = "menu, ['"+text_menu_prompt+"',\n";
  code += statements_menu_fields;
  code += "    ],\n" ;
  return code;
};
Blockly.JavaScript['vnc_menu_item'] = function(block) {
  var text_menu_item = block.getFieldValue('MENU_ITEM');
  var text_menu_action = block.getFieldValue('MENU_ACTION');
  // TODO: Assemble JavaScript into code variable.
  var code = "    '"+text_menu_item+"', '"+text_menu_action+"',\n";
  return code;
};
Blockly.JavaScript['vnc_box'] = function(block) {
  var value_box_show = Blockly.JavaScript.valueToCode(block, 'BOX_SHOW', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_box_fields = Blockly.JavaScript.statementToCode(block, 'BOX_FIELDS');
  // TODO: Assemble JavaScript into code variable.
  var code = "box, {";
  if (eval(value_box_show) == false) 
    code += "show:false";
  else {
    code += "show:true";
    code += statements_box_fields;
  }
  code += "},\n" ;
  return code;
};
Blockly.JavaScript['vnc_box_position'] = function(block) {
  var dropdown_box_position = block.getFieldValue('BOX_POSITION');
  // TODO: Assemble JavaScript into code variable.
  var code = ", pos:'" + dropdown_box_position.toLowerCase() +"'";
  return code;
};
Blockly.JavaScript['vnc_box_align'] = function(block) {
  var dropdown_box_align = block.getFieldValue('BOX_ALIGN');
  // TODO: Assemble JavaScript into code variable.
  var code = ", align:'" + dropdown_box_align.toLowerCase() +"'";
  return code;
};
Blockly.JavaScript['vnc_box_background'] = function(block) {
  var dropdown_box_background = block.getFieldValue('BOX_BACKGROUND');
  // TODO: Assemble JavaScript into code variable.
  var code = ", back:'" + dropdown_box_background.toLowerCase() +"'";
  return code;
};
Blockly.JavaScript['vnc_text'] = function(block) {
  var value_text_dialog = Blockly.JavaScript.valueToCode(block, 'TEXT_DIALOG', Blockly.JavaScript.ORDER_ATOMIC);
  var checkbox_text_append = block.getFieldValue('TEXT_APPEND') == 'TRUE';
  var dropdown_text_align = block.getFieldValue('TEXT_ALIGN');
  var statements_text_fields = Blockly.JavaScript.statementToCode(block, 'TEXT_FIELDS');
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  if (value_text_dialog != '') {
    code += "text, {value:"+ value_text_dialog;
    code += ", append:"+checkbox_text_append;
    code += ", align:'"+dropdown_text_align.toLowerCase()+"'";
    code += statements_text_fields;
    code += "},\n" ;
  }
  return code;
};
Blockly.JavaScript['vnc_text_speaker'] = function(block) {
  var text_text_speaker = block.getFieldValue('TEXT_SPEAKER');
  // TODO: Assemble JavaScript into code variable.
  var code = ", speaker:'"+text_text_speaker+"'";
  return code;
};
Blockly.JavaScript['vnc_text_font'] = function(block) {
  var text_text_font = block.getFieldValue('TEXT_FONT');
  // TODO: Assemble JavaScript into code variable.
  var code = ", font:'"+text_text_font+"'";
  return code;
};
Blockly.JavaScript['vnc_text_offset'] = function(block) {
  var text_text_offset = block.getFieldValue('TEXT_OFFSET');
  // TODO: Assemble JavaScript into code variable.
  var code = ", offset:["+text_text_offset+"]";
  return code;
};
Blockly.JavaScript['vnc_text_pause'] = function(block) {
  var number_text_pause = block.getFieldValue('TEXT_PAUSE');
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  if (number_text_pause > 0)
    code += ", duration:"+number_text_pause;
  return code;
};
Blockly.JavaScript['vnc_text_effects'] = function(block) {
  var dropdown_text_effects = block.getFieldValue('TEXT_EFFECTS');
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  if (dropdown_text_effects != "NONE") {
    code += ", effects:'"+dropdown_text_effects.toLowerCase()+"'";
  }
  return code;
};
Blockly.JavaScript['vnc_text_voice'] = function(block) {
  var text_text_voice = block.getFieldValue('TEXT_VOICE');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  if (text_text_voice != VNC_FILE_BLANK_MSG) {
    code += ", voice:'"+text_text_voice+"'";
  }
  return code;
};

////////// VN-CANVAS FLOW //////////
Blockly.JavaScript['vnc_jump'] = function(block) {
  var text_vnc_jump_label = block.getFieldValue('VNC_JUMP_LABEL');
  var statements_vnc_jump_cond = Blockly.JavaScript.statementToCode(block, 'VNC_JUMP_COND');
  // TODO: Assemble JavaScript into code variable.
  var code = 'jump, ';
  if (statements_vnc_jump_cond != '') {
    code += "{label:'"+text_vnc_jump_label+"'";
    code += statements_vnc_jump_cond+"}";
  }
  else {
    code += "'" + text_vnc_jump_label + "'";
  }  
  code += ",\n" ;
  return code;
};
Blockly.JavaScript['vnc_jump_cond_str'] = function(block) {
  var text_jump_var = block.getFieldValue('JUMP_VAR');
  var text_jump_val = block.getFieldValue('JUMP_VAL');
  // TODO: Assemble JavaScript into code variable.
  var code = ", "+text_jump_var+":'"+text_jump_val+"'";
  return code;
};
Blockly.JavaScript['vnc_jump_cond_num'] = function(block) {
  var text_jump_var = block.getFieldValue('JUMP_VAR');
  var number_jump_val = block.getFieldValue('JUMP_VAL');
  // TODO: Assemble JavaScript into code variable.
  var code = ", "+text_jump_var+":"+number_jump_val;
  return code;
};
Blockly.JavaScript['vnc_jump_cond_bool'] = function(block) {
  var text_jump_var = block.getFieldValue('JUMP_VAR');
  var dropdown_jump_val = block.getFieldValue('JUMP_VAL');
  // TODO: Assemble JavaScript into code variable.
  var code = ", "+text_jump_var+":"+dropdown_jump_val.toLowerCase();
  return code;
};
Blockly.JavaScript['vnc_label'] = function(block) {
  var text_vnc_label = block.getFieldValue('VNC_LABEL');
  // TODO: Assemble JavaScript into code variable.
  var code = "label, '"+text_vnc_label+"',\n";
  return code;
};
Blockly.JavaScript['vnc_wait'] = function(block) {
  var number_wait_seconds = block.getFieldValue('WAIT_SECONDS');
  // TODO: Assemble JavaScript into code variable.
  var code = "wait, "+number_wait_seconds+",\n";
  return code;
};

///////// VN-CANVAS CFORM/FORM //////////
Blockly.JavaScript['vnc_cform'] = function(block) {
  var text_cform_id = block.getFieldValue('CFORM_ID');
  var checkbox_cform_modal = block.getFieldValue('CFORM_MODAL') == 'TRUE';
  var dropdown_cform_action = block.getFieldValue('CFORM_ACTION');
  var statements_cform_fields = Blockly.JavaScript.statementToCode(block, 'CFORM_FIELDS');
  // TODO: Assemble JavaScript into code variable.
  var code = "cform, ";
  if (dropdown_cform_action == "SHOW") {
      code = "cform, ['"+text_cform_id+"', "+checkbox_cform_modal+",\n";
      code += statements_cform_fields;
      code += "],\n";
  }
  else {
    code += "'"+dropdown_cform_action.toLowerCase()+"',\n";
  }
  return code;
};
Blockly.JavaScript['vnc_cform_button'] = function(block) {
  var text_cform_button_id = block.getFieldValue('CFORM_BUTTON_ID');
  var number_cform_button_x = block.getFieldValue('CFORM_BUTTON_X');
  var number_cform_button_y = block.getFieldValue('CFORM_BUTTON_Y');
  var statements_cform_button_fields = Blockly.JavaScript.statementToCode(block, 'CFORM_BUTTON_FIELDS');
  // TODO: Assemble JavaScript into code variable.
  var code = "button, {name:'"+text_cform_button_id+"', x:"+number_cform_button_x+", y:"+number_cform_button_y;
  code += statements_cform_button_fields;
  code += "},\n";
  return code;
};
Blockly.JavaScript['vnc_cform_button_wh'] = function(block) {
  var number_cform_button_w = block.getFieldValue('CFORM_BUTTON_W');
  var number_cform_button_h = block.getFieldValue('CFORM_BUTTON_H');
  // TODO: Assemble JavaScript into code variable.
  var code = ", w:"+number_cform_button_w+", h:"+number_cform_button_h;
  return code;
};
Blockly.JavaScript['vnc_cform_button_back'] = function(block) {
  var dropdown_cform_button_img = block.getFieldValue('CFORM_BUTTON_IMG');
  var value_cform_button_src = Blockly.JavaScript.valueToCode(block, 'CFORM_BUTTON_SRC', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  if (value_cform_button_src != "") {
    code += ", "+dropdown_cform_button_img.toLowerCase()+":"+value_cform_button_src;
  }
  return code;
};
Blockly.JavaScript['vnc_cform_button_text'] = function(block) {
  var checkbox_cform_button_text = block.getFieldValue('CFORM_BUTTON_TEXT') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = ", showText:"+checkbox_cform_button_text;
  return code;
};
Blockly.JavaScript['vnc_cform_button_tip'] = function(block) {
  var text_cform_button_tip = block.getFieldValue('CFORM_BUTTON_TIP');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  if (text_cform_button_tip != VNC_TEXT_BLANK_MSG)
    code += ", tip:'"+text_cform_button_tip+"'";
  return code;
};
Blockly.JavaScript['vnc_cform_button_link'] = function(block) {
  var statements_cform_button_link = Blockly.JavaScript.statementToCode(block, 'CFORM_BUTTON_LINK');
  // TODO: Assemble JavaScript into code variable.
  var code = ", link:["+statements_cform_button_link.replace(",\n","")+"]";
  return code;
};
Blockly.JavaScript['vnc_cform_picture'] = function(block) {
  var text_cform_picture_id = block.getFieldValue('CFORM_PICTURE_ID');
  var value_cform_picture_frames = Blockly.JavaScript.valueToCode(block, 'CFORM_PICTURE_FRAMES', Blockly.JavaScript.ORDER_ATOMIC);
  var number_cform_picture_x = block.getFieldValue('CFORM_PICTURE_X');
  var number_cform_picture_y = block.getFieldValue('CFORM_PICTURE_Y');
  var number_cform_picture_fps = block.getFieldValue('CFORM_PICTURE_FPS');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  if (value_cform_picture_frames != "") {
    code += "picture, {name:'"+text_cform_picture_id+"', ";
    code += "x:"+number_cform_picture_x+", y:"+number_cform_picture_y+", fps:"+number_cform_picture_fps+", ";
    code += "frames:"+value_cform_picture_frames;
    code += "},\n";
  }
  return code;
};
Blockly.JavaScript['vnc_cform_marquee'] = function(block) {
  var text_cform_marquee_id = block.getFieldValue('CFORM_MARQUEE_ID');
  var value_cform_marquee_frames = Blockly.JavaScript.valueToCode(block, 'CFORM_MARQUEE_FRAMES', Blockly.JavaScript.ORDER_ATOMIC);
  var number_cform_marquee_x = block.getFieldValue('CFORM_MARQUEE_X');
  var number_cform_marquee_y = block.getFieldValue('CFORM_MARQUEE_Y');
  var number_cform_marquee_w = block.getFieldValue('CFORM_MARQUEE_W');
  var number_cform_marquee_h = block.getFieldValue('CFORM_MARQUEE_H');
  var number_cform_marquee_fps = block.getFieldValue('CFORM_MARQUEE_FPS');
  var number_cform_marquee_timeout = block.getFieldValue('CFORM_MARQUEE_TIMEOUT');
  var statements_cform_marquee_fields = Blockly.JavaScript.statementToCode(block, 'CFORM_MARQUEE_FIELDS');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  if (text_cform_marquee_id.toLowerCase().indexOf("timer") == -1) {
    if (value_cform_marquee_frames.length > 0) {
        code += "marquee, name:'"+text_cform_marquee_id+"', ";
        code += "x:"+number_cform_marquee_x+", y:"+number_cform_marquee_y+", ";
        code += "w:"+number_cform_marquee_w+", h:"+number_cform_marquee_h+", fps:"+number_cform_marquee_fps+", ";
        code += "frames:"+value_cform_marquee_frames;
        code += "},\n";
    }
  }
  else {
    // timer mode
    code += "marquee, name:'"+text_cform_marquee_id+"', ";
    code += "x:"+number_cform_marquee_x+", y:"+number_cform_marquee_y+", ";
    code += "w:"+number_cform_marquee_w+", h:"+number_cform_marquee_h+", fps:1, ";
    if (number_cform_marquee_timeout > 0) {
        // downtimer
        code += "timeout:"+number_cform_marquee_timeout+", ";
        code += "link:["+statements_cform_marquee_fields.replace(",\n","")+"]";
    }
    code += "},\n";
  }
  return code;
};
Blockly.JavaScript['vnc_form'] = function(block) {
  var text_form_id = block.getFieldValue('FORM_ID');
  var statements_form_fields = Blockly.JavaScript.statementToCode(block, 'FORM_FIELDS');
  // TODO: Assemble JavaScript into code variable.
  var code = "form, ['"+text_form_id+"',\n";
  code += statements_form_fields;
  code += "],\n";
  return code;
};
Blockly.JavaScript['vnc_form_element'] = function(block) {
  var dropdown_form_element = block.getFieldValue('FORM_ELEMENT');
  var text_form_bind = block.getFieldValue('FORM_BIND');
  var text_form_element_id = block.getFieldValue('FORM_ELEMENT_ID');
  var statements_form_element_fields = Blockly.JavaScript.statementToCode(block, 'FORM_ELEMENT_FIELDS');
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  if (dropdown_form_element != "FIELDSET") {
    code += dropdown_form_element.toLowerCase()+", {name:'"+text_form_element_id+"'";
    if (dropdown_form_element != "SUBMIT") {
        code += ", bind:'"+text_form_bind+"'";
        if (dropdown_form_element != "SELECT")
            code += statements_form_element_fields;
        else 
            code += groupByType(statements_form_element_fields, "options");
    }
    code += "},\n";
  }
  else 
    code += "fieldset, '"+text_form_element_id+"',\n";
  return code;
};
Blockly.JavaScript['vnc_form_tip'] = function(block) {
  var text_form_tip = block.getFieldValue('FORM_TIP');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  if (text_form_tip != VNC_TEXT_BLANK_MSG)
    code += ", tip:'"+text_form_tip+"'";
  return code;
};
Blockly.JavaScript['vnc_form_placeholder'] = function(block) {
  var text_form_placeholder = block.getFieldValue('FORM_PLACEHOLDER');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  if (text_form_placeholder != VNC_TEXT_BLANK_MSG)
    code += ", placeholder:'"+text_form_placeholder+"'";
  return code;
};
Blockly.JavaScript['vnc_form_radio'] = function(block) {
  var value_form_radio = Blockly.JavaScript.valueToCode(block, 'FORM_RADIO', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = ", value:"+value_form_radio;
  return code;
};
Blockly.JavaScript['vnc_form_select'] = function(block) {
  var text_form_select_option = block.getFieldValue('FORM_SELECT_OPTION');
  var value_form_select_value = Blockly.JavaScript.valueToCode(block, 'FORM_SELECT_VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = ", options:['"+text_form_select_option+"', "+value_form_select_value+"]";
  return code;
};
Blockly.JavaScript['vnc_form_slider'] = function(block) {
  var number_form_slider_min = block.getFieldValue('FORM_SLIDER_MIN');
  var number_form_slider_max = block.getFieldValue('FORM_SLIDER_MAX');
  var number_form_slider_step = block.getFieldValue('FORM_SLIDER_STEP');
  // TODO: Assemble JavaScript into code variable.
  var code = ", min:"+number_form_slider_min+", max:"+number_form_slider_max+", step:"+number_form_slider_step;
  return code;
};
Blockly.JavaScript['vnc_automap'] = function(block) {
  var value_automap_src = Blockly.JavaScript.valueToCode(block, 'AUTOMAP_SRC', Blockly.JavaScript.ORDER_ATOMIC);
  var number_automap_w = block.getFieldValue('AUTOMAP_W');
  var number_automap_h = block.getFieldValue('AUTOMAP_H');
  var number_automap_x = block.getFieldValue('AUTOMAP_X');
  var number_automap_y = block.getFieldValue('AUTOMAP_Y');
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  if ( value_automap_src != '' ) {
    if ( typeof eval(value_automap_src) == 'boolean' ) {
        code += "automap, '";
        code += (eval(value_automap_src)) ? "show',\n" : "hide',\n";
    }
    else {
        code = "automap, {src:"+value_automap_src+", size:["+number_automap_w+","+number_automap_h+"], ";
        code += "offset:["+number_automap_x+","+number_automap_y+"]";
        code += "},\n";
    }
  }
  return code;
};
Blockly.JavaScript['vnc_map'] = function(block) {
  var text_map_name = block.getFieldValue('MAP_NAME');
  var statements_map_access = Blockly.JavaScript.statementToCode(block, 'MAP_ACCESS');
  // TODO: Assemble JavaScript into code variable.
  var code = "map, {id:'"+text_map_name+"',\n";
  code += statements_map_access;
  code += "},\n";
  return code;
};
Blockly.JavaScript['vnc_map_access'] = function(block) {
  var text_map_location = block.getFieldValue('MAP_LOCATION');
  var value_map_location_choices = Blockly.JavaScript.valueToCode(block, 'MAP_LOCATION_CHOICES', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = text_map_location+": "+value_map_location_choices+",\n";
  return code;
};
Blockly.JavaScript['vnc_tile'] = function(block) {
  var text_tile_id = block.getFieldValue('TILE_ID');
  var number_tile_x = block.getFieldValue('TILE_X');
  var number_tile_y = block.getFieldValue('TILE_Y');
  var value_tile_wall = Blockly.JavaScript.valueToCode(block, 'TILE_WALL', Blockly.JavaScript.ORDER_ATOMIC);
  var value_tile_link = Blockly.JavaScript.valueToCode(block, 'TILE_LINK', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "tile, {id:'"+text_tile_id+"', map:["+number_tile_x+","+number_tile_y+"], ";
  code += "wall:"+value_tile_wall+", link:"+value_tile_link;
  code += "},\n";
  return code;
};


Blockly.JavaScript['vnc_animation'] = function(block) {
  var text_animation_id = block.getFieldValue('ANIMATION_ID');
  var statements_animation_list = Blockly.JavaScript.statementToCode(block, 'ANIMATION_LIST');
  // TODO: Assemble JavaScript into code variable.
  var code = "animation, ['"+text_animation_id+"',\n";
  // parse effects here: effect, time, effect, time ... or effect, effect, ...
  var statements = "";
  var fx = [], time = [];
  var p_start = -1, p_end = -1;
  var n_start = -1, n_end = -1;
  p_start = statements_animation_list.indexOf(", effect:",0);
  while (p_start != -1) {
    p_end = statements_animation_list.indexOf(",",p_start+9);
    if (p_end == -1) p_end = statements_animation_list.length;
    fx.push(statements_animation_list.slice(p_start+9, p_end));
    p_start = statements_animation_list.indexOf(", effect:",Math.min(p_end,statements_animation_list.length-1));
    
    n_start = statements_animation_list.indexOf(", time:",p_end);
    if (((n_start > p_start) && (p_start != -1)) || (n_start == -1)) time.push(1);
    else {
        n_end = statements_animation_list.indexOf(",",n_start+7);
        if (n_end == -1) n_end = statements_animation_list.length;
        time.push(parseFloat(statements_animation_list.slice(n_start+7, n_end)));
    }
  }
  //console.log(fx);
  //console.log(time);
  for (var i in fx) {
    code += "  " + time[i] + ", " + fx[i] + ",\n";
  }
  code += "],\n";
  return code;
};
Blockly.JavaScript['vnc_checkpoint'] = function(block) {
  var dropdown_checkpoint_action = block.getFieldValue('CHECKPOINT_ACTION');
  var value_checkpoint_id = Blockly.JavaScript.valueToCode(block, 'CHECKPOINT_ID', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "";
  if (value_checkpoint_id != "") {
    code += "checkpoint, {"+dropdown_checkpoint_action.toLowerCase()+":"+value_checkpoint_id+"},\n";
  }
  else {
    if (dropdown_checkpoint_action != "CLEAR")
        code += "checkpoint, '"+dropdown_checkpoint_action.toLowerCase()+"',\n";
  }
  return code;
};
Blockly.JavaScript['vnc_set_single'] = function(block) {
  var text_set_variable = block.getFieldValue('SET_VARIABLE');
  var value_set_single = Blockly.JavaScript.valueToCode(block, 'SET_SINGLE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "set, {"+text_set_variable+":"+value_set_single+"},\n";
  return code;
};
Blockly.JavaScript['vnc_set_multiple'] = function(block) {
  var statements_set_multiple = Blockly.JavaScript.statementToCode(block, 'SET_MULTIPLE');
  // TODO: Assemble JavaScript into code variable.
  var statements = statements_set_multiple.replace(/set, {/g,'');
  statements = statements.replace(/},\n/g,', ');
  var code = "set, {"+statements+"},\n";
  return code;
};
Blockly.JavaScript['vnc_macro'] = function(block) {
  var text_macro_id = block.getFieldValue('MACRO_ID');
  var value_macro_call = Blockly.JavaScript.valueToCode(block, 'MACRO_CALL', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'macro, ';
  if (value_macro_call != '')
    code += "{"+text_macro_id+":"+value_macro_call+"},\n";
  else
    code += "'"+text_macro_id+"',\n";
  return code;
};
Blockly.JavaScript['vnc_preload'] = function(block) {
  var value_preload_call = Blockly.JavaScript.valueToCode(block, 'PRELOAD_CALL', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'preload, ';
  if (value_preload_call != '')
    code += value_preload_call + ",\n";
  else 
    code += "'auto',\n";
  return code;
};
Blockly.JavaScript['vnc_screen'] = function(block) {
  var dropdown_screen_effects = block.getFieldValue('SCREEN_EFFECTS');
  var number_screen_magnitude = block.getFieldValue('SCREEN_MAGNITUDE');
  var number_screen_duration = block.getFieldValue('SCREEN_DURATION');
  // TODO: Assemble JavaScript into code variable.
  var code = "screen, {"+dropdown_screen_effects.toLowerCase()+":"+number_screen_magnitude+", duration:"+number_screen_duration+"},\n";
  return code;
};
Blockly.JavaScript['vnc_snapshot'] = function(block) {
  var dropdown_screen_format = block.getFieldValue('SCREEN_FORMAT');
  // TODO: Assemble JavaScript into code variable.
  var code = "screen, {snap:'"+dropdown_screen_format.toLowerCase()+"'},\n";
  return code;
};
Blockly.JavaScript['vnc_message'] = function(block) {
  var value_vnc_message = Blockly.JavaScript.valueToCode(block, 'VNC_MESSAGE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  if (value_vnc_message != '')
    return ("message, "+value_vnc_message+",\n");
  else return '';
};