<template>
  <section>
    <div class="flex flex-col items-center justify-center py-5">
      <h3 class="font-bold text-xl">Những gì tôi làm được</h3>
      <div class="h-1 bg-primary w-1/6 mt-2"></div>
    </div>

    <div
      class="bg-light w-full grid gap-8 px-20 py-10"
      :class="`grid-cols-3 grid-rows-${works.length % 2}`"
    >
      <form action="" method="get" class="py-4 col-span-3 flex">
        <input
          type="search"
          class="
            w-2/3
            bg-gray-200
            focus:bg-white
            rounded-md
            py-2
            px-4
            hover:border-primary
            focus:border-primary
            mr-2
          "
          placeholder="Tìm kiếm"
        />
      </form>
      <Card
        v-for="(w, index) in works"
        :key="index"
        :image="w.image"
        :tags="w.tags"
        :text="w.text"
        :title="w.title"
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
