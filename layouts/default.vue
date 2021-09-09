<template>
  <div>
    <Header class="fixed top-0 w-screen sm:w-full z-10" />
    <Nuxt class="my-20 sm:my-22" />
    <Footer />
    <script>
      AOS.init()
    </script>
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
