import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueCompositionAPI from '@vue/composition-api'
import router from './router'
const moment = require("moment");
import axios from 'axios'

Vue.use(require("vue-moment"), {
  moment,
});

Vue.use(VueCompositionAPI)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  created() {
    const member = JSON.parse(sessionStorage.getItem('member'))
    if (member) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${member.token}`;
      sessionStorage.setItem("member", JSON.stringify(member));
    }
  },
  render: h => h(App)
}).$mount('#app')
