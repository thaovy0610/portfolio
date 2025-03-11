<script>
import { characters } from '../data/character'
import CharacterDetails from './CharacterDetail.vue'
import { ref } from 'vue';

export default {
    components: {
        CharacterDetails
    },
    data() {
        return {
            currentIndex: 0,
            characters,
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
            console.log(this.currentIndex)
        },
        prevCharacter() {
            this.currentIndex = (this.currentIndex - 1 + this.characters.length) % this.characters.length;
            console.log(this.currentIndex)
        },
        selectCharacter(index) {
            this.currentIndex = index
        }
    }
}
</script>

<template>
<div class='relative flex flex-col w-full max-w-screen-lg mx-auto'>
    <!-- Slider -->
    <div class="mt-20 flex transition-transform duration-500 ease-in-out">
        <div class="max-w-full flex flex-col items-center justify-center mx-auto transition-all duration-500" v-for="(char, index) in characters"
            :class="index == currentIndex ? 'scale-110 blur-0' : 'scale-90 blur-sm'">
            <img 
                class="drop-shadow-[0_35px_35px_rgba(255,255,25,0.25)] h-48 object-contain "
                
                :src="char.imagePath" 
                :alt="char.name"
                @click="selectCharacter(index)">
            <p class="text-center m-8 text-2xl font-semibold text-white mt-4">
                {{ char.name }}
            </p> 
        </div>
    </div>

    <!-- Navigation buttons -->
    <button 
        @click="prevCharacter"
        class="absolute -start-10 top-40 z-[100] flex h-full cursor-pointer group focus:outline-none"
    >  
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-3 h-3 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button 
        @click="nextCharacter"
        class="absolute top-40 -end-10 z-100 flex h-full cursor-pointer group focus:outline-none"
    >   
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-3 h-3 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span> 
    </button>

    <!-- Popup -->
    <CharacterDetails :character="currentCharacter" @close="closePopup"/>
    
    <!-- <div
        v-if="isPopupVisible"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
        <div class="bg-white rounded-lg p-6 shadow-lg max-w-md w-full">
            <h2 class="text-2xl font-bold mb-4 text-center">{{ currentCharacter.name }}</h2>
            <p class="text-gray-600 mb-6 text-center">{{ currentCharacter.info }}</p>
            <img 
                :src="currentCharacter.imagePath"
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
    </div> -->
</div> 
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Irish+Grover&display=swap');

    body {
        background-color: black;
    }
    .transition-transform {
        transition: transform 0.5s ease-in-out;
    }

    .char-name {
        font-family: "Irish Grover", system-ui;
        font-weight: 400;
        font-style: normal;
    }
</style>