<template>
  <div class="w-full mt-20">
    <div class="w-full flex justify-center flex-col">
      <div class="w-full p-4 mx-auto flex items-center">
        <h1
          class="
            px-2
            text-4xl
            inline-block
            font-bold
            text-center
            border-b-2 border-indigo-500
            mx-auto
            pb-1
          "
        >
          List API
        </h1>
      </div>
      <div class="w-11/12 md:w-full mx-auto">
        <div class="flex justify-center flex-col md:flex-row">
          <div class="w-full md:w-1/2 px-4 py-2">
            <div
              class="
                w-full
                rounded
                shadow
                p-4
                bg-gray-50
                dark:bg-gray-700
                smooth
              "
            >
              <div class="p">
                <h1 class="text-xl uppercase flex items-center justify-between">
                  instagram <i class="md:hidden ri-arrow-right-s-line"></i>
                </h1>
                <div class="w-full mt-4 overflow-hidden">
                  <div class="w-full">
                    <h1 class="border-b-2 border-indigo-500">Get followers</h1>
                    <div
                      class="
                        mt-2
                        w-full
                        rounded
                        bg-indigo-100
                        flex
                        items-center
                        dark:bg-indigo-400
                        smooth
                      "
                    >
                      <p class="p-2 bg-indigo-500 text-white rounded-l">POST</p>
                      <p class="block w-full p-2 text-sm overflow-auto">
                        https://asmin.pythonanywhere.com/api/instagram/followers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
