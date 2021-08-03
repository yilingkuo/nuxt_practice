export default function () {
  return {
    tileLayer: {
      openStreetMap: {
        path: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: 'Map data &copy; OpenStreetMap'
      },
      googleStreetMap: {
        path: 'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
        attribution: '',
        subDomains: ['mt0', 'mt1', 'mt2', 'mt3']
      },
      googleHybrid: {
        path: 'http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
        attribution: '',
        subDomains: ['mt0', 'mt1', 'mt2', 'mt3']
      },
      googleSat: {
        path: 'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
        attribution: '',
        subDomains: ['mt0', 'mt1', 'mt2', 'mt3']
      },
      googleTerrain: {
        path: 'http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
        attribution: '',
        subDomains: ['mt0', 'mt1', 'mt2', 'mt3']
      }
    },
    picked: 'openStreetMap'
  }
}
