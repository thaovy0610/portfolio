<script>

</script>

<template>
    <div class="my-4 h-[2px] w-full bg-gradient-to-r from-transparent via-indigo-200 to-transparent opacity-60"></div>
    <div class="min-h-screen relative flex gap-10 justify-center">
        <div class="absolute top-20 right-0 transform w-[400px] h-[400px]
            bg-gradient-to-r from-violet-400 via-indigo-400 to-sky-200
            rounded-full blur-[120px] opacity-30 z-0 overflow-hidden">
        </div>
        <!-- <div class="absolute top-20 right-1/3 transform w-[200px] h-[200px]
            bg-gradient-to-r from-violet-200 via-indigo-400 to-sky-200
            rounded-full blur-[0px] opacity-100 z-0 overflow-hidden">
        </div> -->
        <div class="flex flex-row relative max-w-screen text-balance flex-wrap justify-center items-center gap-6">
            <!-- <img src="../assets/avatar/aboutme.png" alt="avatar" class="absolute w-[1000px] top-0 left-0 object-cover"/> -->
            <div>

            </div>
            <div class="flex flex-col basis-3/5 gap-10 text-left ml-10">
                <h1 class="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-indigo-100 to-white font-semibold text-4xl md:text-6xl">A Quick Intro</h1>
                <div class="flex flex-col gap-5">
                    <p class="text-amber-50 font-light text-base md:text-lg">I'm not great at writing About Me sections. 
                    So I created a little space of characters to do it for me.</p>
                    <div class="char-list">
                        <ul class="flex flex-row gap-10">
                            <li class="char-ele">Milestone Hunter</li>
                            <li class="char-ele">Skill Keeper</li>
                            <li class="char-ele">Solo Marverick</li>
                            <li class="char-ele">Connector</li>
                        </ul>
                    </div>
                    <p class="text-amber-50 font-light text-base md:text-lg">Each one reflects a part of my journey in IT — the experiences I've gained, the skills I've shaped, the projects I've built, and the way I connect with others.</p>
                </div>
                <button onclick="document.getElementById('slider').scrollIntoView({behavior: 'smooth'})"
                    class="group relative flex items-center gap-2 overflow-hidden transition-all duration-500">
                    <div class="w-12 h-12 rounded-full bg-indigo-300/10 border border-violet-300 text-blue-200 
                                flex items-center justify-center group-hover:bg-indigo-300/20 transition">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="3"
                            viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <span class="text-violet-100 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-[-8px] transition duration-300 ease-in-out text-md">
                        More Details
                    </span>
                </button>


            </div>
        </div>
        
    </div>
    
</template>

<style>

</style>