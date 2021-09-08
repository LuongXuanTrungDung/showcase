<template>
  <section>
    <div
      class="flex flex-col items-center justify-center py-10"
      data-aos="fade-down"
      data-aos-duration="1750"
    >
      <h3 class="font-bold text-xl">Từ quá khứ đến hiện tại</h3>
      <div class="h-1 bg-primary dark:bg-shade w-1/6 mt-2"></div>
    </div>
    <div v-for="(x, index) in exp" :key="index" class="flex px-20">
      <div
        class="flex-initials flex-col w-1/2 mr-4 py-20"
        data-aos="fade-right"
        data-aos-duration="1750"
      >
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
          <p
            v-for="(d, kindex) in x.desc"
            :key="kindex"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <i class="fas fa-circle text-xs text-primary mr-2"></i> {{ d }}
          </p>
        </div>
      </div>

      <div class="flex-initials flex mx-4 items-center">
        <div class="bg-light h-full w-1 mx-auto relative left-1/2"></div>
        <div
          class="
            rounded-full
            w-12
            h-12
            bg-primary
            dark:bg-shade
            flex
            justify-center
            items-center
            text-white
            z-1
          "
          data-aos="flip-up"
          data-aos-duration="1750"
        >
          {{ x.starting }}
        </div>
      </div>

      <div
        class="flex-initials w-1/2 ml-4 py-20"
        data-aos="fade-up"
        data-aos-duration="1750"
      >
        <div class="grid grid-cols-3 grid-rows-2 gap-4">
          <div v-for="(a, jndex) in x.actions" :key="jndex">
            <img
              :src="`memories/${a}`"
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
