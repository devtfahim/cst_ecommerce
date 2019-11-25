/*! jQuery UI - v1.11.4 - 2015-12-03
* http://jqueryui.com
* Includes: core.css, button.css, slider.css, theme.css
* To view and modify this theme, visit http://jqueryui.com/themeroller/?ffDefault=Lucida%20Grande%2CLucida%20Sans%2CArial%2Csans-serif&fwDefault=bold&fsDefault=1.1em&cornerRadius=5px&bgColorHeader=5c9ccc&bgTextureHeader=gloss_wave&bgImgOpacityHeader=55&borderColorHeader=4297d7&fcHeader=ffffff&iconColorHeader=d8e7f3&bgColorContent=fcfdfd&bgTextureContent=inset_hard&bgImgOpacityContent=100&borderColorContent=a6c9e2&fcContent=222222&iconColorContent=469bdd&bgColorDefault=dfeffc&bgTextureDefault=glass&bgImgOpacityDefault=85&borderColorDefault=c5dbec&fcDefault=2e6e9e&iconColorDefault=6da8d5&bgColorHover=d0e5f5&bgTextureHover=glass&bgImgOpacityHover=75&borderColorHover=79b7e7&fcHover=1d5987&iconColorHover=217bc0&bgColorActive=f5f8f9&bgTextureActive=inset_hard&bgImgOpacityActive=100&borderColorActive=79b7e7&fcActive=e17009&iconColorActive=f9bd01&bgColorHighlight=fbec88&bgTextureHighlight=flat&bgImgOpacityHighlight=55&borderColorHighlight=fad42e&fcHighlight=363636&iconColorHighlight=2e83ff&bgColorError=fef1ec&bgTextureError=glass&bgImgOpacityError=95&borderColorError=cd0a0a&fcError=cd0a0a&iconColorError=cd0a0a&bgColorOverlay=aaaaaa&bgTextureOverlay=flat&bgImgOpacityOverlay=0&opacityOverlay=30&bgColorShadow=aaaaaa&bgTextureShadow=flat&bgImgOpacityShadow=0&opacityShadow=30&thicknessShadow=8px&offsetTopShadow=-8px&offsetLeftShadow=-8px&cornerRadiusShadow=8px
* Copyright jQuery Foundation and other contributors; Licensed MIT */

/* Layout helpers
----------------------------------*/
.ui-helper-hidden {
    display: none;
}

.ui-helper-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.ui-helper-reset {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    line-height: 1.3;
    text-decoration: none;
    font-size: 100%;
    list-style: none;
}

.ui-helper-clearfix:before,
.ui-helper-clearfix:after {
    content: "";
    display: table;
    border-collapse: collapse;
}

.ui-helper-clearfix:after {
    clear: both;
}

.ui-helper-clearfix {
    min-height: 0; /* support: IE7 */
}

.ui-helper-zfix {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    opacity: 0;
    filter: Alpha(Opacity=0); /* support: IE8 */
}

.ui-front {
    z-index: 100;
}

/* Interaction Cues
----------------------------------*/
.ui-state-disabled {
    cursor: default !important;
}

/* Icons
----------------------------------*/

/* states and images */
.ui-icon {
    display: block;
    text-indent: -99999px;
    overflow: hidden;
    background-repeat: no-repeat;
}

/* Misc visuals
----------------------------------*/

/* Overlays */
.ui-widget-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.ui-button {
    display: inline-block;
    position: relative;
    padding: 0;
    line-height: normal;
    margin-right: .1em;
    cursor: pointer;
    vertical-align: middle;
    text-align: center;
    overflow: visible; /* removes extra width in IE */
}

.ui-button,
.ui-button:link,
.ui-button:visited,
.ui-button:hover,
.ui-button:active {
    text-decoration: none;
}

/* to make room for the icon, a width needs to be set here */
.ui-button-icon-only {
    width: 2.2em;
}

/* button elements seem to need a little more width */
button.ui-button-icon-only {
    width: 2.4em;
}

.ui-button-icons-only {
    width: 3.4em;
}

