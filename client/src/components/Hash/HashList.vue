<template>
  <div>
    <div id="secret-list" class="container mx-auto px-4 lg:pt-24 lg:pb-12">
      <div class="flex flex-wrap text-center justify-center">
        <div class="w-full lg:w-6/12 px-4">
          <h2 class="text-4xl font-semibold text-black">List of available secrets</h2>
          <p
            class="text-lg leading-relaxed mt-4 mb-4 text-gray-700"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut mollis nulla, ut efficitur massa. Praesent vitae iaculis orci</p>
        </div>
      </div>

      <div class="flex flex-col items-center">
        <div class="w-full md:w-1/2 flex flex-col items-center h-64">
          <div class="w-full px-4">
            <div class="flex flex-col items-center relative">
              <div
                class="absolute shadow bg-white top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj"
              >
                <div class="flex flex-col w-full">
                  <div class="cursor-pointer w-full border-gray-100 rounded-b hover:bg-teal-100" 
                       :key="index" v-for="(item, index) in list"
                       @click="loadUrl(item.secret)">
                    <div
                      class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100"
                    >
                      <div class="w-6 flex flex-col items-center">
                        <div
                          class="flex relative w-5 h-5 bg-gray-100 justify-center items-center m-1 mr-2 w-4 h-4 mt-1 rounded-full"
                          :style="{ color: '#fff' }"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 17h-8v-6h8v6zm-6-6v-2c0-1.104.897-2 2-2s2 .896 2 2v2h1v-2c0-1.656-1.343-3-3-3s-3 1.344-3 3v2h1z"/></svg>
                        </div>
                      </div>
                      <div class="w-full items-center flex">
                        <div class="mx-2 -mt-1">
                          Secret {{ index + 1 }}
                          <div
                            class="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500"
                          >{{ item.secret }}</div>
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
    </div>
  </div>
</template>


<script>
import axiosInstance from '../../axios';

export default {
  data() {
    return {
      list: []
    };
  },
  async created() {
    const { data } = await axiosInstance.get("/list");
    console.log("dataaa", data);
    this.list = data.data;
  },
  methods: {
    loadUrl(secret) {
      this.$router.push(`/${secret}`);
    }
  }
};
</script>