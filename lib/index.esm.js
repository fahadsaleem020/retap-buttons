import {
  isNodeOrMarkActive as e,
  toggleBold as t,
  clearFormats as o,
  toggleBlockQuote as l,
  canSink as n,
  sinkListItem as r,
  canLift as i,
  liftListItem as c,
  toggleBulletList as a,
  toggleNumberedList as s,
  toggleHeading as d,
  activeHeadingValue as u,
  removeUrl as v,
  toggleItalic as h,
  toggleStrike as g,
  toggleUnderline as p,
  toggleCodeBlock as m,
  setHardBreak as b,
  toggleSubscript as z,
  toggleSuperscript as f,
  getFontColorValue as k,
  unsetFontColor as E,
  getHighlightColorValue as y,
  unsetHighlightColor as H,
  setHorizontalLine as C,
  setUndo as M,
  isExtension as B,
  setRedo as V,
  clearContents as w,
  setFontFamily as x,
  getFontFamilyValue as P,
  isTextAlignmentValue as L,
  getTextAlignmentValue as O,
  getFontSizeValue as _,
  setFontSize as A,
  setTextAlignment as j,
  deleteTable as I,
  insertRowAfter as S,
  insertRowBefore as R,
  insertColumnAfter as T,
  insertColumnBefore as W,
  deleteColumn as q,
  deleteRow as N,
  mergeCells as $,
  splitCell as F,
  inrceaseTextIndent as U,
  decreaseTextIndent as D,
  setFontColor as G,
  setHighlightColor as J,
} from "@chakra-editor/functions";
import {
  IconButton as K,
  Menu as Q,
  MenuButton as X,
  MenuList as Y,
  MenuItem as Z,
  Flex as ee,
  Select as te,
  useDisclosure as oe,
  Box as le,
  Button as ne,
  useOutsideClick as re,
  HStack as ie,
  Text as ce,
  Checkbox as ae,
} from "@chakra-ui/react";
import se, { useState as de, useRef as ue } from "react";
import {
  LinkEditor as ve,
  LinkModal as he,
  TableComponent as ge,
} from "@chakra-editor/components";
import { useTable as pe } from "@chakra-editor/hooks";
import { useEditor as me } from "@chakra-editor/provider";
var be = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  ze = se.createContext && se.createContext(be),
  fe =
    (window && window.__assign) ||
    function () {
      return (
        (fe =
          Object.assign ||
          function (e) {
            for (var t, o = 1, l = arguments.length; o < l; o++)
              for (var n in (t = arguments[o]))
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
          }),
        fe.apply(this, arguments)
      );
    },
  ke =
    (window && window.__rest) ||
    function (e, t) {
      var o = {};
      for (var l in e)
        Object.prototype.hasOwnProperty.call(e, l) &&
          t.indexOf(l) < 0 &&
          (o[l] = e[l]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var n = 0;
        for (l = Object.getOwnPropertySymbols(e); n < l.length; n++)
          t.indexOf(l[n]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, l[n]) &&
            (o[l[n]] = e[l[n]]);
      }
      return o;
    };
