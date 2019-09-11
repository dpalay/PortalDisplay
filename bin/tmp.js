"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var data_1 = __importDefault(require("./data"));
var slope = function (anchor, point) {
    return (point.lat - anchor.lat) / (point.lng - anchor.lng);
};
var sortedList = data_1["default"].sort(function (a, b) { return Math.abs(b.coordinates.lng) - Math.abs(a.coordinates.lng); });
var anchor = sortedList.shift(); // removes the Anchor from the list of portals to check
console.log("Using " + anchor.title + " as the Anchor!");
console.log(sortedList
    // calculates the slope and adds it to the portal
    .map(function (portal) {
    return __assign(__assign({}, portal), { slopeFromAnchor: slope(anchor.coordinates, portal.coordinates) });
})
    // sorts based on the slope
    .sort(function (a, b) { return a.slopeFromAnchor - b.slopeFromAnchor; })
    // extracts just the bits we want to see
    .map(function (portal) { return "from " + portal.title; }));
