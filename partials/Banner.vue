<template>
  <section class="bg-gray-500 text-white">
    <div class="px-10 md:px-20 py-5 md:py-10 flex flex-col">
      <div
        class="w-full flex-initials mb-4 flex flex-col"
      >
        <img
          src="portrait.jpg"
          class="flex-initials mx-auto mb-4 w-48 h-48 rounded-full"
        />
        <div
          class="flex flex-col items-center justify-center flex-initials mt-4"
        >
          <h1 class="text-3xl sm:text-4xl font-bold">
            Xin chào, tôi là <span class="text-primary">Dũng</span>
          </h1>
        </div>
      </div>

      <div
        class="w-full flex-initials mt-4 flex flex-col sm:flex-row"
        data-aos="fade-down"
        data-aos-duration="1750"
      >
        <div class="w-full sm:w-1/2 flex-initials sm:mr-4 sm:mb-0 mb-4">
          <p
            class="text-justify text-lg"
          >
            Tôi là một nhà phát triển web full-stack đến từ Thành phố Hồ Chí
            Minh, Việt Nam, với mong muốn tạo ra các sản phẩm được thiết kế khoa
            học và có tính nghệ thuật, để mang đến những trải nghiệm tiện lợi và
            hữu ích nhất cho người sử dụng.
          </p>
        </div>

        <div
          class="
            w-full
            sm:w-1/2
            flex-initials
            mt-4
            sm:mt-0
            sm:ml-4
            flex flex-col
          "
        >
          <h3 class="text-xl mb-2 font-bold">
            <i
              class="fas fa-window-maximize text-primary dark:text-shade mr-2"
            ></i>
            Tôi lập trình web
          </h3>
          <h3 class="text-xl my-2 font-bold">
            <i class="fas fa-database text-primary dark:text-shade mr-2"></i>
            Tôi xây dựng cơ sở dữ liệu
          </h3>
          <h3 class="text-xl my-2 font-bold">
            <i class="fas fa-server text-primary dark:text-shade mr-2"></i>
            Tôi phát triển hệ thống
          </h3>
          <!-- <p class="text-xl my-2 font-bold">
          <i class="fas fa-paragraph text-primary dark:text-shade mr-2"></i>
          Tôi sáng tạo nội dung
        </p>
        <p class="text-xl mt-2 font-bold">
          <i class="fas fa-palette text-primary dark:text-shade mr-2"></i>
          Tôi thiết kế mỹ thuật
        </p> -->
        </div>
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
