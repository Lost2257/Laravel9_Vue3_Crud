import './bootstrap';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

Window.Swal = Swal;
const toast = Swal.mixin({
    toast:true,
    position:'top-end',
    showConfrimButton:false,
    timer:3000,
    timeProgressBar:true,
});
window.toast = toast;

import { createApp } from "vue";

import router from "./router";

import App from "./components/App.vue";

createApp(App).use(router).mount("#app")
