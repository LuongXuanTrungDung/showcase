<template>
  <header>
    <nav
      class="bg-primary dark:bg-dark text-white flex px-20 py-5 items-center"
    >
      <li class="flex-initals mr-4">
        <a href="/">
          <img
            src="logo-light.png"
            class="w-12 h-12"
            v-if="$colorMode.preference === 'light'"
          />
          <img
            src="logo-dark.png"
            class="w-12 h-12"
            v-if="$colorMode.preference === 'dark'"
          />
        </a>
      </li>
      <li class="flex-initals mx-2">
        <a
          href="#gioi-thieu"
          class="
            px-4
            py-2
            font-bold
            rounded-md
            hover:bg-complement
            dark-hover:bg-shade
          "
          >Giới thiệu</a
        >
      </li>
      <li class="flex-initals mx-2">
        <a
          href="#san-pham"
          class="
            px-4
            py-2
            font-bold
            rounded-md
            hover:bg-complement
            dark-hover:bg-shade
          "
          >Sản phẩm</a
        >
      </li>
      <li class="flex-initals ml-2">
        <a
          href="#lien-he"
          class="
            py-2
            px-4
            font-bold
            rounded-md
            hover:bg-complement
            dark-hover:bg-shade
          "
          >Liên hệ</a
        >
      </li>
      <ul class="flex-initals ml-auto flex">
        <li class="flex-initials mr-2">
          <button
            class="
              w-8
              h-8
              bg-white
              text-primary
              dark:bg-transparent
              dark:text-white
              rounded-md
            "
            @click="$colorMode.preference = 'light'"
          >
            <i class="fas fa-sun text-xl"></i>
          </button>
        </li>
        <li class="flex-initials mt-1 text-xl">|</li>
        <li class="flex-initials ml-2">
          <button
            class="w-8 h-8 dark:bg-white dark:text-primary rounded-md"
            @click="$colorMode.preference = 'dark'"
          >
            <i class="fas fa-moon text-xl"></i>
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Header extends Vue {}
</script>
