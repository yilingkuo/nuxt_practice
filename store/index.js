import Vue from 'vue'
import Vuex from 'vuex'
import baseMap from './baseMap'
// import menuTab from './menuTab'
// import floodingSimulation from './floodingSimulation'
// import monitoringStations from './monitoringStations'
// import addLayer from './addLayer'
// import alert from './alert'
// import accountSettings from './accountSettings'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      baseMap
      // menuTab,
      // floodingSimulation,
      // monitoringStations,
      // addLayer,
      // alert,
      // accountSettings
    },
    strict: process.env.DEV
  })

  return Store
}
