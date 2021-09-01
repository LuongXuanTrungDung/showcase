<template>
  <footer class="bg-black text-white">
    <nav class="flex px-8 py-4">
      <ul class="flex flex-initals mr-auto justify-center">
        <li class="flex-initals mr-2 my-1">
          <i class="fas fa-envelope mr-2"></i>
          <a href="" class="hover:text-complement">example@nullmail.com</a>
        </li>
        <li class="flex-initals mx-2 my-1">
          <i class="fas fa-phone mr-2"></i>
          <a href="" class="hover:text-complement">(+84) 123-456-7890</a>
        </li>
        <li class="flex-initals mx-2">
          <a href="" class="hover:text-complement text-xl"
            ><i class="fab fa-instagram"></i
          ></a>
        </li>
        <li class="flex-initals mx-2">
          <a href="" class="hover:text-complement text-xl"
            ><i class="fab fa-linkedin"></i
          ></a>
        </li>
        <li class="flex-initals ml-2">
          <a href="" class="hover:text-complement text-xl">
            <i class="fab fa-github"></i
          ></a>
        </li>
      </ul>
      <ul class="flex-initals ml-auto my-1">
        <span>Bản quyền @{{ currentYear }}</span>
      </ul>
    </nav>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {
  currentYear = new Date().getFullYear()
}
</script>