function Ee(e) {
  return (
    e &&
    e.map(function (e, t) {
      return se.createElement(e.tag, fe({ key: t }, e.attr), Ee(e.child));
    })
  );
}
function ye(e) {
  return function (t) {
    return se.createElement(He, fe({ attr: fe({}, e.attr) }, t), Ee(e.child));
  };
}
function He(e) {
  var t = function (t) {
    var o,
      l = e.attr,
      n = e.size,
      r = e.title,
      i = ke(e, ["attr", "size", "title"]),
      c = n || t.size || "1em";
    return (
      t.className && (o = t.className),
      e.className && (o = (o ? o + " " : "") + e.className),
      se.createElement(
        "svg",
        fe(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          t.attr,
          l,
          i,
          {
            className: o,
            style: fe(fe({ color: e.color || t.color }, t.style), e.style),
            height: c,
            width: c,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        r && se.createElement("title", null, r),
        e.children
      )
    );
  };
  return void 0 !== ze
    ? se.createElement(ze.Consumer, null, function (e) {
        return t(e);
      })
    : t(be);
}
function Ce(e) {
  return ye({
    tag: "svg",
    attr: { version: "1.1", viewBox: "0 0 17 17" },
    child: [
      { tag: "g", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M8.301 6.422c0.437 0 0.769-0.161 1.006-0.484 0.181-0.237 0.265-0.617 0.265-1.12v-1.66c0-0.503-0.084-0.873-0.265-1.11-0.238-0.321-0.57-0.483-1.006-0.483-0.428 0-0.76 0.161-0.995 0.483-0.181 0.238-0.266 0.608-0.266 1.111v1.66c0 0.503 0.085 0.873 0.266 1.12 0.235 0.322 0.567 0.483 0.995 0.483zM7.893 2.988c0-0.436 0.133-0.654 0.408-0.654 0.285 0 0.408 0.218 0.408 0.654v1.992c0 0.437-0.123 0.664-0.408 0.664-0.275 0-0.408-0.228-0.408-0.664v-1.992zM10.35 6.071c-0.048-0.143-0.075-0.37-0.075-0.711v-3.738h0.863v3.481c0 0.2 0 0.313 0.010 0.333 0.019 0.133 0.085 0.208 0.199 0.208 0.17 0 0.35-0.133 0.54-0.408v-3.614h0.863v4.734h-0.863v-0.522c-0.341 0.398-0.663 0.588-0.978 0.588-0.275 0-0.474-0.113-0.559-0.351zM13.633 11.811v0.436h-0.854v-0.436c0-0.427 0.143-0.646 0.427-0.646 0.284 0.001 0.427 0.219 0.427 0.646zM4.354 1.774c-0.208-0.588-0.416-1.186-0.617-1.774h1.007l0.673 2.495 0.645-2.495h0.968l-1.148 3.785v2.571h-0.948v-2.571c-0.086-0.465-0.276-1.129-0.58-2.011zM15.283 8.785c-0.171-0.75-0.788-1.3-1.518-1.385-1.746-0.19-3.511-0.19-5.266-0.19s-3.52 0-5.256 0.19c-0.738 0.085-1.346 0.635-1.526 1.385-0.237 1.062-0.247 2.22-0.247 3.32 0 1.091 0 2.257 0.247 3.32 0.171 0.75 0.788 1.3 1.518 1.376 1.745 0.199 3.51 0.199 5.265 0.199s3.52 0 5.266-0.199c0.729-0.076 1.337-0.626 1.518-1.376 0.237-1.062 0.247-2.229 0.247-3.32-0.001-1.1-0.001-2.258-0.248-3.32zM5.483 9.743h-1.014v5.398h-0.949v-5.398h-0.997v-0.892h2.96v0.892zM8.045 15.141h-0.845v-0.512c-0.342 0.389-0.664 0.579-0.968 0.579-0.274 0-0.474-0.114-0.55-0.351-0.048-0.142-0.076-0.361-0.076-0.692v-3.709h0.845v3.453c0 0.2 0 0.304 0.009 0.333 0.020 0.132 0.086 0.199 0.199 0.199 0.172 0 0.352-0.132 0.541-0.398v-3.586h0.845v4.684zM11.271 13.737c0 0.437-0.020 0.749-0.086 0.948-0.104 0.342-0.342 0.522-0.674 0.522-0.303 0-0.598-0.171-0.883-0.522v0.456h-0.843v-6.29h0.843v2.059c0.275-0.342 0.57-0.512 0.883-0.512 0.332 0 0.57 0.18 0.674 0.531 0.066 0.19 0.086 0.502 0.086 0.939v1.869zM14.477 12.959h-1.698v0.825c0 0.437 0.143 0.654 0.437 0.654 0.209 0 0.332-0.113 0.38-0.341 0.009-0.047 0.019-0.237 0.019-0.579h0.863v0.124c0 0.275 0 0.465-0.019 0.55-0.020 0.189-0.096 0.36-0.199 0.512-0.229 0.332-0.579 0.503-1.024 0.503-0.446 0-0.779-0.161-1.025-0.484-0.18-0.228-0.275-0.598-0.275-1.101v-1.641c0-0.503 0.086-0.863 0.266-1.101 0.247-0.323 0.579-0.484 1.016-0.484 0.428 0 0.759 0.161 1.005 0.484 0.172 0.237 0.257 0.597 0.257 1.101v0.978zM10.426 11.801v2.002c0 0.427-0.124 0.635-0.37 0.635-0.143 0-0.285-0.066-0.428-0.208v-2.855c0.143-0.143 0.285-0.209 0.428-0.209 0.246 0 0.37 0.218 0.37 0.635z",
        },
      },
    ],
  })(e);
}
function Me(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } },
      {
        tag: "path",
        attr: {
          d: "M17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.43-.98 2.63-2.31 2.98l1.46 1.46C20.88 15.61 22 13.95 22 12c0-2.76-2.24-5-5-5zm-1 4h-2.19l2 2H16zM2 4.27l3.11 3.11A4.991 4.991 0 002 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1 0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4L20 19.74 3.27 3 2 4.27z",
        },
      },
      { tag: "path", attr: { fill: "none", d: "M0 24V0" } },
    ],
  })(e);
}
function Be(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: {
          d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z",
        },
      },
    ],
  })(e);
}
function Ve(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: {
          d: "M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z",
        },
      },
    ],
  })(e);
}
function we(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: {
          d: "M3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21 18 19.73 3.55 5.27 3.27 5zM6 5v.18L8.82 8h2.4l-.72 1.68 2.1 2.1L14.21 8H20V5H6z",
        },
      },
    ],
  })(e);
}
function xe(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      { tag: "path", attr: { d: "M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" } },
    ],
  })(e);
}
function Pe(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      { tag: "path", attr: { fillRule: "evenodd", d: "M4 11h16v2H4z" } },
    ],
  })(e);
}
function Le(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: {
          d: "M22 18h-2v1h3v1h-4v-2c0-.55.45-1 1-1h2v-1h-3v-1h3c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1zM5.88 18h2.66l3.4-5.42h.12l3.4 5.42h2.66l-4.65-7.27L17.81 4h-2.68l-3.07 4.99h-.12L8.85 4H6.19l4.32 6.73L5.88 18z",
        },
      },
    ],
  })(e);
}
function Oe(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: {
          d: "M22 7h-2v1h3v1h-4V7c0-.55.45-1 1-1h2V5h-3V4h3c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1zM5.88 20h2.66l3.4-5.42h.12l3.4 5.42h2.66l-4.65-7.27L17.81 6h-2.68l-3.07 4.99h-.12L8.85 6H6.19l4.32 6.73L5.88 20z",
        },
      },
    ],
  })(e);
}
function _e(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: {
          d: "M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3 3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z",
        },
      },
    ],
  })(e);
}
function Ae(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: {
          d: "M8 11h8v2H8v-2zm12.1 1H22c0-2.76-2.24-5-5-5h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1zM3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM19 12h-2v3h-3v2h3v3h2v-3h3v-2h-3v-3z",
        },
      },
    ],
  })(e);
}
function je(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } },
      {
        tag: "path",
        attr: {
          d: "M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z",
        },
      },
    ],
  })(e);
}
function Ie(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } },
      {
        tag: "path",
        attr: {
          d: "M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z",
        },
      },
    ],
  })(e);
}
function Se(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M264 230h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H264c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm496 424c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H264c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496zm144 140H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-424H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z",
        },
      },
    ],
  })(e);
}
function Re(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M120 230h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 424h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm784 140H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-424H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z",
        },
      },
    ],
  })(e);
}
function Te(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M904 158H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 424H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 212H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-424H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z",
        },
      },
    ],
  })(e);
}
function We(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M697.8 481.4c33.6-35 54.2-82.3 54.2-134.3v-10.2C752 229.3 663.9 142 555.3 142H259.4c-15.1 0-27.4 12.3-27.4 27.4v679.1c0 16.3 13.2 29.5 29.5 29.5h318.7c117 0 211.8-94.2 211.8-210.5v-11c0-73-37.4-137.3-94.2-175.1zM328 238h224.7c57.1 0 103.3 44.4 103.3 99.3v9.5c0 54.8-46.3 99.3-103.3 99.3H328V238zm366.6 429.4c0 62.9-51.7 113.9-115.5 113.9H328V542.7h251.1c63.8 0 115.5 51 115.5 113.9v10.8z",
        },
      },
    ],
  })(e);
}
function qe(e) {
  return ye({
    tag: "svg",
    attr: { t: "1569683368540", viewBox: "0 0 1024 1024", version: "1.1" },
    child: [
      { tag: "defs", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6c-0.3 1.5-0.4 3-0.4 4.4 0 14.4 11.6 26 26 26h723c1.5 0 3-0.1 4.4-0.4 14.2-2.4 23.7-15.9 21.2-30zM204 390h272V182h72v208h272v104H204V390z m468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z",
        },
      },
    ],
  })(e);
}
function Ne(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48zm-194.9 6.1l192-161c3.8-3.2 3.8-9.1 0-12.3l-192-160.9A7.95 7.95 0 0 0 308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 0 0-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z",
        },
      },
    ],
  })(e);
}
function $e(e) {
  return ye({
    tag: "svg",
    attr: { t: "1569683386799", viewBox: "0 0 1024 1024", version: "1.1" },
    child: [
      { tag: "defs", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M651.1 641.9c-1.4-1.2-3.2-1.9-5.1-1.9h-54.7c-2.4 0-4.6 1.1-6.1 2.9L512 730.7l-73.1-87.8c-1.5-1.8-3.8-2.9-6.1-2.9H378c-1.9 0-3.7 0.7-5.1 1.9-3.4 2.8-3.9 7.9-1 11.3L474.2 776 371.8 898.9c-2.8 3.4-2.4 8.4 1 11.3 1.4 1.2 3.2 1.9 5.1 1.9h54.7c2.4 0 4.6-1.1 6.1-2.9l73.1-87.8 73.1 87.8c1.5 1.8 3.8 2.9 6.1 2.9h55c1.9 0 3.7-0.7 5.1-1.9 3.4-2.8 3.9-7.9 1-11.3L549.8 776l102.4-122.9c2.8-3.4 2.3-8.4-1.1-11.2zM472 544h80c4.4 0 8-3.6 8-8V120c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v416c0 4.4 3.6 8 8 8zM350 386H184V136c0-3.3-2.7-6-6-6h-60c-3.3 0-6 2.7-6 6v292c0 16.6 13.4 30 30 30h208c3.3 0 6-2.7 6-6v-60c0-3.3-2.7-6-6-6zM906 130h-60c-3.3 0-6 2.7-6 6v250H674c-3.3 0-6 2.7-6 6v60c0 3.3 2.7 6 6 6h208c16.6 0 30-13.4 30-30V136c0-3.3-2.7-6-6-6z",
        },
      },
    ],
  })(e);
}
function Fe(e) {
  return ye({
    tag: "svg",
    attr: { t: "1569683582196", viewBox: "0 0 1024 1024", version: "1.1" },
    child: [
      { tag: "defs", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M819.8 512l102.4-122.9c2.8-3.4 2.4-8.4-1-11.3-1.4-1.2-3.2-1.9-5.1-1.9h-54.7c-2.4 0-4.6 1.1-6.1 2.9L782 466.7l-73.1-87.8c-1.5-1.8-3.8-2.9-6.1-2.9H648c-1.9 0-3.7 0.7-5.1 1.9-3.4 2.8-3.9 7.9-1 11.3L744.2 512 641.8 634.9c-2.8 3.4-2.4 8.4 1 11.3 1.4 1.2 3.2 1.9 5.1 1.9h54.7c2.4 0 4.6-1.1 6.1-2.9l73.1-87.8 73.1 87.8c1.5 1.8 3.8 2.9 6.1 2.9h55c1.9 0 3.7-0.7 5.1-1.9 3.4-2.8 3.9-7.9 1-11.3L819.8 512zM536 464H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h416c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8zM452 668h-60c-3.3 0-6 2.7-6 6v166H136c-3.3 0-6 2.7-6 6v60c0 3.3 2.7 6 6 6h292c16.6 0 30-13.4 30-30V674c0-3.3-2.7-6-6-6zM136 184h250v166c0 3.3 2.7 6 6 6h60c3.3 0 6-2.7 6-6V142c0-16.6-13.4-30-30-30H136c-3.3 0-6 2.7-6 6v60c0 3.3 2.7 6 6 6z",
        },
      },
    ],
  })(e);
}
function Ue(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z",
        },
      },
    ],
  })(e);
}
function De(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M909.3 506.3L781.7 405.6a7.23 7.23 0 0 0-11.7 5.7V476H548V254h64.8c6 0 9.4-7 5.7-11.7L517.7 114.7a7.14 7.14 0 0 0-11.3 0L405.6 242.3a7.23 7.23 0 0 0 5.7 11.7H476v222H254v-64.8c0-6-7-9.4-11.7-5.7L114.7 506.3a7.14 7.14 0 0 0 0 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V548h222v222h-64.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V548h222v64.8c0 6 7 9.4 11.7 5.7l127.5-100.8a7.3 7.3 0 0 0 .1-11.4z",
        },
      },
    ],
  })(e);
}
function Ge(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M904 816H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8zm-650.3-80h85c4.2 0 8-2.7 9.3-6.8l53.7-166h219.2l53.2 166c1.3 4 5 6.8 9.3 6.8h89.1c1.1 0 2.2-.2 3.2-.5a9.7 9.7 0 0 0 6-12.4L573.6 118.6a9.9 9.9 0 0 0-9.2-6.6H462.1c-4.2 0-7.9 2.6-9.2 6.6L244.5 723.1c-.4 1-.5 2.1-.5 3.2-.1 5.3 4.3 9.7 9.7 9.7zm255.9-516.1h4.1l83.8 263.8H424.9l84.7-263.8z",
        },
      },
    ],
  })(e);
}
function Je(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M957.6 507.4L603.2 158.2a7.9 7.9 0 0 0-11.2 0L353.3 393.4a8.03 8.03 0 0 0-.1 11.3l.1.1 40 39.4-117.2 115.3a8.03 8.03 0 0 0-.1 11.3l.1.1 39.5 38.9-189.1 187H72.1c-4.4 0-8.1 3.6-8.1 8V860c0 4.4 3.6 8 8 8h344.9c2.1 0 4.1-.8 5.6-2.3l76.1-75.6 40.4 39.8a7.9 7.9 0 0 0 11.2 0l117.1-115.6 40.1 39.5a7.9 7.9 0 0 0 11.2 0l238.7-235.2c3.4-3 3.4-8 .3-11.2zM389.8 796.2H229.6l134.4-133 80.1 78.9-54.3 54.1zm154.8-62.1L373.2 565.2l68.6-67.6 171.4 168.9-68.6 67.6zM713.1 658L450.3 399.1 597.6 254l262.8 259-147.3 145z",
        },
      },
    ],
  })(e);
}
function Ke(e) {
  return ye({
    tag: "svg",
    attr: { t: "1569683507961", viewBox: "0 0 1024 1024", version: "1.1" },
    child: [
      { tag: "defs", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M878.7 336H145.3c-18.4 0-33.3 14.3-33.3 32v464c0 17.7 14.9 32 33.3 32h733.3c18.4 0 33.3-14.3 33.3-32V368c0.1-17.7-14.8-32-33.2-32zM360 792H184V632h176v160z m0-224H184V408h176v160z m240 224H424V632h176v160z m0-224H424V408h176v160z m240 224H664V632h176v160z m0-224H664V408h176v160zM904 160H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8z",
        },
      },
    ],
  })(e);
}
function Qe(e) {
  return ye({
    tag: "svg",
    attr: { t: "1569683503597", viewBox: "0 0 1024 1024", version: "1.1" },
    child: [
      { tag: "defs", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M904 768H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8zM878.7 160H145.3c-18.4 0-33.3 14.3-33.3 32v464c0 17.7 14.9 32 33.3 32h733.3c18.4 0 33.3-14.3 33.3-32V192c0.1-17.7-14.8-32-33.2-32zM360 616H184V456h176v160z m0-224H184V232h176v160z m240 224H424V456h176v160z m0-224H424V232h176v160z m240 224H664V456h176v160z m0-224H664V232h176v160z",
        },
      },
    ],
  })(e);
}
function Xe(e) {
  return ye({
    tag: "svg",
    attr: { t: "1569683561749", viewBox: "0 0 1024 1024", version: "1.1" },
    child: [
      { tag: "defs", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M248 112h-80c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V120c0-4.4-3.6-8-8-8zM832 112H368c-17.7 0-32 14.9-32 33.3v733.3c0 18.4 14.3 33.3 32 33.3h464c17.7 0 32-14.9 32-33.3V145.3c0-18.4-14.3-33.3-32-33.3zM568 840H408V664h160v176z m0-240H408V424h160v176z m0-240H408V184h160v176z m224 480H632V664h160v176z m0-240H632V424h160v176z m0-240H632V184h160v176z",
        },
      },
    ],
  })(e);
}
function Ye(e) {
  return ye({
    tag: "svg",
    attr: { t: "1569683555439", viewBox: "0 0 1024 1024", version: "1.1" },
    child: [
      { tag: "defs", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M856 112h-80c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V120c0-4.4-3.6-8-8-8zM656 112H192c-17.7 0-32 14.9-32 33.3v733.3c0 18.4 14.3 33.3 32 33.3h464c17.7 0 32-14.9 32-33.3V145.3c0-18.4-14.3-33.3-32-33.3zM392 840H232V664h160v176z m0-240H232V424h160v176z m0-240H232V184h160v176z m224 480H456V664h160v176z m0-240H456V424h160v176z m0-240H456V184h160v176z",
        },
      },
    ],
  })(e);
}
function Ze(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M798 160H366c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h181.2l-156 544H229c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8H474.4l156-544H798c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z",
        },
      },
    ],
  })(e);
}
function et(e) {
  return ye({
    tag: "svg",
    attr: { t: "1569683404098", viewBox: "0 0 1024 1024", version: "1.1" },
    child: [
      { tag: "defs", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M482.2 508.4L331.3 389c-3-2.4-7.3-0.2-7.3 3.6V478H184V184h204v128c0 2.2 1.8 4 4 4h60c2.2 0 4-1.8 4-4V144c0-15.5-12.5-28-28-28H144c-15.5 0-28 12.5-28 28v736c0 15.5 12.5 28 28 28h284c15.5 0 28-12.5 28-28V712c0-2.2-1.8-4-4-4h-60c-2.2 0-4 1.8-4 4v128H184V546h140v85.4c0 3.8 4.4 6 7.3 3.6l150.9-119.4c2.4-1.8 2.4-5.4 0-7.2zM880 116H596c-15.5 0-28 12.5-28 28v168c0 2.2 1.8 4 4 4h60c2.2 0 4-1.8 4-4V184h204v294H700v-85.4c0-3.8-4.3-6-7.3-3.6l-151 119.4c-2.3 1.8-2.3 5.3 0 7.1l151 119.5c2.9 2.3 7.3 0.2 7.3-3.6V546h140v294H636V712c0-2.2-1.8-4-4-4h-60c-2.2 0-4 1.8-4 4v168c0 15.5 12.5 28 28 28h284c15.5 0 28-12.5 28-28V144c0-15.5-12.5-28-28-28z",
        },
      },
    ],
  })(e);
}
function tt(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M920 760H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-568H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM216 712H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h72.4v20.5h-35.7c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h35.7V838H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4V716c0-2.2-1.8-4-4-4zM100 188h38v120c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V152c0-4.4-3.6-8-8-8h-78c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4zm116 240H100c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h68.4l-70.3 77.7a8.3 8.3 0 0 0-2.1 5.4V592c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4v-36c0-2.2-1.8-4-4-4h-68.4l70.3-77.7a8.3 8.3 0 0 0 2.1-5.4V432c0-2.2-1.8-4-4-4z",
        },
      },
    ],
  })(e);
}
function ot(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2zM304 456a88 88 0 1 0 0-176 88 88 0 0 0 0 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z",
        },
      },
    ],
  })(e);
}
function lt(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 0 1-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 0 1-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 0 0-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z",
        },
      },
    ],
  })(e);
}
function nt(e) {
  return ye({
    tag: "svg",
    attr: { t: "1569683545621", viewBox: "0 0 1024 1024", version: "1.1" },
    child: [
      { tag: "defs", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M938.2 508.4L787.3 389c-3-2.4-7.3-0.2-7.3 3.6V478H636V184h204v128c0 2.2 1.8 4 4 4h60c2.2 0 4-1.8 4-4V144c0-15.5-12.5-28-28-28H596c-15.5 0-28 12.5-28 28v736c0 15.5 12.5 28 28 28h284c15.5 0 28-12.5 28-28V712c0-2.2-1.8-4-4-4h-60c-2.2 0-4 1.8-4 4v128H636V546h144v85.4c0 3.8 4.4 6 7.3 3.6l150.9-119.4c2.4-1.8 2.4-5.4 0-7.2zM428 116H144c-15.5 0-28 12.5-28 28v168c0 2.2 1.8 4 4 4h60c2.2 0 4-1.8 4-4V184h204v294H244v-85.4c0-3.8-4.3-6-7.3-3.6l-151 119.4c-2.3 1.8-2.3 5.3 0 7.1l151 119.5c2.9 2.3 7.3 0.2 7.3-3.6V546h144v294H184V712c0-2.2-1.8-4-4-4h-60c-2.2 0-4 1.8-4 4v168c0 15.5 12.5 28 28 28h284c15.5 0 28-12.5 28-28V144c0-15.5-12.5-28-28-28z",
        },
      },
    ],
  })(e);
}
function rt(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M952 474H569.9c-10-2-20.5-4-31.6-6-15.9-2.9-22.2-4.1-30.8-5.8-51.3-10-82.2-20-106.8-34.2-35.1-20.5-52.2-48.3-52.2-85.1 0-37 15.2-67.7 44-89 28.4-21 68.8-32.1 116.8-32.1 54.8 0 97.1 14.4 125.8 42.8 14.6 14.4 25.3 32.1 31.8 52.6 1.3 4.1 2.8 10 4.3 17.8.9 4.8 5.2 8.2 9.9 8.2h72.8c5.6 0 10.1-4.6 10.1-10.1v-1c-.7-6.8-1.3-12.1-2-16-7.3-43.5-28-81.7-59.7-110.3-44.4-40.5-109.7-61.8-188.7-61.8-72.3 0-137.4 18.1-183.3 50.9-25.6 18.4-45.4 41.2-58.6 67.7-13.5 27.1-20.3 58.4-20.3 92.9 0 29.5 5.7 54.5 17.3 76.5 8.3 15.7 19.6 29.5 34.1 42H72c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h433.2c2.1.4 3.9.8 5.9 1.2 30.9 6.2 49.5 10.4 66.6 15.2 23 6.5 40.6 13.3 55.2 21.5 35.8 20.2 53.3 49.2 53.3 89 0 35.3-15.5 66.8-43.6 88.8-30.5 23.9-75.6 36.4-130.5 36.4-43.7 0-80.7-8.5-110.2-25-29.1-16.3-49.1-39.8-59.7-69.5-.8-2.2-1.7-5.2-2.7-9-1.2-4.4-5.3-7.5-9.7-7.5h-79.7c-5.6 0-10.1 4.6-10.1 10.1v1c.2 2.3.4 4.2.6 5.7 6.5 48.8 30.3 88.8 70.7 118.8 47.1 34.8 113.4 53.2 191.8 53.2 84.2 0 154.8-19.8 204.2-57.3 25-18.9 44.2-42.2 57.1-69 13-27.1 19.7-57.9 19.7-91.5 0-31.8-5.8-58.4-17.8-81.4-5.8-11.2-13.1-21.5-21.8-30.8H952c4.4 0 8-3.6 8-8v-60a8 8 0 0 0-8-7.9z",
        },
      },
    ],
  })(e);
}
function it(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z",
        },
      },
    ],
  })(e);
}
function ct(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M824 804H200c-4.4 0-8 3.4-8 7.6v60.8c0 4.2 3.6 7.6 8 7.6h624c4.4 0 8-3.4 8-7.6v-60.8c0-4.2-3.6-7.6-8-7.6zm-312-76c69.4 0 134.6-27.1 183.8-76.2C745 602.7 772 537.4 772 468V156c0-6.6-5.4-12-12-12h-60c-6.6 0-12 5.4-12 12v312c0 97-79 176-176 176s-176-79-176-176V156c0-6.6-5.4-12-12-12h-60c-6.6 0-12 5.4-12 12v312c0 69.4 27.1 134.6 76.2 183.8C377.3 701 442.6 728 512 728z",
        },
      },
    ],
  })(e);
}
function at(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-.3 13 6.3 12.9l167-.8c5.2 0 9-4.9 7.7-9.9L369.8 727a8 8 0 0 0-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26a318.64 318.64 0 0 1-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 0 1-68.6 101.7c-7.5 7.5-15.3 14.5-23.4 21.2a7.93 7.93 0 0 0-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9z",
        },
      },
    ],
  })(e);
}
function st(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0z",
        },
      },
    ],
  })(e);
}
function dt(e) {
  return ye({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M960 509.2c0-2.2 0-4.7-.1-7.6-.1-8.1-.3-17.2-.5-26.9-.8-27.9-2.2-55.7-4.4-81.9-3-36.1-7.4-66.2-13.4-88.8a139.52 139.52 0 0 0-98.3-98.5c-28.3-7.6-83.7-12.3-161.7-15.2-37.1-1.4-76.8-2.3-116.5-2.8-13.9-.2-26.8-.3-38.4-.4h-29.4c-11.6.1-24.5.2-38.4.4-39.7.5-79.4 1.4-116.5 2.8-78 3-133.5 7.7-161.7 15.2A139.35 139.35 0 0 0 82.4 304C76.3 326.6 72 356.7 69 392.8c-2.2 26.2-3.6 54-4.4 81.9-.3 9.7-.4 18.8-.5 26.9 0 2.9-.1 5.4-.1 7.6v5.6c0 2.2 0 4.7.1 7.6.1 8.1.3 17.2.5 26.9.8 27.9 2.2 55.7 4.4 81.9 3 36.1 7.4 66.2 13.4 88.8 12.8 47.9 50.4 85.7 98.3 98.5 28.2 7.6 83.7 12.3 161.7 15.2 37.1 1.4 76.8 2.3 116.5 2.8 13.9.2 26.8.3 38.4.4h29.4c11.6-.1 24.5-.2 38.4-.4 39.7-.5 79.4-1.4 116.5-2.8 78-3 133.5-7.7 161.7-15.2 47.9-12.8 85.5-50.5 98.3-98.5 6.1-22.6 10.4-52.7 13.4-88.8 2.2-26.2 3.6-54 4.4-81.9.3-9.7.4-18.8.5-26.9 0-2.9.1-5.4.1-7.6v-5.6zm-72 5.2c0 2.1 0 4.4-.1 7.1-.1 7.8-.3 16.4-.5 25.7-.7 26.6-2.1 53.2-4.2 77.9-2.7 32.2-6.5 58.6-11.2 76.3-6.2 23.1-24.4 41.4-47.4 47.5-21 5.6-73.9 10.1-145.8 12.8-36.4 1.4-75.6 2.3-114.7 2.8-13.7.2-26.4.3-37.8.3h-28.6l-37.8-.3c-39.1-.5-78.2-1.4-114.7-2.8-71.9-2.8-124.9-7.2-145.8-12.8-23-6.2-41.2-24.4-47.4-47.5-4.7-17.7-8.5-44.1-11.2-76.3-2.1-24.7-3.4-51.3-4.2-77.9-.3-9.3-.4-18-.5-25.7 0-2.7-.1-5.1-.1-7.1v-4.8c0-2.1 0-4.4.1-7.1.1-7.8.3-16.4.5-25.7.7-26.6 2.1-53.2 4.2-77.9 2.7-32.2 6.5-58.6 11.2-76.3 6.2-23.1 24.4-41.4 47.4-47.5 21-5.6 73.9-10.1 145.8-12.8 36.4-1.4 75.6-2.3 114.7-2.8 13.7-.2 26.4-.3 37.8-.3h28.6l37.8.3c39.1.5 78.2 1.4 114.7 2.8 71.9 2.8 124.9 7.2 145.8 12.8 23 6.2 41.2 24.4 47.4 47.5 4.7 17.7 8.5 44.1 11.2 76.3 2.1 24.7 3.4 51.3 4.2 77.9.3 9.3.4 18 .5 25.7 0 2.7.1 5.1.1 7.1v4.8zM423 646l232-135-232-133z",
        },
      },
    ],
  })(e);
}
const ut = ({ editor: o, ...l }) => {
    const n = l?.bold?.replace;
    return n
      ? vo({ replace: n, onClick: () => t({ editor: o }) })
      : se.createElement(K, {
          title: "bold",
          "aria-label": "bold-button",
          variant: e({ editor: o, nodeOrMark: "bold" }) ? "solid" : "outline",
          onClick: () => t({ editor: o }),
          icon: se.createElement(We, {
            size: 20,
            ...l?.globalButtonProps?.iconstyles,
            ...l?.bold?.iconstyles,
          }),
          ...l?.globalButtonProps,
          ...l?.bold,
        });
  },
  vt = ({ editor: t, ...o }) => {
    const { video: l } = me(),
      n = o?.video?.replace;
    return n
      ? vo({ replace: n, onClick: () => l?.modalProps?.onOpen() })
      : se.createElement(K, {
          title: "video",
          "aria-label": "video-modal-button",
          variant: e({ editor: t, nodeOrMark: "video" }) ? "solid" : "outline",
          onClick: () => l?.modalProps?.onOpen(),
          icon: se.createElement(dt, {
            size: 20,
            ...o?.globalButtonProps?.iconstyles,
            ...o?.video?.iconstyles,
          }),
          ...o?.globalButtonProps,
          ...o?.video,
        });
  },
  ht = ({ editor: e, ...t }) => {
    const l = t?.clearformats?.replace;
    return l
      ? vo({ replace: l, onClick: () => o({ editor: e }) })
      : se.createElement(K, {
          title: "clear format",
          "aria-label": "clear-format-button",
          variant: "outline",
          onClick: () => o({ editor: e }),
          icon: se.createElement(we, {
            size: 20,
            ...t?.globalButtonProps?.iconstyles,
            ...t?.clearformats?.iconstyles,
          }),
          ...t?.globalButtonProps,
          ...t?.clearformats,
        });
  },
  gt = ({ editor: t, ...o }) => {
    const n = o?.blockquote?.replace;
    return n
      ? vo({ replace: n, onClick: () => l({ editor: t }) })
      : se.createElement(K, {
          title: "block quote",
          "aria-label": "blockquote-button",
          variant: e({ editor: t, nodeOrMark: "blockquote" })
            ? "solid"
            : "outline",
          onClick: () => l({ editor: t }),
          icon: se.createElement(xe, {
            size: 20,
            ...o?.globalButtonProps?.iconstyles,
            ...o?.blockquote?.iconstyles,
          }),
          ...o?.globalButtonProps,
          ...o?.blockquote,
        });
  },
  pt = ({ editor: t, ...o }) => {
    const l =
        e({ editor: t, nodeOrMark: "bulletList" }) ||
        e({ editor: t, nodeOrMark: "orderedList" }),
      n = o?.list?.replace,
      i = o?.bulletList?.replace,
      d = o?.list?.orderedList?.replace,
      u = o?.list?.sinkList?.replace,
      v = o?.list?.liftList?.replace,
      h = e({ editor: t, nodeOrMark: "bulletList" })
        ? se.createElement(st, {
            size: 20,
            ...o?.globalButtonProps?.iconstyles,
            ...o?.list?.iconstyles,
          })
        : se.createElement(tt, {
            size: 20,
            ...o?.globalButtonProps?.iconstyles,
            ...o?.list?.iconstyles,
          });
    return se.createElement(
      Q,
      null,
      n
        ? vo({ replace: n })
        : se.createElement(X, {
            title: "lists",
            as: K,
            icon: h,
            variant: l ? "solid" : "outline",
            ...o?.globalButtonProps,
            ...o?.list,
          }),
      se.createElement(
        Y,
        { minW: "4em" },
        se.createElement(
          Z,
          {
            as: "div",
            _focus: { bg: "none" },
            _hover: { bg: "none" },
            py: 0.5,
            px: 0,
          },
          i
            ? vo({ replace: i, onClick: () => a({ editor: t }) })
            : se.createElement(zt, {
                editor: t,
                bulletList: { ...o?.list?.bulletList, m: "auto" },
              })
        ),
        se.createElement(
          Z,
          {
            as: "div",
            _focus: { bg: "none" },
            _hover: { bg: "none" },
            py: 0.5,
            px: 0,
          },
          d
            ? vo({ replace: d, onClick: () => s({ editor: t }) })
            : se.createElement(ft, {
                editor: t,
                orderedList: { ...o?.list?.orderedList, m: "auto" },
              })
        ),
        se.createElement(
          Z,
          {
            as: "div",
            _focus: { bg: "none" },
            _hover: { bg: "none" },
            py: 0.5,
            px: 0,
          },
          u
            ? vo({ replace: u, onClick: () => r({ editor: t }) })
            : se.createElement(mt, {
                editor: t,
                sinkList: { ...o?.list?.sinkList, m: "auto" },
              })
        ),
        se.createElement(
          Z,
          {
            as: "div",
            _focus: { bg: "none" },
            _hover: { bg: "none" },
            py: 0.5,
            px: 0,
          },
          v
            ? vo({ replace: v, onClick: () => c({ editor: t }) })
            : se.createElement(bt, {
                editor: t,
                liftList: { ...o?.list?.liftList, m: "auto" },
              })
        )
      )
    );
  },
  mt = ({ editor: e, globalButtonProps: t, ...o }) => {
    const l = o?.sinkList?.replace;
    return l
      ? vo({ replace: l, onClick: () => r({ editor: e }) })
      : se.createElement(so, {
          title: "sink list",
          disabled: !n({ editor: e }),
          variant: n({ editor: e }) ? "solid" : "outline",
          onClick: () => r({ editor: e }),
          icon: se.createElement(Ie, {
            size: 20,
            ...t?.iconstyles,
            ...o?.sinkList?.iconstyles,
          }),
          "aria-label": "sink-list-button",
          ...t,
          ...o?.sinkList,
        });
  },
  bt = ({ editor: e, globalButtonProps: t, ...o }) => {
    const l = o?.liftList?.replace;
    return l
      ? vo({ replace: l, onClick: () => c({ editor: e }) })
      : se.createElement(uo, {
          title: "lift list",
          disabled: !i({ editor: e }),
          variant: i({ editor: e }) ? "solid" : "outline",
          onClick: () => c({ editor: e }),
          icon: se.createElement(je, {
            size: 20,
            ...t?.iconstyles,
            ...o?.liftList?.iconstyles,
          }),
          "aria-label": "lift-list-button",
          ...t,
          ...o?.liftList,
        });
  },
  zt = ({ editor: t, globalButtonProps: o, ...l }) => {
    const n = l?.bulletList?.replace;
    return n
      ? vo({ replace: n, onClick: () => a({ editor: t }) })
      : se.createElement(K, {
          title: "bullet list",
          variant: e({ editor: t, nodeOrMark: "bulletList" })
            ? "solid"
            : "outline",
          onClick: () => a({ editor: t }),
          icon: se.createElement(st, {
            size: 20,
            ...o?.iconstyles,
            ...l?.bulletList?.iconstyles,
          }),
          "aria-label": "bullet-list-button",
          ...o,
          ...l?.bulletList,
        });
  },
  ft = ({ editor: t, globalButtonProps: o, ...l }) => {
    const n = l?.orderedList?.replace;
    return n
      ? vo({ replace: n, onClick: () => a({ editor: t }) })
      : se.createElement(K, {
          title: "numbered list",
          variant: e({ editor: t, nodeOrMark: "orderedList" })
            ? "solid"
            : "outline",
          onClick: () => s({ editor: t }),
          icon: se.createElement(tt, {
            size: 20,
            ...o?.iconstyles,
            ...l?.orderedList?.iconstyles,
          }),
          "aria-label": "numbered-list-button",
          ...o,
          ...l?.orderedList,
        });
  },
  kt = ({ editor: t, ...o }) => {
    const [l, n] = de(!1),
      r = o?.linkInline?.replace;
    return r
      ? se.createElement(
          ee,
          { gap: 2 },
          vo({ replace: r, onClick: () => n(!l) }),
          se.createElement(ve, { editor: t, isVisible: l, SetIsVisible: n })
        )
      : se.createElement(
          ee,
          { gap: 2 },
          se.createElement(K, {
            title: "link",
            "aria-label": "link-toggler-button",
            variant: e({ editor: t, nodeOrMark: "link" }) ? "solid" : "outline",
            icon: se.createElement(Be, {
              size: 20,
              ...o?.globalButtonProps?.iconstyles,
              ...o?.linkInline?.iconstyles,
            }),
            onClick: () => n(!l),
            ...o?.globalButtonProps,
            ...o?.linkInline,
          }),
          se.createElement(ve, { editor: t, isVisible: l, SetIsVisible: n })
        );
  },
  Et = ({ editor: e, ...t }) => {
    const o = t?.heading?.replace;
    return o
      ? vo({
          replace: o,
          onChange: (t) => {
            d({ editor: e, level: t.currentTarget.value });
          },
        })
      : se.createElement(
          te,
          {
            title: "heading",
            w: "36",
            variant: "filled",
            colorScheme: "blue",
            onChange: (t) => d({ editor: e, level: t.target.value }),
            value: u({ editor: e }) || "paragraph",
            ...t?.globalButtonProps,
            ...t?.heading,
          },
          se.createElement("option", { value: "paragraph" }, "paragraph"),
          se.createElement("option", { value: 1 }, "Heading 1"),
          se.createElement("option", { value: 2 }, "Heading 2"),
          se.createElement("option", { value: 3 }, "Heading 3"),
          se.createElement("option", { value: 4 }, "Heading 4"),
          se.createElement("option", { value: 5 }, "Heading 5"),
          se.createElement("option", { value: 6 }, "Heading 6")
        );
  },
  yt = ({ editor: t, ...o }) => {
    const l = o?.youtube?.replace,
      { youtube: n } = me();
    return l
      ? vo({ replace: l, onClick: n?.modalProps?.onOpen })
      : se.createElement(K, {
          title: "youtube",
          "aria-label": "youtube-modal-button",
          variant: e({ editor: t, nodeOrMark: "youtube" })
            ? "solid"
            : "outline",
          onClick: n?.modalProps?.onOpen,
          icon: se.createElement(Ce, {
            size: 23,
            ...o?.globalButtonProps?.iconstyles,
            ...o?.youtube?.iconstyles,
          }),
          ...o?.globalButtonProps,
          ...o?.youtube,
        });
  },
  Ht = ({ editor: t, ...o }) => {
    const { image: l } = me(),
      n = o?.image?.replace;
    return n
      ? vo({ replace: n, onClick: () => l?.modalProps?.onOpen() })
      : se.createElement(K, {
          title: "image",
          "aria-label": "image-modal-button",
          variant: e({ editor: t, nodeOrMark: "image" }) ? "solid" : "outline",
          onClick: () => l?.modalProps?.onOpen(),
          icon: se.createElement(ot, {
            size: 20,
            ...o?.globalButtonProps?.iconstyles,
            ...o?.image?.iconstyles,
          }),
          ...o?.globalButtonProps,
          ...o?.image,
        });
  },
  Ct = ({ editor: t, ...o }) => {
    const { isOpen: l, onOpen: n, onClose: r } = oe(),
      i = o?.link?.replace;
    return i
      ? se.createElement(
          se.Fragment,
          null,
          vo({ replace: i, onClick: n }),
          se.createElement(he, { isOpen: l, onClose: r, editor: t })
        )
      : se.createElement(
          se.Fragment,
          null,
          se.createElement(K, {
            title: "link",
            "aria-label": "link-editor-button",
            variant: e({ editor: t, nodeOrMark: "link" }) ? "solid" : "outline",
            onClick: n,
            icon: se.createElement(Ae, {
              size: 20,
              ...o?.globalButtonProps?.iconstyles,
              ...o?.link?.iconstyles,
            }),
            ...o?.globalButtonProps,
            ...o?.link,
          }),
          se.createElement(he, { isOpen: l, onClose: r, editor: t })
        );
  },
  Mt = ({ editor: t, globalButtonProps: o, ...l }) => {
    const n = l?.clearLink?.replace;
    if (n) return vo({ replace: n, onClick: () => v({ editor: t }) });
    const r = se.createElement(Me, {
      size: 20,
      ...o?.iconstyles,
      ...l?.clearLink?.iconstyles,
    });
    return se.createElement(K, {
      title: "remove link",
      variant: e({ editor: t, nodeOrMark: "link" }) ? "solid" : "outline",
      icon: r,
      onClick: () => v({ editor: t }),
      "aria-label": "remove-url-button",
      ...o,
      ...l?.clearLink,
    });
  },
  Bt = ({ editor: t, ...o }) => {
    const l = o?.italic?.replace;
    return l
      ? vo({ replace: l, onClick: () => h({ editor: t }) })
      : se.createElement(K, {
          title: "italic",
          "aria-label": "italic-button",
          variant: e({ editor: t, nodeOrMark: "italic" }) ? "solid" : "outline",
          onClick: () => h({ editor: t }),
          icon: se.createElement(Ze, {
            size: 20,
            ...o?.globalButtonProps?.iconstyles,
            ...o?.italic?.iconstyles,
          }),
          ...o?.globalButtonProps,
          ...o?.italic,
        });
  },
  Vt = ({ editor: t, ...o }) => {
    const l = o?.strike?.replace;
    return l
      ? vo({ replace: l, onClick: () => g({ editor: t }) })
      : se.createElement(K, {
          title: "strike through",
          "aria-label": "strike-button",
          variant: e({ editor: t, nodeOrMark: "strike" }) ? "solid" : "outline",
          onClick: () => g({ editor: t }),
          icon: se.createElement(rt, {
            size: 20,
            ...o?.globalButtonProps?.iconstyles,
            ...o?.strike?.iconstyles,
          }),
          ...o?.globalButtonProps,
          ...o?.strike,
        });
  },
  wt = ({ editor: t, ...o }) => {
    const l = o?.underline?.replace;
    return l
      ? vo({ replace: l, onClick: () => p({ editor: t }) })
      : se.createElement(K, {
          title: "underline",
          "aria-label": "underline-button",
          variant: e({ editor: t, nodeOrMark: "underline" })
            ? "solid"
            : "outline",
          onClick: () => p({ editor: t }),
          icon: se.createElement(ct, {
            size: 20,
            ...o?.globalButtonProps?.iconstyles,
            ...o?.underline?.iconstyles,
          }),
          ...o?.globalButtonProps,
          ...o?.underline,
        });
  },
  xt = ({ editor: t, ...o }) => {
    const l = o?.codeBlock?.replace;
    return l
      ? vo({ replace: l, onClick: () => m({ editor: t }) })
      : se.createElement(K, {
          title: "code block",
          "aria-label": "codeBlock-button",
          variant: e({ editor: t, nodeOrMark: "codeBlockLowLight" })
            ? "solid"
            : "outline",
          onClick: () => m({ editor: t }),
          icon: se.createElement(Ne, {
            size: 20,
            ...o?.globalButtonProps?.iconstyles,
            ...o?.codeBlock?.iconstyles,
          }),
          ...o?.globalButtonProps,
          ...o?.codeBlock,
        });
  },
  Pt = ({ editor: e, ...t }) => {
    const o = t?.hardbreak?.replace;
    return o
      ? vo({ replace: o, onClick: () => b({ editor: e }) })
      : se.createElement(K, {
          title: "break line",
          "aria-label": "hardBreak-button",
          variant: "outline",
          onClick: () => b({ editor: e }),
          icon: se.createElement(_e, {
            size: 20,
            ...t?.globalButtonProps?.iconstyles,
            ...t?.hardbreak?.iconstyles,
          }),
          ...t?.globalButtonProps,
          ...t?.codeBlock,
        });
  },
  Lt = ({ editor: t, ...o }) => {
    const l = o?.subscript?.replace;
    return l
      ? vo({ replace: l, onClick: () => z({ editor: t }) })
      : se.createElement(K, {
          title: "subscript",
          "aria-label": "subscript-button",
          variant: e({ editor: t, nodeOrMark: "subscript" })
            ? "solid"
            : "outline",
          onClick: () => z({ editor: t }),
          icon: se.createElement(Le, {
            size: 20,
            ...o?.globalButtonProps?.iconstyles,
            ...o?.subscript?.iconstyles,
          }),
          ...o?.globalButtonProps,
          ...o?.subscript,
        });
  },
  Ot = ({ editor: t, ...o }) => {
    const l = o?.subscript?.replace;
    return l
      ? vo({ replace: l, onClick: () => f({ editor: t }) })
      : se.createElement(K, {
          title: "superscript",
          "aria-label": "superscript-button",
          variant: e({ editor: t, nodeOrMark: "superscript" })
            ? "solid"
            : "outline",
          onClick: () => f({ editor: t }),
          icon: se.createElement(Oe, {
            size: 20,
            ...o?.globalButtonProps?.iconstyles,
            ...o?.superscript?.iconstyles,
          }),
          ...o?.globalButtonProps,
          ...o?.superscript,
        });
  },
  _t = ({ editor: e, ...t }) => {
    const o = t?.fontcolor?.replace,
      l = t?.fontcolor?.colorList,
      n = [
        ["gray", "blue", "green", "red", "yellow"],
        [50, 100, 200, 300, 400, 500, 600, 700, 800],
      ],
      r = (t) => {
        const o = getComputedStyle(t.target).backgroundColor;
        G({ editor: e, color: o });
      };
    return se.createElement(
      Q,
      null,
      o
        ? vo({ replace: o })
        : se.createElement(X, {
            title: "text color",
            as: K,
            "aria-label": "font-color-picker",
            icon: se.createElement(Ge, {
              size: 20,
              color: k({ editor: e }),
              ...t?.globalButtonProps?.iconstyles,
              ...t?.fontcolor?.iconstyles,
            }),
            variant: "outline",
            ...t?.globalButtonProps,
            ...t?.fontcolor,
          }),
      se.createElement(
        Y,
        null,
        l &&
          l.map((e, t) =>
            se.createElement(
              Z,
              {
                as: "div",
                minW: "14em",
                key: t,
                py: 0.5,
                _focus: { bg: "none" },
                _hover: { bg: "none" },
              },
              se.createElement(
                ee,
                { w: "100%" },
                e.flatMap((e, t) =>
                  se.createElement(le, {
                    flex: 1,
                    key: t,
                    rounded: "none",
                    onClick: r,
                    bg: e,
                    _hover: { transform: "scale(1.1)" },
                    w: "7",
                    h: "7",
                  })
                )
              )
            )
          ),
        !l &&
          n[0].map((e, t) =>
            se.createElement(
              Z,
              {
                as: "div",
                minW: "14em",
                key: t,
                py: 0.5,
                _focus: { bg: "none" },
                _hover: { bg: "none" },
              },
              se.createElement(
                ee,
                { w: "100%" },
                n[1].map((t, o) =>
                  se.createElement(le, {
                    flex: 1,
                    key: o,
                    rounded: "none",
                    onClick: r,
                    bg: `${e}.${t}`,
                    _hover: { transform: "scale(1.1)" },
                    w: "7",
                    h: "7",
                  })
                )
              )
            )
          ),
        se.createElement(
          Z,
          {
            as: "div",
            py: 0.5,
            _focus: { bg: "none" },
            _hover: { bg: "none" },
          },
          se.createElement(
            ne,
            {
              variant: "outline",
              rounded: "full",
              w: "full",
              size: "sm",
              onClick: () => E({ editor: e }),
            },
            "unset color"
          )
        )
      )
    );
  },
  At = ({ editor: e, ...t }) => {
    const o = t?.highlightcolor?.replace,
      l = t?.highlightcolor?.colorList,
      n = [
        ["gray", "blue", "green", "red", "yellow"],
        [100, 200, 300, 400],
      ],
      r = (t) => {
        const o = getComputedStyle(t.target).backgroundColor;
        J({ editor: e, color: o });
      };
    return se.createElement(
      Q,
      null,
      o
        ? vo({ replace: o })
        : se.createElement(X, {
            title: "text highlight",
            as: K,
            "aria-label": "font-color-picker",
            icon: se.createElement(Je, {
              size: 20,
              color: y({ editor: e }),
              ...t?.globalButtonProps?.iconstyles,
              ...t?.highlightcolor?.iconstyles,
            }),
            variant: "outline",
            ...t?.globalButtonProps,
            ...t?.highlightcolor,
          }),
      se.createElement(
        Y,
        null,
        l &&
          l.map((e, t) =>
            se.createElement(
              Z,
              {
                as: "div",
                bg: "none",
                minW: "14em",
                key: t,
                py: 0.5,
                _focus: { bg: "none" },
                _hover: { bg: "none" },
              },
              se.createElement(
                ee,
                { w: "100%" },
                e.flatMap((e, t) =>
                  se.createElement(le, {
                    flex: 1,
                    key: t,
                    rounded: "none",
                    onClick: r,
                    bg: e,
                    _hover: { transform: "scale(1.1)" },
                    w: "7",
                    h: "7",
                  })
                )
              )
            )
          ),
        !l &&
          n[0].map((e, t) =>
            se.createElement(
              Z,
              {
                as: "div",
                bg: "none",
                minW: "14em",
                key: t,
                py: 0.5,
                _focus: { bg: "none" },
                _hover: { bg: "none" },
              },
              se.createElement(
                ee,
                { w: "100%" },
                n[1].map((t, o) =>
                  se.createElement(le, {
                    flex: 1,
                    key: o,
                    rounded: "none",
                    onClick: r,
                    bg: `${e}.${t}`,
                    _hover: { transform: "scale(1.1)" },
                    w: "7",
                    h: "7",
                  })
                )
              )
            )
          ),
        se.createElement(
          Z,
          {
            as: "div",
            bg: "none",
            py: 0.5,
            _focus: { bg: "none" },
            _hover: { bg: "none" },
          },
          se.createElement(
            ne,
            {
              variant: "outline",
              rounded: "full",
              w: "full",
              size: "sm",
              onClick: () => H({ editor: e }),
            },
            "unset highlight"
          )
        )
      )
    );
  },
  jt = ({ editor: t, ...o }) => {
    const l = o?.horizontalline?.replace;
    return l
      ? vo({ replace: l, onClick: () => C({ editor: t }) })
      : se.createElement(K, {
          title: "horizontal line",
          "aria-label": "horizontalLine-button",
          variant: e({ editor: t, nodeOrMark: "horizontalRule" })
            ? "solid"
            : "outline",
          onClick: () => C({ editor: t }),
          icon: se.createElement(Pe, {
            size: 20,
            ...o?.globalButtonProps?.iconstyles,
            ...o?.horizontalline?.iconstyles,
          }),
          ...o?.globalButtonProps,
          ...o?.horizontalline,
        });
  },
  It = ({ editor: e, ...t }) => {
    const o = t?.undo?.replace;
    return o
      ? vo({
          replace: o,
          onClick: () => M({ editor: e }),
          disabled: !B(e.can(), "undo").undo(),
        })
      : se.createElement(K, {
          title: "undo",
          "aria-label": "undo-button",
          disabled: !B(e.can(), "undo").undo(),
          variant: "outline",
          onClick: () => M({ editor: e }),
          icon: se.createElement(at, {
            size: 20,
            ...t?.globalButtonProps?.iconstyles,
            ...t?.undo?.iconstyles,
          }),
          ...t?.globalButtonProps,
          ...t?.undo,
        });
  },
  St = ({ editor: e, ...t }) => {
    const o = t?.redo?.replace;
    return o
      ? vo({
          replace: o,
          onClick: () => V({ editor: e }),
          disabled: !B(e.can(), "redo").redo(),
        })
      : se.createElement(K, {
          title: "redo",
          "aria-label": "redo-button",
          disabled: !B(e.can(), "redo").redo(),
          variant: "outline",
          onClick: () => V({ editor: e }),
          icon: se.createElement(lt, {
            size: 20,
            ...t?.globalButtonProps?.iconstyles,
            ...t?.redo?.iconstyles,
          }),
          ...t?.globalButtonProps,
          ...t?.redo,
        });
  },
  Rt = ({ editor: e, ...t }) => {
    const o = t?.clearcontents?.replace;
    return o
      ? vo({ replace: o, onClick: () => w({ editor: e }) })
      : se.createElement(K, {
          title: "clear contents",
          "aria-label": "horizontalLine-button",
          variant: "outline",
          onClick: () => w({ editor: e }),
          icon: se.createElement(qe, {
            size: 20,
            ...t?.globalButtonProps?.iconstyles,
            ...t?.clearcontents?.iconstyles,
          }),
          ...t?.globalButtonProps,
          ...t?.clearcontents,
        });
  },
  Tt = ({ editor: e, ...t }) => {
    const o = t?.fontfamily?.replace;
    let l = t?.fontfamily?.fonts;
    return (
      l || (l = ["Segoe UI", "monospace", "Verdana", "cursive"]),
      o
        ? vo({
            replace: o,
            onChange: (t) => {
              x({ editor: e, fontfamily: t.target.value });
            },
          })
        : se.createElement(
            te,
            {
              title: "font family",
              w: "36",
              variant: "filled",
              colorScheme: "blue",
              onChange: (t) => {
                x({ editor: e, fontfamily: t.target.value });
              },
              value: P({ editor: e }) || "sans-serif",
              ...t?.globalButtonProps,
              ...t?.fontfamily,
            },
            l.map((e, t) => se.createElement("option", { key: t, value: e }, e))
          )
    );
  },
  Wt = ({ editor: e, ...t }) => {
    const o = t?.textalign?.replace,
      l = t?.textalign?.leftAlign?.replace,
      n = t?.textalign?.rightAlign?.replace,
      r = t?.textalign?.centerAlign?.replace,
      i = t?.textalign?.justifyText?.replace,
      c =
        L({ editor: e, position: "left" }) ||
        L({ editor: e, position: "right" }) ||
        L({ editor: e, position: "center" }) ||
        L({ editor: e, position: "justify" }),
      a = O({ editor: e });
    var s = se.createElement(Re, {
      size: 20,
      ...t?.globalButtonProps?.iconstyles,
      ...t?.textalign?.iconstyles,
    });
    return (
      "right" === a
        ? (s = se.createElement(Te, {
            size: 20,
            ...t?.globalButtonProps?.iconstyles,
            ...t?.textalign?.leftAlign?.iconstyles,
          }))
        : "center" === a
        ? (s = se.createElement(Se, {
            size: 20,
            ...t?.globalButtonProps?.iconstyles,
            ...t?.textalign?.leftAlign?.iconstyles,
          }))
        : "justify" === a &&
          (s = se.createElement(Ve, {
            size: 20,
            ...t?.globalButtonProps?.iconstyles,
            ...t?.textalign?.leftAlign?.iconstyles,
          })),
      se.createElement(
        Q,
        null,
        o
          ? vo({ replace: o })
          : se.createElement(X, {
              title: "text align",
              as: K,
              icon: s,
              variant: c ? "solid" : "outline",
              ...t?.globalButtonProps,
              ...t?.textalign,
            }),
        se.createElement(
          Y,
          { minW: "4em" },
          se.createElement(
            Z,
            {
              as: "div",
              py: 0.5,
              px: 0,
              _focus: { bg: "none" },
              _hover: { bg: "none" },
            },
            l
              ? vo({
                  replace: l,
                  onClick: () => j({ editor: e, position: "left" }),
                })
              : se.createElement(Nt, {
                  editor: e,
                  leftAlign: { ...t?.textalign?.leftAlign, m: "auto" },
                  ...t?.textalign?.leftAlign,
                })
          ),
          se.createElement(
            Z,
            {
              as: "div",
              py: 0.5,
              px: 0,
              _focus: { bg: "none" },
              _hover: { bg: "none" },
            },
            n
              ? vo({
                  replace: n,
                  onClick: () => j({ editor: e, position: "right" }),
                })
              : se.createElement($t, {
                  editor: e,
                  rightAlign: { ...t?.textalign?.rightAlign, m: "auto" },
                  ...t?.textalign?.rightAlign,
                })
          ),
          se.createElement(
            Z,
            {
              as: "div",
              py: 0.5,
              px: 0,
              _focus: { bg: "none" },
              _hover: { bg: "none" },
            },
            r
              ? vo({
                  replace: r,
                  onClick: () => j({ editor: e, position: "center" }),
                })
              : se.createElement(Ft, {
                  editor: e,
                  centerAlign: { ...t?.textalign?.centerAlign, m: "auto" },
                  ...t?.textalign?.centerAlign,
                })
          ),
          se.createElement(
            Z,
            {
              as: "div",
              py: 0.5,
              px: 0,
              _focus: { bg: "none" },
              _hover: { bg: "none" },
            },
            i
              ? vo({
                  replace: i,
                  onClick: () => j({ editor: e, position: "justify" }),
                })
              : se.createElement(Ut, {
                  editor: e,
                  justifyText: { ...t?.textalign?.justifyText, m: "auto" },
                  ...t?.textalign?.justifyText,
                })
          )
        )
      )
    );
  },
  qt = ({ editor: e, ...t }) => {
    const o = t.fontsize?.replace,
      l = t.fontsize?.fontSizes ?? ["10", "12", "14", "16", "18", "20"];
    if (o)
      return vo({
        replace: o,
        onChange: (t) => A({ editor: e, fontSize: t.currentTarget.value }),
      });
    const n = _({ editor: e });
    return se.createElement(
      te,
      {
        title: "font size",
        w: "36",
        variant: "filled",
        colorScheme: "blue",
        onChange: (t) => A({ editor: e, fontSize: t.currentTarget.value }),
        value: n ?? "16",
        ...t?.globalButtonProps,
        ...t?.fontsize,
      },
      l.map((e, t) =>
        se.createElement("option", { key: t, value: e }, e, " px")
      )
    );
  },
  Nt = ({ editor: e, globalButtonProps: t, ...o }) => {
    const l = o?.leftAlign?.replace;
    if (l)
      return vo({
        replace: l,
        onClick: () => j({ editor: e, position: "left" }),
      });
    var n = se.createElement(Re, {
      size: 20,
      ...t?.iconstyles,
      ...o?.leftAlign?.iconstyles,
    });
    return se.createElement(ro, {
      title: "align left",
      onClick: () => j({ editor: e, position: "left" }),
      "aria-label": "left-align-button",
      icon: n,
      variant: L({ editor: e, position: "left" }) ? "solid" : "outline",
      ...t,
      ...o?.leftAlign,
    });
  },
  $t = ({ editor: e, globalButtonProps: t, ...o }) => {
    const l = o?.rightAlign?.replace;
    if (l)
      return vo({
        replace: l,
        onClick: () => j({ editor: e, position: "right" }),
      });
    var n = se.createElement(Te, {
      size: 20,
      ...t?.iconstyles,
      ...o?.leftAlign?.iconstyles,
    });
    return se.createElement(io, {
      title: "align right",
      onClick: () => j({ editor: e, position: "right" }),
      "aria-label": "right-align-button",
      icon: n,
      variant: L({ editor: e, position: "right" }) ? "solid" : "outline",
      ...t,
      ...o?.rightAlign,
    });
  },
  Ft = ({ editor: e, globalButtonProps: t, ...o }) => {
    const l = o?.centerAlign?.replace;
    if (l)
      return vo({
        replace: l,
        onClick: () => j({ editor: e, position: "center" }),
      });
    var n = se.createElement(Se, {
      size: 20,
      ...t?.iconstyles,
      ...o?.leftAlign?.iconstyles,
    });
    return se.createElement(co, {
      title: "align center",
      onClick: () => j({ editor: e, position: "center" }),
      "aria-label": "center-align-button",
      icon: n,
      variant: L({ editor: e, position: "center" }) ? "solid" : "outline",
      ...t,
      ...o?.centerAlign,
    });
  },
  Ut = ({ editor: e, globalButtonProps: t, ...o }) => {
    const l = o?.justifyText?.replace;
    if (l)
      return vo({
        replace: l,
        onClick: () => j({ editor: e, position: "justify" }),
      });
    var n = se.createElement(Ve, {
      size: 20,
      ...t?.iconstyles,
      ...o?.leftAlign?.iconstyles,
    });
    return se.createElement(K, {
      title: "justify",
      onClick: () => j({ editor: e, position: "justify" }),
      "aria-label": "justify-align-button",
      icon: n,
      variant: L({ editor: e, position: "justify" }) ? "solid" : "outline",
      ...t,
      ...o?.justifyText,
    });
  },
  Dt = ({ editor: e, ...t }) => {
    const [o, l] = de(!1),
      n = ue(null);
    re({
      ref: n,
      handler: () => {
        l(!1);
      },
    });
    const r = pe({
        columns: t?.table?.colsamount ?? 5,
        rows: t?.table?.rowsamount ?? 5,
      }),
      {
        matrix: { columns: i, rows: c },
        setWithHeader: a,
      } = r,
      s = t?.table?.replace;
    return se.createElement(
      Q,
      { isOpen: o },
      s
        ? vo({ replace: s })
        : se.createElement(X, {
            title: "table",
            as: K,
            variant: "outline",
            onClick: () => l(!o),
            icon: se.createElement(it, {
              size: 20,
              ...t?.globalButtonProps?.iconstyles,
              ...t?.table?.iconstyles,
            }),
            ...t?.globalButtonProps,
            ...t?.table,
          }),
      se.createElement(
        Y,
        { p: "8px", minW: "1em", ref: n },
        se.createElement(
          Z,
          {
            as: "div",
            display: "block",
            p: 0,
            _focus: { bg: "none" },
            _hover: { bg: "none" },
            cursor: "default",
          },
          se.createElement(
            ie,
            { justifyContent: "space-between", py: "1" },
            se.createElement(ce, { fontSize: "xs" }, "columns: ", i),
            se.createElement(ce, { fontSize: "xs" }, "Rows: ", c)
          ),
          se.createElement(ge, {
            editor: e,
            borderColor: t?.globalButtonProps?.color,
            bg: t?.globalButtonProps?.color,
            ...t?.table,
            ...r,
          }),
          se.createElement(
            ae,
            {
              py: "1",
              defaultChecked: !0,
              onChange: (e) => {
                a(e.target.checked);
              },
              colorScheme: "blue",
            },
            se.createElement(ce, { fontSize: "xs" }, "With Header")
          )
        )
      )
    );
  },
  Gt = ({ editor: t, globalButtonProps: o, ...l }) => {
    const n = l?.deleteTable?.replace;
    if (n) return vo({ replace: n, onClick: () => I({ editor: t }) });
    const r = se.createElement(Ue, {
      size: 20,
      ...o?.iconstyles,
      ...l?.deleteTable?.iconstyles,
    });
    return se.createElement(ao, {
      title: "delete table",
      icon: r,
      "aria-label": "delete-button",
      onClick: () => I({ editor: t }),
      variant: e({ editor: t, nodeOrMark: "table" }) ? "solid" : "outline",
      ...o,
      ...l?.deleteTable,
    });
  },
  Jt = ({ editor: t, globalButtonProps: o, ...l }) => {
    const n = l?.insertRowBelow?.replace;
    if (n) return vo({ replace: n, onClick: () => S({ editor: t }) });
    const r = se.createElement(Qe, {
      size: 20,
      ...o?.iconstyles,
      ...l?.insertRowBelow?.iconstyles,
    });
    return se.createElement(K, {
      title: "insert row below",
      icon: r,
      "aria-label": "insert-row-below-button",
      onClick: () => S({ editor: t }),
      variant: e({ editor: t, nodeOrMark: "table" }) ? "solid" : "outline",
      ...o,
      ...l?.insertRowBelow,
    });
  },
  Kt = ({ editor: t, globalButtonProps: o, ...l }) => {
    const n = l?.insertRowAbove?.replace;
    if (n) return vo({ replace: n, onClick: () => R({ editor: t }) });
    const r = se.createElement(Ke, {
      size: 20,
      ...o?.iconstyles,
      ...l?.insertRowAbove?.iconstyles,
    });
    return se.createElement(K, {
      title: "insert row above",
      icon: r,
      "aria-label": "insert-row-above-button",
      onClick: () => R({ editor: t }),
      variant: e({ editor: t, nodeOrMark: "table" }) ? "solid" : "outline",
      ...o,
      ...l?.insertRowAbove,
    });
  },
  Qt = ({ editor: t, globalButtonProps: o, ...l }) => {
    const n = l?.insertColumnRight?.replace;
    if (n) return vo({ replace: n, onClick: () => T({ editor: t }) });
    const r = se.createElement(Ye, {
      size: 20,
      ...o?.iconstyles,
      ...l?.insertColumnRight?.iconstyles,
    });
    return se.createElement(K, {
      title: "insert column right",
      icon: r,
      "aria-label": "insert-column-right-button",
      onClick: () => T({ editor: t }),
      variant: e({ editor: t, nodeOrMark: "table" }) ? "solid" : "outline",
      ...o,
      ...l?.insertColumnRight,
    });
  },
  Xt = ({ editor: t, globalButtonProps: o, ...l }) => {
    const n = l?.insertColumnLeft?.replace;
    if (n) return vo({ replace: n, onClick: () => W({ editor: t }) });
    const r = se.createElement(Xe, {
      size: 20,
      ...o?.iconstyles,
      ...l?.insertColumnLeft?.iconstyles,
    });
    return se.createElement(K, {
      title: "insert column left",
      icon: r,
      "aria-label": "insert-column-left-button",
      onClick: () => W({ editor: t }),
      variant: e({ editor: t, nodeOrMark: "table" }) ? "solid" : "outline",
      ...o,
      ...l?.insertColumnLeft,
    });
  },
  Yt = ({ editor: t, globalButtonProps: o, ...l }) => {
    const n = l?.deleteColumn?.replace;
    if (n) return vo({ replace: n, onClick: () => q({ editor: t }) });
    const r = se.createElement($e, {
      size: 20,
      ...o?.iconstyles,
      ...l?.deleteColumn?.iconstyles,
    });
    return se.createElement(K, {
      title: "delete column",
      icon: r,
      "aria-label": "delete-column-button",
      onClick: () => q({ editor: t }),
      variant: e({ editor: t, nodeOrMark: "table" }) ? "solid" : "outline",
      ...o,
      ...l?.deleteColumn,
    });
  },
  Zt = ({ editor: t, globalButtonProps: o, ...l }) => {
    const n = l?.deleteRow?.replace;
    if (n) return vo({ replace: n, onClick: () => N({ editor: t }) });
    const r = se.createElement(Fe, {
      size: 20,
      ...o?.iconstyles,
      ...l?.deleteRow?.iconstyles,
    });
    return se.createElement(K, {
      title: "delete row",
      icon: r,
      "aria-label": "delete-row-button",
      onClick: () => N({ editor: t }),
      variant: e({ editor: t, nodeOrMark: "table" }) ? "solid" : "outline",
      ...o,
      ...l?.deleteRow,
    });
  },
  eo = ({ editor: t, globalButtonProps: o, ...l }) => {
    const n = l?.mergeCells?.replace;
    if (n) return vo({ replace: n, onClick: () => $({ editor: t }) });
    const r = se.createElement(et, {
      size: 20,
      ...o?.iconstyles,
      ...l?.mergeCells?.iconstyles,
    });
    return se.createElement(K, {
      title: "merge cells",
      icon: r,
      "aria-label": "merge-cells-button",
      onClick: () => $({ editor: t }),
      variant: e({ editor: t, nodeOrMark: "table" }) ? "solid" : "outline",
      ...o,
      ...l?.mergeCells,
    });
  },
  to = ({ editor: t, globalButtonProps: o, ...l }) => {
    const n = l?.splitCell?.replace;
    if (n) return vo({ replace: n, onClick: () => F({ editor: t }) });
    const r = se.createElement(nt, {
      size: 20,
      ...o?.iconstyles,
      ...l?.splitCell?.iconstyles,
    });
    return se.createElement(K, {
      title: "split cells",
      icon: r,
      "aria-label": "split-cells-button",
      onClick: () => F({ editor: t }),
      variant: e({ editor: t, nodeOrMark: "table" }) ? "solid" : "outline",
      ...o,
      ...l?.splitCell,
    });
  },
  oo = ({ editor: t, ...o }) => {
    const l = o?.increaseIndent?.replace;
    return l
      ? vo({ replace: l, onClick: () => U({ editor: t }) })
      : se.createElement(K, {
          title: "increase Indent",
          "aria-label": "increase-indent-button",
          variant: e({ editor: t, nodeOrMark: "textIndent" })
            ? "solid"
            : "outline",
          onClick: () => U({ editor: t }),
          icon: se.createElement(Ie, {
            size: 20,
            ...o?.globalButtonProps?.iconstyles,
            ...o?.increaseIndent?.iconstyles,
          }),
          ...o?.globalButtonProps,
          ...o?.increaseIndent,
        });
  },
  lo = ({ editor: t, ...o }) => {
    const l = o?.decreaseIndent?.replace;
    return l
      ? vo({ replace: l, onClick: () => D({ editor: t }) })
      : se.createElement(K, {
          title: "declrease Indent",
          "aria-label": "declrease-indent-button",
          variant: e({ editor: t, nodeOrMark: "textIndent" })
            ? "solid"
            : "outline",
          onClick: () => D({ editor: t }),
          icon: se.createElement(je, {
            size: 20,
            ...o?.globalButtonProps?.iconstyles,
            ...o?.decreaseIndent?.iconstyles,
          }),
          ...o?.globalButtonProps,
          ...o?.decreaseIndent,
        });
  },
  no = (e) =>
    se.createElement(K, {
      "data-drag-handle": !0,
      icon: se.createElement(De, { size: 18 }),
      cursor: "move",
      "aria-label": "draggable-button",
      ...e,
    }),
  ro = (e) =>
    se.createElement(K, { icon: se.createElement(Re, { size: 20 }), ...e }),
  io = (e) =>
    se.createElement(K, { icon: se.createElement(Te, { size: 20 }), ...e }),
  co = (e) =>
    se.createElement(K, { icon: se.createElement(Se, { size: 20 }), ...e }),
  ao = (e) =>
    se.createElement(K, { icon: se.createElement(Ue, { size: 20 }), ...e }),
  so = (e) =>
    se.createElement(K, { icon: se.createElement(Ie, { size: 20 }), ...e }),
  uo = (e) =>
    se.createElement(K, { icon: se.createElement(je, { size: 20 }), ...e }),
  vo = ({ replace: e, ...t }) => se.createElement(ne, { ...t }, e);
