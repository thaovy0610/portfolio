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
<hr class="h-px bg-gray-50/25 border-0 dark:bg-gray-700 max-w-screen-xl mx-auto">
<div class='mt-10 relative flex flex-col h-full w-full max-w-screen-s md:max-w-screen-lg mx-auto flex-wrap'>
    <h1 class="hover:-translate-y-2 duration-500 ease-in-out mt-10 text-amber-50 font-semibold text-4xl md:text-6xl mx-auto">My influences</h1>

    <!-- Slider -->
    <div class="mt-20 flex transition-transform duration-500 ease-in-out flex-wrap">
        <div class="max-w-full flex flex-col items-center justify-center mx-auto transition-all duration-500" v-for="(char, index) in characters"
            :class="index == currentIndex ? 'scale-110 blur-0' : 'scale-90 blur-sm'">
            <img 
                class="drop-shadow-[0_35px_35px_rgba(255,255,25,0.25)] h-48 object-contain"
                
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
        class="absolute top-60 z-100 flex cursor-pointer group focus:outline-none"
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
        class="absolute top-60 end-0 z-100 flex cursor-pointer group focus:outline-none"
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