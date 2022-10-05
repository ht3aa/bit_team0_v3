<script setup lang="ts">
import { statisticsBoxesData } from "@/data/data";
</script>
<template>
  <header class="w-full py-32 px-10 flex md:flex-row flex-col">
    <section
      class="w-full md:w-1/2 text-white text-center mb-16 md:mb-0 md:pr-12 md:pt-8 md:text-start"
    >
      <h1 class="text-5xl font-bold">From idea to Project</h1>
      <h4 class="text-xl py-7">
        In Bit, we have all you need to make your idea comes true. (For now,
        logo design, programming solutions and building full-stack websites are
        available)
      </h4>
      <div class="grid grid-cols-2 gap-2 sm:w-full md:w-8/12 md:mx-0 mx-auto">
        <button class="py-4 rounded text-lg">
          <a href="https://instagram.com/bit_team0?igshid=YmMyMTA2M2Y="
            >Instagram</a
          >
        </button>
        <button class="py-4 rounded text-lg">
          <a href="https://t.me/bit_team00">Telegram</a>
        </button>
        <button class="py-4 rounded text-lg">
          <a href="mailto:bitforservices@gmail.com">Email</a>
        </button>
        <button class="py-4 rounded text-lg">
          <a href="tel:+9647708246418">Phone</a>
        </button>
      </div>
    </section>
    <section class="w-full md:w-1/2 girdElement">
      <div
        v-for="box in statisticsBoxesData.boxesData"
        :key="box.id"
        class="relative backdrop-blur-lg flex items-center justify-center flex-col text-white"
      >
        <p class="text-4xl font-bold">{{ box.number }}</p>
        <p class="text-lg">{{ box.name }}</p>
        <div
          class="absolute circle w-20 h-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
        ></div>
      </div>
    </section>
  </header>
</template>

<style scoped>
header {
  font-family: Rubik;
}
.girdElement {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.girdElement > div {
  height: 200px;
  background: linear-gradient(
    143.41deg,
    rgba(115, 59, 242, 0.33) 22.86%,
    rgba(115, 59, 242, 0.16) 80.85%
  );
}

.girdElement div .circle {
  background-color: #733bf2;
  filter: blur(20px);
}

button {
  background-color: transparent;
  border: 2px solid #733bf2;
}
</style>
