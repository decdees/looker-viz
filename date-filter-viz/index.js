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
 *
 * Features:
 *  - Reads actual data dates → only shows the available range
 *  - Dual-handle range slider (drag to select from/to)
 *  - Sends FILTER interaction to Looker Studio
 *  - Expands range memory across redraws so filtered data doesn't shrink the slider
 */

(function () {
  'use strict';

  var MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  // ── Module-level state (persists across drawViz calls) ──────────────────────
  var allItems   = [];    // [{raw, date}] – full data range, only ever grows
  var fromIdx    = 0;
  var toIdx      = 0;
  var isFiltered = false;

  // Cleanup refs for document-level event listeners
  var _mmHandler = null;
  var _muHandler = null;

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
    return 'rgba(' + parseInt(hex.slice(0,2),16) + ','
                   + parseInt(hex.slice(2,4),16) + ','
                   + parseInt(hex.slice(4,6),16) + ',' + alpha + ')';
  }

  function parseDate(raw) {
    if (raw == null) return null;
    var s = String(raw).trim();
    if (/^\d{8}$/.test(s))        s = s.slice(0,4)+'-'+s.slice(4,6)+'-'+s.slice(6,8);
    if (/^\d{4}\/\d{2}\/\d{2}$/.test(s)) s = s.replace(/\//g, '-');
    var d = new Date(s + 'T00:00:00');
    return isNaN(d) ? null : d;
  }

  function fmtDisplay(item) {
    if (!item) return '—';
    var d = item.date;
    return pad2(d.getDate()) + ' ' + MONTHS[d.getMonth()] + ' ' + d.getFullYear();
  }

  function fmtMonthYear(item) {
    if (!item) return '';
    return MONTHS[item.date.getMonth()] + ' ' + item.date.getFullYear();
  }

  function pad2(n) { return String(n).padStart(2, '0'); }

  // Polyfill for roundRect on canvas
  function roundRectPath(ctx, x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y,     x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x,     y + h, r);
    ctx.arcTo(x,     y + h, x,     y,     r);
    ctx.arcTo(x,     y,     x + w, y,     r);
    ctx.closePath();
  }

  // ── Main draw ────────────────────────────────────────────────────────────────

  function drawViz(data) {
    var s = data.style || {};

    var primary   = getColor(s.primaryColor, '#2563EB');
    var cardBg    = getColor(s.cardBg,       '#FFFFFF');
    var border    = getColor(s.borderColor,  '#E5E7EB');
    var textColor = getColor(s.textColor,    '#111827');
    var muted     = getColor(s.mutedColor,   '#6B7280');
    var trackBg   = hexToRgba(border.replace('#',''), 1);  // reuse border color for track
    var title     = (s.filterTitle && s.filterTitle.value) || 'Date Range Filter';

    // ── Parse data ────────────────────────────────────────────────────────────
    var table   = data.tables.DEFAULT;
    var headers = table.headers || [];
    var rows    = table.rows    || [];

    var dimIdx = 0;
    for (var h = 0; h < headers.length; h++) {
      if (headers[h].configId === 'dateDimension') { dimIdx = h; break; }
    }

    var seen  = {};
    var items = [];
    for (var r = 0; r < rows.length; r++) {
      var raw = rows[r][dimIdx];
      if (raw == null || seen[raw]) continue;
      var d = parseDate(raw);
      if (d) { seen[raw] = true; items.push({ raw: raw, date: d }); }
    }
    items.sort(function(a, b) { return a.date - b.date; });

    if (items.length === 0) {
      renderEmpty(cardBg, border, textColor, title);
      return;
    }

    // Expand allItems (never shrink so slider survives filtered redraws)
    if (allItems.length === 0) {
      allItems = items;
      fromIdx  = 0;
      toIdx    = allItems.length - 1;
    } else {
      var oldKeys = {};
      allItems.forEach(function(i) { oldKeys[i.raw] = true; });
      items.forEach(function(i) { if (!oldKeys[i.raw]) allItems.push(i); });
      allItems.sort(function(a, b) { return a.date - b.date; });
      fromIdx = Math.max(0, Math.min(fromIdx, allItems.length - 1));
      toIdx   = Math.max(0, Math.min(toIdx,   allItems.length - 1));
    }

    var filterInteraction = (data.interactions || {}).dateFilter || null;

    buildUI(primary, cardBg, border, textColor, muted, title, filterInteraction);
  }

  // ── UI ───────────────────────────────────────────────────────────────────────

  function buildUI(primary, cardBg, border, textColor, muted, title, filterInteraction) {
    // Clean up stale document listeners
    if (_mmHandler) { document.removeEventListener('mousemove', _mmHandler); _mmHandler = null; }
    if (_muHandler) { document.removeEventListener('mouseup',   _muHandler); _muHandler = null; }

    document.body.innerHTML = '';
    document.body.style.cssText = 'margin:0;padding:0;overflow:hidden;background:transparent;';

    var card = mk('div', [
      'width:100%', 'height:100%', 'display:flex', 'flex-direction:column',
      'background:' + cardBg,
      'border:1px solid ' + border,
      'border-radius:12px',
      'box-shadow:0 1px 4px rgba(0,0,0,0.06)',
      'padding:16px 20px 14px',
      'box-sizing:border-box',
      'overflow:hidden'
    ]);

    // ── Title ─────────────────────────────────────────────────────────────────
    var titleRow = mk('div', ['display:flex','align-items:center','gap:8px','margin-bottom:8px','flex-shrink:0']);
    var icon = mk('div', ['color:'+primary,'display:flex','flex-shrink:0']);
    icon.innerHTML = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none">'
      + '<rect x="0.75" y="1.75" width="12.5" height="11.5" rx="1.75" stroke="'+primary+'" stroke-width="1.5"/>'
      + '<path d="M0.75 5.5h12.5" stroke="'+primary+'" stroke-width="1.5"/>'
      + '<path d="M4.5 0.5v2.5M9.5 0.5v2.5" stroke="'+primary+'" stroke-width="1.5" stroke-linecap="round"/>'
      + '</svg>';
    var titleEl = mk('div', ['font-size:11px','font-weight:700','color:'+textColor,'letter-spacing:0.06em','text-transform:uppercase']);
    titleEl.textContent = title;

    var badge = mk('div', [
      'font-size:10px','font-weight:600','padding:2px 7px','border-radius:20px',
      'background:'+hexToRgba(primary, 0.12),'color:'+primary,
      'margin-left:auto','flex-shrink:0',
      'display:' + (isFiltered ? 'block' : 'none'),
      'transition:opacity 0.2s'
    ]);
    badge.textContent = 'Filtered';

    titleRow.appendChild(icon);
    titleRow.appendChild(titleEl);
    titleRow.appendChild(badge);
    card.appendChild(titleRow);

    // ── Available range info ──────────────────────────────────────────────────
    var info = mk('div', ['font-size:11px','color:'+muted,'margin-bottom:14px','flex-shrink:0']);
    info.textContent = 'Available: ' + fmtDisplay(allItems[0]) + ' – ' + fmtDisplay(allItems[allItems.length-1]);
    card.appendChild(info);

    // ── FROM / TO date boxes ──────────────────────────────────────────────────
    var dateRow = mk('div', ['display:flex','gap:10px','margin-bottom:12px','flex-shrink:0']);

    function makeDateBox(label) {
      var wrap = mk('div', ['flex:1','min-width:0']);
      var lbl  = mk('div', ['font-size:10px','font-weight:600','color:'+muted,'letter-spacing:0.08em','text-transform:uppercase','margin-bottom:4px']);
      lbl.textContent = label;
      var val  = mk('div', [
        'font-size:13px','font-weight:600','color:'+textColor,
        'background:'+hexToRgba(primary, 0.06),
        'border:1.5px solid '+hexToRgba(primary, 0.2),
        'border-radius:8px','padding:7px 12px',
        'white-space:nowrap','overflow:hidden','text-overflow:ellipsis'
      ]);
      wrap.appendChild(lbl);
      wrap.appendChild(val);
      return { wrap: wrap, val: val };
    }

    var fromBox = makeDateBox('From');
    var toBox   = makeDateBox('To');
    fromBox.val.textContent = fmtDisplay(allItems[fromIdx]);
    toBox.val.textContent   = fmtDisplay(allItems[toIdx]);

    dateRow.appendChild(fromBox.wrap);
    dateRow.appendChild(toBox.wrap);
    card.appendChild(dateRow);

    // ── Slider area ───────────────────────────────────────────────────────────
    var sliderWrap = mk('div', ['flex:1','position:relative','min-height:36px','max-height:52px','flex-shrink:0']);
    card.appendChild(sliderWrap);

    // ── Axis labels ───────────────────────────────────────────────────────────
    var axisRow = mk('div', ['display:flex','justify-content:space-between','margin-top:6px','flex-shrink:0']);
    var axisL = mk('div', ['font-size:10px','color:'+muted]);
    axisL.textContent = fmtMonthYear(allItems[0]);
    var axisR = mk('div', ['font-size:10px','color:'+muted]);
    axisR.textContent = fmtMonthYear(allItems[allItems.length-1]);
    axisRow.appendChild(axisL);
    axisRow.appendChild(axisR);
    card.appendChild(axisRow);

    // ── Divider ───────────────────────────────────────────────────────────────
    var divider = mk('div', ['height:1px','background:'+border,'margin:12px 0','flex-shrink:0']);
    card.appendChild(divider);

    // ── Buttons ───────────────────────────────────────────────────────────────
    var btnRow = mk('div', ['display:flex','gap:8px','justify-content:flex-end','flex-shrink:0']);

    var resetBtn = mk('button', [
      'font-size:12px','font-weight:500','padding:7px 14px','border-radius:7px',
      'border:1.5px solid '+border,'background:transparent','color:'+muted,
      'cursor:pointer','font-family:inherit','transition:opacity 0.15s'
    ]);
    resetBtn.textContent = 'Reset';

    var applyBtn = mk('button', [
      'font-size:12px','font-weight:600','padding:7px 18px','border-radius:7px',
      'border:none','background:'+primary,'color:#FFFFFF',
      'cursor:pointer','font-family:inherit',
      'box-shadow:0 1px 4px '+hexToRgba(primary, 0.35),
      'transition:opacity 0.15s'
    ]);
    applyBtn.textContent = 'Apply Filter';

    btnRow.appendChild(resetBtn);
    btnRow.appendChild(applyBtn);
    card.appendChild(btnRow);

    document.body.appendChild(card);

    // ── Build canvas slider (after layout) ────────────────────────────────────
    requestAnimationFrame(function () {
      var sw = sliderWrap.offsetWidth  || 200;
      var sh = sliderWrap.offsetHeight || 44;
      var dpr = window.devicePixelRatio || 1;

      var canvas = document.createElement('canvas');
      canvas.width  = sw * dpr;
      canvas.height = sh * dpr;
      canvas.style.cssText = 'position:absolute;top:0;left:0;width:'+sw+'px;height:'+sh+'px;cursor:grab';
      sliderWrap.appendChild(canvas);

      var ctx = canvas.getContext('2d');
      ctx.scale(dpr, dpr);

      var THUMB_R = 9;
      var TL      = THUMB_R + 4;          // track left x
      var TW      = sw - THUMB_R * 2 - 8; // track width
      var TY      = sh / 2;               // track center y
      var TH      = 5;                    // track height
      var n       = allItems.length;

      function idxToX(i) {
        return TL + (i / Math.max(n - 1, 1)) * TW;
      }
      function xToIdx(x) {
        var t = (x - TL) / TW;
        return Math.round(Math.max(0, Math.min(1, t)) * (n - 1));
      }

      function paint() {
        ctx.clearRect(0, 0, sw, sh);

        // Track background
        roundRectPath(ctx, TL, TY - TH/2, TW, TH, TH/2);
        ctx.fillStyle = border;
        ctx.fill();

        // Active segment
        var fx = idxToX(fromIdx);
        var tx = idxToX(toIdx);
        roundRectPath(ctx, fx, TY - TH/2, tx - fx, TH, TH/2);
        ctx.fillStyle = primary;
        ctx.fill();

        // Tick marks for data points (only if not too many)
        if (n <= 72) {
          for (var ti = 0; ti < n; ti++) {
            var tickX = idxToX(ti);
            var inRange = ti >= fromIdx && ti <= toIdx;
            ctx.beginPath();
            ctx.arc(tickX, TY, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = inRange ? hexToRgba(primary, 0.4) : hexToRgba(muted, 0.25);
            ctx.fill();
          }
        }

        // Thumbs
        drawThumb(ctx, fx, TY, THUMB_R, primary, cardBg);
        drawThumb(ctx, tx, TY, THUMB_R, primary, cardBg);
      }

      function drawThumb(ctx, x, y, r, fill, bg) {
        // Drop shadow
        ctx.save();
        ctx.shadowColor    = 'rgba(0,0,0,0.18)';
        ctx.shadowBlur     = 6;
        ctx.shadowOffsetY  = 2;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = bg;
        ctx.fill();
        ctx.restore();
        // Colored border ring
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.strokeStyle = fill;
        ctx.lineWidth   = 2.5;
        ctx.stroke();
        // Center dot
        ctx.beginPath();
        ctx.arc(x, y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = fill;
        ctx.fill();
      }

      paint();

      // ── Drag interaction ──────────────────────────────────────────────────
      var dragging = null;

      canvas.addEventListener('mousedown', function (e) {
        var rect = canvas.getBoundingClientRect();
        var mx   = e.clientX - rect.left;
        var dF   = Math.abs(mx - idxToX(fromIdx));
        var dT   = Math.abs(mx - idxToX(toIdx));
        if (Math.min(dF, dT) <= THUMB_R + 6) {
          dragging = (dF <= dT) ? 'from' : 'to';
          canvas.style.cursor = 'grabbing';
          e.preventDefault();
        }
      });

      _mmHandler = function (e) {
        if (!dragging) return;
        var rect = canvas.getBoundingClientRect();
        var idx  = xToIdx(e.clientX - rect.left);
        if (dragging === 'from') fromIdx = Math.min(idx, toIdx);
        else                     toIdx   = Math.max(idx, fromIdx);
        fromBox.val.textContent = fmtDisplay(allItems[fromIdx]);
        toBox.val.textContent   = fmtDisplay(allItems[toIdx]);
        paint();
      };
      _muHandler = function () {
        if (dragging) { dragging = null; canvas.style.cursor = 'grab'; }
      };
      document.addEventListener('mousemove', _mmHandler);
      document.addEventListener('mouseup',   _muHandler);

      // ── Button handlers ───────────────────────────────────────────────────
      applyBtn.addEventListener('click', function () {
        if (!filterInteraction) return;
        var selected = allItems.slice(fromIdx, toIdx + 1).map(function (item) {
          return [item.raw];
        });
        dscc.sendInteraction('dateFilter', dscc.InteractionType.FILTER, {
          concepts: ['dateDimension'],
          values:   selected
        });
        isFiltered = true;
        badge.style.display = 'block';
      });

      resetBtn.addEventListener('click', function () {
        fromIdx = 0;
        toIdx   = allItems.length - 1;
        fromBox.val.textContent = fmtDisplay(allItems[fromIdx]);
        toBox.val.textContent   = fmtDisplay(allItems[toIdx]);
        paint();
        if (filterInteraction) {
          dscc.sendInteraction('dateFilter', dscc.InteractionType.FILTER, {
            concepts: ['dateDimension'],
            values:   []
          });
        }
        isFiltered = false;
        badge.style.display = 'none';
      });
    });
  }

  // ── Empty state ───────────────────────────────────────────────────────────────
  function renderEmpty(cardBg, border, textColor, title) {
    document.body.innerHTML = '';
    var card = mk('div', [
      'width:100%','height:100%','display:flex','flex-direction:column',
      'align-items:center','justify-content:center',
      'background:'+cardBg,'border:1px solid '+border,'border-radius:12px'
    ]);
    var msg = mk('div', ['font-size:12px','color:'+textColor,'opacity:0.4','text-align:center']);
    msg.textContent = 'Add a Date dimension to use ' + title;
    card.appendChild(msg);
    document.body.appendChild(card);
  }

  // ── DOM helper ────────────────────────────────────────────────────────────────
  function mk(tag, styles) {
    var e = document.createElement(tag);
    e.style.cssText = styles.join(';');
    return e;
  }

  // ── Subscribe ─────────────────────────────────────────────────────────────────
  dscc.subscribeToData(drawViz, { transform: dscc.tableTransform });

})();
