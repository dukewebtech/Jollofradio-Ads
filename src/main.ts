// styles
import 'virtual:windi.css';
import './assets/css/styles.css';
import './assets/css/input.css';

// libs
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { router } from './core/router';

const pinia = createPinia();

const JollofRadioAdsApp = createApp(App);
JollofRadioAdsApp.use(pinia);
JollofRadioAdsApp.use(router);
JollofRadioAdsApp.mount('#app');
