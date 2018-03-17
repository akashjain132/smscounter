SMSCounter module:
------------------
Requires - Drupal 7

Overview:
---------

This module allows you to set a sms counter showing just below the textarea field on any form.

smscounter creates a new Form element: #smscounter which will show some details below textarea like number of packets, number of characters left, Encoding, Character count, number of character in each packet.

For content type you can enable this feature for a particulat textarea from its edit page.

Description
-----------
SMSCounter is module that shows SMS packet count details below textarea. It will show following item but you can configure it through settings page.

	- Type of Encoding (Encoding)
	- Character count (Length)
	- Number of packets (Per Message)
	- Number of characters left (Remaining)
	- Number of character in each packet (Messages)

You can enable SMS Counter setting from content type manage field settings, content type -> manage field -> field settings.

OR

You can add this feature in your custom module by adding `#smscounter => TRUE` form element in textarea.

Installation
------------
1. Copy the smscounter folder to your sites/all/modules directory.
2. At Modules page (admin/modules) enable the module.
3. Donwload the sms-counter libraries from https://github.com/danxexe/sms-counter and put it in libraries folder.
4. Configure the module settings at Administer -> Site configuration -> SMS Counter (admin/config/user-interface/sms-counter).
5. Check report status for sms-counter library status.

Credits:
--------

Originaly inspired by functionality found while working in synduit company.

Contact
-------
This module is developed by Akash Jain - https://www.drupal.org/user/2622667
