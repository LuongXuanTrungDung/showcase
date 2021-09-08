<template>
  <section>
    <div
      class="flex flex-col items-center justify-center pt-10 pb-5"
      data-aos="fade-down"
      data-aos-duration="1750"
    >
      <h3 class="font-bold text-xl">Nếu có nhu cầu, hãy liên hệ với tôi</h3>
      <div class="h-1 bg-primary w-1/6 mt-2"></div>
    </div>
    <form class="my-2">
      <div class="flex mb-4">
        <div
          class="flex-initials w-1/4 mr-2"
          data-aos="fade-right"
          data-aos-duration="1750"
        >
          <input
            type="text"
            class="
              py-2
              px-4
              mb-2
              bg-gray-200
              dark:bg-gray-700
              dark-focus:border-shade
              focus:bg-white
              w-full
              focus:border-primary
              rounded-md
            "
            placeholder="Họ tên"
          />
          <input
            type="text"
            class="
              py-2
              px-4
              my-2
              w-full
              bg-gray-200
              dark:bg-gray-700
              focus:bg-white
              focus:border-primary
              dark-focus:border-shade
              rounded-md
            "
            placeholder="Số điện thoại"
          />
          <input
            type="email"
            class="
              py-2
              px-4
              w-full
              mt-2
              bg-gray-200
              dark:bg-gray-700
              focus:bg-white
              focus:border-primary
              dark-focus:border-shade
              rounded-md
            "
            placeholder="Email"
          />
        </div>
        <textarea
          class="
            w-3/4
            flex-initials
            ml-2
            py-2
            w-full
            px-4
            bg-gray-200
            dark:bg-gray-700
            focus:bg-white
            focus:border-primary
            dark-focus:border-shade
            rounded-md
            resize-none
          "
          placeholder="Nội dung"
          data-aos="fade-right"
          data-aos-duration="1750"
        ></textarea>
      </div>

      <div class="flex items-center justify-center mt-4">
        <input
          type="submit"
          class="
            bg-primary
            text-white
            rounded-md
            py-2
            px-4
            mx-auto
            hover:bg-shade
            dark:bg-dark
          "
          value="Gửi liên hệ"
          data-aos="fade-up"
          data-aos-duration="1750"
        />
      </div>
    </form>
  </section>
</template>