export {
  gt as BlockQuoteButton,
  ut as BoldButton,
  zt as BulletListButton,
  Ft as CenterAlignButton,
  co as CenterAlignButtonStatic,
  Rt as ClearContentsButton,
  ht as ClearFormatsButton,
  Mt as ClearLinkButton,
  xt as CodeBlockButton,
  lo as DecreaseIndentButton,
  uo as DecreaseIndentButtonStatic,
  ao as DeleteButtonStatic,
  Yt as DeleteColumnButton,
  Zt as DeleteRowButton,
  Gt as DeleteTableButton,
  no as DraggableButtonStatic,
  _t as FontColorButton,
  Tt as FontFamilyButton,
  qt as FontSizeButton,
  Pt as HardBreakButton,
  Et as HeadingButton,
  At as HighlightColorButton,
  jt as HorizontalLineButton,
  Ht as ImageButton,
  oo as IncreaseIndentButton,
  so as IncreaseIndentButtonStatic,
  Xt as InsertColumnLeftButton,
  Qt as InsertColumnRightButton,
  Kt as InsertRowAboveButton,
  Jt as InsertRowBelowButton,
  Bt as ItalicButton,
  Ut as JustifyTextButton,
  Nt as LeftAlignButton,
  ro as LeftAlignButtonStatic,
  bt as LiftListButton,
  Ct as LinkButton,
  kt as LinkInlineButton,
  pt as ListButton,
  eo as MergeCellsButton,
  ft as NumberedListButton,
  St as RedoButton,
  $t as RightAlignButton,
  io as RightAlignButtonStatic,
  mt as SinkListButton,
  to as SplitCellButton,
  Vt as StrikeButton,
  Lt as SubscriptButton,
  Ot as SuperscriptButton,
  Dt as TableButton,
  Wt as TextAlignButton,
  wt as UnderlineButton,
  It as UndoButton,
  vt as VideoButton,
  yt as YoutubeButton,
};
//# sourceMappingURL=index.esm.js.map
