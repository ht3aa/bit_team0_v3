<script setup lang="ts"></script>
<template>
  <header class="w-full py-32 px-10 flex">
    <section class="w-1/2 text-white pr-12">
      <h1 class="text-6xl font-bold">From idea to Project</h1>
      <h4 class="text-xl py-7">
        In Bit, we have all you need to make your idea comes true. (For now,
        logo design, programming solutions and building full-stack websites are
        available)
      </h4>
      <div class="grid grid-cols-2 gap-5 pr-20">
        <button class="py-4 rounded">instagram</button>
        <button class="py-4 rounded">instagram</button>
        <button class="py-4 rounded">instagram</button>
        <button class="py-4 rounded">instagram</button>
      </div>
    </section>
    <section class="w-1/2 girdElement gap-5">
      <div class="relative backdrop-blur-lg flex items-center justify-center">
        11
        <div
          class="absolute circle w-20 h-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
        ></div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
  </header>
</template>

<style scoped>
.girdElement {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.girdElement div {
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
</style>