button.ui-button-icons-only {
    width: 3.7em;
}

/* button text element */
.ui-button .ui-button-text {
    display: block;
    line-height: normal;
}

.ui-button-text-only .ui-button-text {
    padding: .4em 1em;
}

.ui-button-icon-only .ui-button-text,
.ui-button-icons-only .ui-button-text {
    padding: .4em;
    text-indent: -9999999px;
}

.ui-button-text-icon-primary .ui-button-text,
.ui-button-text-icons .ui-button-text {
    padding: .4em 1em .4em 2.1em;
}

.ui-button-text-icon-secondary .ui-button-text,
.ui-button-text-icons .ui-button-text {
    padding: .4em 2.1em .4em 1em;
}

.ui-button-text-icons .ui-button-text {
    padding-left: 2.1em;
    padding-right: 2.1em;
}

/* no icon support for input elements, provide padding by default */
input.ui-button {
    padding: .4em 1em;
}

/* button icon element(s) */
.ui-button-icon-only .ui-icon,
.ui-button-text-icon-primary .ui-icon,
.ui-button-text-icon-secondary .ui-icon,
.ui-button-text-icons .ui-icon,
.ui-button-icons-only .ui-icon {
    position: absolute;
    top: 50%;
    margin-top: -8px;
}

.ui-button-icon-only .ui-icon {
    left: 50%;
    margin-left: -8px;
}

.ui-button-text-icon-primary .ui-button-icon-primary,
.ui-button-text-icons .ui-button-icon-primary,
.ui-button-icons-only .ui-button-icon-primary {
    left: .5em;
}

.ui-button-text-icon-secondary .ui-button-icon-secondary,
.ui-button-text-icons .ui-button-icon-secondary,
.ui-button-icons-only .ui-button-icon-secondary {
    right: .5em;
}

/* button sets */
.ui-buttonset {
    margin-right: 7px;
}

.ui-buttonset .ui-button {
    margin-left: 0;
    margin-right: -.3em;
}

/* workarounds */
/* reset extra padding in Firefox, see h5bp.com/l */
input.ui-button::-moz-focus-inner,
button.ui-button::-moz-focus-inner {
    border: 0;
    padding: 0;
}

.ui-slider {
    position: relative;
    text-align: left;
}

.ui-slider .ui-slider-handle {
    position: absolute;
    z-index: 2;
    width: 1.2em;
    height: 1.2em;
    cursor: default;
    -ms-touch-action: none;
    touch-action: none;
}

.ui-slider .ui-slider-range {
    position: absolute;
    z-index: 1;
    font-size: .7em;
    display: block;
    border: 0;
    background-position: 0 0;
}

/* support: IE8 - See #6727 */
.ui-slider.ui-state-disabled .ui-slider-handle,
.ui-slider.ui-state-disabled .ui-slider-range {
    -webkit-filter: inherit;
    filter: inherit;
}

.ui-slider-horizontal {
    height: .8em;
}

.ui-slider-horizontal .ui-slider-handle {
    top: -.3em;
    margin-left: -.6em;
}

.ui-slider-horizontal .ui-slider-range {
    top: 0;
    height: 100%;
}

.ui-slider-horizontal .ui-slider-range-min {
    left: 0;
}

.ui-slider-horizontal .ui-slider-range-max {
    right: 0;
}

.ui-slider-vertical {
    width: .8em;
    height: 100px;
}

.ui-slider-vertical .ui-slider-handle {
    left: -.3em;
    margin-left: 0;
    margin-bottom: -.6em;
}

.ui-slider-vertical .ui-slider-range {
    left: 0;
    width: 100%;
}

.ui-slider-vertical .ui-slider-range-min {
    bottom: 0;
}

.ui-slider-vertical .ui-slider-range-max {
    top: 0;
}

/* Component containers
----------------------------------*/
.ui-widget {
    font-family: Lucida Grande, Lucida Sans, Arial, sans-serif;
    font-size: 1.1em;
}

.ui-widget .ui-widget {
    font-size: 1em;
}

