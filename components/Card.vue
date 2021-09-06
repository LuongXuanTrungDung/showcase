<template>
  <div class="shadow-xl bg-white border-light dark:bg-black border">
    <img :src="`works/${image}`" alt="" />
    <div class="`text-justify p-8 bg-white dark:bg-black">
      <h3 class="text-xl font-bold">{{ title }}</h3>
      <div class="flex mt-2 mb-4">
        <small
          v-for="(t, index) in tags"
          :key="index"
          class="py-1 px-2 bg-primary dark:bg-shade text-white rounded-full"
          :class="index === 0 ? 'mr-2' : 'mx-2'"
          >{{ t }}</small
        >
      </div>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  props: {
    image: String,
    title: {
      type: String,
      default: '',
    },
    tags: {
      type: Array,
      default: [],
    },
    text: {
      type: String,
      default: '',
    },
  },
})
export default class Card extends Vue {}
</script>
