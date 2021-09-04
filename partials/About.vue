<template>
  <section>
    <div class="flex flex-col items-center justify-center pt-10 pb-5">
      <h3 class="font-bold text-xl">Từ quá khứ đến hiện tại</h3>
      <div class="h-1 bg-primary w-1/6 mt-2"></div>
    </div>
    <div
      v-for="(x, index) in exp"
      :key="index"
      class="flex px-20 py-10 bg-light"
    >
      <div class="flex-initials flex mr-4 bg-primary rounded-t-full">
        <div
          class="
            rounded-full
            w-12
            h-12
            bg-complement
            flex
            justify-center
            items-center
            text-white
          "
        >
          {{ x.starting }}
        </div>
      </div>
      <div class="flex-initials flex-col mx-4 w-1/2">
        <div class="flex flex-initials mb-2">
          <div class="flex-initials mr-2">
            <h1 class="text-xl font-bold">{{ x.title }}</h1>
            <small>{{ x.subtitle }}</small>
          </div>
          <img
            :src="`partners/${x.partner}`"
            class="flex-initials h-16 filter grayscale ml-2"
          />
        </div>
        <div class="flex-initials mt-2">
          <p v-for="(d, kindex) in x.desc" :key="kindex">{{ d }}</p>
        </div>
      </div>
      <div class="flex-initials w-1/2 ml-4">
        <div class="grid grid-cols-3 grid-rows-2 gap-4">
          <div v-for="(a, jndex) in x.actions" :key="jndex">
            <img
              :src="`actions/${a}`"
              class="w-full h-full rounded-md shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import data from '@/static/data/experience.json'

@Component
export default class About extends Vue {
  exp = data
}
</script>