.ui-widget input,
.ui-widget select,
.ui-widget textarea,
.ui-widget button {
    font-family: Lucida Grande, Lucida Sans, Arial, sans-serif;
    font-size: 1em;
}

.ui-widget-content {
    border: 1px solid #a6c9e2;
    color: #222222;
}

.ui-widget-content a {
    color: #222222;
}

.ui-widget-header {
    border: 1px solid #4297d7;
    background: #5c9ccc;
    color: #ffffff;
    font-weight: bold;
}

.ui-widget-header a {
    color: #ffffff;
}

/* Interaction states
----------------------------------*/
.ui-state-default,
.ui-widget-content .ui-state-default,
.ui-widget-header .ui-state-default {
    border: 1px solid #c5dbec;
    background: #dfeffc;
    font-weight: bold;
    color: #2e6e9e;
}

.ui-state-default a,
.ui-state-default a:link,
.ui-state-default a:visited {
    color: #2e6e9e;
    text-decoration: none;
}

.ui-state-hover,
.ui-widget-content .ui-state-hover,
.ui-widget-header .ui-state-hover,
.ui-state-focus,
.ui-widget-content .ui-state-focus,
.ui-widget-header .ui-state-focus {
    border: 1px solid #79b7e7;
    background: #d0e5f5;
    font-weight: bold;
    color: #1d5987;
}

.ui-state-hover a,
.ui-state-hover a:hover,
.ui-state-hover a:link,
.ui-state-hover a:visited,
.ui-state-focus a,
.ui-state-focus a:hover,
.ui-state-focus a:link,
.ui-state-focus a:visited {
    color: #1d5987;
    text-decoration: none;
}

.ui-state-active,
.ui-widget-content .ui-state-active,
.ui-widget-header .ui-state-active {
    border: 1px solid #79b7e7;
    background: #f5f8f9;
    font-weight: bold;
    color: #e17009;
}

.ui-state-active a,
.ui-state-active a:link,
.ui-state-active a:visited {
    color: #e17009;
    text-decoration: none;
}

/* Interaction Cues
----------------------------------*/
.ui-state-highlight,
.ui-widget-content .ui-state-highlight,
.ui-widget-header .ui-state-highlight {
    border: 1px solid #fad42e;
    background: #fbec88;
    color: #363636;
}

.ui-state-highlight a,
.ui-widget-content .ui-state-highlight a,
.ui-widget-header .ui-state-highlight a {
    color: #363636;
}

.ui-state-error,
.ui-widget-content .ui-state-error,
.ui-widget-header .ui-state-error {
    border: 1px solid #cd0a0a;
    background: #fef1ec;
    color: #cd0a0a;
}

.ui-state-error a,
.ui-widget-content .ui-state-error a,
.ui-widget-header .ui-state-error a {
    color: #cd0a0a;
}

.ui-state-error-text,
.ui-widget-content .ui-state-error-text,
.ui-widget-header .ui-state-error-text {
    color: #cd0a0a;
}

.ui-priority-primary,
.ui-widget-content .ui-priority-primary,
.ui-widget-header .ui-priority-primary {
    font-weight: bold;
}

.ui-priority-secondary,
.ui-widget-content .ui-priority-secondary,
.ui-widget-header .ui-priority-secondary {
    opacity: .7;
    filter: Alpha(Opacity=70); /* support: IE8 */
    font-weight: normal;
}

.ui-state-disabled,
.ui-widget-content .ui-state-disabled,
.ui-widget-header .ui-state-disabled {
    opacity: .35;
    filter: Alpha(Opacity=35); /* support: IE8 */
    background-image: none;
}

.ui-state-disabled .ui-icon {
    filter: Alpha(Opacity=35); /* support: IE8 - See #6059 */
}

/* Icons
----------------------------------*/

/* states and images */
.ui-icon {
    width: 16px;
    height: 16px;
}

/* positioning */
.ui-icon-blank {
    background-position: 16px 16px;
}

.ui-icon-carat-1-n {
    background-position: 0 0;
}

.ui-icon-carat-1-ne {
    background-position: -16px 0;
}

