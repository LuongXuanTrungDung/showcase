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
      <li
        class="flex-initals mr-auto sm:mr-4"
        data-aos="fade-right"
        data-aos-duration="1750"
      >
        <a href="/">
          <img src="logo.png" class="sm:w-12 sm:h-12 w-8 h-8" />
        </a>
      </li>

      <ul class="hidden sm:flex items-center">
        <li
          class="flex-initals mx-2"
          data-aos="fade-right"
          data-aos-duration="1750"
        >
          <a
            href="#gioi-thieu"
            class="px-4 py-2 font-bold rounded-md hover:bg-shade"
            >Giới thiệu</a
          >
        </li>
        <li
          class="flex-initals mx-2"
          data-aos="fade-right"
          data-aos-duration="1750"
        >
          <a
            href="#san-pham"
            class="px-4 py-2 font-bold rounded-md hover:bg-shade"
            >Sản phẩm</a
          >
        </li>
        <li
          class="flex-initals ml-2"
          data-aos="fade-right"
          data-aos-duration="1750"
        >
          <a
            href="#lien-he"
            class="py-2 px-4 font-bold rounded-md hover:bg-shade"
            >Liên hệ</a
          >
        </li>
      </ul>

      <ul
        class="flex-initals ml-auto mr-auto sm:mr-0 flex"
        data-aos="fade-right"
        data-aos-duration="1750"
      >
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

      <li
        class="flex-initals ml-auto sm:hidden"
        data-aos="fade-right"
        data-aos-duration="1750"
      >
        <button><i class="fas fa-bars text-xl"></i></button>
      </li>
    </nav>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Header extends Vue {}
</script>
