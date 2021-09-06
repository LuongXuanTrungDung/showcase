<template>
  <footer class="bg-primary dark:bg-dark text-white">
    <nav class="flex px-20 py-5">
      <ul class="flex flex-initals mr-auto justify-center">
        <li class="flex-initals mr-2 leading-7">
          <i class="fas fa-envelope mr-2"></i>
          <a href="" class="hover:text-complement dark-hover:text-shade"
            >example@nullmail.com</a
          >
        </li>
        <li class="flex-initals mx-2 leading-7">
          <i class="fas fa-phone mr-2"></i>
          <a href="" class="hover:text-complement dark-hover:text-shade"
            >(+84) 123-456-7890</a
          >
        </li>
        <li class="flex-initals mx-2">
          <a
            href=""
            class="text-xl"
            class="hover:text-complement dark-hover:text-shade"
            ><i class="fab fa-instagram"></i
          ></a>
        </li>
        <li class="flex-initals mx-2">
          <a
            href=""
            class="text-xl"
            class="hover:text-complement dark-hover:text-shade"
            ><i class="fab fa-linkedin"></i
          ></a>
        </li>
        <li class="flex-initals ml-2">
          <a
            href=""
            class="text-xl"
            class="hover:text-complement dark-hover:text-shade"
          >
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
