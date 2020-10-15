const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}


// create map
const map = L.map('mapid', options).setView([-30.0779192, -51.2069301, 11.88], 15);

// create and tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]

})


// create and add marker

L
.marker([-30.0779192, -51.2069301, 11.88], { icon })
.addTo(map)

