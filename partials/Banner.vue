<template>
  <section class="bg-gray-500 text-white">
    <div class="px-20 py-5 flex">
      <div class="w-1/3 flex-initials mr-4 flex flex-col justify-center">
        <div class="flex flex-col justify-center flex-initials">
          <h1 class="text-4xl font-bold">Xin chào, tôi là Dũng</h1>
          <div class="h-1 bg-complement w-1/5 mt-2 ml-auto mr-24"></div>
        </div>
        <p class="mt-4 text-justify text-lg">
          Nhà phát triển web full-stack đến từ Thành phố Hồ Chí Minh, Việt Nam,
          với mong muốn tạo ra các sản phẩm được thiết kế khoa học và có tính
          nghệ thuật, để mang đến những trải nghiệm tiện lợi và hữu ích nhất cho
          người sử dụng.
        </p>
      </div>

      <div class="w-1/3 flex-initials ml-4 flex">
        <img src="portrait.jpg" class="w-48 h-48 rounded-full" />
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-image: url('~assets/banner.jpg');
  background-blend-mode: multiply;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
