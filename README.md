
Sample WordPress Theme
===

This is a minimal WordPress sample theme intended to demonstrate good practices in theme development. Use it as-is for a blog, or extend it into a more fully featured site.

The theme was built from the `_s` starter theme (also known as `underscores`). Features include:

* Sass: Styles are organized in modular `.scss` files and compiled using the [Sass CSS preprocessor](https://sass-lang.com/).
* Gulp: Makes use of [WP-Gulp](https://github.com/ahmadawais/WPGulp), an easy-to-use WordPress Gulp boilerplate. This enables live browser reloads using BrowserSync, Sass to CSS conversion, autoprefixing, CSS minification, JS concatenation, and image minification, among other things.
* Modern CSS: Page layouts were achieved using CSS Grid, while Flexbox was used to align content within elements. (No need for a CSS framework like Bootstrap or Foundation.)
* Accessible and responsive multi-level menu based on [responsive-nav.js](https://github.com/viljamis/responsive-nav.js)
* !!!TO DO: Responsive typography using a Sass mixin
* !!!TO DO: Change header background and font colors via the customizer

Testing
---------------

The theme was tested as follows:

1. Verify that the theme doesn't cause any PHP or JavaScript errors
2. [Validate HTML and CSS](https://codex.wordpress.org/Validating_a_Website)
3. Install WordPress [Theme Unit Test](https://codex.wordpress.org/Theme_Unit_Test) data
4. Run [Theme Check](https://wordpress.org/plugins/theme-check/) plugin
4. Test for compliance with [WCAG 2.0 accessibility guidelines](https://www.w3.org/WAI/intro/wcag), Level AA
5. !!!TO DO: Test on common browsers - based on [w3schools.com browser usage statistics](https://www.w3schools.com/browsers/default.asp) 
6. !!!TO DO: Test on common devices - based on [BrowserStack guidelines](https://www.browserstack.com/test-on-the-right-mobile-devices)
7. !!!TO DO: Test for adherence with WordPress coding standards using [PHP_CodeSniffer](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards)

Gists
---------------

* [Accessible and translatable "read more" link for excerpts](https://gist.github.com/48d41daa1ec6ffe3bc6276d8506ab3bc)
* [Accessible search form using icon for submit button](https://gist.github.com/d5f15744341b8b6dbc37212cc3460df0)

Installing the Theme
---------------

!!!TO DO