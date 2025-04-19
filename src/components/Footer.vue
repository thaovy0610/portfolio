<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
    <footer 
        class="footer z-100 h-full flex flex-col bg-blue-200/15 relative max-w-screen overflow-hidden text-wrap flex-wrap"
    >
        <h1 class="text-amber-50 text-center font-bold uppercase m-8 text-4xl">Let's connect</h1>
        <div class="flex flex-col items-center">
            <ul class="flex flex-row gap-10 justify-center mb-8">
                    <li>
                        <a href="https://github.com/thaovy0610">
                            <font-awesome-icon :icon="['fab', 'square-github']" style="color: #fff" size="2x" class="hover:drop-shadow-md hover:-translate-y-1 ease-in-out duration-200"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/nobiroku.thaovy/">
                            <font-awesome-icon :icon="['fab', 'square-facebook']" style="color: #fff" size="2x" class="hover:-translate-y-1 ease-in-out duration-200"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/vy-phung-7a1761260/">
                            <font-awesome-icon :icon="['fab', 'linkedin']" style="color: #fff" size="2x" class="hover:-translate-y-1 ease-in-out duration-200"/>
                        </a>
                    </li>
                </ul>
            <div class="flex flex-row gap-4 flex-wrap">
                <div class="flex flex-row gap-4 items-center">
                    <div class="flex border-purple-200 border-2 w-14 h-14 ml-8 items-center justify-center hover:bg-indigo-900 duration-300 ease-in-out">
                        <font-awesome-icon :icon="['fa', 'envelope']" style="color: #fff" size="2x" />
                    </div>
                    <p class="text-amber-50">Gmail:<br><a href="mailto:thaovy0610@gmail.com" class="font-bold">thaovy0610@gmail.com</a></p>
                </div>
                <div class="flex flex-row gap-4 items-center">
                    <div class="flex border-blue-200 border-2 w-14 h-14 ml-8 items-center justify-center hover:bg-blue-900 duration-300 ease-in-out">
                        <font-awesome-icon :icon="['fas', 'phone']" style="color: #fff" size="2x" />
                    </div>
                    <p class="text-amber-50">Phone number:<br><span class="font-bold">+84-935-624-231</span></p>
                </div>
            </div>
        </div>
        <div class="bg-gray-100/15 py-2 mt-8">
            <p class="text-amber-50 text-center">&copy; 2025 All rights reserved</p>
        </div>
    </footer>
</template>

<style>

</style>