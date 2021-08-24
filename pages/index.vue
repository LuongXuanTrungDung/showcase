<template>
  <main>
    <section class="px-8 py-32">
      <h1 class="text-2xl text-center">Xin chào, tôi tên là Dũng</h1>
      <div class="h-px w-1/12 bg-primary mt-3 mb-12 mx-auto"></div>
      <div class="flex items-center">
        <div class="flex-initials flex flex-col w-1/3 items-end">
          <Emblem
            class="flex-initials mb-3"
            symbol="fas fa-palette"
            text="Thiết kế giao diện (UI)"
            :left="false"
          />
          <Emblem
            class="flex-initials my-3"
            symbol="fas fa-vr-cardboard"
            text="Xây dựng trải nghiệm (UX)"
            :left="false"
          />
          <Emblem
            class="flex-initials mt-3"
            symbol="fas fa-search-plus"
            text="Tối ưu hóa tìm kiếm (SEO)"
            :left="false"
          />
        </div>
        <div
          class="
            flex flex-col
            text-center
            flex-initials
            w-1/3
            items-center
            justify-center
          "
        >
          <img src="portrait.jpg" alt="" class="w-24 h-24" />
          <h2 class="text-xl">Lương Xuân Trung Dũng</h2>
          <small>Full-stack developer</small>
        </div>
        <div class="flex flex-col flex-initials w-1/3 items-start">
          <Emblem
            class="flex-initials mb-3"
            symbol="fas fa-database"
            text="Thiết kế cơ sở dữ liệu (DB)"
          />
          <Emblem
            class="flex-initials my-3"
            symbol="fas fa-server"
            text="Xây dựng server"
          />
          <Emblem
            class="flex-initials mt-3"
            symbol="fas fa-lock"
            text="Thiết kế bảo mật"
          />
        </div>
      </div>
    </section>
    <section class="px-8 py-16 bg-light">
      <h1 class="text-2xl text-center">Những gì tôi làm được</h1>
      <div class="h-px w-1/12 bg-primary mt-3 mb-12 mx-auto"></div>
      <div class="flex">
        <Card
          v-for="(w, index) in works"
          :key="index"
          :image="w.image"
          :title="w.title"
          :text="w.text"
          :tags="w.tags"
          class="mx-4 bg-white"
        />
      </div>
      <div class="my-8 flex items-center justify-center">
        <a
          href=""
          class="
            bg-dark
            flex-initials
            text-white text-center
            font-bold
            py-2
            px-4
          "
          >Tất cả >></a
        >
      </div>
    </section>
    <section class="px-8 py-16">
      <h1 class="text-2xl text-center">Liên lạc với tôi qua email</h1>
      <div class="h-px w-1/12 bg-primary mt-3 mb-12 mx-auto"></div>
      <form action="" method="post" class="grid grid-cols-2 grid-rows-4 gap-4">
        <input
          id=""
          type="text"
          name=""
          placeholder="Họ tên"
          class="
            col-start-1
            border-2 border-gray-300
            focus:border-primary
            p-2
          "
        />
        <input
          id=""
          type="email"
          name=""
          placeholder="Email"
          class="
            col-start-1
            border-2 border-gray-300
            focus:border-primary
            p-2
          "
        />
        <input
          id=""
          type="text"
          name=""
          placeholder="Chủ đề"
          class="
            col-start-1
            border-2 border-gray-300
            focus:border-primary
            p-2
          "
        />
        <textarea
          id=""
          name=""
          placeholder="Nội dung"
          class="
            col-start-2
            row-start-1 row-span-3
            border-2 border-gray-300
            focus:border-primary
            p-2
            resize-none
          "
        ></textarea>
        <div class="row-start-4 col-span-2 flex items-center justify-center">
          <input
            type="submit"
            value="Gửi email"
            class="py-2 px-4 bg-primary hover:bg-shade text-white flex-initials"
          />
        </div>
      </form>
    </section>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import data from '@/static/data/works.json'

@Component({
  layout: 'default',
  head: {
    title: 'Trang chủ',
  },
})
export default class IndexPage extends Vue {
  works = data
}
</script>
