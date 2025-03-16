<script>
import { defineProps } from 'vue';

export default {
  props: {
    character: {
      type: Object,
      required: true,
    }
  }
}
</script>

<template>
  <div class="inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="popup bg-white rounded-lg p-10 shadow-lg min-w-xs max-w-4xl w-full m-20">
      <div class="grid grid-cols-3 items-center gap-10">
        <img :src="character.imagePath" class="drop-shadow-[0_35px_35px_rgba(255,149,49,0.3)] h-48 object-contain items-center" alt="Character Image" />
        <div class="col-span-2 justify-start">
          <h2 class="text-2xl font-bold mb-4">{{ character.name }}</h2>
          <div>
            <h3 class="text-xl font-bold mb-4">Backstory</h3>
            <p class="text-s font-light mb-4">{{ character.backstory }}</p>
            <div class="flex gap-3 my-4">
              <h3 class="font-bold">Special Ability:</h3>
              <h4 class="font-light">{{ character.specialAbility.name }}</h4>
            </div>
            <p class="text-s font-light mb-4">{{ character.specialAbility.description }}</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>