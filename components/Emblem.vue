<template>
  <div class="flex">
    <div
      v-if="left"
      class="
        rounded-full
        flex-initials
        mr-2
        w-12
        h-12
        flex
        items-center
        justify-center
        bg-primary
      "
    >
      <i class="text-xl text-white" :class="symbol"></i>
    </div>

    <div v-if="left" class="flex items-center flex-initials ml-2">
      <p>{{ text }}</p>
    </div>

    <div v-if="!left" class="flex items-center flex-initials mr-2">
      <p>{{ text }}</p>
    </div>

    <div
      v-if="!left"
      class="
        rounded-full
        flex-initials
        ml-2
        w-12
        h-12
        flex
        items-center
        justify-center
        bg-primary
      "
    >
      <i class="text-xl text-white" :class="symbol"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  props: {
    symbol: String,
    text: {
      type: String,
      default: '',
    },
    left: {
      type: Boolean,
      default: true,
    },
  },
})
export default class Emblem extends Vue {}
</script>
