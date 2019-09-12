"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var DEBUG = false;
// Functions
var dbg = function (str) {
    if (DEBUG) {
        return console.log(str);
    }
};
var slope = function (anchor, point) {
    return (point.lat - anchor.lat) / (point.lng - anchor.lng);
};
function CCW(p1, p2, p3) {
    return (p3.y - p1.y) * (p2.x - p1.x) > (p2.y - p1.y) * (p3.x - p1.x);
}
var intersect = function (line1, line2) {
    dbg("Checking intersection between " + line1.source.title + " -> " + line1.dest.title + " and " + line2.source.title + " -> " + line2.dest.title);
    if (line1.dest.title == line2.dest.title || line1.dest.title == line2.source.title ||
        line1.source.title == line2.dest.title || line1.source.title == line2.source.title) {
        return false;
    }
    return (CCW(line1.source, line2.source, line2.dest) != CCW(line1.dest, line2.source, line2.dest)) && (CCW(line1.source, line1.dest, line2.source) != CCW(line1.source, line1.dest, line2.dest));
};
// Program start
var data_1 = __importDefault(require("./data"));
// sort the list to find the westernmost point
var sortedList = data_1["default"].sort(function (a, b) { return Math.abs(b.coordinates.lng) - Math.abs(a.coordinates.lng); });
// Set that portal as anchor and remove it from the list of portals
var anchor = sortedList.shift();
console.log("Using " + anchor.title + " as the Anchor!");
// Sort the rest of the portals by their slope from the anchor portal
var portals = sortedList.map(function (portal) {
    return { x: portal.coordinates.lng,
        y: portal.coordinates.lat,
        title: portal.title,
        slopeFromAnchor: slope(anchor.coordinates, portal.coordinates) };
}).sort(function (a, b) { return b.slopeFromAnchor - a.slopeFromAnchor; });
dbg(portals.map(function (portal) { return "from " + portal.title; }));
var allLinks = [];
var links = [];
links.push(portals.map(function (portal) {
    return {
        source: { title: portal.title, x: portal.x, y: portal.y },
        dest: { title: anchor.title, x: anchor.coordinates.lng, y: anchor.coordinates.lat }
    };
}));
allLinks = portals.map(function (portal) {
    return {
        source: { title: portal.title, x: portal.x, y: portal.y },
        dest: { title: anchor.title, x: anchor.coordinates.lng, y: anchor.coordinates.lat }
    };
});
console.log("starting from the top, checking for links from each portal");
var _loop_1 = function (i) {
    links[i] = [];
    var sourcePortal = portals[i];
    console.log("checking " + sourcePortal.title);
    var _loop_2 = function (destPortalIndex) {
        var destPortal = portals[destPortalIndex];
        var testedPassed = [];
        var testedFailed = [];
        console.log("..against " + destPortal.title);
        // loop through all the links from lower # portals and see if they intersect with this new link
        var conflict = false;
        var _loop_3 = function (j) {
            // start at 0 and go up to the portal we're checking as the destination
            var testPortal = portals[j];
            // find all links involving this portal
            var linksWithTest = allLinks.filter(function (link) { return (link.dest.title === testPortal.title || link.source.title == testPortal.title); });
            dbg("....found " + linksWithTest.length + " links with " + testPortal.title);
            linksWithTest.forEach(function (link) {
                dbg("......" + link.source.title + " -> " + link.dest.title);
            });
            conflict = linksWithTest.some(function (link) { return intersect(link, { source: sourcePortal, dest: destPortal }); });
        };
        for (var j = destPortalIndex; j < i; j++) // TODO:  Was j=0.  is this right?
         {
            _loop_3(j);
        }
        if (!conflict) {
            console.log("........No conflict found! Add link from " + sourcePortal.title + " to " + destPortal.title);
            allLinks.push({ source: sourcePortal, dest: destPortal });
            links[i].push({ source: sourcePortal, dest: destPortal });
        }
        else {
            console.log("........Conflict.  Can't link " + sourcePortal.title + " to " + destPortal.title);
        }
    };
    for (var destPortalIndex = 0; destPortalIndex < i; destPortalIndex++) {
        _loop_2(destPortalIndex);
    }
};
for (var i = 1; i < portals.length; i++) {
    _loop_1(i);
}
console.log(links);