.ui-icon-carat-1-e {
    background-position: -32px 0;
}

.ui-icon-carat-1-se {
    background-position: -48px 0;
}

.ui-icon-carat-1-s {
    background-position: -64px 0;
}

.ui-icon-carat-1-sw {
    background-position: -80px 0;
}

.ui-icon-carat-1-w {
    background-position: -96px 0;
}

.ui-icon-carat-1-nw {
    background-position: -112px 0;
}

.ui-icon-carat-2-n-s {
    background-position: -128px 0;
}

.ui-icon-carat-2-e-w {
    background-position: -144px 0;
}

.ui-icon-triangle-1-n {
    background-position: 0 -16px;
}

.ui-icon-triangle-1-ne {
    background-position: -16px -16px;
}

.ui-icon-triangle-1-e {
    background-position: -32px -16px;
}

.ui-icon-triangle-1-se {
    background-position: -48px -16px;
}

.ui-icon-triangle-1-s {
    background-position: -64px -16px;
}

.ui-icon-triangle-1-sw {
    background-position: -80px -16px;
}

.ui-icon-triangle-1-w {
    background-position: -96px -16px;
}

.ui-icon-triangle-1-nw {
    background-position: -112px -16px;
}

.ui-icon-triangle-2-n-s {
    background-position: -128px -16px;
}

.ui-icon-triangle-2-e-w {
    background-position: -144px -16px;
}

.ui-icon-arrow-1-n {
    background-position: 0 -32px;
}

.ui-icon-arrow-1-ne {
    background-position: -16px -32px;
}

.ui-icon-arrow-1-e {
    background-position: -32px -32px;
}

.ui-icon-arrow-1-se {
    background-position: -48px -32px;
}

.ui-icon-arrow-1-s {
    background-position: -64px -32px;
}

.ui-icon-arrow-1-sw {
    background-position: -80px -32px;
}

.ui-icon-arrow-1-w {
    background-position: -96px -32px;
}

.ui-icon-arrow-1-nw {
    background-position: -112px -32px;
}

.ui-icon-arrow-2-n-s {
    background-position: -128px -32px;
}

.ui-icon-arrow-2-ne-sw {
    background-position: -144px -32px;
}

.ui-icon-arrow-2-e-w {
    background-position: -160px -32px;
}

.ui-icon-arrow-2-se-nw {
    background-position: -176px -32px;
}

.ui-icon-arrowstop-1-n {
    background-position: -192px -32px;
}

.ui-icon-arrowstop-1-e {
    background-position: -208px -32px;
}

.ui-icon-arrowstop-1-s {
    background-position: -224px -32px;
}

.ui-icon-arrowstop-1-w {
    background-position: -240px -32px;
}

.ui-icon-arrowthick-1-n {
    background-position: 0 -48px;
}

.ui-icon-arrowthick-1-ne {
    background-position: -16px -48px;
}

.ui-icon-arrowthick-1-e {
    background-position: -32px -48px;
}

.ui-icon-arrowthick-1-se {
    background-position: -48px -48px;
}

.ui-icon-arrowthick-1-s {
    background-position: -64px -48px;
}

.ui-icon-arrowthick-1-sw {
    background-position: -80px -48px;
}

.ui-icon-arrowthick-1-w {
    background-position: -96px -48px;
}

.ui-icon-arrowthick-1-nw {
    background-position: -112px -48px;
}

.ui-icon-arrowthick-2-n-s {
    background-position: -128px -48px;
}

.ui-icon-arrowthick-2-ne-sw {
    background-position: -144px -48px;
}

.ui-icon-arrowthick-2-e-w {
    background-position: -160px -48px;
}

.ui-icon-arrowthick-2-se-nw {
    background-position: -176px -48px;
}

.ui-icon-arrowthickstop-1-n {
    background-position: -192px -48px;
}

.ui-icon-arrowthickstop-1-e {
    background-position: -208px -48px;
}

.ui-icon-arrowthickstop-1-s {
    background-position: -224px -48px;
}

.ui-icon-arrowthickstop-1-w {
    background-position: -240px -48px;
}

