<template>
  <main>
    <section class="px-8 pt-10 pb-5">
      <div class="flex pb-4">
        <div class="flex flex-col justify-center flex-initials mr-4">
          <h1 class="text-4xl font-bold">Xin chào, tôi là Dũng</h1>
          <div class="h-1 bg-complement w-1/4 mt-2 ml-auto"></div>
        </div>
        <img
          src="portrait.jpg"
          class="w-24 h-24 rounded-full flex-initials ml-4"
        />
      </div>
      <p class="py-4 text-justify text-lg">
        Nhà phát triển web full-stack đến từ Thành phố Hồ Chí Minh, Việt Nam,
        với mong muốn tạo ra các sản phẩm được thiết kế khoa học và có tính nghệ
        thuật, để mang đến những trải nghiệm tiện lợi và hữu ích nhất cho người
        sử dụng.
      </p>
      <h3 class="font-bold text-xl">Các đối tác của tôi</h3>
      <div class="h-1 bg-primary w-1/6 my-2 mb-6"></div>
      <div class="w-full flex pt-4 ">
        <img
          v-for="(p, index) in partners"
          :key="index"
          :src="`partners/${p}`"
          class="flex-initials h-16 filter grayscale"
          :class="index === 0 ? 'pr-4' : 'px-4'"
        />
      </div>
    </section>
    <section class="py-5">
      <h3 class="font-bold text-xl ml-8">Những gì tôi làm được</h3>
      <div class="h-1 bg-primary w-1/6 ml-8 mt-2 mb-6"></div>
      <div
        class="bg-light w-full grid gap-8 px-8 py-8"
        :class="`grid-cols-${works.length} grid-rows-${toArrange(works)}`"
      >
        <Card
          v-for="(w, index) in works"
          :key="index"
          :image="w.image"
          :tags="w.tags"
          :text="w.text"
          :title="w.title"
        />
        <div class="bg-complement text-white rounded-md" :class="works.length %3 === 0 ? `col-span-${works.length}`: ''"><p class="py-2 flex justify-center">Và sẽ còn nhiều hơn thế nữa</p></div>
      </div>
    </section>
    <Contact class="px-8 pt-5 pb-10" />
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import data1 from '@/static/data/works.json'
import data2 from '@/static/data/partners.json'

@Component({
  layout: 'default',
  head: {
    title: 'Trang chủ',
  },
})
export default class IndexPage extends Vue {
  works = data1
  partners = data2
  toArrange(array: Array<any>) {
    return array.length % 2
  }
}
</script>
