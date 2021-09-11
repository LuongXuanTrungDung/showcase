<template>
  <main>
    <Banner class="py-20" />
    <About id="gioi-thieu" class="py-20" />
    <Works id="san-pham" class="py-20" />
    <Contact id="lien-he" class="py-20 px-10 lg:px-20" />
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
