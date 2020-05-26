<template>
  <div>
    <h5 class="text-4xl font-semibold text-center text-black mt-10">View Secret</h5>
    <div class="shadow-lg rounded-lg bg-white mx-auto m-8 p-4 notification-box flex max-w-md">
      <div class="pr-2">
        <div class="available" v-if="item">
          <svg
            class="fill-current text-green-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="22"
            height="22"
          >
            <path
              class="heroicon-ui"
              d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
            />
          </svg>
          <p class="pb-10"> Data available </p>
          {{ item }}
        </div>
        <div class="not-available" v-else>
          <svg
            class="fill-current text-red-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              class="heroicon-ui"
              d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.54a5 5 0 0 1 7.08 0 1 1 0 0 1-1.42 1.42 3 3 0 0 0-4.24 0 1 1 0 0 1-1.42-1.42zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
            />
          </svg>
          <p>Sorry secret not available</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosInstance from "../../axios";

export default {
  data() {
    return {
      item: {}
    };
  },
  async created() {
    const secret = this.$route.params.id;
    const { data } = await axiosInstance.get(`${secret}`);
    this.item = data.data;
    console.log("getting data", data);
  }
};
</script>