.ui-icon-arrowreturnthick-1-w {
    background-position: 0 -64px;
}

.ui-icon-arrowreturnthick-1-n {
    background-position: -16px -64px;
}

.ui-icon-arrowreturnthick-1-e {
    background-position: -32px -64px;
}

.ui-icon-arrowreturnthick-1-s {
    background-position: -48px -64px;
}

.ui-icon-arrowreturn-1-w {
    background-position: -64px -64px;
}

.ui-icon-arrowreturn-1-n {
    background-position: -80px -64px;
}

.ui-icon-arrowreturn-1-e {
    background-position: -96px -64px;
}

.ui-icon-arrowreturn-1-s {
    background-position: -112px -64px;
}

.ui-icon-arrowrefresh-1-w {
    background-position: -128px -64px;
}

.ui-icon-arrowrefresh-1-n {
    background-position: -144px -64px;
}

.ui-icon-arrowrefresh-1-e {
    background-position: -160px -64px;
}

.ui-icon-arrowrefresh-1-s {
    background-position: -176px -64px;
}

.ui-icon-arrow-4 {
    background-position: 0 -80px;
}

.ui-icon-arrow-4-diag {
    background-position: -16px -80px;
}

.ui-icon-extlink {
    background-position: -32px -80px;
}

.ui-icon-newwin {
    background-position: -48px -80px;
}

.ui-icon-refresh {
    background-position: -64px -80px;
}

.ui-icon-shuffle {
    background-position: -80px -80px;
}

.ui-icon-transfer-e-w {
    background-position: -96px -80px;
}

.ui-icon-transferthick-e-w {
    background-position: -112px -80px;
}

.ui-icon-folder-collapsed {
    background-position: 0 -96px;
}

.ui-icon-folder-open {
    background-position: -16px -96px;
}

.ui-icon-document {
    background-position: -32px -96px;
}

.ui-icon-document-b {
    background-position: -48px -96px;
}

.ui-icon-note {
    background-position: -64px -96px;
}

.ui-icon-mail-closed {
    background-position: -80px -96px;
}

.ui-icon-mail-open {
    background-position: -96px -96px;
}

.ui-icon-suitcase {
    background-position: -112px -96px;
}

.ui-icon-comment {
    background-position: -128px -96px;
}

.ui-icon-person {
    background-position: -144px -96px;
}

.ui-icon-print {
    background-position: -160px -96px;
}

.ui-icon-trash {
    background-position: -176px -96px;
}

.ui-icon-locked {
    background-position: -192px -96px;
}

.ui-icon-unlocked {
    background-position: -208px -96px;
}

.ui-icon-bookmark {
    background-position: -224px -96px;
}

.ui-icon-tag {
    background-position: -240px -96px;
}

.ui-icon-home {
    background-position: 0 -112px;
}

.ui-icon-flag {
    background-position: -16px -112px;
}

.ui-icon-calendar {
    background-position: -32px -112px;
}

.ui-icon-cart {
    background-position: -48px -112px;
}

.ui-icon-pencil {
    background-position: -64px -112px;
}

.ui-icon-clock {
    background-position: -80px -112px;
}

.ui-icon-disk {
    background-position: -96px -112px;
}

.ui-icon-calculator {
    background-position: -112px -112px;
}

.ui-icon-zoomin {
    background-position: -128px -112px;
}

.ui-icon-zoomout {
    background-position: -144px -112px;
}

.ui-icon-search {
    background-position: -160px -112px;
}

.ui-icon-wrench {
    background-position: -176px -112px;
}

.ui-icon-gear {
    background-position: -192px -112px;
}

.ui-icon-heart {
    background-position: -208px -112px;
}

.ui-icon-star {
    background-position: -224px -112px;
}

.ui-icon-link {
    background-position: -240px -112px;
}

.ui-icon-cancel {
    background-position: 0 -128px;
}

.ui-icon-plus {
    background-position: -16px -128px;
}

.ui-icon-plusthick {
    background-position: -32px -128px;
}

.ui-icon-minus {
    background-position: -48px -128px;
}

