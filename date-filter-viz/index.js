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
 * Compact horizontal toolbar: [📅 Title] [Jan 25] [←slider→] [Jan 26] [Reset] [Apply]
 */

(function () {
  'use strict';

  var MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  // Module-level state — persists across drawViz calls within the same session
  var allItems   = [];   // [{raw, date}] — only ever grows (survives filtered redraws)
  var fromIdx    = 0;
  var toIdx      = 0;
  var isFiltered = false;
  var _mmHandler = null;
  var _muHandler = null;
  var _fieldId   = null; // actual data-source field id for sendInteraction

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
    if (/^\d{6}$/.test(s))   s = s.slice(0,4)+'-'+s.slice(4,6)+'-01';
    else if (/^\d{8}$/.test(s)) s = s.slice(0,4)+'-'+s.slice(4,6)+'-'+s.slice(6,8);
    else if (/^\d{4}\/\d{2}\/\d{2}$/.test(s)) s = s.replace(/\//g,'-');
    else if (/^\d{2}\/\d{2}\/\d{4}$/.test(s)) {
      var p = s.split('/'); s = p[2]+'-'+p[0]+'-'+p[1];
    }
    var d = new Date(s + (s.length === 7 ? '-01' : '') + (s.includes('T') ? '' : 'T00:00:00'));
    if (!isNaN(d)) return d;
    d = new Date(raw); return isNaN(d) ? null : d;
  }

  function fmtShort(item) {
    if (!item) return '—';
    var d = item.date;
    var mo = MONTHS[d.getMonth()];
    var yr = String(d.getFullYear()).slice(2);
    if (/^\d{6}$/.test(String(item.raw).trim())) return mo + ' \'' + yr;
    return d.getDate() + ' ' + mo + ' \'' + yr;
  }

  function roundRectPath(ctx, x, y, w, h, r) {
    if (w < 2*r) r = w/2; if (h < 2*r) r = h/2;
    ctx.beginPath();
    ctx.moveTo(x+r, y);
    ctx.arcTo(x+w, y, x+w, y+h, r);
    ctx.arcTo(x+w, y+h, x, y+h, r);
    ctx.arcTo(x, y+h, x, y, r);
    ctx.arcTo(x, y, x+w, y, r);
    ctx.closePath();
  }

  // ── Main ─────────────────────────────────────────────────────────────────────

  function drawViz(data) {
    var s = data.style || {};

    var primary   = getColor(s.primaryColor, '#2563EB');
    var cardBg    = getColor(s.cardBg,       '#FFFFFF');
    var border    = getColor(s.borderColor,  '#E5E7EB');
    var textColor = getColor(s.textColor,    '#111827');
    var muted     = getColor(s.mutedColor,   '#6B7280');
    var title     = (s.filterTitle && s.filterTitle.value) || 'Date Range Filter';

    var table   = (data.tables || {}).DEFAULT || {};
    var headers = table.headers || [];
    var rows    = table.rows    || [];

    // Find dimension column
    var dimIdx = 0;
    for (var h = 0; h < headers.length; h++) {
      if (headers[h].configId === 'dateDimension') { dimIdx = h; break; }
    }

    // Store the real field id for sendInteraction
    if (headers[dimIdx] && headers[dimIdx].id) {
      _fieldId = headers[dimIdx].id;
    }

    // Parse unique dates from current data
    var seen = {}, items = [];
    for (var r = 0; r < rows.length; r++) {
      var raw = rows[r][dimIdx];
      if (raw == null || seen[raw]) continue;
      var d = parseDate(raw);
      if (d) { seen[raw] = true; items.push({ raw: raw, date: d }); }
    }
    items.sort(function(a,b){ return a.date - b.date; });

    // Expand allItems (never shrink — survive filtered redraws)
    if (items.length > 0) {
      if (allItems.length === 0) {
        allItems = items;
        fromIdx  = 0;
        toIdx    = allItems.length - 1;
      } else {
        var oldKeys = {};
        allItems.forEach(function(i){ oldKeys[i.raw] = true; });
        items.forEach(function(i){ if (!oldKeys[i.raw]) allItems.push(i); });
        allItems.sort(function(a,b){ return a.date - b.date; });
        fromIdx = Math.max(0, Math.min(fromIdx, allItems.length - 1));
        toIdx   = Math.max(0, Math.min(toIdx,   allItems.length - 1));
      }
    }

    if (allItems.length === 0) {
      renderEmpty(cardBg, border, textColor, title);
      return;
    }

    var interaction = (data.interactions || {}).dateFilter || null;
    buildUI(primary, cardBg, border, textColor, muted, title, interaction);
  }

  // ── UI ───────────────────────────────────────────────────────────────────────

  function buildUI(primary, cardBg, border, textColor, muted, title, interaction) {
    if (_mmHandler) { document.removeEventListener('mousemove', _mmHandler); _mmHandler = null; }
    if (_muHandler) { document.removeEventListener('mouseup',   _muHandler); _muHandler = null; }

    // Fill the entire iframe
    document.documentElement.style.cssText = 'height:100%;margin:0;padding:0;';
    document.body.style.cssText = 'height:100%;margin:0;padding:0;overflow:hidden;background:transparent;';

    document.body.innerHTML = '';

    // Card fills the viewport absolutely
    var card = mk('div', {
      position: 'absolute', inset: '0',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      background: cardBg,
      border: '1px solid ' + border,
      borderRadius: '12px',
      boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
      padding: '10px 16px',
      boxSizing: 'border-box',
      overflow: 'hidden',
      fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif'
    });

    // ── Row 1: Title + "Filtered" badge ──────────────────────────────────────
    var row1 = mk('div', { display:'flex', alignItems:'center', gap:'6px', marginBottom:'8px', flexShrink:'0' });

    var icon = document.createElement('div');
    icon.style.cssText = 'display:flex;flex-shrink:0;color:' + primary;
    icon.innerHTML = '<svg width="13" height="13" viewBox="0 0 14 14" fill="none">'
      + '<rect x="0.75" y="1.75" width="12.5" height="11.5" rx="1.75" stroke="'+primary+'" stroke-width="1.5"/>'
      + '<path d="M0.75 5.5h12.5" stroke="'+primary+'" stroke-width="1.5"/>'
      + '<path d="M4.5 0.5v2.5M9.5 0.5v2.5" stroke="'+primary+'" stroke-width="1.5" stroke-linecap="round"/>'
      + '</svg>';

    var titleEl = mk('div', { fontSize:'11px', fontWeight:'700', color:textColor, letterSpacing:'0.06em', textTransform:'uppercase', flex:'1' });
    titleEl.textContent = title;

    var badge = mk('div', {
      fontSize:'10px', fontWeight:'600', padding:'2px 7px', borderRadius:'20px',
      background: hexToRgba(primary, 0.12), color: primary,
      flexShrink:'0', display: isFiltered ? 'block' : 'none'
    });
    badge.textContent = 'Filtered';

    row1.appendChild(icon);
    row1.appendChild(titleEl);
    row1.appendChild(badge);
    card.appendChild(row1);

    // ── Row 2: [From] [Slider] [To] [Reset] [Apply] ──────────────────────────
    var row2 = mk('div', { display:'flex', alignItems:'center', gap:'8px', flexShrink:'0' });

    function dateChip(text) {
      var el = mk('div', {
        fontSize:'12px', fontWeight:'600', color:textColor,
        background: hexToRgba(primary, 0.06),
        border: '1.5px solid ' + hexToRgba(primary, 0.2),
        borderRadius:'7px', padding:'4px 10px',
        whiteSpace:'nowrap', flexShrink:'0'
      });
      el.textContent = text;
      return el;
    }

    var fromChip = dateChip(fmtShort(allItems[fromIdx]));
    var toChip   = dateChip(fmtShort(allItems[toIdx]));

    var sliderWrap = mk('div', { flex:'1', position:'relative', minWidth:'60px', height:'32px', flexShrink:'1' });

    var resetBtn = mk('button', {
      fontSize:'11px', fontWeight:'500', padding:'5px 10px', borderRadius:'7px',
      border:'1.5px solid '+border, background:'transparent', color:muted,
      cursor:'pointer', fontFamily:'inherit', flexShrink:'0', whiteSpace:'nowrap'
    });
    resetBtn.textContent = 'Reset';

    var applyBtn = mk('button', {
      fontSize:'11px', fontWeight:'600', padding:'5px 13px', borderRadius:'7px',
      border:'none', background:primary, color:'#FFFFFF',
      cursor:'pointer', fontFamily:'inherit', flexShrink:'0', whiteSpace:'nowrap',
      boxShadow:'0 1px 4px ' + hexToRgba(primary, 0.35)
    });
    applyBtn.textContent = 'Apply';

    row2.appendChild(fromChip);
    row2.appendChild(sliderWrap);
    row2.appendChild(toChip);
    row2.appendChild(resetBtn);
    row2.appendChild(applyBtn);
    card.appendChild(row2);

    document.body.appendChild(card);

    // ── Canvas slider ─────────────────────────────────────────────────────────
    requestAnimationFrame(function () {
      var sw  = sliderWrap.offsetWidth  || 200;
      var sh  = sliderWrap.offsetHeight || 32;
      var dpr = window.devicePixelRatio || 1;

      var cv = document.createElement('canvas');
      cv.width  = sw * dpr; cv.height = sh * dpr;
      cv.style.cssText = 'position:absolute;top:0;left:0;width:'+sw+'px;height:'+sh+'px;cursor:grab;';
      sliderWrap.appendChild(cv);

      var ctx = cv.getContext('2d');
      ctx.scale(dpr, dpr);

      var R  = 8, TL = R+4, TW = sw - R*2 - 8, TY = sh/2, TH = 5, n = allItems.length;

      function ix2x(i) { return TL + (i / Math.max(n-1,1)) * TW; }
      function x2ix(x) { return Math.round(Math.max(0,Math.min(1,(x-TL)/TW))*(n-1)); }

      function paint() {
        ctx.clearRect(0,0,sw,sh);
        // Track
        roundRectPath(ctx, TL, TY-TH/2, TW, TH, TH/2);
        ctx.fillStyle = '#E5E7EB'; ctx.fill();
        // Active range
        var fx = ix2x(fromIdx), tx = ix2x(toIdx);
        roundRectPath(ctx, fx, TY-TH/2, tx-fx, TH, TH/2);
        ctx.fillStyle = primary; ctx.fill();
        // Ticks
        if (n <= 60) {
          for (var ti=0; ti<n; ti++) {
            var inR = ti>=fromIdx && ti<=toIdx;
            ctx.beginPath(); ctx.arc(ix2x(ti), TY, 2.5, 0, Math.PI*2);
            ctx.fillStyle = inR ? hexToRgba(primary,0.45) : 'rgba(156,163,175,0.4)';
            ctx.fill();
          }
        }
        // Thumbs
        [fx, tx].forEach(function(x) {
          ctx.save();
          ctx.shadowColor='rgba(0,0,0,0.18)'; ctx.shadowBlur=6; ctx.shadowOffsetY=2;
          ctx.beginPath(); ctx.arc(x,TY,R,0,Math.PI*2); ctx.fillStyle='#FFFFFF'; ctx.fill();
          ctx.restore();
          ctx.beginPath(); ctx.arc(x,TY,R,0,Math.PI*2); ctx.strokeStyle=primary; ctx.lineWidth=2.5; ctx.stroke();
          ctx.beginPath(); ctx.arc(x,TY,3,0,Math.PI*2); ctx.fillStyle=primary; ctx.fill();
        });
      }
      paint();

      // Drag
      var dragging = null;
      cv.addEventListener('mousedown', function(e) {
        var rx = e.clientX - cv.getBoundingClientRect().left;
        var dF = Math.abs(rx - ix2x(fromIdx)), dT = Math.abs(rx - ix2x(toIdx));
        if (Math.min(dF,dT) <= R+6) { dragging = dF<=dT ? 'from':'to'; cv.style.cursor='grabbing'; e.preventDefault(); }
      });
      _mmHandler = function(e) {
        if (!dragging) return;
        var idx = x2ix(e.clientX - cv.getBoundingClientRect().left);
        if (dragging==='from') fromIdx = Math.min(idx,toIdx);
        else                   toIdx   = Math.max(idx,fromIdx);
        fromChip.textContent = fmtShort(allItems[fromIdx]);
        toChip.textContent   = fmtShort(allItems[toIdx]);
        paint();
      };
      _muHandler = function() { if(dragging){ dragging=null; cv.style.cursor='grab'; } };
      document.addEventListener('mousemove', _mmHandler);
      document.addEventListener('mouseup',   _muHandler);

      // Buttons
      applyBtn.addEventListener('click', function() {
        var concepts = _fieldId ? [_fieldId] : ['dateDimension'];
        var values   = allItems.slice(fromIdx, toIdx+1).map(function(i){ return [i.raw]; });
        try {
          dscc.sendInteraction('dateFilter', dscc.InteractionType.FILTER, { concepts: concepts, values: values });
        } catch(e) { /* interaction not configured */ }
        isFiltered = true;
        badge.style.display = 'block';
      });

      resetBtn.addEventListener('click', function() {
        fromIdx = 0; toIdx = allItems.length - 1;
        fromChip.textContent = fmtShort(allItems[fromIdx]);
        toChip.textContent   = fmtShort(allItems[toIdx]);
        paint();
        try {
          dscc.sendInteraction('dateFilter', dscc.InteractionType.FILTER, { concepts: _fieldId ? [_fieldId] : ['dateDimension'], values: [] });
        } catch(e) { /* interaction not configured */ }
        isFiltered = false;
        badge.style.display = 'none';
      });
    });
  }

  // ── Empty state ───────────────────────────────────────────────────────────────
  function renderEmpty(cardBg, border, textColor, title) {
    document.documentElement.style.cssText = 'height:100%;margin:0;padding:0;';
    document.body.style.cssText = 'height:100%;margin:0;padding:0;overflow:hidden;background:transparent;';
    document.body.innerHTML = '';
    var card = mk('div', {
      position:'absolute', inset:'0',
      display:'flex', alignItems:'center', justifyContent:'center',
      background:cardBg, border:'1px solid '+border, borderRadius:'12px'
    });
    var msg = mk('div', { fontSize:'12px', color:textColor, opacity:'0.4', textAlign:'center' });
    msg.textContent = 'Add a Date dimension to use ' + title;
    card.appendChild(msg);
    document.body.appendChild(card);
  }

  // ── DOM helper — accepts style object ────────────────────────────────────────
  function mk(tag, styles) {
    var e = document.createElement(tag);
    Object.keys(styles).forEach(function(k) { e.style[k] = styles[k]; });
    return e;
  }

  dscc.subscribeToData(drawViz, { transform: dscc.tableTransform });

})();
