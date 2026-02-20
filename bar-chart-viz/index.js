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
 * Vertical Bar Chart - Looker Studio Community Visualization
 * Matches the Combo Chart bar style: rounded tops, Plus Jakarta Sans, card layout.
 */

(function () {
  'use strict';

  var MONTHS_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  // ── Helpers ──────────────────────────────────────────────────────────────────

  function getColor(obj, fallback) {
    if (obj && obj.value) {
      var c = obj.value.color || obj.value;
      if (typeof c === 'string') return '#' + c.replace('#', '');
    }
    return fallback;
  }

  function hexToRgba(hex, alpha) {
    hex = hex.replace('#', '');
    return 'rgba('+parseInt(hex.slice(0,2),16)+','+parseInt(hex.slice(2,4),16)+','+parseInt(hex.slice(4,6),16)+','+alpha+')';
  }

  function formatNumber(value, compact) {
    if (value === null || value === undefined) return '—';
    var num = parseFloat(value);
    if (isNaN(num)) return String(value);
    if (compact) {
      if (Math.abs(num) >= 1e9) return (num/1e9).toFixed(1).replace(/\.0$/,'')+'B';
      if (Math.abs(num) >= 1e6) return (num/1e6).toFixed(1).replace(/\.0$/,'')+'M';
      if (Math.abs(num) >= 1e3) return (num/1e3).toFixed(1).replace(/\.0$/,'')+'K';
    }
    if (Number.isInteger(num)) return num.toLocaleString();
    return num.toFixed(2);
  }

  function fmtXLabel(raw) {
    var s = String(raw).trim();
    if (/^\d{6}$/.test(s)) {
      var yr = s.slice(2,4);
      var mo = parseInt(s.slice(4,6),10)-1;
      return yr+'-'+(MONTHS_SHORT[mo] || s.slice(4));
    }
    if (s.length > 10) return s.substring(0,9)+'\u2026';
    return s;
  }

  function niceAxis(maxVal) {
    if (maxVal <= 0) return { max:10, ticks:[0,2,4,6,8,10] };
    var mag = Math.pow(10, Math.floor(Math.log10(maxVal)));
    var res = maxVal / mag;
    var niceMax = res<=1.2 ? 1.2*mag : res<=2 ? 2*mag : res<=5 ? 5*mag : 10*mag;
    var step = niceMax / 4;
    var ticks = [];
    for (var t=0; t<=niceMax+step*0.01; t+=step) ticks.push(Math.round(t*1e9)/1e9);
    return { max: niceMax, ticks: ticks };
  }

  function roundedRectTop(ctx, x, y, w, h, r) {
    if (h <= 0) return;
    if (r > h) r = h; if (r > w/2) r = w/2;
    ctx.beginPath();
    ctx.moveTo(x, y+h);
    ctx.lineTo(x, y+r);
    ctx.arcTo(x, y, x+r, y, r);
    ctx.lineTo(x+w-r, y);
    ctx.arcTo(x+w, y, x+w, y+r, r);
    ctx.lineTo(x+w, y+h);
    ctx.closePath();
  }

  // ── Main ─────────────────────────────────────────────────────────────────────

  function drawViz(data) {
    var s = data.style;

    var barColor      = getColor(s.barColor,      '#2563EB');
    var cardBg        = getColor(s.cardBg,         '#FFFFFF');
    var borderColor   = getColor(s.borderColor,    '#E5E7EB');
    var gridColor     = getColor(s.gridColor,      '#F3F4F6');
    var axisTextColor = getColor(s.axisTextColor,  '#6B7280');
    var titleColor    = getColor(s.titleColor,     '#111827');
    var compact       = !(s.compactNumbers && s.compactNumbers.value === false);
    var showValues    = (s.showValues && s.showValues.value === true);
    var chartTitle    = (s.chartTitle && s.chartTitle.value) ? s.chartTitle.value : '';
    var barRadius     = 5;

    var table   = data.tables.DEFAULT;
    var headers = table.headers || [];
    var rows    = table.rows    || [];

    var dimIdx = -1, metricIdx = -1;
    for (var hi=0; hi<headers.length; hi++) {
      var cid = headers[hi].configId;
      if (cid === 'dimension') dimIdx     = hi;
      if (cid === 'barMetric') metricIdx  = hi;
    }
    if (dimIdx    < 0) dimIdx    = 0;
    if (metricIdx < 0) metricIdx = 1;

    var metricName = (metricIdx >= 0 && headers[metricIdx]) ? (headers[metricIdx].name || 'Value') : 'Value';

    var labels = [], values = [], maxVal = 0;
    for (var i=0; i<rows.length; i++) {
      labels.push(dimIdx >= 0 ? String(rows[i][dimIdx]) : 'Item '+(i+1));
      var v = metricIdx >= 0 && rows[i][metricIdx] != null ? (parseFloat(rows[i][metricIdx]) || 0) : 0;
      values.push(v);
      if (v > maxVal) maxVal = v;
    }

    var axis = niceAxis(maxVal);

    // ── Render ────────────────────────────────────────────────────────────────
    document.body.innerHTML = '';
    document.body.style.cssText = 'margin:0;padding:0;overflow:hidden;background:transparent;';

    var wrapper = document.createElement('div');
    wrapper.style.cssText = [
      'width:100%','height:100%',
      'background:'+cardBg,
      'border-radius:14px',
      'border:1px solid '+borderColor,
      'box-shadow:0 1px 4px rgba(0,0,0,0.06)',
      'display:flex','flex-direction:column',
      'padding:18px 20px 14px',
      'box-sizing:border-box',
      'overflow:hidden'
    ].join(';');

    // Header: title + legend
    var headerRow = document.createElement('div');
    headerRow.style.cssText = 'display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-shrink:0;gap:8px;min-height:18px';

    var titleEl = document.createElement('div');
    titleEl.style.cssText = [
      'font-size:13px','font-weight:600','color:'+titleColor,
      'letter-spacing:0.04em','text-transform:uppercase',
      'overflow:hidden','text-overflow:ellipsis','white-space:nowrap'
    ].join(';');
    titleEl.textContent = chartTitle;

    // Legend dot
    var legend = document.createElement('div');
    legend.style.cssText = 'display:flex;align-items:center;gap:6px;flex-shrink:0;font-size:11px;color:'+axisTextColor+';white-space:nowrap';
    var dot = document.createElement('div');
    dot.style.cssText = 'width:10px;height:12px;border-radius:2px;background:'+barColor+';flex-shrink:0';
    legend.appendChild(dot);
    legend.appendChild(document.createTextNode(metricName));

    headerRow.appendChild(titleEl);
    headerRow.appendChild(legend);
    wrapper.appendChild(headerRow);

    // Canvas container
    var canvasWrap = document.createElement('div');
    canvasWrap.style.cssText = 'flex:1;position:relative;min-height:0';
    wrapper.appendChild(canvasWrap);
    document.body.appendChild(wrapper);

    var canvas = document.createElement('canvas');
    canvasWrap.appendChild(canvas);

    var dpr = window.devicePixelRatio || 1;
    var cw  = canvasWrap.offsetWidth;
    var ch  = canvasWrap.offsetHeight;
    canvas.width  = cw * dpr;
    canvas.height = ch * dpr;
    canvas.style.cssText = 'width:'+cw+'px;height:'+ch+'px';
    var ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    var leftPad   = 56;
    var rightPad  = 16;
    var topPad    = showValues ? 24 : 10;
    var bottomPad = 42;
    var chartX    = leftPad;
    var chartY    = topPad;
    var chartW    = cw - leftPad - rightPad;
    var chartH    = ch - topPad - bottomPad;
    var n         = labels.length;

    if (chartW < 20 || chartH < 20 || n === 0) return;

    var FONT = '12px "Plus Jakarta Sans", system-ui, sans-serif';

    function doDraw() {
      // Y axis gridlines + labels
      ctx.font = FONT;
      for (var ti=0; ti<axis.ticks.length; ti++) {
        var tv = axis.ticks[ti];
        var ty = chartY + chartH - (tv / axis.max) * chartH;

        ctx.strokeStyle = gridColor; ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(chartX,          Math.round(ty)+0.5);
        ctx.lineTo(chartX+chartW,   Math.round(ty)+0.5);
        ctx.stroke();

        ctx.fillStyle    = axisTextColor;
        ctx.textAlign    = 'right';
        ctx.textBaseline = 'middle';
        ctx.fillText(formatNumber(tv, compact), chartX-8, ty);
      }

      // Bars
      var groupWidth = chartW / n;
      var barGap     = Math.max(6, groupWidth * 0.28);
      var barWidth   = groupWidth - barGap;

      for (var bi=0; bi<n; bi++) {
        var bx = chartX + bi*groupWidth + barGap/2;
        var bh = (values[bi] / axis.max) * chartH;
        if (bh < 1 && values[bi] > 0) bh = 1;
        var by = chartY + chartH - bh;

        // Bar fill with gradient
        var grad = ctx.createLinearGradient(bx, by, bx, by+bh);
        grad.addColorStop(0, barColor);
        grad.addColorStop(1, hexToRgba(barColor, 0.75));
        ctx.fillStyle = grad;
        roundedRectTop(ctx, bx, by, barWidth, bh, barRadius);
        ctx.fill();

        // Value label
        if (showValues && bh > 0) {
          ctx.font = '12px "Plus Jakarta Sans", system-ui, sans-serif';
          ctx.fillStyle    = titleColor;
          ctx.textAlign    = 'center';
          ctx.textBaseline = 'bottom';
          ctx.fillText(formatNumber(values[bi], compact), bx+barWidth/2, by-2);
          ctx.font = FONT;
        }

        // X axis label
        ctx.fillStyle    = axisTextColor;
        ctx.textAlign    = 'center';
        ctx.textBaseline = 'top';
        ctx.font = FONT;
        ctx.fillText(fmtXLabel(labels[bi]), chartX+bi*groupWidth+groupWidth/2, chartY+chartH+10);
      }

      // Baseline
      ctx.strokeStyle = borderColor; ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(chartX,        Math.round(chartY+chartH)+0.5);
      ctx.lineTo(chartX+chartW, Math.round(chartY+chartH)+0.5);
      ctx.stroke();

      // Left axis border
      ctx.beginPath();
      ctx.moveTo(Math.round(chartX)+0.5, chartY);
      ctx.lineTo(Math.round(chartX)+0.5, chartY+chartH);
      ctx.stroke();

      // ── Hover overlay + tooltip ───────────────────────────────────────────
      var overlay = document.createElement('canvas');
      overlay.width  = cw*dpr; overlay.height = ch*dpr;
      overlay.style.cssText = 'position:absolute;top:0;left:0;width:'+cw+'px;height:'+ch+'px;pointer-events:none';
      canvasWrap.appendChild(overlay);
      var octx = overlay.getContext('2d');
      octx.scale(dpr, dpr);

      var tooltip = document.createElement('div');
      tooltip.style.cssText = [
        'position:absolute','pointer-events:none','opacity:0',
        'background:#1F2937','color:#F9FAFB',
        'font-size:11px','line-height:1.65',
        'padding:8px 12px','border-radius:8px',
        'box-shadow:0 4px 16px rgba(0,0,0,0.22)',
        'white-space:nowrap','z-index:10',
        'transition:opacity 0.12s ease'
      ].join(';');
      canvasWrap.appendChild(tooltip);

      var lastIdx = -1;

      canvas.addEventListener('mousemove', function(e) {
        var rect = canvas.getBoundingClientRect();
        var mx = e.clientX - rect.left, my = e.clientY - rect.top;
        var idx = Math.floor((mx - chartX) / groupWidth);
        if (idx < 0 || idx >= n || mx < chartX || mx > chartX+chartW || my < chartY-20 || my > chartY+chartH+10) {
          tooltip.style.opacity = '0'; octx.clearRect(0,0,cw,ch); lastIdx = -1; return;
        }
        if (idx !== lastIdx) {
          lastIdx = idx; octx.clearRect(0,0,cw,ch);
          var hx = chartX + idx*groupWidth + groupWidth/2;
          octx.strokeStyle = hexToRgba(axisTextColor, 0.2);
          octx.lineWidth = 1; octx.setLineDash([4,3]);
          octx.beginPath(); octx.moveTo(Math.round(hx)+0.5, chartY); octx.lineTo(Math.round(hx)+0.5, chartY+chartH); octx.stroke();
          octx.setLineDash([]);
        }
        tooltip.innerHTML = '<div style="font-weight:600;margin-bottom:4px">'+labels[idx]+'</div>'
          + '<div style="display:flex;align-items:center;gap:6px">'
          + '<div style="width:8px;height:8px;border-radius:2px;background:'+barColor+';flex-shrink:0"></div>'
          + metricName+': <strong>'+formatNumber(values[idx], compact)+'</strong></div>';
        tooltip.style.opacity = '1';
        var tx = mx+14, tty = my-12;
        if (tx + tooltip.offsetWidth  > cw) tx  = mx - tooltip.offsetWidth  - 10;
        if (tty < 0)                         tty = 4;
        if (tty + tooltip.offsetHeight > ch) tty = ch - tooltip.offsetHeight - 4;
        tooltip.style.left = tx+'px'; tooltip.style.top = tty+'px';
      });

      canvas.addEventListener('mouseleave', function() {
        tooltip.style.opacity = '0'; octx.clearRect(0,0,cw,ch); lastIdx = -1;
      });
    } // end doDraw

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(doDraw);
    } else {
      doDraw();
    }
  } // end drawViz

  dscc.subscribeToData(drawViz, { transform: dscc.tableTransform });

})();
