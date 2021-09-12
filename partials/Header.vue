<template>
  <header>
    <nav
      class="
        bg-primary
        dark:bg-dark
        text-white
        flex
        px-10
        sm:px-20
        py-5
        items-center
      "
    >
      <li class="flex-initals mr-auto sm:mr-4">
        <a href="/">
          <img src="logo.png" class="sm:w-12 sm:h-12 w-8 h-8" />
        </a>
      </li>

      <ul class="hidden sm:flex items-center">
        <li class="flex-initals mx-2">
          <a
            href="#gioi-thieu"
            class="
              px-4
              py-2
              font-bold
              rounded-md
              hover:bg-shade
              dark-hover:bg-light
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
              hover:bg-shade
              dark-hover:bg-light
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
              hover:bg-shade
              dark-hover:bg-light
            "
            >Liên hệ</a
          >
        </li>
      </ul>

      <ul class="flex-initals ml-auto mr-auto sm:mr-0 flex">
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
        <li class="flex-initials text-xl">|</li>
        <li class="flex-initials ml-2">
          <button
            class="w-8 h-8 dark:bg-white dark:text-primary rounded-md"
            @click="$colorMode.preference = 'dark'"
          >
            <i class="fas fa-moon text-xl"></i>
          </button>
        </li>
      </ul>

      <ul class="flex-initals ml-auto sm:hidden">
        <button @click="isToggle = !isToggle">
          <i v-if="!isToggle" class="fas fa-bars text-xl"></i>
          <i v-if="isToggle" class="fas fa-times text-xl"></i>
        </button>
      </ul>
    </nav>
    <nav
      v-if="isToggle"
      class="bg-primary dark:bg-dark text-white w-1/2 ml-auto"
    >
      <ul class="p-10 flex flex-col justify-center">
        <li class="flex-initals mb-2">
          <a
            href="#gioi-thieu"
            class="py-2 font-bold rounded-md hover:bg-shade dark-hover:bg-light"
            >Giới thiệu</a
          >
        </li>
        <li class="flex-initals my-2">
          <a
            href="#san-pham"
            class="py-2 font-bold rounded-md hover:bg-shade dark-hover:bg-light"
            >Sản phẩm</a
          >
        </li>
        <li class="flex-initals mt-2">
          <a
            href="#lien-he"
            class="py-2 font-bold rounded-md hover:bg-shade dark-hover:bg-light"
            >Liên hệ</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  isToggle = false
}
</script>
