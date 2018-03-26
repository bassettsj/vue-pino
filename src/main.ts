import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import log from './log';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.config.errorHandler = (err, vm, info) => {
  log.error(err, info);
};

Vue.config.warnHandler = (msg, vm, trace) => {
  log.warn(msg, trace);
};

window.onerror = (msg, source, lineno, colno, error) => {
  if (error instanceof Error) {
    log.error(error);
  } else {
    log.error(msg);
  }
};


new Vue({
  beforeCreate() {
    log.info('created', arguments);
  },
  beforeUpdate() {
    log.info('updated');
  },
  router,
  store,
  render: (h) => {
    log.info('render', h);
    return h(App);
  }
}).$mount('#app');
