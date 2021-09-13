<template>
  <main class="flex-1">
    	<section class="py-20 px-10 lg:px-20 h-full">
		<h1 class="text-3xl">Cảm ơn vì đã <span class="text-primary dark:text-shade">liên hệ</span>!</h1>
		<p class="mt-4">Tôi sẽ trả lời trong thời gian sớm nhất.</p>
	</section>
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
