!function(e,R){"object"==typeof exports&&"object"==typeof module?module.exports=R():"function"==typeof define&&define.amd?define("dscc",[],R):"object"==typeof exports?exports.dscc=R():e.dscc=R()}(window,function(){return C={},n.m=t={"./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */function(e,N,R){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var R,t=1,C=arguments.length;t<C;t++)for(var n in R=arguments[t])Object.prototype.hasOwnProperty.call(R,n)&&(e[n]=R[n]);return e}).apply(this,arguments)};Object.defineProperty(N,"__esModule",{value:!0});
/*!
  @license
  Copyright 2019 Google LLC

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
var a=R(/*! ./types */"./src/types.ts");!function(e){for(var R in e)N.hasOwnProperty(R)||(N[R]=e[R])}(R(/*! ./types */"./src/types.ts")),N.getWidth=function(){return document.body.clientWidth},N.getHeight=function(){return document.documentElement.clientHeight},N.getComponentId=function(){var e=new URLSearchParams(window.location.search);if(null!==e.get("dscId"))return e.get("dscId");throw new Error("dscId must be in the query parameters. This is a bug in ds-component, please file a bug: https://github.com/googledatastudio/ds-component/issues/new")};function E(e){return e.type===a.ConfigDataElementType.DIMENSION||e.type===a.ConfigDataElementType.METRIC}function r(e){return e===a.ConfigDataElementType.DIMENSION?-1:1}function _(e){var R=[];e.config.data.forEach(function(e){e.elements.filter(E).forEach(function(e){R.push(e)})});var t,C=(t=function(e,R){return r(e.type)-r(R.type)},R.map(function(e,R){return{item:e,index:R}}).sort(function(e,R){return t(e.item,R.item)||e.index-R.index}).map(function(e){return e.item})),n=[];return C.forEach(function(e){e.value.forEach(function(){return n.push(e.id)})}),n}function o(R){return function(e){var t,C,n={};return C=R,((t=e).length<C.length?t.map(function(e,R){return[e,C[R]]}):C.map(function(e,R){return[t[R],e]})).forEach(function(e){var R=e[0],t=e[1];void 0===n[t]&&(n[t]=[]),n[t].push(R)},{}),n}}N.fieldsByConfigId=function(e){var R=e.fields.reduce(function(e,R){return e[R.id]=R,e},{}),t={};return e.config.data.forEach(function(e){e.elements.filter(E).forEach(function(e){t[e.id]=e.value.map(function(e){return R[e]})})}),t};function U(e){var R={};return(e.config.style||[]).forEach(function(e){e.elements.forEach(function(e){if(void 0!==R[e.id])throw new Error("styleIds must be unique. Your styleId: '"+e.id+"' is used more than once.");R[e.id]={value:e.value,defaultValue:e.defaultValue}})},{}),R}function Y(e){return e.config.themeStyle}function n(e){switch(e){case a.DSInteractionType.FILTER:return a.InteractionType.FILTER}}function s(e){var R=e.config.interactions;return void 0===R?{}:R.reduce(function(e,R){var t=R.supportedActions.map(n),C={type:n(R.value.type),data:R.value.data};return e[R.id]={value:C,supportedActions:t},e},{})}function u(e){return(e.dataResponse.dateRanges||[]).reduce(function(e,R){return e[R.id]={start:R.start,end:R.end},e},{})}function T(e){var R=e.dataResponse.colorMap||{};return i({},R)}N.tableTransform=function(e){return{tables:(R=e,C=N.fieldsByConfigId(R),n=_(R),E={},r=n.map(function(e){void 0===E[e]?E[e]=0:E[e]++;var R=E[e],t=C[e][R];return i(i({},t),{configId:e})}),(t={})[a.TableType.DEFAULT]={headers:[],rows:[]},o=t,R.dataResponse.tables.forEach(function(e){o[e.id]={headers:r,rows:e.rows}}),o),dateRanges:u(e),fields:N.fieldsByConfigId(e),style:U(e),theme:Y(e),interactions:s(e),colorMap:T(e)};var R,t,C,n,E,r,o},N.objectTransform=function(e){return{tables:(C=_(R=e),(t={})[a.TableType.DEFAULT]=[],n=t,R.dataResponse.tables.forEach(function(e){var R=e.rows.map(o(C));e.id===a.TableType.DEFAULT?n[e.id]=R:(void 0===n[e.id]&&(n[e.id]=[]),n[e.id]=n[e.id].concat(R))}),n),dateRanges:u(e),fields:N.fieldsByConfigId(e),style:U(e),theme:Y(e),interactions:s(e),colorMap:T(e)};var R,t,C,n};function c(e){var R,t=!1;return e===N.tableTransform||e===N.objectTransform?t=!0:(R=!1,"identity"===e("identity")&&(R=!0,console.warn("This is an unsupported data format. Please use one of the supported transforms:\n       dscc.objectFormat or dscc.tableFormat.")),R&&(t=!0)),t}N.subscribeToData=function(R,t){if(c(t.transform)){var e=function(e){e.data.type===a.MessageType.RENDER?R(t.transform(e.data)):console.error("MessageType: "+e.data.type+" is not supported by this version of the library.")};window.addEventListener("message",e);var C={componentId:N.getComponentId(),type:a.ToDSMessageType.VIZ_READY};return window.parent.postMessage(C,"*"),function(){return window.removeEventListener("message",e)}}throw new Error("Only the built in transform functions are supported.")},N.sendInteraction=function(e,R,t){var C=N.getComponentId(),n={type:a.ToDSMessageType.INTERACTION,id:e,data:t,componentId:C};window.parent.postMessage(n,"*")},N.clearInteraction=function(e,R){N.sendInteraction(e,R,void 0)}},"./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/*! no static exports found */function(e,R,t){"use strict";var C,n,E,r,o,N,i;Object.defineProperty(R,"__esModule",{value:!0}),(C=R.ConceptType||(R.ConceptType={})).METRIC="METRIC",C.DIMENSION="DIMENSION",(R.MessageType||(R.MessageType={})).RENDER="RENDER",(n=R.FieldType||(R.FieldType={})).YEAR="YEAR",n.YEAR_QUARTER="YEAR_QUARTER",n.YEAR_MONTH="YEAR_MONTH",n.YEAR_WEEK="YEAR_WEEK",n.YEAR_MONTH_DAY="YEAR_MONTH_DAY",n.YEAR_MONTH_DAY_HOUR="YEAR_MONTH_DAY_HOUR",n.QUARTER="QUARTER",n.MONTH="MONTH",n.WEEK="WEEK",n.MONTH_DAY="MONTH_DAY",n.DAY_OF_WEEK="DAY_OF_WEEK",n.DAY="DAY",n.HOUR="HOUR",n.MINUTE="MINUTE",n.DURATION="DURATION",n.COUNTRY="COUNTRY",n.COUNTRY_CODE="COUNTRY_CODE",n.CONTINENT="CONTINENT",n.CONTINENT_CODE="CONTINENT_CODE",n.SUB_CONTINENT="SUB_CONTINENT",n.SUB_CONTINENT_CODE="SUB_CONTINENT_CODE",n.REGION="REGION",n.REGION_CODE="REGION_CODE",n.CITY="CITY",n.CITY_CODE="CITY_CODE",n.METRO_CODE="METRO_CODE",n.LATITUDE_LONGITUDE="LATITUDE_LONGITUDE",n.NUMBER="NUMBER",n.PERCENT="PERCENT",n.TEXT="TEXT",n.BOOLEAN="BOOLEAN",n.URL="URL",n.IMAGE="IMAGE",n.CURRENCY_AED="CURRENCY_AED",n.CURRENCY_ALL="CURRENCY_ALL",n.CURRENCY_ARS="CURRENCY_ARS",n.CURRENCY_AUD="CURRENCY_AUD",n.CURRENCY_BDT="CURRENCY_BDT",n.CURRENCY_BGN="CURRENCY_BGN",n.CURRENCY_BOB="CURRENCY_BOB",n.CURRENCY_BRL="CURRENCY_BRL",n.CURRENCY_CAD="CURRENCY_CAD",n.CURRENCY_CDF="CURRENCY_CDF",n.CURRENCY_CHF="CURRENCY_CHF",n.CURRENCY_CLP="CURRENCY_CLP",n.CURRENCY_CNY="CURRENCY_CNY",n.CURRENCY_COP="CURRENCY_COP",n.CURRENCY_CRC="CURRENCY_CRC",n.CURRENCY_CZK="CURRENCY_CZK",n.CURRENCY_DKK="CURRENCY_DKK",n.CURRENCY_DOP="CURRENCY_DOP",n.CURRENCY_EGP="CURRENCY_EGP",n.CURRENCY_ETB="CURRENCY_ETB",n.CURRENCY_EUR="CURRENCY_EUR",n.CURRENCY_GBP="CURRENCY_GBP",n.CURRENCY_HKD="CURRENCY_HKD",n.CURRENCY_HRK="CURRENCY_HRK",n.CURRENCY_HUF="CURRENCY_HUF",n.CURRENCY_IDR="CURRENCY_IDR",n.CURRENCY_ILS="CURRENCY_ILS",n.CURRENCY_INR="CURRENCY_INR",n.CURRENCY_IRR="CURRENCY_IRR",n.CURRENCY_ISK="CURRENCY_ISK",n.CURRENCY_JMD="CURRENCY_JMD",n.CURRENCY_JPY="CURRENCY_JPY",n.CURRENCY_KRW="CURRENCY_KRW",n.CURRENCY_LKR="CURRENCY_LKR",n.CURRENCY_LTL="CURRENCY_LTL",n.CURRENCY_MNT="CURRENCY_MNT",n.CURRENCY_MVR="CURRENCY_MVR",n.CURRENCY_MXN="CURRENCY_MXN",n.CURRENCY_MYR="CURRENCY_MYR",n.CURRENCY_NOK="CURRENCY_NOK",n.CURRENCY_NZD="CURRENCY_NZD",n.CURRENCY_PAB="CURRENCY_PAB",n.CURRENCY_PEN="CURRENCY_PEN",n.CURRENCY_PHP="CURRENCY_PHP",n.CURRENCY_PKR="CURRENCY_PKR",n.CURRENCY_PLN="CURRENCY_PLN",n.CURRENCY_RON="CURRENCY_RON",n.CURRENCY_RSD="CURRENCY_RSD",n.CURRENCY_RUB="CURRENCY_RUB",n.CURRENCY_SAR="CURRENCY_SAR",n.CURRENCY_SEK="CURRENCY_SEK",n.CURRENCY_SGD="CURRENCY_SGD",n.CURRENCY_THB="CURRENCY_THB",n.CURRENCY_TRY="CURRENCY_TRY",n.CURRENCY_TWD="CURRENCY_TWD",n.CURRENCY_TZS="CURRENCY_TZS",n.CURRENCY_UAH="CURRENCY_UAH",n.CURRENCY_USD="CURRENCY_USD",n.CURRENCY_UYU="CURRENCY_UYU",n.CURRENCY_VEF="CURRENCY_VEF",n.CURRENCY_VND="CURRENCY_VND",n.CURRENCY_YER="CURRENCY_YER",n.CURRENCY_ZAR="CURRENCY_ZAR",(E=R.TableType||(R.TableType={})).DEFAULT="DEFAULT",E.COMPARISON="COMPARISON",E.SUMMARY="SUMMARY",(r=R.DateRangeType||(R.DateRangeType={})).DEFAULT="DEFAULT",r.COMPARISON="COMPARISON",(o=R.ConfigDataElementType||(R.ConfigDataElementType={})).METRIC="METRIC",o.DIMENSION="DIMENSION",o.MAX_RESULTS="MAX_RESULTS",(N=R.ConfigStyleElementType||(R.ConfigStyleElementType={})).TEXTINPUT="TEXTINPUT",N.SELECT_SINGLE="SELECT_SINGLE",N.CHECKBOX="CHECKBOX",N.FONT_COLOR="FONT_COLOR",N.FONT_SIZE="FONT_SIZE",N.FONT_FAMILY="FONT_FAMILY",N.FILL_COLOR="FILL_COLOR",N.BORDER_COLOR="BORDER_COLOR",N.AXIS_COLOR="AXIS_COLOR",N.GRID_COLOR="GRID_COLOR",N.OPACITY="OPACITY",N.LINE_WEIGHT="LINE_WEIGHT",N.LINE_STYLE="LINE_STYLE",N.BORDER_RADIUS="BORDER_RADIUS",N.INTERVAL="INTERVAL",N.SELECT_RADIO="SELECT_RADIO",(R.DSInteractionType||(R.DSInteractionType={})).FILTER="FILTER",(i=R.ToDSMessageType||(R.ToDSMessageType={})).VIZ_READY="vizReady",i.INTERACTION="vizAction",(R.InteractionType||(R.InteractionType={})).FILTER="FILTER"}},n.c=C,n.d=function(e,R,t){n.o(e,R)||Object.defineProperty(e,R,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(R,e){if(1&e&&(R=n(R)),8&e)return R;if(4&e&&"object"==typeof R&&R&&R.__esModule)return R;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:R}),2&e&&"string"!=typeof R)for(var C in R)n.d(t,C,function(e){return R[e]}.bind(null,C));return t},n.n=function(e){var R=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(R,"a",R),R},n.o=function(e,R){return Object.prototype.hasOwnProperty.call(e,R)},n.p="",n(n.s="./src/index.ts");function n(e){if(C[e])return C[e].exports;var R=C[e]={i:e,l:!1,exports:{}};return t[e].call(R.exports,R,R.exports,n),R.l=!0,R.exports}var t,C});/**
 * Date Range Filter - Looker Studio Community Visualization
 * Modern slider-style date range picker with cross-viz filtering
 */

(function () {
  'use strict';

  // State
  var dates = [];           // Array of {raw, date, label}
  var startIdx = 0;
  var endIdx = 0;
  var isDragging = false;
  var dragTarget = null;    // 'start' or 'end'
  var canvas, ctx;
  var sliderWidth, sliderHeight;
  var dpr = window.devicePixelRatio || 1;
  var fieldId = null;
  var interactionId = 'dateFilter';
  var FILTER = dscc.InteractionType.FILTER;

  // Style config
  var styles = {
    primary: '#2563EB',
    bg: '#FFFFFF',
    border: '#E5E7EB',
    text: '#111827',
    muted: '#6B7280',
    track: '#E5E7EB',
    trackActive: '#2563EB',
    thumb: '#FFFFFF',
    title: 'Date Range'
  };

  // Parse various date formats
  function parseDate(raw) {
    if (raw == null) return null;
    var s = String(raw).trim();
    // YYYYMM
    if (/^\d{6}$/.test(s)) s = s.slice(0,4) + '-' + s.slice(4,6) + '-01';
    // YYYYMMDD
    else if (/^\d{8}$/.test(s)) s = s.slice(0,4) + '-' + s.slice(4,6) + '-' + s.slice(6,8);
    // YYYY/MM/DD
    else if (/^\d{4}\/\d{2}\/\d{2}$/.test(s)) s = s.replace(/\//g, '-');
    // MM/DD/YYYY
    else if (/^\d{2}\/\d{2}\/\d{4}$/.test(s)) {
      var p = s.split('/');
      s = p[2] + '-' + p[0] + '-' + p[1];
    }
    
    var d = new Date(s + (s.includes('T') ? '' : 'T00:00:00'));
    if (!isNaN(d)) return d;
    d = new Date(raw);
    return isNaN(d) ? null : d;
  }

  // Format date for display
  function formatDate(date, raw) {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var mo = months[date.getMonth()];
    var yr = String(date.getFullYear()).slice(2);
    // YYYYMM format shows month only
    if (/^\d{6}$/.test(String(raw).trim())) {
      return mo + " '" + yr;
    }
    return date.getDate() + ' ' + mo + " '" + yr;
  }

  // Initialize the visualization
  function init(data) {
    var s = data.style || {};
    styles.primary = getColor(s.primaryColor, '#2563EB');
    styles.bg = getColor(s.bgColor, '#FFFFFF');
    styles.border = getColor(s.borderColor, '#E5E7EB');
    styles.text = getColor(s.textColor, '#111827');
    styles.muted = getColor(s.mutedColor, '#6B7280');
    styles.trackActive = styles.primary;
    styles.title = (s.filterTitle && s.filterTitle.value) || 'Date Range';

    // Get field ID from config
    var fields = data.fields || {};
    var dateField = fields.dateDimension;
    if (dateField && dateField[0]) {
      fieldId = dateField[0].id;
    }

    // Get current filter state if any
    var interactions = data.interactions || {};
    var currentFilter = interactions[interactionId];
    var filterValues = [];
    if (currentFilter && currentFilter.value && currentFilter.value.data) {
      filterValues = currentFilter.value.data.values || [];
      filterValues = filterValues.map(function(v) { return v[0]; });
    }

    // Parse dates from data
    var table = (data.tables || {}).DEFAULT || {};
    var headers = table.headers || [];
    var rows = table.rows || [];

    // Find date dimension column
    var dateCol = -1;
    for (var i = 0; i < headers.length; i++) {
      if (headers[i].configId === 'dateDimension') {
        dateCol = i;
        // Update fieldId if found in headers
        if (headers[i].id) fieldId = headers[i].id;
        break;
      }
    }

    if (dateCol === -1 || rows.length === 0) {
      renderEmpty();
      return;
    }

    // Extract unique dates
    var seen = {};
    dates = [];
    for (var r = 0; r < rows.length; r++) {
      var raw = rows[r][dateCol];
      if (raw == null || seen[raw]) continue;
      var d = parseDate(raw);
      if (d) {
        seen[raw] = true;
        dates.push({
          raw: raw,
          date: d,
          label: formatDate(d, raw)
        });
      }
    }

    if (dates.length === 0) {
      renderEmpty();
      return;
    }

    // Sort by date
    dates.sort(function(a, b) { return a.date - b.date; });

    // Set initial range
    if (filterValues.length > 0) {
      // Find indices for current filter values
      var startRaw = filterValues[0];
      var endRaw = filterValues[filterValues.length - 1];
      startIdx = 0;
      endIdx = dates.length - 1;
      for (var j = 0; j < dates.length; j++) {
        if (dates[j].raw === startRaw) startIdx = j;
        if (dates[j].raw === endRaw) endIdx = j;
      }
    } else {
      startIdx = 0;
      endIdx = dates.length - 1;
    }

    buildUI();
  }

  function getColor(styleObj, fallback) {
    if (styleObj && styleObj.value) {
      var c = styleObj.value.color || styleObj.value;
      if (typeof c === 'string') return '#' + c.replace('#', '');
    }
    return fallback;
  }

  function renderEmpty() {
    document.body.innerHTML = '';
    document.body.style.cssText = 'margin:0;padding:16px;font-family:"Plus Jakarta Sans",system-ui,sans-serif;background:transparent;';
    var el = document.createElement('div');
    el.style.cssText = 'display:flex;align-items:center;justify-content:center;height:100%;color:' + styles.muted + ';font-size:13px;';
    el.textContent = 'Add a date dimension to use this filter';
    document.body.appendChild(el);
  }

  function buildUI() {
    document.body.innerHTML = '';
    document.documentElement.style.cssText = 'height:100%;margin:0;padding:0;';
    document.body.style.cssText = 'height:100%;margin:0;padding:0;overflow:hidden;background:transparent;font-family:"Plus Jakarta Sans",system-ui,sans-serif;';

    // Container
    var container = document.createElement('div');
    container.style.cssText = 'height:100%;display:flex;flex-direction:column;justify-content:center;padding:0 16px;box-sizing:border-box;';

    // Header with title and apply button
    var header = document.createElement('div');
    header.style.cssText = 'display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;';

    var titleEl = document.createElement('div');
    titleEl.style.cssText = 'font-size:12px;font-weight:600;color:' + styles.text + ';';
    titleEl.textContent = styles.title;

    var badge = document.createElement('span');
    badge.id = 'filter-badge';
    badge.style.cssText = 'font-size:10px;font-weight:600;padding:2px 8px;border-radius:12px;background:' + hexToRgba(styles.primary, 0.1) + ';color:' + styles.primary + ';display:none;';
    badge.textContent = 'Filtered';

    header.appendChild(titleEl);
    header.appendChild(badge);
    container.appendChild(header);

    // Date labels row
    var labelsRow = document.createElement('div');
    labelsRow.style.cssText = 'display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;';

    var startLabel = document.createElement('div');
    startLabel.id = 'start-label';
    startLabel.style.cssText = 'font-size:12px;font-weight:500;color:' + styles.text + ';';

    var endLabel = document.createElement('div');
    endLabel.id = 'end-label';
    endLabel.style.cssText = 'font-size:12px;font-weight:500;color:' + styles.text + ';';

    labelsRow.appendChild(startLabel);
    labelsRow.appendChild(endLabel);
    container.appendChild(labelsRow);

    // Canvas slider container
    var sliderContainer = document.createElement('div');
    sliderContainer.style.cssText = 'position:relative;height:32px;margin-bottom:12px;';

    canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer;';
    sliderContainer.appendChild(canvas);
    container.appendChild(sliderContainer);

    // Buttons row
    var buttonsRow = document.createElement('div');
    buttonsRow.style.cssText = 'display:flex;align-items:center;gap:8px;';

    var resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset';
    resetBtn.style.cssText = 'flex:1;padding:6px 12px;border:1px solid ' + styles.border + ';border-radius:6px;background:' + styles.bg + ';color:' + styles.muted + ';font-size:12px;font-weight:500;cursor:pointer;font-family:inherit;';
    resetBtn.onclick = onReset;

    var applyBtn = document.createElement('button');
    applyBtn.textContent = 'Apply Filter';
    applyBtn.style.cssText = 'flex:1;padding:6px 12px;border:none;border-radius:6px;background:' + styles.primary + ';color:#fff;font-size:12px;font-weight:600;cursor:pointer;font-family:inherit;';
    applyBtn.onclick = onApply;

    buttonsRow.appendChild(resetBtn);
    buttonsRow.appendChild(applyBtn);
    container.appendChild(buttonsRow);

    document.body.appendChild(container);

    // Initialize canvas
    var rect = sliderContainer.getBoundingClientRect();
    sliderWidth = rect.width;
    sliderHeight = rect.height;
    canvas.width = sliderWidth * dpr;
    canvas.height = sliderHeight * dpr;
    ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    // Event listeners
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('touchstart', onTouchStart, {passive: false});
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchmove', onTouchMove, {passive: false});
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('touchend', onMouseUp);

    // Handle resize
    window.addEventListener('resize', function() {
      var r = sliderContainer.getBoundingClientRect();
      sliderWidth = r.width;
      sliderHeight = r.height;
      canvas.width = sliderWidth * dpr;
      canvas.height = sliderHeight * dpr;
      ctx.scale(dpr, dpr);
      draw();
    });

    updateLabels();
    draw();

    // Show badge if filtered
    if (startIdx > 0 || endIdx < dates.length - 1) {
      badge.style.display = 'inline-block';
    }
  }

  function hexToRgba(hex, alpha) {
    hex = hex.replace('#', '');
    return 'rgba(' + parseInt(hex.slice(0,2),16) + ',' + parseInt(hex.slice(2,4),16) + ',' + parseInt(hex.slice(4,6),16) + ',' + alpha + ')';
  }

  function updateLabels() {
    var startLabel = document.getElementById('start-label');
    var endLabel = document.getElementById('end-label');
    if (startLabel) startLabel.textContent = dates[startIdx].label;
    if (endLabel) endLabel.textContent = dates[endIdx].label;
  }

  function getX(index) {
    var padding = 16;
    var available = sliderWidth - (padding * 2);
    if (dates.length <= 1) return padding;
    return padding + (index / (dates.length - 1)) * available;
  }

  function getIndex(x) {
    var padding = 16;
    var available = sliderWidth - (padding * 2);
    var ratio = Math.max(0, Math.min(1, (x - padding) / available));
    return Math.round(ratio * (dates.length - 1));
  }

  function draw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, sliderWidth, sliderHeight);

    var cy = sliderHeight / 2;
    var trackHeight = 4;
    var thumbRadius = 10;

    // Draw track background
    ctx.fillStyle = styles.track;
    roundRect(ctx, 16, cy - trackHeight/2, sliderWidth - 32, trackHeight, trackHeight/2);
    ctx.fill();

    // Draw active track
    var x1 = getX(startIdx);
    var x2 = getX(endIdx);
    ctx.fillStyle = styles.trackActive;
    roundRect(ctx, x1, cy - trackHeight/2, x2 - x1, trackHeight, trackHeight/2);
    ctx.fill();

    // Draw ticks
    if (dates.length <= 30) {
      for (var i = 0; i < dates.length; i++) {
        var tx = getX(i);
        var inRange = i >= startIdx && i <= endIdx;
        ctx.beginPath();
        ctx.arc(tx, cy, 2, 0, Math.PI * 2);
        ctx.fillStyle = inRange ? hexToRgba(styles.primary, 0.5) : hexToRgba(styles.muted, 0.3);
        ctx.fill();
      }
    }

    // Draw thumbs
    [x1, x2].forEach(function(x, idx) {
      // Shadow
      ctx.shadowColor = 'rgba(0,0,0,0.15)';
      ctx.shadowBlur = 4;
      ctx.shadowOffsetY = 2;
      
      // Thumb circle
      ctx.beginPath();
      ctx.arc(x, cy, thumbRadius, 0, Math.PI * 2);
      ctx.fillStyle = styles.thumb;
      ctx.fill();
      
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;

      // Border
      ctx.beginPath();
      ctx.arc(x, cy, thumbRadius, 0, Math.PI * 2);
      ctx.strokeStyle = styles.primary;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Inner dot
      ctx.beginPath();
      ctx.arc(x, cy, 3, 0, Math.PI * 2);
      ctx.fillStyle = styles.primary;
      ctx.fill();
    });
  }

  function roundRect(ctx, x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function onMouseDown(e) {
    var rect = canvas.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    handleStart(x, y);
  }

  function onTouchStart(e) {
    e.preventDefault();
    var rect = canvas.getBoundingClientRect();
    var touch = e.touches[0];
    var x = touch.clientX - rect.left;
    var y = touch.clientY - rect.top;
    handleStart(x, y);
  }

  function handleStart(x, y) {
    var x1 = getX(startIdx);
    var x2 = getX(endIdx);
    var cy = sliderHeight / 2;

    var d1 = Math.abs(x - x1);
    var d2 = Math.abs(x - x2);

    if (Math.min(d1, d2) < 20) {
      isDragging = true;
      dragTarget = d1 <= d2 ? 'start' : 'end';
      canvas.style.cursor = 'grabbing';
    }
  }

  function onMouseMove(e) {
    if (!isDragging) return;
    var rect = canvas.getBoundingClientRect();
    var x = e.clientX - rect.left;
    handleMove(x);
  }

  function onTouchMove(e) {
    if (!isDragging) return;
    e.preventDefault();
    var rect = canvas.getBoundingClientRect();
    var touch = e.touches[0];
    var x = touch.clientX - rect.left;
    handleMove(x);
  }

  function handleMove(x) {
    var idx = getIndex(x);
    if (dragTarget === 'start') {
      startIdx = Math.min(idx, endIdx);
    } else {
      endIdx = Math.max(idx, startIdx);
    }
    updateLabels();
    draw();
  }

  function onMouseUp() {
    isDragging = false;
    dragTarget = null;
    if (canvas) canvas.style.cursor = 'pointer';
  }

  function onApply() {
    if (!fieldId) return;

    // Build values array: [[date1], [date2], ...]
    var values = [];
    for (var i = startIdx; i <= endIdx; i++) {
      values.push([dates[i].raw]);
    }

    var data = {
      concepts: [fieldId],
      values: values
    };

    dscc.sendInteraction(interactionId, FILTER, data);

    var badge = document.getElementById('filter-badge');
    if (badge) badge.style.display = 'inline-block';
  }

  function onReset() {
    startIdx = 0;
    endIdx = dates.length - 1;
    updateLabels();
    draw();

    // Clear filter using clearInteraction
    dscc.clearInteraction(interactionId, FILTER);

    var badge = document.getElementById('filter-badge');
    if (badge) badge.style.display = 'none';
  }

  // Subscribe to Looker Studio data
  dscc.subscribeToData(init, { transform: dscc.objectTransform });

})();
