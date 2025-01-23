<script>
import img1 from '../assets/avatar/1.svg'
import img2 from '../assets/avatar/2.svg'
import img3 from '../assets/avatar/5.svg'
import img4 from '../assets/avatar/4.svg'
export default {
    data() {
        return {
            characters: [
                {name: "Milestone Hunter", image: img1, info: "This is where I show some achievement"},
                {name: "Identity Keeper", image: img2, info: "This is where I some kind of hobbies, and how those affect to me"},
                {name: "Solo Maverick", image: img3, info: "This is where I show my personal project"},
                {name: "The Connector", image: img4, info: "This is where you can contact me"}
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
<div class='flex flex-col items-center justify-center'>
    <!-- Slider -->
    <div class="flex w-full max-w-screen-lg items-center justify-center">
        <button 
            @click="prevCharacter"
            class="mr-10 mt-2 bg-pink-300 text-white p-2 rounded-full hover:bg-pink-400"
        > Previous 
        </button>
        <img 
            :src="currentCharacter.image"
            :alt="currentCharacter.name"
            class="rounded-lg shadow-lg w-[80%] object-cover"
        />
        <button 
            @click="nextCharacter"
            class="ml-10 mt-2 bg-pink-300 text-white p-2 rounded-full hover:bg-pink-400"
        > Next 
        </button>
    </div>

    <p class="text-center m-8 text-2xl font-semibold text-gray-700">
            {{ currentCharacter.name }}
    </p>

    <button 
        @click="showPopup"
        class="mt-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
    > View Details
    </button>

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