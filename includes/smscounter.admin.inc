<?php

/**
 * @file
 * Provides the administrative interface for sms counter.
 */

/**
 * Form constructor for the sms counter's settings form.
 */
function smscounter_admin_settings($form, &$form_state) {

  $displays = array(
    'encoding' => t('Encoding'),
    'length' => t('Length'),
    'per_message' => t('Per Message'),
    'remaining' => t('Remaining'),
    'messages' => t('Messages'),
  );

  $form['smscounter_display'] = array(
    '#type' => 'checkboxes',
    '#title' => t('Display'),
    '#options' => $displays,
    '#description' => t('The number of item that will display at the bottom of textarea.'),
    '#default_value' => variable_get('smscounter_display', array_keys($displays)),
  );

  $form['smscounter_js_compression'] = array(
    '#type' => 'radios',
    '#title' => t('JS compression level'),
    '#options' => array(
      'min' => t('Production (minified)'),
      'none' => t('Development (uncompressed)'),
    ),
    '#default_value' => variable_get('smscounter_js_compression', 'min'),
  );

  return system_settings_form($form);
}
