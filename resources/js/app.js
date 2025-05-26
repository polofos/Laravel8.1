import './bootstrap';

import vue from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

import {createApp} from 'vue';
import TestComponent from "./Components/TestComponent.vue";

const app = createApp({});

app.component("test-component", TestComponent);
app.mount('#app');