.ui-icon-minusthick {
    background-position: -64px -128px;
}

.ui-icon-close {
    background-position: -80px -128px;
}

.ui-icon-closethick {
    background-position: -96px -128px;
}

.ui-icon-key {
    background-position: -112px -128px;
}

.ui-icon-lightbulb {
    background-position: -128px -128px;
}

.ui-icon-scissors {
    background-position: -144px -128px;
}

.ui-icon-clipboard {
    background-position: -160px -128px;
}

.ui-icon-copy {
    background-position: -176px -128px;
}

.ui-icon-contact {
    background-position: -192px -128px;
}

.ui-icon-image {
    background-position: -208px -128px;
}

.ui-icon-video {
    background-position: -224px -128px;
}

.ui-icon-script {
    background-position: -240px -128px;
}

.ui-icon-alert {
    background-position: 0 -144px;
}

.ui-icon-info {
    background-position: -16px -144px;
}

.ui-icon-notice {
    background-position: -32px -144px;
}

.ui-icon-help {
    background-position: -48px -144px;
}

.ui-icon-check {
    background-position: -64px -144px;
}

.ui-icon-bullet {
    background-position: -80px -144px;
}

.ui-icon-radio-on {
    background-position: -96px -144px;
}

.ui-icon-radio-off {
    background-position: -112px -144px;
}

.ui-icon-pin-w {
    background-position: -128px -144px;
}

.ui-icon-pin-s {
    background-position: -144px -144px;
}

.ui-icon-play {
    background-position: 0 -160px;
}

.ui-icon-pause {
    background-position: -16px -160px;
}

.ui-icon-seek-next {
    background-position: -32px -160px;
}

.ui-icon-seek-prev {
    background-position: -48px -160px;
}

.ui-icon-seek-end {
    background-position: -64px -160px;
}

.ui-icon-seek-start {
    background-position: -80px -160px;
}

/* ui-icon-seek-first is deprecated, use ui-icon-seek-start instead */
.ui-icon-seek-first {
    background-position: -80px -160px;
}

.ui-icon-stop {
    background-position: -96px -160px;
}

.ui-icon-eject {
    background-position: -112px -160px;
}

.ui-icon-volume-off {
    background-position: -128px -160px;
}

.ui-icon-volume-on {
    background-position: -144px -160px;
}

.ui-icon-power {
    background-position: 0 -176px;
}

.ui-icon-signal-diag {
    background-position: -16px -176px;
}

.ui-icon-signal {
    background-position: -32px -176px;
}

.ui-icon-battery-0 {
    background-position: -48px -176px;
}

.ui-icon-battery-1 {
    background-position: -64px -176px;
}

.ui-icon-battery-2 {
    background-position: -80px -176px;
}

.ui-icon-battery-3 {
    background-position: -96px -176px;
}

.ui-icon-circle-plus {
    background-position: 0 -192px;
}

.ui-icon-circle-minus {
    background-position: -16px -192px;
}

.ui-icon-circle-close {
    background-position: -32px -192px;
}

.ui-icon-circle-triangle-e {
    background-position: -48px -192px;
}

.ui-icon-circle-triangle-s {
    background-position: -64px -192px;
}

.ui-icon-circle-triangle-w {
    background-position: -80px -192px;
}

.ui-icon-circle-triangle-n {
    background-position: -96px -192px;
}

.ui-icon-circle-arrow-e {
    background-position: -112px -192px;
}

.ui-icon-circle-arrow-s {
    background-position: -128px -192px;
}

.ui-icon-circle-arrow-w {
    background-position: -144px -192px;
}

.ui-icon-circle-arrow-n {
    background-position: -160px -192px;
}

.ui-icon-circle-zoomin {
    background-position: -176px -192px;
}

.ui-icon-circle-zoomout {
    background-position: -192px -192px;
}

.ui-icon-circle-check {
    background-position: -208px -192px;
}

.ui-icon-circlesmall-plus {
    background-position: 0 -208px;
}

.ui-icon-circlesmall-minus {
    background-position: -16px -208px;
}

