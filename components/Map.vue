<template>
  <div id="map-wrap" style="height: 100vh">
    <client-only>
      <l-map :zoom="13" :center="[55.9464418,8.1277591]">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <l-marker :lat-lng="[55.9464418,8.1277591]" />
      </l-map>
    </client-only>
  </div>
</template>
<script>
import 'leaflet/dist/leaflet.css'
// import L from 'leaflet'
// https://github.com/schlunsen/nuxt-leaflet/issues/7
const isBrowser = typeof window !== 'undefined'
let L
if (isBrowser) {
  L = require('leaflet')
}
export default {
  name: 'Map',
  // components: {
  //   'l-map': L.map,
  //   'l-tile-layer': L.tileLayer,
  //   'l-marker': L.marker
  // },
  data () {
    return {
    }
  },

  computed: {
    // cardHeight () {
    //   return this.$q.screen.lt.md
    //     ? '332px'
    //     : '532px'
    // },

    tileLayer: {
      get () {
        return this.$store.state.baseMap.tileLayer
      },
      set (val) {
        this.$store.commit('baseMap/setTileLayer', val)
      }
    }
  },
  created () {
    // if (process.browser) {
    //   console.log(this.window.innerWidth)
    // }
    // this.$root.map = null
    // this.$root.tileLayer = null
    // this.$root.SESIlayer = []
    // this.$root.floodingSimulationLayer = []
    // this.$root.icdfStationMarkers = null
    // this.$root.histroy2016Marker = null
  },
  mounted () {
    // this.$nextTick(() => {
    //   setTimeout(this.initMap(), 500)
    // })
  },
  methods: {
    // async loadWearningData () {
    //   await this.$store.dispatch('floodingSimulation/loadWearningData')
    //   this.checkLoad = true
    //   // console.log(this.wearningData)
    // },
    initMap () {
      this.$root.map = L.map('map-wrap', {
        attributionControl: false
      }).setView([17.097270, -88.961466], 11)
      L.tileLayer(this.tileLayer.openStreetMap.path, {
        attribution: this.tileLayer.openStreetMap.attribution,
        maxZoom: 17
      }).addTo(this.$root.map)
      // this.$root.tileLayer.addTo(this.$root.map)
    }
  }
}
</script>
<style scoped>
#map-wrap {
  height: 180px;
}
</style>
