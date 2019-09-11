import data from './data'


const slope = (anchor: {lat: number, lng: number}, point: {lat: number, lng: number}): number => 
(point.lat - anchor.lat)/(point.lng - anchor.lng)

let sortedList = data.sort((a,b) => Math.abs(b.coordinates.lng) - Math.abs(a.coordinates.lng))
let anchor = sortedList.shift() // removes the Anchor from the list of portals to check
console.log(`Using ${anchor.title} as the Anchor!`)
console.log(

    sortedList
    // calculates the slope and adds it to the portal
    .map((portal) => {  
        return {...portal, slopeFromAnchor: slope(anchor.coordinates, portal.coordinates)}
})
// sorts based on the slope
.sort((a,b) => a.slopeFromAnchor - b.slopeFromAnchor)

// extracts just the bits we want to see
.map(portal => `from ${portal.title}`)
);