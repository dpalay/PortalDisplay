"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fs = __importStar(require("fs"));
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
var data;
data = data_1["default"].map(function (datum) {
    return {
        guid: datum.guid,
        title: datum.title,
        link: datum.link,
        image: datum.image,
        coordinates: {
            lat: +datum.coordinates.lat,
            lng: +datum.coordinates.lng
        }
    };
});
//init output
var output = {};
// sort the list to find the westernmost point
var sortedList = data.sort(function (a, b) { return Math.abs(b.coordinates.lng) - Math.abs(a.coordinates.lng); });
output.anchor = { title: sortedList[0].title, x: sortedList[0].coordinates.lng, y: sortedList[0].coordinates.lat };
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
// Add the portals to the output Portal List
output.portalList = __spreadArrays([output.anchor], portals);
output.betterPortalList =
    [
        { portal: output.anchor, linksFrom: [], linksTo: [] }
    ]
        .concat(portals.map((function (portal) { return { portal: portal, linksFrom: [], linksTo: [] }; })));
dbg(portals.map(function (portal) { return "from " + portal.title; }));
// Running tally of all possible links
var allLinks = [];
// add the links to the anchor to allLinks
allLinks = portals.map(function (portal) {
    return {
        source: { title: portal.title, x: portal.x, y: portal.y },
        dest: { title: anchor.title, x: anchor.coordinates.lng, y: anchor.coordinates.lat }
    };
});
output.allLinks = __spreadArrays(allLinks);
// all these links go TO the anchor
output.linksTo = [];
for (var index = 0; index < portals.length + 1; index++) {
    output.linksTo[index] = [];
}
output.linksTo[0] = __spreadArrays(allLinks);
output.betterPortalList[0].linksTo = __spreadArrays(allLinks);
// add each link to the linksFrom
output.linksFrom = [];
for (var index = 0; index < portals.length + 1; index++) {
    output.linksFrom[index] = [];
    //output.betterPortalList[index].linksFrom = [] // This should already be done when making betterPortalList
}
for (var index = 0; index < allLinks.length; index++) {
    var link = allLinks[index];
    output.linksFrom[index + 1] = __spreadArrays([link], output.linksFrom[index + 1]);
    output.betterPortalList[index + 1].linksFrom = __spreadArrays([link], output.betterPortalList[index + 1].linksFrom);
}
/*
portals:  [ A, b, c, d]
linksFrom:[[0],[1],[1],[1]]
linksTo:  [[86],[],[],[]]
*/
// Start with the 2nd highest sloped portal.  
// The highest slope is trivial.  It has 1 link TO the anchor
console.log("starting from the top, checking for links from each portal");
for (var sourcePortalIndex = 1; sourcePortalIndex < portals.length; sourcePortalIndex++) {
    //    links[i] = []
    var sourcePortal = portals[sourcePortalIndex];
    console.log("checking " + sourcePortal.title);
    var _loop_1 = function (destPortalIndex) {
        var destPortal = portals[destPortalIndex];
        var tmpLink = { source: sourcePortal, dest: destPortal };
        console.log("..against " + destPortal.title);
        var conflict = false;
        conflict = allLinks.some(function (link) { return intersect(link, tmpLink); });
        if (!conflict) {
            console.log("........No conflict found! Add link from " + sourcePortal.title + " to " + destPortal.title);
            allLinks.push(tmpLink);
            output.linksFrom[sourcePortalIndex + 1].push(tmpLink);
            output.linksTo[destPortalIndex + 1].push(tmpLink);
            output.betterPortalList[sourcePortalIndex + 1].linksFrom.push(tmpLink);
            output.betterPortalList[destPortalIndex + 1].linksTo.push(tmpLink);
        }
        else {
            console.log("........Conflict.  Can't link " + sourcePortal.title + " to " + destPortal.title);
        }
    };
    for (var destPortalIndex = 0; destPortalIndex < sourcePortalIndex; destPortalIndex++) {
        _loop_1(destPortalIndex);
    }
}
output.allLinks = __spreadArrays(allLinks);
//console.log(output)
fs.writeFileSync('./tmpoutput.json', JSON.stringify(output));
console.log(output.linksTo.map(function (x, i) { return output.portalList[i].title + "," + x.length; }));
output.linksFrom.forEach(function (links, i) {
    console.log(output.portalList[i].title);
    links.forEach(function (link, i) {
        console.log(".." + i + ": " + link.dest.title);
    });
});
//# sourceMappingURL=tmp.js.map