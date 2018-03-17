<?php

/**
 * @file
 * Displays SMS Counter details.
 *
 * Available variables:
 * - $encoding: Will show encoding use in sending SMS.
 * - $messages: Number of packets to send the message.
 * - $per_message: Number of characters in each packet.
 * - $length: Characters count.
 * - $remaining: Characters left.
 *
 * @ingroup themeable
 */
?>
<div id=<?php print drupal_html_id('sms-counter') ?> class='sms-counter'>
  <?php if ($encoding): ?>
    <span class='sms-counter-desc encoding-wrapper'><span class='sms-label encoding-label'><?php print t('Encoding:') ?></span><span class='encoding'></span></span>;
  <?php endif; ?>
  <?php if ($messages): ?>
    <span class='sms-counter-desc messages-wrapper'><span class='sms-label messages-label'><?php print t('Messages:') ?></span><span class='messages'></span></span>
  <?php endif; ?>
  <?php if ($per_message): ?>
    <span class='sms-counter-desc per-message-wrapper'><span class='sms-label per-message-label'><?php print t('Per Message:') ?></span><span class='per_message'></span></span>
  <?php endif; ?>
  <?php if ($length): ?>
    <span class='sms-counter-desc length-wrapper'><span class='sms-label length-label'><?php print t('Length:') ?></span><span class='length'></span></span>
  <?php endif; ?>
  <?php if ($remaining): ?>
    <span class='sms-counter-desc remaining-wrapper'><span class='sms-label remaining-label'><?php print t('Remaining:') ?></span><span class='remaining'></span></span>
  <?php endif; ?>
</div>
