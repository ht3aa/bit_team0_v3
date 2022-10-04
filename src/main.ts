import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHome,
  faMessage,
  faBarsProgress,
  faAddressCard,
  faPeopleGroup,
  faFaceGrinBeam,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faHome,
  faMessage,
  faBarsProgress,
  faAddressCard,
  faPeopleGroup,
  faFaceGrinBeam
);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
