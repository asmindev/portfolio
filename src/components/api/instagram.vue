<template>
  <div class="w-full rounded shadow p-4 bg-gray-50 dark:bg-gray-700 smooth">
    <div class="p h-16 overflow-hidden">
      <h1 class="text-xl uppercase flex items-center justify-between">
        instagram <i class="md:hidden ri-arrow-right-s-line"></i>
      </h1>
      <div class="w-full mt-4">
        <div class="w-full">
          <h1 class="border-b-2 border-indigo-500">Get followers</h1>
          <div class="mt-4 shadow rounded sm:rounded-lg overflow-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-indigo-50 text-indigo-400">
                <tr>
                  <th
                    scope="col"
                    class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Data
                  </th>
                  <th
                    scope="col"
                    class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                  >
                    Require
                  </th>
                  <th
                    scope="col"
                    class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                  >
                    Keterangan
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-indigo-100">
                <tr>
                  <td class="px-4 py-3 whitespace-nowrap">
                    <div class="text-sm text-gray-500">Cookie</div>
                  </td>
                  <td class="px-4 py-3 whitespace-nowrap">
                    <div class="text-sm text-gray-500">String</div>
                  </td>
                  <td class="px-4 py-3 whitespace-nowrap">
                    <div class="text-sm text-gray-500">Yes</div>
                  </td>
                  <td class="px-4 py-3 whitespace-nowrap">
                    <div class="text-sm text-gray-500">Cookie instagram</div>
                  </td>
                </tr>
                <tr>
                  <td class="px-4 py-3 whitespace-nowrap">
                    <div class="text-sm text-gray-500">Username</div>
                  </td>
                  <td class="px-4 py-3 whitespace-nowrap">
                    <div class="text-sm text-gray-500">String</div>
                  </td>
                  <td class="px-4 py-3 whitespace-nowrap">
                    <div class="text-sm text-gray-500">Yes</div>
                  </td>
                  <td class="px-4 py-3 whitespace-nowrap">
                    <div class="text-sm text-gray-500">
                      Username instagram you want to get
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="px-4 py-3 whitespace-nowrap">
                    <div class="text-sm text-gray-500">next_page</div>
                  </td>
                  <td class="px-4 py-3 whitespace-nowrap">
                    <div class="text-sm text-gray-500">String</div>
                  </td>
                  <td class="px-4 py-3 whitespace-nowrap">
                    <div class="text-sm text-gray-500">Optional</div>
                  </td>
                  <td class="px-4 py-3 whitespace-nowrap">
                    <div class="text-sm text-gray-500">Next page</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            class="mt-2 w-full rounded bg-indigo-50 flex items-center dark:bg-indigo-400 smooth overflow-hidden"
          >
            <p class="p-2 bg-indigo-500 text-white rounded-l">POST</p>
            <p
              class="block text-indigo-400 dark:text-gray-50 w-full p-2 text-sm overflow-auto"
            >
              https://asmin.pythonanywhere.com/api/instagram/followers
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    const expand = ref(false)
    const clicked = (value) => {
      console.log(expand)
      console.log(value)
    }
    return { expand, clicked }
  },
}
</script>
