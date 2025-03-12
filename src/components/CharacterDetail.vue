<script>
import { defineProps } from 'vue';

export default {
  props: {
    character: {
      type: Object,
      required: true,
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }

}
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="popup bg-white rounded-lg p-10 shadow-lg min-w-xs max-w-4xl w-full m-20">
      <div class="grid grid-cols-3 items-center gap-10">
        <img :src="character.imagePath" class="drop-shadow-[0_35px_35px_rgba(255,149,49,0.3)] h-48 object-contain items-center" alt="Character Image" />
        <div class="col-span-2 justify-start">
          <h2 class="text-2xl font-bold mb-4 text-center">{{ character.name }}</h2>
          <div>
            <h3 class="text-xl font-bold mb-4 text-center">Backstory</h3>
            <p class="text-xs font-bold mb-4 text-center">{{ character.backstory }}</p>

            <h3 class="mt-4 font-bold mb-4 text-center">Special Ability</h3>
            <h4 class="font-bold mb-4 text-center">{{ character.specialAbility.name }}</h4>
            <p class="text-xs font-bold mb-4 text-center">{{ character.specialAbility.description }}</p>
          </div>

        </div>
      </div>
        <button 
            @click="close"
            class="block mx-auto bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
        >
        Close
        </button>
    </div>
  </div>
</template>

<style>

</style>