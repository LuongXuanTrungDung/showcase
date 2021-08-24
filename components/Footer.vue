<template>
  <footer class="bg-dark text-white">
    <nav class="flex my-5 mx-8">
      <ul class="flex flex-initals mr-auto">
        <li class="flex-initals mr-2">
          <i class="fas fa-envelope mr-2"></i>
          <a href="" class="hover:text-primary">example@nullmail.com</a>
        </li>
        <li class="flex-initals mx-2">
          <i class="fas fa-phone mr-2"></i>
          <a href="" class="hover:text-primary">(+84) 123-456-7890</a>
        </li>
        <li class="flex-initals mx-2">
          <a href="" class="hover:text-primary"
            ><i class="fab fa-instagram"></i
          ></a>
        </li>
        <li class="flex-initals mx-2">
          <a href="" class="hover:text-primary"
            ><i class="fab fa-linkedin"></i
          ></a>
        </li>
        <li class="flex-initals ml-2">
          <a href="" class="hover:text-primary">
            <i class="fab fa-github"></i
          ></a>
        </li>
      </ul>
      <ul class="flex-initals ml-auto">
        <span>MIT @{{ currentYear }}</span>
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
