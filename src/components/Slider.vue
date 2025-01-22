<script>
export default {
    data() {
        return {
            characters: [
                {name: "Milestone Hunter", image: "/src/assets/avatar/3.svg", info: "This is where I show some achievement"},
                {name: "Identity Keeper", image: "/src/assets/avatar/2.svg", info: "This is where I some kind of hobbies, and how those affect to me"},
                {name: "Solo Maverick", image: "/src/assets/avatar/5.svg", info: "This is where I show my personal project"},
                {name: "The Connector", image: "/src/assets/avatar/4.svg", info: "This is where you can contact me"}
            ],
            currentIndex: 0,
            isPopupVisible: false
        }
    },
    computed: {
        currentCharacter() {
            return this.characters[this.currentIndex]
        }
    },

    methods: {
        nextCharacter() {
            this.currentIndex = (this.currentIndex + 1) % this.characters.length
        },
        prevCharacter() {
            this.currentIndex = (this.currentIndex - 1) % this.characters.length
        },
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
<div class='flex flex-col item-center justify-center'>
    <!-- Slider -->
    <div class="relative w-full max-w-screen-lg justify-center">
        <img 
            :src="currentCharacter.image"
            :alt="currentCharacter.name"
            class="rounded-lg shadow-lg w-[80%] object-cover"
        />
        <p class="text-center mt-2 font-semibold text-gray-700">
            {{ currentCharacter.name }}
        </p>

        <div class="flex justify-center w-[80%]">
            <button 
                @click="prevCharacter"
                class="mx-auto bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800"
            > Previous 
            </button>

            <button 
                @click="showPopup"
                class="mx-auto mt-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
            View Details
            </button>

            <button 
                @click="nextCharacter"
                class="mx-auto bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800"
            > Next 
            </button>
        </div>
    </div>

    <!-- Navigation -->
    

    <!-- Popup -->
    <div
        v-if="isPopupVisible"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
        <div class="bg-white rounded-lg p-6 shadow-lg max-w-md w-full">
            <h2 class="text-2xl font-bold mb-4 text-center">{{ currentCharacter.name }}</h2>
            <p class="text-gray-600 mb-6 text-center">{{ currentCharacter.info }}</p>
            <img 
                :src="currentCharacter.image"
                :alt="currentCharacter.name"
                class="mx-auto rounded-lg shadow-md w-60 h-60 object-cover mb-4"
            >
        
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