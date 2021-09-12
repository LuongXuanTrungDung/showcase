<template>
  <section>
    <div class="flex flex-col items-center justify-center py-5 md:py-10">
      <h3 class="font-bold text-xl">Từ quá khứ đến hiện tại</h3>
      <div class="h-1 bg-primary dark:bg-shade w-1/6 mt-2"></div>
    </div>
    <div class="flex flex-col lg:px-20 px-10">
      <div
        v-for="(x, index) in exp"
        :key="index"
        class="
          flex flex-initals flex-col
          lg:flex-row
          border-b-2 border-light
          sm:border-none
        "
      >
        <div class="flex-initials flex lg:mr-4 py-5 lg:py-0 items-center">
          <div
            class="
              hidden
              lg:block
              bg-light
              h-1
              w-full
              lg:h-full
              lg:w-1
              relative
              left-1/2
            "
          ></div>
          <div
            class="
              rounded-full
              w-16
              p-4
              h-16
              mx-auto
              bg-primary
              dark:bg-shade
              flex
              justify-center
              items-center
              text-white
              z-1
            "
          >
            {{ x.starting }}
          </div>
        </div>

        <div class="flex-initials w-full lg:w-1/2 lg:mx-4 py-10">
          <div class="flex sm:flex-row flex-col flex-initials mb-4">
            <div class="flex-initials mb-2 sm:mr-2">
              <h1 class="text-xl font-bold text-center md:text-justify">
                {{ x.title }}
              </h1>
              <p class="text-sm text-center md:text-justify">
                {{ x.subtitle }}
              </p>
            </div>
            <div
              class="
                flex-initials
                w-3/4
                mx-auto
                lg:mr-0
                lg:w-auto
                my-4
                sm:my-0
                sm:ml-2
                flex
                justify-center
                items-center
              "
            >
              <img
                :src="`partners/${x.partner}`"
                class="w-1/2 mx-auto lg:w-3/4 filter grayscale"
              />
            </div>
          </div>
          <div class="flex-initials mt-2">
            <p v-for="(d, kindex) in x.desc" :key="kindex">
              <i class="fas fa-circle text-xs text-primary mr-2"></i> {{ d }}
            </p>
          </div>
        </div>

        <div class="flex-initials w-full lg:w-1/2 lg:ml-4 py-10">
          <div
            class="
              grid
              sm:grid-cols-3
              grid-cols-2 grid-rows-3
              lg:grid-rows-2
              gap-4
            "
          >
            <div v-for="(a, jndex) in x.actions" :key="jndex">
              <img
                :src="`memories/${a}`"
                class="rounded-md w-full h-full shadow-xl dark:shadow-none"
              />
            </div>
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
