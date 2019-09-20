import * as fs from 'fs';
type Coords =
{
    lat: number
    lng: number
}
type ShortPortal = 
{
    title: string
    x: number
    y: number
}
type Portal = 
{
    title: string
    x: number
    y: number
    slopeFromAnchor?: number
}
type Link = 
{
    source: ShortPortal
    dest: ShortPortal
}

const DEBUG = false;


// Functions
const dbg = (str: any) => { 
    if (DEBUG)
     {return console.log(str)}
    }
const slope = (anchor: Coords, point: Coords): number => 
(point.lat - anchor.lat)/(point.lng - anchor.lng)


function CCW(p1:ShortPortal, p2: ShortPortal, p3: ShortPortal): boolean {
    return (p3.y - p1.y) * (p2.x - p1.x) > (p2.y - p1.y) * (p3.x - p1.x);
}

const intersect = (line1: Link, line2: Link): boolean => {
    dbg(`Checking intersection between ${line1.source.title} -> ${line1.dest.title} and ${line2.source.title} -> ${line2.dest.title}`)
    if (line1.dest.title == line2.dest.title || line1.dest.title == line2.source.title ||
        line1.source.title == line2.dest.title || line1.source.title == line2.source.title ){
            return false
        }
    return (CCW(line1.source, line2.source, line2.dest) != CCW(line1.dest, line2.source, line2.dest)) && (CCW(line1.source, line1.dest, line2.source) != CCW(line1.source, line1.dest, line2.dest));
}

// Program start
import strData  from './data';
let data: {
    "guid": string;
    "title": string;
    "coordinates": {
        "lat": number;
        "lng": number;
    };
    "link": {
        "intel": string;
        "gmap": string;
    };
    "image": string;}[]

    
    data = strData.map(datum => { return {
        guid: datum.guid,
        title: datum.title, 
        link: datum.link, 
        image: datum.image,
        coordinates: {
            lat: +datum.coordinates.lat,
            lng: +datum.coordinates.lng
        }
    }})

//init output
let output: {
    anchor?: Portal
    portalList?: Portal[]
    linksFrom?: Array<Link[]>
    linksTo?: Array<Link[]>
    allLinks?: Array<Link>
    betterPortalList? : {portal: Portal, linksFrom: Link[], linksTo: Link[]}[]
} = {}

// sort the list to find the westernmost point
let sortedList = data.sort((a,b) => Math.abs(b.coordinates.lng) - Math.abs(a.coordinates.lng))




output.anchor = {title: sortedList[0].title, x: sortedList[0].coordinates.lng, y: sortedList[0].coordinates.lat }

// Set that portal as anchor and remove it from the list of portals
let anchor = sortedList.shift() 
console.log(`Using ${anchor.title} as the Anchor!`)


// Sort the rest of the portals by their slope from the anchor portal
let portals: Portal[] = sortedList.map(
    (portal) => {  
        return {x: portal.coordinates.lng
              , y: portal.coordinates.lat
              , title: portal.title
              , slopeFromAnchor: slope(anchor.coordinates, portal.coordinates)}
}).sort((a,b) => b.slopeFromAnchor - a.slopeFromAnchor)


// Add the portals to the output Portal List
output.portalList = [output.anchor, ...portals]

output.betterPortalList = 
[
    {portal: output.anchor, linksFrom: [] as Link[], linksTo: [] as Link[]}]
    .concat(portals.map(
        (portal => {return {portal: portal, linksFrom: [] as Link[], linksTo: [] as Link[]}})
        ))


dbg(portals.map(portal => `from ${portal.title}`));


// Running tally of all possible links
let allLinks: Link[] = []

// add the links to the anchor to allLinks
allLinks = portals.map((portal: ShortPortal):Link =>{
    return {
        source: {title: portal.title, x: portal.x, y: portal.y},
        dest: {title: anchor.title, x: anchor.coordinates.lng, y: anchor.coordinates.lat}
    }
})
output.allLinks = [...allLinks]

// all these links go TO the anchor
output.linksTo = []
for (let index = 0; index < portals.length+1; index++) {
    output.linksTo[index] = [];  
}
output.linksTo[0] = [...allLinks]
output.betterPortalList[0].linksTo = [...allLinks]

// add each link to the linksFrom
output.linksFrom = []
for (let index = 0; index < portals.length+1; index++) {
    output.linksFrom[index] = [];  
    //output.betterPortalList[index].linksFrom = [] // This should already be done when making betterPortalList
}

for (let index = 0; index < allLinks.length; index++) {
    const link = allLinks[index];
    output.linksFrom[index+1] = [link,...output.linksFrom[index+1]]
    output.betterPortalList[index+1].linksFrom = [link, ...output.betterPortalList[index+1].linksFrom]
}

/*
portals:  [ A, b, c, d]
linksFrom:[[0],[1],[1],[1]]
linksTo:  [[86],[],[],[]]
*/


// Start with the 2nd highest sloped portal.  
// The highest slope is trivial.  It has 1 link TO the anchor
console.log(`starting from the top, checking for links from each portal`)
for (let sourcePortalIndex = 1; sourcePortalIndex < portals.length; sourcePortalIndex++) {
//    links[i] = []
    const sourcePortal = portals[sourcePortalIndex];    
    console.log(`checking ${sourcePortal.title}`)
    for (let destPortalIndex = 0; destPortalIndex < sourcePortalIndex; destPortalIndex++){
        const destPortal = portals[destPortalIndex]
        const tmpLink = {source: sourcePortal, dest: destPortal}
        console.log(`..against ${destPortal.title}`)
        let conflict = false;
        conflict = allLinks.some((link) => intersect(link, tmpLink))
        if (!conflict){
            console.log(`........No conflict found! Add link from ${sourcePortal.title} to ${destPortal.title}`)
            allLinks.push(tmpLink);
            output.linksFrom[sourcePortalIndex+1].push(tmpLink)
            output.linksTo[destPortalIndex+1].push(tmpLink)
            output.betterPortalList[sourcePortalIndex+1].linksFrom.push(tmpLink)
            output.betterPortalList[destPortalIndex+1].linksTo.push(tmpLink)
        }
        else {
            console.log(`........Conflict.  Can't link ${sourcePortal.title} to ${destPortal.title}`)
        }

        
    }    
}
output.allLinks = [...allLinks]

//console.log(output)
fs.writeFileSync('./tmpoutput.json',JSON.stringify(output))

console.log(output.linksTo.map((x,i) => `${output.portalList[i].title},${x.length}`))
output.linksFrom.forEach((links, i) => {
    console.log(output.portalList[i].title)
    links.forEach((link, i) => {
        console.log(`..${i}: ${link.dest.title}`)
    })
})