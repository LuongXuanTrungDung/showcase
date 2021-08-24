<template>
  <div class="h-full flex flex-col">
    <Header class="flex-initials h-16" />
    <Nuxt class="flex-initials" />
    <Footer class="flex-initials h-16" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'default',
})
export default class HomeLayout extends Vue {}
</script>
