<template>
  <div class="create-hash" id="create-secret">
    <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form @submit.prevent="submitForm" class="form-example">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Create Secret</h1>
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="secret"
              v-model="hash.secret"
              placeholder="Enter your secret"
              required
            />

            <input
              type="number"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="tries"
              v-model="hash.tries"
              placeholder="Tries"
            />

            <input
              type="number"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="time"
              v-model="hash.time"
              placeholder="Expiration time in minutes"
            />

            <button
              type="submit"
              class="w-full text-center py-3 rounded bg-purple-500 text-white hover:bg-green-dark focus:outline-none my-1"
            >Create</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../../axios';

export default {
  data() {
    return {
      hash: {}
    };
  },
  methods: {
    async submitForm() {
      const { data } = await axios.post("/secret", this.hash);
      if (data) {
        this.hash = {};
        this.$router.push('/list');
      }
    }
  }
};
</script>