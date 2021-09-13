<template>
  <div class="flex flex-col h-screen">
    <Header class="fixed top-0 w-screen sm:w-full z-2" />
    <Nuxt class="my-16 sm:my-22" />
    <Footer />
    <script></script>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'default',
})
export default class DefaultLayout extends Vue {}
</script>

<style>
.dark-mode {
  @apply text-white bg-black;
}

.light-mode {
  @apply text-black bg-white;
}
</style>
