import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

//1.Aşama create app
const app = createApp(App);

//2.Aşama implement router.
app.use(router);

//3.Aşama mount the app.
app.mount("#app");
