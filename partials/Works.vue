<template>
  <section>
    <div class="flex flex-col items-center justify-center py-5">
      <h3 class="font-bold text-xl text-center">Những gì tôi làm được</h3>
      <div class="h-1 bg-primary dark:bg-shade w-1/6 mt-2"></div>
    </div>

    <div
      class="w-full lg:grid lg:gap-8 px-10 lg:px-20 py-5 lg:py-10 flex flex-col"
      :class="`lg:grid-cols-3 lg:grid-rows-${works.length % 2}`"
    >
      <Card
        v-for="(w, index) in works"
        :key="index"
        :image="w.image"
        :tags="w.tags"
        :text="w.text"
        :title="w.title"
        class="lg:my-0 my-4"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import data from '@/static/data/works.json'

@Component
export default class Works extends Vue {
  works = data
}
</script>
