<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import type { TargetElement } from "../types/NavbarTypes";

const hamIcon: Ref<any> = ref({});
const smallMenu: Ref<any> = ref({});
const toggleHamIcon = (e: MouseEvent) => {
  hamIcon.value.classList.toggle("opened");
  hamIcon.value.setAttribute(
    "aria-expanded",
    hamIcon.value.classList.contains("opened")
  );
  toggleSmallMenu(e);
};

const toggleSmallMenu = (e: MouseEvent) => {
  let element: TargetElement | null = e.target;
  if (element === null) return;
  else if (
    element.nodeName === "LI" ||
    element.nodeName === "A" ||
    element.nodeName === "svg" ||
    element.nodeName === "path"
  ) {
    smallMenu.value.classList.toggle("showSmallMenu");
  }
};
</script>

<template>
  <nav
    class="w-full py-3 px-10 md:px-20 flex justify-between items-center fixed top-0 left-0"
  >
    <img class="w-16" src="../assets/logo.png" alt="bit logo" />
    <menu class="md:flex text-white w-4/6 justify-between hidden">
      <li>
        <a href="#"
          ><font-awesome-icon :icon="['fas', 'house']" class="mr-2" />Home</a
        >
      </li>
      <li>
        <a href="#"
          ><font-awesome-icon :icon="['fas', 'message']" class="mr-2" />Our
          message
        </a>
      </li>
      <li>
        <a href="#"
          ><font-awesome-icon
            :icon="['fas', 'bars-progress']"
            class="mr-2"
          />Projects</a
        >
      </li>
      <li>
        <a href="#"
          ><font-awesome-icon
            :icon="['fas', 'face-grin-beam']"
            class="mr-2"
          />Customers</a
        >
      </li>
      <li>
        <a href="#"
          ><font-awesome-icon
            :icon="['fas', 'address-card']"
            class="mr-2"
          />About us</a
        >
      </li>
      <li>
        <a href="#"
          ><font-awesome-icon :icon="['fas', 'people-group']" class="mr-2" />Bit
          team</a
        >
      </li>
    </menu>
    <button
      class="flex menu md:hidden"
      ref="hamIcon"
      @click="toggleHamIcon"
      aria-label="Main Menu"
    >
      <svg width="45" height="45" viewBox="0 0 100 100">
        <path
          class="line line1"
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
        />
        <path class="line line2" d="M 20,50 H 80" />
        <path
          class="line line3"
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
        />
      </svg>
    </button>
    <menu
      ref="smallMenu"
      @click="toggleHamIcon"
      class="smallMenu absolute left-0 top-full pt-8 flex-col text-white w-full items-center h-screen"
    >
      <li class="py-6 w-9/12 text-center">
        <a href="#"
          ><font-awesome-icon :icon="['fas', 'house']" class="mr-2" />Home</a
        >
      </li>
      <li class="py-6 w-9/12 text-center">
        <a href="#"
          ><font-awesome-icon :icon="['fas', 'message']" class="mr-2" />Our
          message
        </a>
      </li>
      <li class="py-6 w-9/12 text-center">
        <a href="#"
          ><font-awesome-icon
            :icon="['fas', 'bars-progress']"
            class="mr-2"
          />Projects</a
        >
      </li>
      <li class="py-6 w-9/12 text-center">
        <a href="#"
          ><font-awesome-icon
            :icon="['fas', 'face-grin-beam']"
            class="mr-2"
          />Customers</a
        >
      </li>
      <li class="py-6 w-9/12 text-center">
        <a href="#"
          ><font-awesome-icon
            :icon="['fas', 'address-card']"
            class="mr-2"
          />About us</a
        >
      </li>
      <li class="py-6 w-9/12 text-center">
        <a href="#"
          ><font-awesome-icon :icon="['fas', 'people-group']" class="mr-2" />Bit
          team</a
        >
      </li>
    </menu>
  </nav>
</template>

<style scoped>
nav {
  background-color: #0a0e59;
}
.smallMenu {
  background-color: #010326;
  display: none;
}
.menu {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}
.line {
  fill: none;
  stroke: white;
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}

.showSmallMenu {
  display: flex;
}
</style>
