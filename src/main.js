import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/styles/reset.scss";
import "@/assets/styles/global.scss";
import "@/assets/styles/dx-styles.scss";

createApp(App).use(store).use(router).mount("#app");
