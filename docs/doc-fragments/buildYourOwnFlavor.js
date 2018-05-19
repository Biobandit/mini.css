var version = require('../vinf').version;
module.exports = {
  id: 'build-your-own-flavor',
  title: 'Build your own flavor',
  content: `<div class="section">
    <h3>Core module</h3>
    <p>The <strong>Core</strong> module contains styling rules for common textual elements, headings, quotations and code, as well as rules for universal styling and color palettes. This module is always enabled, as many other modules and components depend on it.</p>
    <form id="core">
      <fieldset>
        <legend id="textual-content">Textual content</legend>
        <div class="input-group vertical">
          <label for="baseRootFontSize">Base root font size (px):</label>
          <input type="number" id="baseRootFontSize" style="width:calc(100% - 0.5rem);" value="16" min="1" autocomplete="off"/>
          <p><small>Base font size for all text elements, in pixels</small></p>
        </div>
        <div class="input-group vertical">
          <label for="baseLineHeight">Base line height:</label>
          <input type="number" id="baseLineHeight" style="width:calc(100% - 0.5rem);" value="1.5" min="0.01" step="0.001" autocomplete="off"/>
          <p><small>Base line height for all text elements (unitless)</small></p>
        </div>
        <div class="input-group vertical">
          <label for="boldFontWeight">Heading font weight:</label>
          <input type="number" id="boldFontWeight" style="width:calc(100% - 0.5rem);" value="500" min="100" step="100" max="900" autocomplete="off"/>
          <p><small>Font weight for headings (400 is normal, 700 is bold)</small></p>
        </div>
        <div class="input-group vertical">
          <label for="headingRatio">Heading ratio:</label>
          <input type="number" id="headingRatio" style="width:calc(100% - 0.5rem);" value="1.19" min="0.001" step="0.001" autocomplete="off"/>
          <p><small>Ratio for headings</small></p>
        </div>
        <div class="input-group vertical">
          <label for="headingLineHeight">Heading line height:</label>
          <input type="number" id="headingLineHeight" style="width:calc(100% - 0.5rem);" value="1.2" min="0.001" step="0.001" autocomplete="off"/>
          <p><small>Line height for headings</small></p>
        </div>
        <div class="input-group vertical">
          <label for="headingFontWeight">Heading font weight:</label>
          <input type="number" id="headingFontWeight" style="width:calc(100% - 0.5rem);" value="500" min="100" step="100" max="900" autocomplete="off"/>
          <p><small>Font weight for headings (400 is normal, 700 is bold)</small></p>
        </div>
        <div class="input-group vertical">
          <label for="subheadingFontSize">Subheading font size (em):</label>
          <input type="number" id="subheadingFontSize" style="width:calc(100% - 0.5rem);" value="0.75" min="0.001" step="0.001" autocomplete="off"/>
          <p><small>Font size for subheadings, relative to context</small></p>
        </div>
        <div class="input-group vertical">
          <label for="subheadingTopMargin">Subheading top margin (rem):</label>
          <input type="number" id="subheadingTopMargin" style="width:calc(100% - 0.5rem);" value="-0.25" step="0.001" autocomplete="off"/>
          <p><small>Top margin for subheadings, relative to root</small></p>
        </div>
        <div class="input-group vertical">
          <label for="smallFontSize">Small text font size (em):</label>
          <input type="number" id="smallFontSize" style="width:calc(100% - 0.5rem);" value="0.75" min="0.001" step="0.001" autocomplete="off"/>
          <p><small>Font size for small text, relative to context</small></p>
        </div>
        <div class="input-group vertical">
          <label for="horizontalRuleLineHeight">Horizontal rule line height:</label>
          <input type="number" id="horizontalRuleLineHeight" style="width:calc(100% - 0.5rem);" value="1.25" min="0.001" step="0.001" autocomplete="off"/>
          <p><small>Line height for headings</small></p>
        </div>
        <div class="input-group vertical">
          <label for="codeFontSize">Code font size (em):</label>
          <input type="number" id="codeFontSize" style="width:calc(100% - 0.5rem);" value="0.85" min="0.001" step="0.001" autocomplete="off"/>
          <p><small>Font size for code elements, relative to context</small></p>
        </div>
        <div class="input-group vertical">
          <label for="supTop">Superscript top position (em):</label>
          <input type="number" id="supTop" style="width:calc(100% - 0.5rem);" value="-0.5" step="0.001" autocomplete="off"/>
          <p><small>Top position for superscript, relative to context</small></p>
        </div>
        <div class="input-group vertical">
          <label for="subBottom">Subscript bottom position (em):</label>
          <input type="number" id="subBottom" style="width:calc(100% - 0.5rem);" value="0.25" step="0.001" autocomplete="off"/>
          <p><small>Bottom position for subscript, relative to context</small></p>
        </div>
        <div class="input-group vertical">
          <label for="blockquoteQuotationSize">Blockquote quotation size (rem):</label>
          <input type="number" id="blockquoteQuotationSize" style="width:calc(100% - 0.5rem);" value="3" min="0.001" step="0.001" autocomplete="off"/>
          <p><small>Font size for the quotation of blockquotes, relative to root</small></p>
        </div>
        <div class="input-group vertical">
          <label for="blockquoteCiteSize">Blockquote cite size (rem):</label>
          <input type="number" id="blockquoteCiteSize" style="width:calc(100% - 0.5rem);" value="0.75" min="0.001" step="0.001" autocomplete="off"/>
          <p><small>Font size for the citation of blockquotes, relative to root</small></p>
        </div>
      </fieldset>
      <fieldset>
        <legend id="color-palette">Color palette</legend>
        <div class="input-group vertical">
          <label for="foreColor">Foreground color:</label>
          <input type="text" id="foreColor" value="#111" autocomplete="off"/>
          <span id="foreColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#111; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Foreground color for most textual elements</small></p>
        </div>
        <div class="input-group vertical">
          <label for="backColor">Background color:</label>
          <input type="text" id="backColor" value="#f8f8f8" autocomplete="off"/>
          <span id="backColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#f8f8f8; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Background color for document body</small></p>
        </div>
        <div class="input-group vertical">
          <label for="borderColor">Border color:</label>
          <input type="text" id="borderColor" value="#aaa" autocomplete="off"/>
          <span id="borderColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#aaa; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Border color for most elements</small></p>
        </div>
        <div class="input-group vertical">
          <label for="secondaryForeColor">Secondary foreground color:</label>
          <input type="text" id="secondaryForeColor" value="#444" autocomplete="off"/>
          <span id="secondaryForeColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#444; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Secondary foreground color for certain textual elements</small></p>
        </div>
        <div class="input-group vertical">
          <label for="secondaryBackColor">Secondary background color:</label>
          <input type="text" id="secondaryBackColor" value="#f0f0f0" autocomplete="off"/>
          <span id="secondaryBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#f0f0f0; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Secondary background color for certain elements</small></p>
        </div>
        <div class="input-group vertical">
          <label for="secondaryBorderColor">Secondary border color:</label>
          <input type="text" id="secondaryBorderColor" value="#ddd" autocomplete="off"/>
          <span id="secondaryBorderColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#ddd; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Secondary border color for certain elements</small></p>
        </div>
        <div class="input-group vertical">
          <label for="blockquoteSidebarColor">Blockquote sidebar color:</label>
          <input type="text" id="blockquoteSidebarColor" value="#f57c00" autocomplete="off"/>
          <span id="blockquoteSidebarColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#f57c00; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Sidebar color for blockquote elements</small></p>
        </div>
        <div class="input-group vertical">
          <label for="preSidebarColor">Preformatted text sidebar color:</label>
          <input type="text" id="preSidebarColor" value="#1565c0" autocomplete="off"/>
          <span id="preSidebarColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#1565c0; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Sidebar color for preformatted text elements</small></p>
        </div>
        <div class="input-group vertical">
          <label for="aLinkColor">Link color:</label>
          <input type="text" id="aLinkColor" value="#0277bd" autocomplete="off"/>
          <span id="aLinkColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#0277bd; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Text color for hyperlink elements</small></p>
        </div>
        <div class="input-group vertical">
          <label for="aVisitedColor">Visited link color:</label>
          <input type="text" id="aVisitedColor" value="#01579b" autocomplete="off"/>
          <span id="aVisitedColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#01579b; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Text color for visited hyperlink elements</small></p>
        </div>
      </fieldset>
      <fieldset>
        <legend id="universal-styles">Universal styles</legend>
        <div class="input-group vertical">
          <label for="universalPadding">Universal padding (rem):</label>
          <input type="number" id="universalPadding" style="width:calc(100% - 0.5rem);" value="0.5" min="0.001" step="0.001" autocomplete="off"/>
          <p><small>Universal padding for most elements, relative to root</small></p>
        </div>
        <div class="input-group vertical">
          <label for="universalMargin">Universal margin (rem):</label>
          <input type="number" id="universalMargin" style="width:calc(100% - 0.5rem);" value="0.5" step="0.001" autocomplete="off"/>
          <p><small>Universal margin for most elements, relative to root</small></p>
        </div>
        <div class="input-group vertical">
          <label for="universalBorderRadius">Universal border radius (rem):</label>
          <input type="number" id="universalBorderRadius" style="width:calc(100% - 0.5rem);" value="0.125" min="0.001" step="0.001" autocomplete="off"/>
          <p><small>Universal border radius for most elements, relative to root</small></p>
        </div>
        <div class="input-group vertical">
          <label for="universalBoxShadow">Universal box shadow:</label>
          <input type="text" id="universalBoxShadow" style="width:calc(100% - 0.5rem);" value="none" autocomplete="off">
          <p><small>Universal box shadow for most elements</small></p>
        </div>
        <div class="input-group vertical">
          <label for="mobileBreakpoint">Mobile breakpoint (px):</label>
          <input type="number" id="mobileBreakpoint" style="width:calc(100% - 0.5rem);" value="768" min="1" autocomplete="off"/>
          <p><small>Breakpoint between mobile screen and desktops, in pixels</small></p>
        </div>
        <div class="input-group vertical">
          <label for="largeScreenBreakpoint">Large screen breakpoint (px):</label>
          <input type="number" id="largeScreenBreakpoint" style="width:calc(100% - 0.5rem);" value="1280" min="1" autocomplete="off"/>
          <p><small>Breakpoint between desktops and large screens, in pixels</small></p>
        </div>
      </fieldset>
    </form>
    <h3>Layout module</h3>
    <p>The <strong>Layout</strong> module contains rules and functionality for the grid and card systems. This module is not always enabled, but it's highly recommended that you enable it, as many other components depend on its functionality to work properly.</p>
    <form id="layout">
      <div class="input-group">
        <label for="layoutEnabled">Module enabled? (recommended)</label>
        <input type="checkbox" checked autocomplete="off" id="layoutEnabled"/>
      </div>
      <fieldset>
        <legend id="grid">Grid</legend>
        <div class="input-group vertical">
          <label for="gridColumnCount">Grid column count:</label>
          <input type="number" id="gridColumnCount" style="width:calc(100% - 0.5rem);" value="12" min="1" autocomplete="off"/>
          <p><small>Number of horizontal column partitions for the grid system (default 12)</small></p>
        </div>
        <div class="input-group vertical">
          <label for="gridMediumBreakpoint">Grid medium screen breakpoint (px):</label>
          <input type="number" id="gridMediumBreakpoint" style="width:calc(100% - 0.5rem);" value="768" min="1" autocomplete="off"/>
          <p><small>Breakpoint between small and medium screens, in pixels</small></p>
        </div>
        <div class="input-group vertical">
          <label for="gridLargeBreakpoint">Grid large screen breakpoint (px):</label>
          <input type="number" id="gridLargeBreakpoint" style="width:calc(100% - 0.5rem);" value="1280" min="1" autocomplete="off"/>
          <p><small>Breakpoint between medium and large screens, in pixels</small></p>
        </div>
      </fieldset>
      <fieldset>
        <legend id="cards">Cards</legend>
        <div class="input-group vertical">
          <label for="cardNormalWidth">Card normal width (px):</label>
          <input type="number" id="cardNormalWidth" style="width:calc(100% - 0.5rem);" value="320" min="1" autocomplete="off"/>
          <p><small>Width of normal cards, in pixels</small></p>
        </div>
        <div class="input-group vertical">
          <label for="cardSectionMediaHeight">Card media section height (px):</label>
          <input type="number" id="cardSectionMediaHeight" style="width:calc(100% - 0.5rem);" value="200" min="1" autocomplete="off"/>
          <p><small>Height of card media sections, in pixels</small></p>
        </div>
        <div class="input-group vertical">
          <label for="cardForeColor">Card foreground color:</label>
          <input type="text" id="cardForeColor" value="#111" autocomplete="off"/>
          <span id="cardForeColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#111; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Foreground color for cards</small></p>
        </div>
        <div class="input-group vertical">
          <label for="cardBackColor">Card background color:</label>
          <input type="text" id="cardBackColor" value="#f8f8f8" autocomplete="off"/>
          <span id="cardBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#f8f8f8; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Background color for cards</small></p>
        </div>
        <div class="input-group vertical">
          <label for="cardBorderColor">Card border color:</label>
          <input type="text" id="cardBorderColor" value="#ddd" autocomplete="off"/>
          <span id="cardBorderColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#ddd; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Border color for cards</small></p>
        </div>
      </fieldset>
    </form>
    <h3>Input control module</h3>
    <p>The <strong>Input control</strong> module contains styling rules for forms, input elements and buttons. This module is not always enabled, but it's highly recommended that you enable it, as some other components depend on its functionality to work properly.</p>
    <form id="inputControl">
      <div class="input-group">
        <label for="inputControlEnabled">Module enabled? (recommended)</label>
        <input type="checkbox" checked autocomplete="off" id="inputControlEnabled"/>
      </div>
      <fieldset>
        <legend id="forms-and-input">Forms &amp; input</legend>
        <div class="input-group vertical">
          <label for="formForeColor">Form foreground color:</label>
          <input type="text" id="formForeColor" value="#111" autocomplete="off"/>
          <span id="formForeColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#111; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Foreground color for forms</small></p>
        </div>
        <div class="input-group vertical">
          <label for="formBackColor">Form background color:</label>
          <input type="text" id="formBackColor" value="#f0f0f0" autocomplete="off"/>
          <span id="formBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#f0f0f0; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Background color for forms</small></p>
        </div>
        <div class="input-group vertical">
          <label for="formBorderColor">Form border color:</label>
          <input type="text" id="formBorderColor" value="#ddd" autocomplete="off"/>
          <span id="formBorderColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#ddd; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Border color for forms</small></p>
        </div>
        <div class="input-group vertical">
          <label for="inputForeColor">Input foreground color:</label>
          <input type="text" id="inputForeColor" value="#111" autocomplete="off"/>
          <span id="inputForeColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#111; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Foreground color for input elements</small></p>
        </div>
        <div class="input-group vertical">
          <label for="inputBackColor">Input background color:</label>
          <input type="text" id="inputBackColor" value="#f8f8f8" autocomplete="off"/>
          <span id="inputBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#f8f8f8; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Background color for input elements</small></p>
        </div>
        <div class="input-group vertical">
          <label for="inputBorderColor">Input border color:</label>
          <input type="text" id="inputBorderColor" value="#ddd" autocomplete="off"/>
          <span id="inputBorderColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#ddd; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Border color for input elements</small></p>
        </div>
        <div class="input-group vertical">
          <label for="inputFocusColor">Input border color (focused):</label>
          <input type="text" id="inputFocusColor" value="#0288d1" autocomplete="off"/>
          <span id="inputFocusColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#0288d1; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Border color for focused input elements</small></p>
        </div>
        <div class="input-group vertical">
          <label for="inputInvalidColor">Input border color (invalid):</label>
          <input type="text" id="inputInvalidColor" value="#d32f2f" autocomplete="off"/>
          <span id="inputInvalidColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#d32f2f; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Border color for invalid input elements</small></p>
        </div>
      </fieldset>
      <fieldset>
        <legend id="buttons">Buttons</legend>
        <div class="input-group vertical">
          <label for="buttonForeColor">Button foreground color:</label>
          <input type="text" id="buttonForeColor" value="#212121" autocomplete="off"/>
          <span id="buttonForeColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#212121; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Foreground color for buttons</small></p>
        </div>
        <div class="input-group vertical">
          <label for="buttonBackColor">Button background color:</label>
          <input type="text" id="buttonBackColor" value="#e2e2e2" autocomplete="off"/>
          <span id="buttonBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#e2e2e2; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Background color for buttons</small></p>
        </div>
        <div class="input-group vertical">
          <label for="buttonBorderColor">Button border color:</label>
          <input type="text" id="buttonBorderColor" value="transparent" autocomplete="off"/>
          <span id="buttonBorderColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:transparent; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Border color for buttons</small></p>
        </div>
        <div class="input-group vertical">
          <label for="buttonHoverBackColor">Button background color (hover):</label>
          <input type="text" id="buttonHoverBackColor" value="#dcdcdc" autocomplete="off"/>
          <span id="buttonHoverBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#dcdcdc; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Background color for buttons on hover</small></p>
        </div>
        <div class="input-group vertical">
          <label for="buttonHoverBorderColor">Button border color (hover):</label>
          <input type="text" id="buttonHoverBorderColor" value="transparent" autocomplete="off"/>
          <span id="buttonHoverBorderColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:transparent; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Border color for buttons on hover</small></p>
        </div>
        <div class="input-group vertical">
          <label for="buttonGroupBorderColor">Button group border color:</label>
          <input type="text" id="buttonGroupBorderColor" value="rgba(124,124,124,0.54)" autocomplete="off"/>
          <span id="buttonGroupBorderColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:rgba(124,124,124,0.54); display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Border color for buttons</small></p>
        </div>
      </fieldset>
    </form>
    <h3>Navigation module</h3>
    <p>The <strong>Navigation</strong> module contains styling rules for headers, footers, navigation bars and menu drawers. This module is not always enabled, but it's recommended that you enable it, as it contains functionality that is useful for most designs and layouts.</p>
    <form id="navigation">
      <div class="input-group">
        <label for="navigationEnabled">Module enabled? (recommended)</label>
        <input type="checkbox" autocomplete="off" checked id="navigationEnabled"/>
      </div>
      <fieldset>
        <legend id="header">Header</legend>
        <div class="input-group vertical">
          <label for="headerheight">Header height (rem):</label>
          <input type="number" id="headerheight" style="width:calc(100% - 0.5rem);" value="3.1875" min="0.0001" step="0.0001" autocomplete="off"/>
          <p><small>Height for header elements, relative to root</small></p>
        </div>
        <div class="input-group vertical">
          <label for="headerLogoFontSize">Header logo font size (rem):</label>
          <input type="number" id="headerLogoFontSize" style="width:calc(100% - 0.5rem);" value="1.75" min="0.001" step="0.001" autocomplete="off"/>
          <p><small>Font size of header elements, relative to root</small></p>
        </div>
        <div class="input-group vertical">
          <label for="headerForeColor">Header foreground color:</label>
          <input type="text" id="headerForeColor" value="#444" autocomplete="off"/>
          <span id="headerForeColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#444; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Foreground color for header elements</small></p>
        </div>
        <div class="input-group vertical">
          <label for="headerBackColor">Header background color:</label>
          <input type="text" id="headerBackColor" value="#f8f8f8" autocomplete="off"/>
          <span id="headerBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#f8f8f8; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Background color for header elements</small></p>
        </div>
        <div class="input-group vertical">
          <label for="headerBorderColor">Header border color:</label>
          <input type="text" id="headerBorderColor" value="#ddd" autocomplete="off"/>
          <span id="headerBorderColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#ddd; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Border color for header elements</small></p>
        </div>
        <div class="input-group vertical">
          <label for="headerHoverBackColor">Header background color (hover):</label>
          <input type="text" id="headerHoverBackColor" value="#f0f0f0" autocomplete="off"/>
          <span id="headerHoverBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#f0f0f0; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Background color for header elements on hover</small></p>
        </div>
      </fieldset>
      <fieldset>
        <legend id="navbar">Navigation bar</legend>
        <div class="input-group vertical">
          <label for="navSublinkDepth">Depth of navigation bar:</label>
          <input type="number" id="navSublinkDepth" style="width:calc(100% - 0.5rem);" value="2" min="1" autocomplete="off"/>
          <p><small>Maximum number of navigation bar levels</small></p>
        </div>
        <div class="input-group vertical">
          <label for="navForeColor">Navigation bar foreground color:</label>
          <input type="text" id="navForeColor" value="#444" autocomplete="off"/>
          <span id="navForeColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#444; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Foreground color for navigation bars</small></p>
        </div>
        <div class="input-group vertical">
          <label for="navBackColor">Navigation bar background color:</label>
          <input type="text" id="navBackColor" value="#f8f8f8" autocomplete="off"/>
          <span id="navBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#f8f8f8; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Background color for navigation bars</small></p>
        </div>
        <div class="input-group vertical">
          <label for="navBorderColor">Navigation bar border color:</label>
          <input type="text" id="navBorderColor" value="#ddd" autocomplete="off"/>
          <span id="navBorderColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#ddd; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Border color for navigation bars</small></p>
        </div>
        <div class="input-group vertical">
          <label for="navHoverBackColor">Navigation bar background color (hover):</label>
          <input type="text" id="navHoverBackColor" value="#f0f0f0" autocomplete="off"/>
          <span id="navHoverBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#f0f0f0; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Background color for navigation bars on hover</small></p>
        </div>
        <div class="input-group vertical">
          <label for="navLinkColor">Navigation bar link color:</label>
          <input type="text" id="navLinkColor" value="#0277bd" autocomplete="off"/>
          <span id="navLinkColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#0277bd; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Foreground color for navigation bar links</small></p>
        </div>
      </fieldset>
      <fieldset>
        <legend id="footer">Footer</legend>
        <div class="input-group vertical">
          <label for="footerFontSize">Footer font size (rem):</label>
          <input type="number" id="footerFontSize" style="width:calc(100% - 0.5rem);" value="0.875" min="0.001" step="0.001" autocomplete="off"/>
          <p><small>Font size for footers, relative to root</small></p>
        </div>
        <div class="input-group vertical">
          <label for="footerForeColor">Footer foreground color:</label>
          <input type="text" id="footerForeColor" value="#444" autocomplete="off"/>
          <span id="footerForeColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#444; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Foreground color for footers</small></p>
        </div>
        <div class="input-group vertical">
          <label for="footerBackColor">Footer background color:</label>
          <input type="text" id="footerBackColor" value="#f8f8f8" autocomplete="off"/>
          <span id="footerBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#f8f8f8; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Background color for footers</small></p>
        </div>
        <div class="input-group vertical">
          <label for="footerBorderColor">Footer border color:</label>
          <input type="text" id="footerBorderColor" value="#ddd" autocomplete="off"/>
          <span id="footerBorderColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#ddd; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Border color for footers</small></p>
        </div>
        <div class="input-group vertical">
          <label for="footerLinkColor">Footer link color:</label>
          <input type="text" id="footerLinkColor" value="#0277bd" autocomplete="off"/>
          <span id="footerLinkColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#0277bd; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Foreground color for footer links</small></p>
        </div>
      </fieldset>
      <fieldset>
        <legend id="menu-drawer">Menu Drawer</legend>
        <div class="input-group vertical">
          <label for="drawerWidth">Menu drawer width (px):</label>
          <input type="number" id="drawerWidth" style="width:calc(100% - 0.5rem);" value="320" min="1" autocomplete="off"/>
          <p><small>Width of menu drawers, in pixels</small></p>
        </div>
        <div class="input-group vertical">
          <label for="drawerToggleFontSize">Menu drawer toggle font size (em):</label>
          <input type="number" id="drawerToggleFontSize" style="width:calc(100% - 0.5rem);" value="1.5" min="0.001" step="0.001" autocomplete="off"/>
          <p><small>Font size for menu drawer toggle control, relative to context</small></p>
        </div>
        <div class="input-group vertical">
          <label for="drawerCloseSize">Menu drawer close size (rem):</label>
          <input type="number" id="drawerCloseSize" style="width:calc(100% - 0.5rem);" value="2" min="0.001" step="0.001" autocomplete="off"/>
          <p><small>Font size for menu drawer close, relative to root</small></p>
        </div>
        <div class="input-group vertical">
          <label for="drawerBackColor">Menu drawer background color:</label>
          <input type="text" id="drawerBackColor" value="#f8f8f8" autocomplete="off"/>
          <span id="drawerBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#f8f8f8; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Background color for menu drawers</small></p>
        </div>
        <div class="input-group vertical">
          <label for="drawerBorderColor">Menu drawer border color:</label>
          <input type="text" id="drawerBorderColor" value="#ddd" autocomplete="off"/>
          <span id="drawerBorderColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#ddd; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Border color for menu drawers</small></p>
        </div>
        <div class="input-group vertical">
          <label for="drawerHoverBackColor">Menu drawer background color (hover):</label>
          <input type="text" id="drawerHoverBackColor" value="#f0f0f0" autocomplete="off"/>
          <span id="drawerHoverBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#f0f0f0; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Background color for menu drawers on hover</small></p>
        </div>
        <div class="input-group vertical">
          <label for="drawerCloseColor">Menu drawer close color:</label>
          <input type="text" id="drawerCloseColor" value="#444" autocomplete="off"/>
          <span id="drawerCloseColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#444; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Close color for menu drawers</small></p>
        </div>
      </fieldset>
    </form>
    <h3>Table module</h3>
    <p>The <strong>Table</strong> module contains styling rules for tables. This module is not always enabled and it's recommended to enable it only if you're planning to use tables for displaying data.</p>
    <form id="table">
      <div class="input-group">
        <label for="tableEnabled">Module enabled?</label>
        <input type="checkbox" autocomplete="off" checked id="tableEnabled"/>
      </div>
      <fieldset>
        <legend id="tables">Tables</legend>
        <div class="input-group vertical">
          <label for="maxHeight">Table max height (px):</label>
          <input type="number" id="maxHeight" style="width:calc(100% - 0.5rem);" value="400" min="1" autocomplete="off"/>
          <p><small>Table max height, in pixels</small></p>
        </div>
        <div class="input-group vertical">
          <label for="captionFontSize">Caption font size (rem):</label>
          <input type="number" id="captionFontSize" style="width:calc(100% - 0.5rem);" value="1.5" min="0.001" step="0.001" autocomplete="off"/>
          <p><small>Font size of table captions, relative to root</small></p>
        </div>
        <div class="input-group vertical">
          <label for="mobileCardLabel">Mobile card label:</label>
          <input type="text" id="mobileCardLabel" style="width:calc(100% - 0.5rem);" value="data-label" autocomplete="off"/>
          <p><small>Attribute name for tables' mobile card labels</small></p>
        </div>
        <div class="input-group vertical">
          <label for="mobileLabelFontWeight">Mobile card label font weight:</label>
          <input type="number" id="mobileLabelFontWeight" style="width:calc(100% - 0.5rem);" value="16" min="1" autocomplete="off"/>
          <p><small>Font weight for tables' mobile card labels (400 is normal, 700 is bold)</small></p>
        </div>
        <div class="input-group vertical">
          <label for="tableBorderColor">Table border color:</label>
          <input type="text" id="tableBorderColor" value="#aaa" autocomplete="off"/>
          <span id="tableBorderColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#aaa; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Border color for tables</small></p>
        </div>
        <div class="input-group vertical">
          <label for="tableBorderSeparatorColor">Table separtor border color:</label>
          <input type="text" id="tableBorderSeparatorColor" value="#666" autocomplete="off"/>
          <span id="tableBorderSeparatorColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#666; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Separator border color for tables</small></p>
        </div>
        <div class="input-group vertical">
          <label for="thForeColor">Table heading foreground color:</label>
          <input type="text" id="thForeColor" value="#111" autocomplete="off"/>
          <span id="thForeColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#111; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Foreground color for table headings</small></p>
        </div>
        <div class="input-group vertical">
          <label for="thBackColor">Table heading background color:</label>
          <input type="text" id="thBackColor" value="#e6e6e6" autocomplete="off"/>
          <span id="thBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#e6e6e6; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Background color for table headings</small></p>
        </div>
        <div class="input-group vertical">
          <label for="tdForeColor">Table data foreground color:</label>
          <input type="text" id="tdForeColor" value="#111" autocomplete="off"/>
          <span id="tdForeColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#111; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Foreground color for table data</small></p>
        </div>
        <div class="input-group vertical">
          <label for="tdBackColor">Table data background color:</label>
          <input type="text" id="tdBackColor" value="#f8f8f8" autocomplete="off"/>
          <span id="tdBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#f8f8f8; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Background color for table data</small></p>
        </div>
        <div class="input-group vertical">
          <label for="tdAltBackColor">Table data alternative background color:</label>
          <input type="text" id="tdAltBackColor" value="#eee" autocomplete="off"/>
          <span id="tdAltBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#eee; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Alternative background color for table data</small></p>
        </div>
        <div class="input-group vertical">
          <label for="tdHoverBackColor">Table data background color (hover):</label>
          <input type="text" id="tdHoverBackColor" value="#90caf9" autocomplete="off"/>
          <span id="tdHoverBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#90caf9; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Background color for table data on hover</small></p>
        </div>
      </fieldset>
    </form>
    <h3>Contextual module</h3>
    <p>The <strong>Contextual</strong> module contains styling rules for text highlighting, toasts, tooltips, modal dialogs, spoilers and accordions. This module is not always enabled, but it's recommended that you enable it, as it contains functionality that is useful for most designs and layouts.</p>
    <form id="contextual">
      <div class="input-group">
        <label for="contextualEnabled">Module enabled?</label>
        <input type="checkbox" autocomplete="off" checked id="contextualEnabled"/>
      </div>
      <fieldset>
        <legend id="text-highlighting">Text highlighting</legend>
        <div class="input-group vertical">
          <label for="markForeColor">Highlight foreground color:</label>
          <input type="text" id="markForeColor" value="#fafafa" autocomplete="off"/>
          <span id="markForeColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#fafafa; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Foreground color for highlighted text elements</small></p>
        </div>
        <div class="input-group vertical">
          <label for="markBackColor">Highlight background color:</label>
          <input type="text" id="markBackColor" value="#0277bd" autocomplete="off"/>
          <span id="markBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#0277bd; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Background color for highlighted text elements</small></p>
        </div>
        <div class="input-group vertical">
          <label for="markFontSize">Highlight font size (em):</label>
          <input type="number" id="markFontSize" style="width:calc(100% - 0.5rem);" value="0.95" step="0.001" autocomplete="off"/>
          <p><small>Font size for highlighted text elements, relative to context</small></p>
        </div>
        <div class="input-group vertical">
          <label for="markLineHeight">Highlight line height:</label>
          <input type="number" id="markLineHeight" style="width:calc(100% - 0.5rem);" value="1" step="0.001" autocomplete="off"/>
          <p><small>Line height for highlighted text elements</small></p>
        </div>
      </fieldset>
      <fieldset>
        <legend id="toasts">Toasts</legend>
        <div class="input-group vertical">
          <label for="toastForeColor">Toast foreground color:</label>
          <input type="text" id="toastForeColor" value="#fafafa" autocomplete="off"/>
          <span id="toastForeColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#fafafa; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Foreground color for toasts</small></p>
        </div>
        <div class="input-group vertical">
          <label for="toastBackColor">Toast background color:</label>
          <input type="text" id="toastBackColor" value="#212121" autocomplete="off"/>
          <span id="toastBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#212121; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Background color for toasts</small></p>
        </div>
      </fieldset>
      <fieldset>
        <legend id="tooltips">Tooltips</legend>
        <div class="input-group vertical">
          <label for="tooltipForeColor">Tooltip foreground color:</label>
          <input type="text" id="tooltipForeColor" value="#fafafa" autocomplete="off"/>
          <span id="tooltipForeColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#fafafa; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Foreground color for tooltips</small></p>
        </div>
        <div class="input-group vertical">
          <label for="tooltipBackColor">Tooltip background color:</label>
          <input type="text" id="tooltipBackColor" value="#212121" autocomplete="off"/>
          <span id="tooltipBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#212121; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Background color for tooltips</small></p>
        </div>
      </fieldset>
      <fieldset>
        <legend id="modals">Modal dialogs</legend>
        <div class="input-group vertical">
          <label for="modalOverlayColor">Modal overlay color:</label>
          <input type="text" id="modalOverlayColor" value="rgba(0,0,0,0.45)" autocomplete="off"/>
          <span id="modalOverlayColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:rgba(0,0,0,0.45); display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Overal color for modal dialogs</small></p>
        </div>
        <div class="input-group vertical">
          <label for="modalCloseColor">Modal close color:</label>
          <input type="text" id="modalCloseColor" value="#444" autocomplete="off"/>
          <span id="modalCloseColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#444; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Close color for modal dialogs</small></p>
        </div>
        <div class="input-group vertical">
          <label for="modalCloseHoverBackColor">Modal close background color (hover):</label>
          <input type="text" id="modalCloseHoverBackColor" value="#f0f0f0" autocomplete="off"/>
          <span id="modalCloseHoverBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#f0f0f0; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Background color for modal dialogs' close (on hover)</small></p>
        </div>
        <div class="input-group vertical">
          <label for="modalCloseSize">Modal close size (rem):</label>
          <input type="number" id="modalCloseSize" style="width:calc(100% - 0.5rem);" value="1.75" min="0.001" step="0.001"/>
          <p><small>Modal dialog close size, relative to root</small></p>
        </div>
      </fieldset>
      <fieldset>
        <legend id="collapse">Spoilers &amp; accordions</legend>
        <div class="input-group vertical">
          <label for="collapseLabelHeight">Collapse label height (rem):</label>
          <input type="number" id="collapseLabelHeight" style="width:calc(100% - 0.5rem);" value="1.5" min="0.001" step="0.001" autocomplete="off"/>
          <p><small>Label height for spoilers &amp; accordions, relative to root</small></p>
        </div>
        <div class="input-group vertical">
          <label for="collapseContentMaxHeight">Collapse content max height (px):</label>
          <input type="number" id="collapseContentMaxHeight" style="width:calc(100% - 0.5rem);" value="400" min="1" autocomplete="off"/>
          <p><small>Maximum height for content in spoilers &amp; accordions, in pixels</small></p>
        </div>
        <div class="input-group vertical">
          <label for="collapseContentBackColor">Collapse content background color:</label>
          <input type="text" id="collapseContentBackColor" value="#fafafa" autocomplete="off"/>
          <span id="collapseContentBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#fafafa; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Background color for content in spoilers &amp; accordions</small></p>
        </div>
        <div class="input-group vertical">
          <label for="collapseBorderColor">Collapse border color:</label>
          <input type="text" id="collapseBorderColor" value="#ddd" autocomplete="off"/>
          <span id="collapseBorderColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#ddd; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Border color for spoilers &amp; accordions</small></p>
        </div>
        <div class="input-group vertical">
          <label for="collapseLabelForeColor">Collapse label foreground color:</label>
          <input type="text" id="collapseLabelForeColor" value="#212121" autocomplete="off"/>
          <span id="collapseLabelForeColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#212121; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Foreground color for labels in spoilers &amp; accordions</small></p>
        </div>
        <div class="input-group vertical">
          <label for="collapseLabelBackColor">Collapse label background color:</label>
          <input type="text" id="collapseLabelBackColor" value="#e8e8e8" autocomplete="off"/>
          <span id="collapseLabelBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#e8e8e8; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Background color for labels in spoilers &amp; accordions</small></p>
        </div>
        <div class="input-group vertical">
          <label for="collapseLabelHoverBackColor">Collapse label background color (hover):</label>
          <input type="text" id="collapseLabelHoverBackColor" value="#f0f0f0" autocomplete="off"/>
          <span id="collapseLabelHoverBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#f0f0f0; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Background color for labels in spoilers &amp; accordions (on hover)</small></p>
        </div>
        <div class="input-group vertical">
          <label for="collapseSelectedLabelBackColor">Collapse selected label background color:</label>
          <input type="text" id="collapseSelectedLabelBackColor" value="#ececec" autocomplete="off"/>
          <span id="collapseSelectedLabelBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#ececec; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Background color for selected labels in spoilers &amp; accordions</small></p>
        </div>
        <div class="input-group vertical">
          <label for="collapseSelectedLabelBorderColor">Collapse selected label border color:</label>
          <input type="text" id="collapseSelectedLabelBorderColor" value="#0277bd" autocomplete="off"/>
          <span id="collapseSelectedLabelBorderColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#0277bd; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Border color for selected labels in spoilers &amp; accordions</small></p>
        </div>
      </fieldset>
    </form>
    <h3>Progress module</h3>
    <p>The <strong>Progress</strong> module contains styling rules for progress bars and donut spinners. This module is not always enabled, but it's recommended that you enable it, as it contains functionality that is useful for most designs and layouts.</p>
    <form id="progress">
      <div class="input-group">
        <label for="progressEnabled">Module enabled?</label>
        <input type="checkbox" autocomplete="off" checked id="progressEnabled"/>
      </div>
      <fieldset>
        <legend id="progress-bars">Progress bars</legend>
        <div class="input-group vertical">
          <label for="progressHeight">Progress bar height (rem):</label>
          <input type="number" id="progressHeight" style="width:calc(100% - 0.5rem);" value="0.75" min="0.001" step="0.001" autocomplete="off"/>
          <p><small>Height of progress bars, relative to root</small></p>
        </div>
        <div class="input-group vertical">
          <label for="progressForeColor">Progress bar foreground color:</label>
          <input type="text" id="progressForeColor" value="#555" autocomplete="off"/>
          <span id="progressForeColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#555; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Foreground color for progress bars</small></p>
        </div>
        <div class="input-group vertical">
          <label for="progressBackColor">Progress bar background color:</label>
          <input type="text" id="progressBackColor" value="#ddd" autocomplete="off"/>
          <span id="progressBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#ddd; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Background color for progress bars</small></p>
        </div>
        <div class="input-group vertical">
          <label for="progressMaxValue">Progress bar maximum value:</label>
          <input type="number" id="progressMaxValue" style="width:calc(100% - 0.5rem);" value="1000" min="2" autocomplete="off"/>
          <p><small>Maximum value for progress bars</small></p>
        </div>
        <div class="input-group vertical">
          <label for="progressInlineWidth">Progress bar inline width (%):</label>
          <input type="number" id="progressInlineWidth" style="width:calc(100% - 0.5rem);" value="60" min="0.01" step="0.001" autocomplete="off"/>
          <p><small>Width for inline progress bars, in percentage</small></p>
        </div>
      </fieldset>
      <fieldset>
        <legend id="donut-spinner">Donut spinners</legend>
        <div class="input-group vertical">
          <label for="spinnerDonutSize">Donut spinner size (rem):</label>
          <input type="number" id="spinnerDonutSize" style="width:calc(100% - 0.5rem);" value="1.25" min="0.001" step="0.001" autocomplete="off"/>
          <p><small>Size of donut spinners, relative to root</small></p>
        </div>
        <div class="input-group vertical">
          <label for="spinnerDonutBorderThickness">Donut spinner thickness (rem):</label>
          <input type="number" id="spinnerDonutBorderThickness" style="width:calc(100% - 0.5rem);" value="0.25" min="0.001" step="0.001" autocomplete="off"/>
          <p><small>Thickness of donut spinners, relative to root</small></p>
        </div>
        <div class="input-group vertical">
          <label for="spinnerDonutForeColor">Donut spinner foreground color:</label>
          <input type="text" id="spinnerDonutForeColor" value="#555" autocomplete="off"/>
          <span id="spinnerDonutForeColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#555; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Foreground color for donut spinners</small></p>
        </div>
        <div class="input-group vertical">
          <label for="spinnerDonutBackColor">Donut spinner background color:</label>
          <input type="text" id="spinnerDonutBackColor" value="#ddd" autocomplete="off"/>
          <span id="spinnerDonutBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#ddd; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Background color for donut spinners</small></p>
        </div>
      </fieldset>
    </form>
    <h3>Icons module</h3>
    <p>The <strong>Icons</strong> module contains styling rules for icons. This module is not always enabled and it's recommended to enable it only if you're planning to use the icon set provided.</p>
    <form id="icons">
      <div class="input-group">
        <label for="iconsEnabled">Module enabled?</label>
        <input type="checkbox" autocomplete="off" id="iconsEnabled"/>
      </div>
    </form>
    <h3>Utility module</h3>
    <p>The <strong>Utility</strong> module contains styling rules for utility classes. This module is not always enabled, but it's recommended to enable it as it contains some features that can be useful in most designs.</p>
    <form id="utility">
      <div class="input-group">
        <label for="utilityEnabled">Module enabled? (recommended)</label>
        <input type="checkbox" autocomplete="off" checked id="utilityEnabled"/>
      </div>
      <fieldset>
        <legend id="utility">Utilities</legend>
        <div class="input-group vertical">
          <label for="genericBorderColor">Generic border color:</label>
          <input type="text" id="genericBorderColor" value="rgba(0,0,0,0.3)" autocomplete="off"/>
          <span id="genericBorderColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:rgba(0,0,0,0.3); display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Border color for the generic border utility class</small></p>
        </div>
        <div class="input-group vertical">
          <label for="genericBoxShadowColor">Generic box shadow color:</label>
          <input type="text" id="genericBoxShadowColor" value="rgba(0,0,0,0.125)" autocomplete="off"/>
          <span id="genericBoxShadowColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:rgba(0,0,0,0.125); display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Box shadow color for the generic box shadow utility class</small></p>
        </div>
      </fieldset>
    </form>
    <h3>Get your flavor</h3>
    <p>Click the button below to get your customized flavor!</p>
    <button id="generateFlavor">Generate flavor</button>
  </div>
  <script>
    window.onload = function(){
      previewPairs.forEach(function(v){
        autoPreview(document.getElementById(v[0]), v[1]);
      });
      autoUpdatePairs.forEach(function(v){
        autoUpdate(document.getElementById(v[0]), document.getElementById(v[1]));
      });
      controlDisablerPairs.forEach(function(v){
        changeFormControls(v[0], v[1]);
      });
      document.getElementById('generateFlavor').addEventListener('click', function(e){
        generateFlavor();
      });
    }
    var previewPairs = [
      ['foreColor','foreColorPreview'],
      ['backColor','backColorPreview'],
      ['borderColor','borderColorPreview'],
      ['secondaryBackColor','secondaryBackColorPreview'],
      ['secondaryForeColor','secondaryForeColorPreview'],
      ['secondaryBorderColor','secondaryBorderColorPreview'],
      ['blockquoteSidebarColor','blockquoteSidebarColorPreview'],
      ['preSidebarColor','preSidebarColorPreview'],
      ['aLinkColor','aLinkColorPreview'],
      ['aVisitedColor','aVisitedColorPreview'],
      ['cardForeColor','cardForeColorPreview'],
      ['cardBackColor','cardBackColorPreview'],
      ['cardBorderColor','cardBorderColorPreview'],
      ['formForeColor','formForeColorPreview'],
      ['formBackColor','formBackColorPreview'],
      ['formBorderColor','formBorderColorPreview'],
      ['inputForeColor','inputForeColorPreview'],
      ['inputBackColor','inputBackColorPreview'],
      ['inputBorderColor','inputBorderColorPreview'],
      ['inputFocusColor','inputFocusColorPreview'],
      ['inputInvalidColor','inputInvalidColorPreview'],
      ['buttonForeColor','buttonForeColorPreview'],
      ['buttonBackColor','buttonBackColorPreview'],
      ['buttonBorderColor','buttonBorderColorPreview'],
      ['buttonHoverBackColor','buttonHoverBackColorPreview'],
      ['buttonHoverBorderColor','buttonHoverBorderColorPreview'],
      ['buttonGroupBorderColor','buttonGroupBorderColorPreview'],
      ['headerForeColor','headerForeColorPreview'],
      ['headerBackColor','headerBackColorPreview'],
      ['headerBorderColor','headerBorderColorPreview'],
      ['headerHoverBackColor','headerHoverBackColorPreview'],
      ['navForeColor','navForeColorPreview'],
      ['navBackColor','navBackColorPreview'],
      ['navHoverBackColor','navHoverBackColorPreview'],
      ['navBorderColor','navBorderColorPreview'],
      ['navLinkColor','navLinkColorPreview'],
      ['footerForeColor','footerForeColorPreview'],
      ['footerBackColor','footerBackColorPreview'],
      ['footerBorderColor','footerBorderColorPreview'],
      ['footerLinkColor','footerLinkColorPreview'],
      ['drawerBackColor','drawerBackColorPreview'],
      ['drawerHoverBackColor','drawerHoverBackColorPreview'],
      ['drawerCloseColor','drawerCloseColorPreview'],
      ['tableBorderColor','tableBorderColorPreview'],
      ['tableBorderSeparatorColor','tableBorderSeparatorColorPreview'],
      ['thForeColor','thForeColorPreview'],
      ['thBackColor','thBackColorPreview'],
      ['tdForeColor','tdForeColorPreview'],
      ['tdBackColor','tdBackColorPreview'],
      ['tdAltBackColor','tdAltBackColorPreview'],
      ['tdHoverBackColor','tdHoverBackColorPreview'],
      ['markForeColor','markForeColorPreview'],
      ['markBackColor','markBackColorPreview'],
      ['toastForeColor','toastForeColorPreview'],
      ['toastBackColor','toastBackColorPreview'],
      ['tooltipForeColor','tooltipForeColorPreview'],
      ['tooltipBackColor','tooltipBackColorPreview'],
      ['modalOverlayColor','modalOverlayColorPreview'],
      ['modalCloseColor','modalCloseColorPreview'],
      ['modalCloseHoverBackColor','modalCloseHoverBackColorPreview'],
      ['collapseContentBackColor','collapseContentBackColorPreview'],
      ['collapseLabelForeColor','collapseLabelForeColorPreview'],
      ['collapseLabelBackColor','collapseLabelBackColorPreview'],
      ['collapseLabelHoverBackColor','collapseLabelHoverBackColorPreview'],
      ['collapseSelectedLabelBackColor','collapseSelectedLabelBackColorPreview'],
      ['collapseBorderColor','collapseBorderColorPreview'],
      ['collapseSelectedLabelBorderColor','collapseSelectedLabelBorderColorPreview'],
      ['progressForeColor','progressForeColorPreview'],
      ['progressBackColor','progressBackColorPreview'],
      ['spinnerDonutForeColor','spinnerDonutForeColorPreview'],
      ['spinnerDonutBackColor','spinnerDonutBackColorPreview'],
      ['genericBorderColor','genericBorderColorPreview'],
      ['genericBoxShadowColor','genericBoxShadowColorPreview']
    ];
    var autoUpdatePairs = [
      ['gridMediumBreakpoint', 'mobileBreakpoint'],
      ['gridLargeBreakpoint', 'largeScreenBreakpoint'],
      ['cardForeColor', 'foreColor'],
      ['cardBackColor', 'backColor'],
      ['cardBorderColor', 'secondaryBorderColor'],
      ['formBackColor', 'secondaryBackColor'],
      ['formForeColor', 'foreColor'],
      ['formBorderColor', 'secondaryBorderColor'],
      ['inputBackColor', 'backColor'],
      ['inputForeColor', 'foreColor'],
      ['inputBorderColor', 'secondaryBorderColor'],
      ['headerBackColor', 'backColor'],
      ['headerForeColor', 'secondaryForeColor'],
      ['headerHoverBackColor', 'secondaryBackColor'],
      ['headerBorderColor', 'secondaryBorderColor'],
      ['navBackColor', 'backColor'],
      ['navForeColor', 'secondaryForeColor'],
      ['navHoverBackColor', 'secondaryBackColor'],
      ['navBorderColor', 'secondaryBorderColor'],
      ['navLinkColor', 'aLinkColor'],
      ['footerBackColor', 'backColor'],
      ['footerForeColor', 'secondaryForeColor'],
      ['footerBorderColor', 'secondaryBorderColor'],
      ['footerLinkColor', 'aLinkColor'],
      ['drawerBackColor', 'backColor'],
      ['drawerHoverBackColor', 'secondaryBackColor'],
      ['drawerBorderColor', 'secondaryBorderColor'],
      ['drawerCloseColor', 'secondaryForeColor'],
      ['tableBorderColor', 'borderColor'],
      ['thForeColor', 'foreColor'],
      ['tdBackColor', 'backColor'],
      ['tdForeColor', 'foreColor'],
      ['modalCloseColor', 'secondaryForeColor'],
      ['modalCloseHoverBackColor', 'secondaryBackColor'],
      ['collapseLabelHoverBackColor', 'secondaryBackColor'],
      ['collapseBorderColor', 'secondaryBorderColor'],
      ['collapseSelectedLabelBorderColor', 'aLinkColor'],
      ['progressBackColor', 'secondaryBorderColor'],
      ['spinnerDonutBackColor', 'progressBackColor'],
      ['spinnerDonutForeColor', 'progressForeColor']
    ];
    var controlDisablerPairs = [
      ['layoutEnabled', 'layout'],
      ['inputControlEnabled','inputControl'],
      ['navigationEnabled', 'navigation'],
      ['tableEnabled', 'table'],
      ['contextualEnabled', 'contextual'],
      ['progressEnabled', 'progress'],
      ['iconsEnabled', 'icons'],
      ['utilityEnabled', 'utility']
    ];
    function changeFormControls(element, form){
      document.getElementById(element).addEventListener('input', function(e){
        if(e.target.checked)
          Array.prototype.slice.call(document.querySelectorAll('#'+form+' :not(#'+element+')')).forEach(v => v.disabled = false);
        else
          Array.prototype.slice.call(document.querySelectorAll('#'+form+' :not(#'+element+')')).forEach(v => v.disabled = true);
      });
    }
    function updateColorPreview(element, value) { document.getElementById(element).style.background = value }
    function autoPreview(element, previewElement){
      element.addEventListener('input', function(e){ updateColorPreview(previewElement, e.target.value)});
      element.addEventListener('change', function(e){ updateColorPreview(previewElement, e.target.value)});
    }
    function autoUpdate(element, fromElement){
      element.setAttribute('autoupdate','true');
      element.addEventListener('input', function(e){ e.target.setAttribute('autoupdate','false')});
      fromElement.addEventListener('input', function(e){
        if(element.getAttribute('autoupdate') === 'true'){
          element.value = e.target.value;
          element.dispatchEvent(new Event('change'));
        }
      })
    }
    function getFlavorData(){
      return {
        core : {
          baseRootFontSize: document.getElementById('baseRootFontSize').value,
          baseLineHeight: document.getElementById('baseLineHeight').value,
          foreColor: document.getElementById('foreColor').value,
          backColor: document.getElementById('backColor').value,
          secondaryForeColor: document.getElementById('secondaryForeColor').value,
          secondaryBackColor: document.getElementById('secondaryBackColor').value,
          borderColor: document.getElementById('borderColor').value,
          secondaryBorderColor: document.getElementById('secondaryBorderColor').value,
          universalMargin: document.getElementById('universalMargin').value,
          universalPadding: document.getElementById('universalPadding').value,
          universalBorderRadius: document.getElementById('universalBorderRadius').value,
          universalBoxShadow: document.getElementById('universalBoxShadow').value,
          headingLineHeight: document.getElementById('headingLineHeight').value,
          headingRatio: document.getElementById('headingRatio').value,
          headingFontWeight: document.getElementById('headingFontWeight').value,
          subheadingFontSize: document.getElementById('subheadingFontSize').value,
          subheadingTopMargin: document.getElementById('subheadingTopMargin').value,
          smallFontSize: document.getElementById('smallFontSize').value,
          boldFontWeight: document.getElementById('boldFontWeight').value,
          horizontalRuleLineHeight: document.getElementById('horizontalRuleLineHeight').value,
          blockquoteSidebarColor: document.getElementById('blockquoteSidebarColor').value,
          blockquoteQuotationSize: document.getElementById('blockquoteQuotationSize').value,
          blockquoteCiteSize: document.getElementById('blockquoteCiteSize').value,
          codeFontSize: document.getElementById('codeFontSize').value,
          preSidebarColor: document.getElementById('preSidebarColor').value,
          supTop: document.getElementById('supTop').value,
          subBottom: document.getElementById('subBottom').value,
          aLinkColor: document.getElementById('aLinkColor').value,
          aVisitedColor: document.getElementById('aVisitedColor').value,
          mobileBreakpoint: document.getElementById('mobileBreakpoint').value,
          largeScreenBreakpoint: document.getElementById('largeScreenBreakpoint').value,
        },
        layout : {
          enabled: document.getElementById('layoutEnabled').checked,
        },
        inputControl : {
          enabled: document.getElementById('inputControlEnabled').checked,
        },
        navigation : {
          enabled: document.getElementById('navigationEnabled').checked,
        },
        table : {
          enabled: document.getElementById('tableEnabled').checked,
        },
        contextual : {
          enabled: document.getElementById('contextualEnabled').checked,
        },
        progress : {
          enabled: document.getElementById('progressEnabled').checked,
        },
        icon : {
          enabled: document.getElementById('iconsEnabled').checked
        },
        utility : {
          enabled: document.getElementById('utilityEnabled').checked,
          genericBoxShadowColor: document.getElementById('genericBoxShadowColor').value,
          genericBorderColor: document.getElementById('genericBorderColor').value
        }
      };
    }
    function generateFlavor(){
      var flavorData = getFlavorData();
      var flavorFile = '';
      flavorFile +='//  This is a flavor file. Duplicate it and edit it to create your own flavor. Read instructions carefully.\\n';
      flavorFile +='//  Single-line comments, starting with \\'//\\' will not be included in your final CSS file. Multiline comments,\\n';
      flavorFile +='//  structured like the flavor description below, will be included in your final CSS file.\\n';
      flavorFile +='/*\\n';
      flavorFile +='  Flavor name: Custom (mini-custom)\\n';
      flavorFile +='  Author: Undefined \\n';
      flavorFile +='  mini.css version: v3.0.0\\n';
      flavorFile +='*/\\n';
      flavorFile +='$base-root-font-size: '+flavorData.core.baseRootFontSize+'px; // Root font sizing for all elements (\`px\` only)\\n';
      flavorFile +='$base-line-height: '+flavorData.core.baseLineHeight+'; // Line height for most elements\\n';
      flavorFile +='$fore-color: '+flavorData.core.foreColor+'; // Text & foreground color\\n';
      flavorFile +='$secondary-fore-color: '+flavorData.core.secondaryForeColor+'; // Secondary text & foreground color\\n';
      flavorFile +='$back-color: '+flavorData.core.backColor+'; // Background color\\n';
      flavorFile +='$secondary-back-color: '+flavorData.core.secondaryBackColor+'; // Secondary background color\\n';
      flavorFile +='$blockquote-color: '+flavorData.core.blockquoteSidebarColor+'; // <blockquote> sidebar and quotation color\\n';
      flavorFile +='$pre-color: '+flavorData.core.preSidebarColor+'; // <pre> sidebar color\\n';
      flavorFile +='$border-color: '+flavorData.core.borderColor+'; // Border color\\n';
      flavorFile +='$secondary-border-color: '+flavorData.core.secondaryBorderColor+'; // Secondary border color\\n';
      flavorFile +='$heading-line-height: '+flavorData.core.headingLineHeight+'; // Line height for headings\\n';
      flavorFile +='$heading-ratio: '+flavorData.core.headingRatio+'; // Ratio for headings (strictly unitless)\\n';
      flavorFile +='$subheading-font-size:'+flavorData.core.subheadingFontSize+'em; // Font sizing for <small> elements in headings\\n';
      flavorFile +='$subheading-top-margin: '+flavorData.core.subheadingTopMargin+'rem; // Top margin of <small> elements in headings\\n';
      flavorFile +='$heading-font-weight: '+flavorData.core.headingFontWeight+'; // Font weight for headings\\n';
      flavorFile +='$horizontal-rule-line-height:  '+flavorData.core.horizontalRuleLineHeight+'em; // <hr> line height\\n';
      flavorFile +='$universal-margin: '+flavorData.core.universalMargin+'rem; // Universal margin for the most elements\\n';
      flavorFile +='$universal-padding: '+flavorData.core.universalPadding+'rem; // Universal padding for the most elements\\n';
      flavorFile +='$universal-border-radius: '+flavorData.core.universalBorderRadius+'rem; // Universal border-radius for most elements\\n';
      flavorFile +='$universal-box-shadow: '+flavorData.core.universalBoxShadow+'; // Universal box-shadow for most elements\\n';
      flavorFile +='$small-element-font-size: '+flavorData.core.smallFontSize+'em; // Font size for <small>, <sub>, <sup>\\n';
      flavorFile +='$small-font-size: '+flavorData.core.smallFontSize+'em; // Font sizing for <small> elements\\n';
      flavorFile +='$blockquote-quotation-size: 3rem;   // Font size for the quotation of <blockquote>\\n';
      flavorFile +='$blockquote-cite-size: 0.75em; // Font size for the [cite] of <blockquote>\\n';
      flavorFile +='$code-font-size: '+flavorData.core.codeFontSize+'em; // Font size for <code>, <kbd>\\n';
      flavorFile +='$sup-top: '+flavorData.core.supTop+'em; // <sup> top\\n';
      flavorFile +='$sub-bottom: '+flavorData.core.subBottom+'em; // <sub> bottom\\n';
      flavorFile +='$a-link-color: '+flavorData.core.aLinkColor+'; // Color for <a>:link\\n';
      flavorFile +='$a-visited-color: '+flavorData.core.aVisitedColor+'; // Color for <a>:visited\\n';
      flavorFile +='$bold-font-weight: '+flavorData.core.boldFontWeight+'; // Font weight for <b> and <strong>\\n';
      flavorFile +='$mobile-breakpoint: '+flavorData.core.mobileBreakpoint+'; // Breakpoint between small and medium screens (px)\\n';
      flavorFile +='$large-screen-breakpoint: '+flavorData.core.largeScreenBreakpoint+'; // Breakpoint between medium and large screens (px)\\n';
      flavorFile +='\\n';
      flavorFile +='@import \\'../mini/core\\';\\n';
      flavorFile +='\\n';
      if(flavorData.layout.enabled){

        flavorFile +='\\n';
        flavorFile +='@import \\'../mini/layout\\';\\n';
        flavorFile +='\\n';
      }
      if(flavorData.inputControl.enabled){

        flavorFile +='\\n';
        flavorFile +='@import \\'../mini/inputControl\\';\\n';
        flavorFile +='\\n';
      }
      if(flavorData.navigation.enabled){

        flavorFile +='\\n';
        flavorFile +='@import \\'../mini/navigation\\';\\n';
        flavorFile +='\\n';
      }
      if(flavorData.table.enabled){

        flavorFile +='\\n';
        flavorFile +='@import \\'../mini/table\\';\\n';
        flavorFile +='\\n';
      }
      if(flavorData.contextual.enabled){

        flavorFile +='\\n';
        flavorFile +='@import \\'../mini/contextual\\';\\n';
        flavorFile +='\\n';
      }
      if(flavorData.progress.enabled){

        flavorFile +='\\n';
        flavorFile +='@import \\'../mini/progress\\';\\n';
        flavorFile +='\\n';
      }
      if(flavorData.icon.enabled){
        flavorFile +='\\n';
        flavorFile +='@import \\'../mini/icon\\';\\n';
        flavorFile +='\\n';
      }
      if(flavorData.utility.enabled){

        flavorFile +='$box-shadow-generic: 0 4*$__1px 4*$__1px 0 '+flavorData.utility.genericBoxShadowColor+',  0 2*$__1px 2*$__1px -2*$__1px '+flavorData.utility.genericBoxShadowColor+';\\n';
        flavorFile +='$border-generic-color: '+flavorData.utility.genericBorderColor+'; // Border color for bordered elements.\\n';
        flavorFile +='\\n';
        flavorFile +='@import \\'../mini/utility\\';\\n';
        flavorFile +='\\n';
      }

      console.log(flavorFile);
    }
  </script>`,
  sections: [
    {id: 'textual-content', title: 'Textual content'},
    {id: 'color-palette', title: 'Color palette'},
    {id: 'universal-styles', title: 'Universal styles'},
      {id: 'grid', title: 'Grid'},
      {id: 'cards', title: 'Cards'},
    {id: 'forms-and-input', title: 'Forms &amp; input'},
    {id: 'buttons', title: 'Buttons'},
      {id: 'header', title: 'Header'},
      {id: 'navbar', title: 'Navigation bar'},
      {id: 'footer', title: 'Footer'},
      {id: 'menu-drawer', title: 'Menu drawer'},
    {id: 'tables', title: 'Tables'},
      {id: 'text-highlighting', title: 'Text highlighting'},
      {id: 'toasts', title: 'Toasts'},
      {id: 'tooltips', title: 'Tooltips'},
      {id: 'modals', title: 'Modal dialogs'},
      {id: 'collapse', title: 'Spoilers &amp accordions'},
    {id: 'progress-bars', title: 'Progress bars'},
    {id: 'donut-spinner', title: 'Donut spinners'},
      {id: 'icons', title: 'Icons'},
    {id: 'utility', title: 'Utilities'}
  ]
}
