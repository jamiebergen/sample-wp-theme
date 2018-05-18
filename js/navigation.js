/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 *
 * @link https://github.com/viljamis/responsive-nav.js
 */

/**
 *  Add .menu-items class to top level ul in primary-menu
 *  This is due to a bug with wp_nav_menu called in header.php
 */
var navMenu = document.getElementById("primary-menu").getElementsByTagName("ul")[0];
navMenu.classList.add("menu-items");

/**
 *  Initialize the responsive-nav script
 */
var customToggle = document.getElementById( "nav-toggle" );
var navigation = responsiveNav( ".nav-collapse", {
    customToggle: "#nav-toggle", // Selector: Specify the ID of a custom toggle
    subMenu: "children", // String: Class that is added to submenus
    enableFocus: true,
    enableDropdown: true,
    openDropdown: '<span class="screen-reader-text">Open sub menu</span>',
    closeDropdown: '<span class="screen-reader-text">Close sub menu</span>',
    open: function () {
        customToggle.innerHTML = 'CLOSE MENU';
    },
    close: function () {
        customToggle.innerHTML = 'OPEN MENU';
    },
    resizeMobile: function () {
        customToggle.setAttribute( 'aria-controls', 'nav' );
    },
    resizeDesktop: function () {
        customToggle.removeAttribute( 'aria-controls' );
    },
});