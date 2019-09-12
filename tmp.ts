type MaxLinkPortal = {
    "guid": string;
    "title": string;
    "coordinates": Coords
    "link": {
        "intel": string;
        "gmap": string;
    };
    "image": string;
}
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
    slopeFromAnchor: number
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
import data from './data';

// sort the list to find the westernmost point
let sortedList = data.sort((a,b) => Math.abs(b.coordinates.lng) - Math.abs(a.coordinates.lng))

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

dbg(portals.map(portal => `from ${portal.title}`));

let allLinks: Link[] = []
let links: Link[][] = []
links.push(portals.map((portal: ShortPortal):Link =>{
    return {
        source: {title: portal.title, x: portal.x, y: portal.y},
        dest: {title: anchor.title, x: anchor.coordinates.lng, y: anchor.coordinates.lat}
    }
}))
allLinks = portals.map((portal: ShortPortal):Link =>{
    return {
        source: {title: portal.title, x: portal.x, y: portal.y},
        dest: {title: anchor.title, x: anchor.coordinates.lng, y: anchor.coordinates.lat}
    }
})

console.log(`starting from the top, checking for links from each portal`)
for (let i = 1; i < portals.length; i++) {
    links[i] = []
    const sourcePortal = portals[i];    
    console.log(`checking ${sourcePortal.title}`)
    for (let destPortalIndex = 0; destPortalIndex < i; destPortalIndex++){
        const destPortal = portals[destPortalIndex]
        let testedPassed: number[] = []
        let testedFailed: number[] = []
        console.log(`..against ${destPortal.title}`)
        // loop through all the links from lower # portals and see if they intersect with this new link
        let conflict = false;
        for (let j=destPortalIndex; j<i; j++) // TODO:  Was j=0.  is this right?
        {
            // start at 0 and go up to the portal we're checking as the destination
            const testPortal = portals[j];
            // find all links involving this portal
            let linksWithTest = allLinks.filter((link) => (link.dest.title === testPortal.title || link.source.title == testPortal.title))
            dbg(`....found ${linksWithTest.length} links with ${testPortal.title}`)
            linksWithTest.forEach(link => { 
                dbg(`......${link.source.title} -> ${link.dest.title}`)                
            });
            conflict = linksWithTest.some((link) => intersect(link,{source: sourcePortal, dest: destPortal} ))
            
        }
        if (!conflict){
            console.log(`........No conflict found! Add link from ${sourcePortal.title} to ${destPortal.title}`)
            allLinks.push({source: sourcePortal, dest: destPortal});
            links[i].push({source: sourcePortal, dest: destPortal})
        }
        else {
            console.log(`........Conflict.  Can't link ${sourcePortal.title} to ${destPortal.title}`)
        }

        
    }    
}

console.log(links)
