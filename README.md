CONTENTS OF THIS FILE
---------------------
   
 * Introduction
 * Requirements
 * Installation
 * Configuration
 * Maintainers


INTRODUCTION
------------

The module allows you to set a sms counter below the textarea field on any form.

SMSCounter creates a new Form element: #smscounter that we can add in any form 
and this will show SMS count details below textarea.

The module provides following items that will be shown but you can configure it 
through module's settings page.

	- Type of Encoding (Encoding)
	- Character count (Length)
	- Number of packets (Per Message)
	- Number of characters left (Remaining)
	- Number of character in each packet (Messages)


REQUIREMENTS
------------

This module requires the following modules:

* Requires - Drupal 7
* External JS Library - SMS Counter (https://github.com/danxexe/sms-counter)


INSTALLATION
------------

1. Copy the smscounter module to your sites/all/modules directory.
2. At Modules page (admin/modules) enable the module.
3. Donwload the sms-counter library from https://github.com/danxexe/sms-counter 
and put it in the libraries folder.
4. Configure the module settings at admin/config/user-interface/sms-counter.
5. Check report status for sms-counter's library status.


CONFIGURATION
-------------

This feature can be enable for content type's textarea field by enabling 
sms counter setting from from its edit page.

Admin >> Content type >> Manage field section >> Field settings (Textarea)

OR

You can add this feature in your custom form by adding 
`#smscounter => TRUE` form element in textarea.

Configure display: admin/config/user-interface/sms-counter


MAINTAINERS
-----------

Current maintainers:
 * Akash Jain (akashjain132) - https://drupal.org/user/2622667

This project has been sponsored by:
 * Synduit LLC