.ui-icon-circlesmall-close {
    background-position: -32px -208px;
}

.ui-icon-squaresmall-plus {
    background-position: -48px -208px;
}

.ui-icon-squaresmall-minus {
    background-position: -64px -208px;
}

.ui-icon-squaresmall-close {
    background-position: -80px -208px;
}

.ui-icon-grip-dotted-vertical {
    background-position: 0 -224px;
}

.ui-icon-grip-dotted-horizontal {
    background-position: -16px -224px;
}

.ui-icon-grip-solid-vertical {
    background-position: -32px -224px;
}

.ui-icon-grip-solid-horizontal {
    background-position: -48px -224px;
}

.ui-icon-gripsmall-diagonal-se {
    background-position: -64px -224px;
}

.ui-icon-grip-diagonal-se {
    background-position: -80px -224px;
}

/* Misc visuals
----------------------------------*/

/* Corner radius */
.ui-corner-all,
.ui-corner-top,
.ui-corner-left,
.ui-corner-tl {
    border-top-left-radius: 5px;
}

.ui-corner-all,
.ui-corner-top,
.ui-corner-right,
.ui-corner-tr {
    border-top-right-radius: 5px;
}

.ui-corner-all,
.ui-corner-bottom,
.ui-corner-left,
.ui-corner-bl {
    border-bottom-left-radius: 5px;
}

.ui-corner-all,
.ui-corner-bottom,
.ui-corner-right,
.ui-corner-br {
    border-bottom-right-radius: 5px;
}

/* Overlays */
.ui-widget-overlay {
    background: #aaaaaa;
    opacity: .3;
    filter: Alpha(Opacity=30); /* support: IE8 */
}

.ui-widget-shadow {
    margin: -8px 0 0 -8px;
    padding: 8px;
    background: #aaaaaa;
    opacity: .3;
    filter: Alpha(Opacity=30); /* support: IE8 */
    border-radius: 8px;
}

/*slinky menu css here*/
.slinky-menu {
    overflow: hidden;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}

.slinky-menu > ul {
    left: 0;
    position: relative;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}

.slinky-menu ul,
.slinky-menu li {
    list-style: none;
    margin: 0;
}

.slinky-menu ul {
    width: 100%;
}

.slinky-menu a {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.slinky-menu a span {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    line-height: 1.4;
}

.slinky-menu li ul {
    display: none;
    left: 100%;
    position: absolute;
    top: 0;
}

.slinky-menu .header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.slinky-menu .header .title {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    line-height: 1.4;
    margin: 0;
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
}

.slinky-theme-default {
    background: #f6f7f8;
}

.slinky-theme-default .title {
    color: #333;
    padding: 1em;
}

.slinky-theme-default li {
    line-height: 1;
}

.slinky-theme-default a:not(.back) {
    color: #333;
    padding: 1em;
}

.slinky-theme-default a:not(.back):hover {
    background: rgba(90, 200, 250, 0.25);
}

.slinky-theme-default a:not(.back):active {
    background: rgba(90, 200, 250, 0.5);
}

.slinky-theme-default .next::after,
.slinky-theme-default .back::before {
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+ICAgIDxwYXRoIGQ9Ik0xMi4yMTkgMi4yODFMMTAuNzggMy43MiAxOC4wNjIgMTFIMnYyaDE2LjA2M2wtNy4yODIgNy4yODEgMS40MzggMS40MzggOS05IC42ODctLjcxOS0uNjg3LS43MTl6IiAvPjwvc3ZnPg==) center no-repeat;
    background-size: 1em;
    content: '';
    height: 1em;
    opacity: 0.25;
    -webkit-transition: 200ms;
    transition: 200ms;
    width: 1em;
}

.slinky-theme-default .next::after {
    margin-left: 1em;
}

.slinky-theme-default .back::before {
    padding: 1em;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
}

.slinky-theme-default .next:hover::after,
.slinky-theme-default .back:hover::before {
    opacity: 0.75;
}

.slinky-theme-default .next:active::after,
.slinky-theme-default .back:active::before {
    opacity: 1;
}

