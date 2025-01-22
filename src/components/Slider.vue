<script>
export default {
    data() {
        return {
            characters: [
                {name: "Hit the books", image: "/src/assets/avatar/1.svg"},
                {name: "Avocater", image: "/src/assets/avatar/2.svg"},
                {name: "Projecter", image: "/src/assets/avatar/5.svg"},
                {name: "Phone", image: "/src/assets/avatar/4.svg"}
            ],
            activeCharacter: null,
            isPopupVisible: false
        }
    },

    methods: {
        showPopup(character) {
            this.activeCharacter = character
            this.isPopupVisible = true
        },
        closePopup() {
            this.activeCharacter = null
            this.isPopupVisible = false
        }
    }

}
</script>

<template>
<div>
    <!-- Slider -->
    <div id="character-slider" class="flex overflow-x-auto space-x-4 p-4">
        <div 
            v-for="character in characters"
            :key="character.name"
            @click="showPopup(character)"
            class="cursor-pointer hover:scale-105 transition-transform duration-200"
        >
            <img   
                :src="character.image"
                :alt="character.name"
                class="rounded-lg shadow-lg w-40 h-40 object-cover"
            />
            <p class="text-center mt-2 font-semibold text-gray-700">{{ character.name }}</p>
        </div>
    </div>

    <!-- Popup -->
    <div 
        v-if="isPopupVisible"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-content z-50"
    >
        <div class="bg-white rounded-lg p-6 shadow-lg max-w-md w-full">
            <h2 class="text-2xl font-bold mb-4 text-center">{{ activeCharacter.name }}</h2>
            <p class="text-gray-600 mb-6 text-center">{{ activeCharacter.info }}</p>
            <img
                :src="activeCharacter.image"
                :alt="activeCharacter.name"
                class="mx-auto rounded-lg shadow-md w-60 h-60 object-cover mb-4"
            />
            <button
                @click="closePopup"
                class="block mx-auto bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
            >
                Close
            </button>
        </div>
    </div>
</div>
</template>

<style>
</style>