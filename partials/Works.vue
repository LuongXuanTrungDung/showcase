<template>
  <section>
    <div
      class="flex flex-col items-center justify-center py-5"
      data-aos="fade-down"
      data-aos-duration="1750"
    >
      <h3 class="font-bold text-xl">Những gì tôi làm được</h3>
      <div class="h-1 bg-primary dark:bg-shade w-1/6 mt-2"></div>
    </div>

    <div
      class="w-full grid gap-8 px-20 py-10"
      :class="`grid-cols-3 grid-rows-${works.length % 2}`"
    >
      <Card
        v-for="(w, index) in works"
        :key="index"
        :image="w.image"
        :tags="w.tags"
        :text="w.text"
        :title="w.title"
        data-aos="fade-up"
        data-aos-duration="2000"
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
