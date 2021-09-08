<template>
  <section class="bg-gray-500 text-white">
    <div class="px-20 py-5 flex">
      <div class="w-1/3 flex-initials mr-4 flex flex-col justify-center">
        <div
          class="flex flex-col justify-center flex-initials"
          data-aos="fade-right"
          data-aos-duration="1750"
        >
          <h1 class="text-4xl font-bold">Xin chào, tôi là Dũng</h1>
          <div
            class="h-1 bg-primary dark:bg-shade w-1/5 mt-2 ml-auto mr-16"
          ></div>
        </div>
        <p
          class="mt-4 text-justify text-lg"
          data-aos="fade-right"
          data-aos-duration="1750"
        >
          Nhà phát triển web full-stack đến từ Thành phố Hồ Chí Minh, Việt Nam,
          với mong muốn tạo ra các sản phẩm được thiết kế khoa học và có tính
          nghệ thuật, để mang đến những trải nghiệm tiện lợi và hữu ích nhất cho
          người sử dụng.
        </p>
      </div>

      <div
        class="w-1/6 flex-initials mx-4 flex justify-center items-center"
        data-aos="fade-down"
        data-aos-duration="1750"
      >
        <img src="portrait.jpg" class="w-48 h-48 rounded-full" />
      </div>

      <div class="w-1/3 flex-initials ml-4 flex flex-col justify-center">
        <p
          class="text-lg mb-2 font-bold"
          data-aos="fade-left"
          data-aos-duration="1750"
        >
          <i
            class="fas fa-window-maximize text-primary dark:text-shade mr-2"
          ></i>
          Tôi lập trình web
        </p>
        <p
          class="text-lg my-2 font-bold"
          data-aos="fade-left"
          data-aos-duration="1750"
        >
          <i class="fas fa-database text-primary dark:text-shade mr-2"></i>
          Tôi xây dựng cơ sở dữ liệu
        </p>
        <p
          class="text-lg my-2 font-bold"
          data-aos="fade-left"
          data-aos-duration="1750"
        >
          <i class="fas fa-server text-primary dark:text-shade mr-2"></i>
          Tôi phát triển hệ thống
        </p>
        <!-- <p class="text-lg my-2 font-bold" data-aos="fade-left" data-aos-duration="1750">
          <i class="fas fa-paragraph text-primary dark:text-shade mr-2"></i>
          Tôi sáng tạo nội dung
        </p>
        <p class="text-lg mt-2 font-bold" data-aos="fade-left" data-aos-duration="1750">
          <i class="fas fa-palette text-primary dark:text-shade mr-2"></i>
          Tôi thiết kế mỹ thuật
        </p> -->
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
