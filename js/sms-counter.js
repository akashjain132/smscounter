/**
 * @file
 * File used for count characters.
 */

(function ($) {

  "use strict";

  Drupal.behaviors.smscounter = {
    attach: function(context, settings) {

      // Initialize counter with default values.
      $('textarea.sms-counter:not(.wysiwyg)').each(function() {
        showCharacterCount(this, $(this).val());
      });

      $('textarea.sms-counter', context).keyup(function() {
        showCharacterCount(this, $(this).val());
      });
      // Give support to CKeditor.
      if (Drupal.wysiwyg != undefined) {
        $.each(Drupal.wysiwyg.editor.init, function(editor) {
          SMSCounterCkeditor();
        });
      } else if (Drupal.settings.ckeditor != undefined && typeof(CKEDITOR) != 'undefined') {
        SMSCounterCkeditor();
      }
    }
  };

  /**
   * Integrate with ckEditor
   */
  var SMSCounterCkeditor = function() {
    // We only run it once.
    var onlyOnce = false;
    if (!onlyOnce) {
      onlyOnce = true;
      CKEDITOR.on('instanceReady', function(e) {
        var editor = $('#' + e.editor.name + '.sms-counter');
        if (editor.length == 1) {
          ckeditorChange(e);
          // Add the events on the editor.
          e.editor.on('key', function(e) {
            setTimeout(function(){ckeditorChange(e)}, 100);
          });
          e.editor.on('paste', function(e) {
            setTimeout(function(){ckeditorChange(e)}, 500);
          });
          e.editor.on('elementsPathUpdate', function(e) {
            setTimeout(function(){ckeditorChange(e)}, 100);
          });
        }
      });
    }
  }

  /**
   * Function to get data written in ckeditor.
   */
  var ckeditorChange = function(e) {
    var user_text = strip_tags(e.editor.getData())
    showCharacterCount('#' + e.editor.name, user_text);
  };

  /**
   * Remove HTML from data written in ckeditor.
   */
  var strip_tags = function(input, allowed) {
    // making the lineendings with two chars
    input = input.replace(/(\r\n|\r|\n)/g, "\r\n");
    // We do want that the space characters to count as 1, not 6...
    input = input.replace(/&nbsp;/gi, ' ');

    /* The following lines take the text from the wysiwyg and
      strip out some html and special characters so an accurate character
      count can be taken. */
    input = input.replace(/&gt;/g, ' ');
    input = input.replace(/&lt;/g, ' ');
    input = input.replace(/&amp;/g, ' ');
    input = input.replace(/<\/?[^>]+(>|$)/g, "");
    input = input.replace(/\<p>/g, "");
    input = input.replace(/\<\/p>/g, "");
    input = input.replace(/[\n\r]/g, '');
    input = input.replace(/&amp;/g, '&');
    input = input.replace(/&nbsp;/g, ' ');
    input = input.replace(/\<span>/g, ' ');
    input = input.replace(/\<\/span>/g, ' ');
    input = input.replace(/\<br>/g, ' ');
    input = input.replace(/\<BR>/g, ' ');

    // Strips HTML and PHP tags from a string.
     allowed = (((allowed || "") + "")
         .toLowerCase()
         .match(/<[a-z][a-z0-9]*>/g) || [])
         .join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
     var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
         commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
     return input.replace(commentsAndPhpTags, '').replace(tags, function($0, $1){
         return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
     });
  };

  /**
   * Set character counter below field.
   */
  var showCharacterCount = function(selector, message) {
    console.log(selector);
    var sms_count = SmsCounter.count(message);
    console.log(sms_count);
    $(selector).parents('.form-type-textarea').find('.sms-counter .encoding').text(sms_count.encoding);
    $(selector).parents('.form-type-textarea').find('.sms-counter .messages').text(sms_count.messages);
    $(selector).parents('.form-type-textarea').find('.sms-counter .remaining').text(sms_count.remaining);
    $(selector).parents('.form-type-textarea').find('.sms-counter .length').text(sms_count.length);
    $(selector).parents('.form-type-textarea').find('.sms-counter .per_message').text(sms_count.per_message);
  };

})(jQuery);
