import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import userStore from "./userStore"
import mediaStore from './mediaStore';
import adpositionStore from './adpositionStore';
import commonStore from './commonStore';
import financeStore from './financeStore';
export default new Vuex.Store({
  modules: {
    media: mediaStore,
    adposition: adpositionStore,
    user: userStore,
    common: commonStore,
    finance: financeStore
  }
});
