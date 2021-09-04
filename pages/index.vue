<template>
  <main>
    <Banner class="mt-22 py-10" />
    <About id="gioi-thieu" class="py-10" />
    <Works id="san-pham" class="py-10" />
    <Contact id="lien-he" class="px-20 py-10" />
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  layout: 'default',
  head: {
    title: 'Trang chủ',
  },
})
export default class IndexPage extends Vue {}
</script>
