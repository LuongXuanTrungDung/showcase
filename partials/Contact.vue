<template>
  <section>
    <h3 class="font-bold text-xl">Nếu có nhu cầu, hãy liên hệ với tôi</h3>
    <div class="h-1 bg-primary w-1/6 mt-2 mb-6"></div>
    <form class="my-2">
      <div class="flex mb-4">
        <div class="flex-initials w-1/4 mr-2">
                <input
          type="text"
          class="
            py-2
            px-4
                 mb-2 w-full
            border
            boder-black
            hover:border-primary
            rounded-md
          "
          placeholder="Họ tên"
        />
                   <input type="text"
          class="
            py-2
            px-4
                 my-2 w-full
            border
            boder-black
            hover:border-primary
            rounded-md
          "
          placeholder="Số điện thoại"
        />
        <input
          type="email"
          class="
            py-2
            px-4 w-full
                 mt-2
            border
            boder-black
            hover:border-primary
            rounded-md
          "
          placeholder="Email"
        />
        </div>
              <textarea
        class="
          w-3/4 flex-initials ml-2
          py-2 w-full
          px-4
          border
          boder-black
          hover:border-primary
          rounded-md
          resize-none
        "
        placeholder="Nội dung"
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
            hover:bg-complement
          "
          value="Gửi liên hệ"
        />
      </div>
    </form>
  </section>
</template>
