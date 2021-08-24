<template>
  <header class="bg-primary text-white">
    <nav class="flex mx-8 my-4">
      <li class="flex-initals mr-2">
        <a href="">
          <img src="logo.png" class="w-6 h-6" />
        </a>
      </li>
      <li class="flex-initals mr-2">
        <a href="" class="px-4 py-2 hover:bg-shade">Trang chủ</a>
      </li>
      <li class="flex-initals mx-2">
        <a href="" class="px-4 py-2 hover:bg-shade">Giới thiệu</a>
      </li>
      <li class="flex-initals mx-2">
        <a href="" class="px-4 py-2 hover:bg-shade">Sản phẩm</a>
      </li>
      <li class="flex-initals mx-2">
        <a href="" class="px-4 py-2 hover:bg-shade">Blog</a>
      </li>
      <li class="flex-initals ml-auto">
        <a
          href=""
          class="
            py-2
            px-4
            border border-white border-2
            hover:border-shade
            hover:bg-shade
          "
          >Liên hệ</a
        >
      </li>
    </nav>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Header extends Vue {}
</script>
