import './bootstrap';

import vue from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

import {createApp} from 'vue'
    createApp({
        data() {
            return {
                message: 'Hello Petronilo!'
            }
        }
    }).mount('#app');
